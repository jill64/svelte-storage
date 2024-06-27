import { typedStorage } from '@jill64/typed-storage'
import type { Options } from '@jill64/typed-storage/types'
import { writable, type Writable } from 'svelte/store'
import { string, type Serde } from './serde'

export const storage: {
  <T>(key: string, serde: Serde<T>, options?: Options): Writable<T>
  (key: string, options?: Options): Writable<string>
} = <T>(key: string, arg?: Serde<T> | Options, opts?: Options): Writable<T> => {
  const isSerdeArg = arg && 'serialize' in arg && 'deserialize' in arg
  const serde = (isSerdeArg ? arg : string) as Serde<T>

  const { get, set, addListener } = typedStorage(
    key,
    serde,
    opts ?? (isSerdeArg ? undefined : arg)
  )

  const store = writable(get(), (set) =>
    addListener((event) => {
      set(serde.deserialize(event.newValue ?? ''))
    })
  )

  return {
    subscribe: store.subscribe,
    set: (value: T) => {
      set(value)
      store.set(value)
    },
    update: (updater) => {
      const value = updater(get())
      set(value)
      store.set(value)
    }
  }
}
