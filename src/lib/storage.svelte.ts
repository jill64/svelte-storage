import { typedStorage } from '@jill64/typed-storage'
import type { Options } from '@jill64/typed-storage/types'
import { type Serde } from './serde'

type RSerde<T extends Serde<unknown>> = T extends Serde<infer R> ? R : never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storage = <T extends Record<string, Serde<any>>>(
  table: T,
  options?: Options
) => {
  const entries = Object.entries(table)

  const storage = {} as {
    [K in keyof T]: RSerde<T[K]>
  }

  const descriptors = entries.reduce((acc, [key, serde]) => {
    const { get, set, addListener } = typedStorage(key, serde, options)

    let store = $state(get())

    addListener((event) => {
      if (event.newValue !== null) {
        const obj = serde.deserialize(event.newValue)
        set(obj)
        store = obj
      }
    })

    // @ts-expect-error Invalid property descriptor.
    acc[key] = {
      get() {
        return store
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(value: any) {
        set(value)
        store = value
      },
      enumerable: true,
      configurable: true
    }
    return acc
  }, {})

  Object.defineProperties(storage, descriptors)

  return storage
}
