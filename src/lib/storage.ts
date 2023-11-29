import { typedStorage } from '@jill64/typed-storage'
import type { Options } from '@jill64/typed-storage/types'
import { readable, type Writable } from 'svelte/store'
import { string, type Serde } from './serde'

export const storage: {
  <T>(key: string, serde: Serde<T>, options?: Options): Writable<T>
  (key: string, options?: Options): Writable<string>
} = <T>(key: string, arg?: Serde<T> | Options, opts?: Options): Writable<T> => {
  const isSerdeArg = arg && 'serialize' in arg && 'deserialize' in arg

  const { get, set, subscribe } = typedStorage(
    key,
    (isSerdeArg ? arg : string) as Serde<T>,
    opts
  )

  const store = readable(get(), subscribe)

  return {
    subscribe: store.subscribe,
    set,
    update: (updater) => set(updater(get()))
  }
}
