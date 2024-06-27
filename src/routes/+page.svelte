<script lang="ts">
  import { browser } from '$app/environment'
  import { storage } from '$lib'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code'

  const local = storage('svelte-storage')
  const session = storage('svelte-storage-session', {
    sessionStorage: true
  })
</script>

<main>
  <fieldset>
    Persisted in LocalStorage
    <input
      bind:value={$local}
      placeholder={browser ? 'LocalStorage' : 'Loading...'}
    />
    Persisted in SessionStorage
    <input
      bind:value={$session}
      placeholder={browser ? 'SessionStorage' : 'Loading...'}
    />
  </fieldset>
  <div>
    <HighlightSvelte {code} />
  </div>
</main>

<style>
  main {
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: auto auto;
    gap: 1rem;
  }
  @media (max-width: 800px) {
    main {
      grid-template-columns: auto;
    }
  }
  input {
    border: 1px solid #888;
    padding: 0.5rem;
    font-size: large;
    border-radius: 0.5rem;
  }
  fieldset {
    border: none;
    padding: 0;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
  }
  @media (max-width: 400px) {
    fieldset {
      grid-template-columns: auto;
    }
  }
  div {
    overflow-x: auto;
  }
</style>
