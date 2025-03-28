<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/svelte-storage

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/svelte-storage"><img src="https://img.shields.io/npm/v/@jill64/svelte-storage" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-storage"><img src="https://img.shields.io/npm/l/@jill64/svelte-storage" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-storage"><img src="https://img.shields.io/npm/dm/@jill64/svelte-storage" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-storage"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-storage" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-storage/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-storage/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a>

<!----- END GHOST DOCS BADGES ----->

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
  import { string } from '@jill64/svelte-storage/serde'

  const storage = storage(
    { ['localStorage-key']: string },
    {
      // Use sessionStorage instead of localStorage
      // sessionStorage: boolean (default: false)
    }
  )

  // Get value
  consol.log(storage['localStorage-key'])

  // Set value
  storage['localStorage-key'] = 'value'
</script>
```

## Prepared Converters

You can also use the prepared converters in `@jill64/svelte-storage/serde`.

```svelte
<script>
  import { storage } from '@jill64/svelte-storage'
  import { number } from '@jill64/svelte-storage/serde'

  const storage = storage(
    { ['localStorage-key']: number }
    // {
    //  Storage Option
    // }
  )
</script>
```

## Custom Converter

By passing a conversion function as the second argument, you can get the value converted to any type.

```svelte
<script>
  import { storage } from '@jill64/svelte-storage'

  const store = storage(
    {
      ['localStorage-key']: {
        stringify: (value) => value.toString(),
        parse: (str) => parseInt(str)
      }
    }
    // {
    //  Storage Option
    // }
  )
</script>
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
