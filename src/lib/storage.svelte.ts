import { typedStorage } from '@jill64/typed-storage'
import type { Options } from '@jill64/typed-storage/types'
import { string, type Serde } from './serde'

export const storage: {
  <T>(key: string, serde: Serde<T>, options?: Options): { value: T }
  (key: string, options?: Options): { value: string }
} = <T>(
  key: string,
  arg?: Serde<T> | Options,
  opts?: Options
): { value: T } => {
  const isSerdeArg = arg && 'serialize' in arg && 'deserialize' in arg
  const serde = (isSerdeArg ? arg : string) as Serde<T>

  const { get, set, addListener } = typedStorage(
    key,
    serde,
    opts ?? (isSerdeArg ? undefined : arg)
  )

  let store = $state(get())

  addListener((event) => {
    store = serde.deserialize(event.newValue ?? '')
  })

  return {
    get value() {
      return store
    },
    set value(value: T) {
      set(value)
      store = value
    }
  }
}
