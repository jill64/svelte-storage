<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-storage

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-storage)](https://npmjs.com/package/@jill64/svelte-storage) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-storage)](https://npmjs.com/package/@jill64/svelte-storage) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-storage)](https://npmjs.com/package/@jill64/svelte-storage) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-storage)](https://npmjs.com/package/@jill64/svelte-storage) [![ci.yml](https://github.com/jill64/svelte-storage/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-storage/actions/workflows/ci.yml)

🗃️ Type-Safe Web Storage API Wrapper for Svelte

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/svelte-storage
```

## Simple Example

Passing the `localStorage` key to the `storage` function will retrieve the svelte-store of that value.

```svelte
<script>
  import { storage } from '@jill64/svelte-storage'

  /** @type {Writable<string>} */
  const str = storage('localStorage-key', {
    // Use sessionStorage instead of localStorage
    // sessionStorage: boolean (default: false)
  })

  // Get value
  $: consol.log($str)

  // Set value
  $str = 'value'
  // or
  str.set('value')
</script>
```

## Typed Storage

By passing a conversion function as the second argument, you can get the value converted to any type.

```svelte
<script>
  import { storage } from '@jill64/svelte-storage'
  import { number } from '@jill64/svelte-storage/serde'

  /** @type {Writable<number>} */
  const store = storage(
    'localStorage-key',
    {
      stringify: (value) => value.toString(),
      parse: (str) => parseInt(str)
    }
    // {
    //  Storage Option
    // }
  )
</script>
```

## Prepared Converters

You can also use the prepared converters in `@jill64/svelte-storage/serde`.

```svelte
<script>
  import { storage } from '@jill64/svelte-storage'
  import { number } from '@jill64/svelte-storage/serde'

  /** @type {Writable<number>} */
  const num = storage(
    'localStorage-key',
    number
    // {
    //  Storage Option
    // }
  )
</script>
```
