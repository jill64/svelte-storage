<script lang="ts">
  import { browser } from '$app/environment'
  import { storage } from '$lib'

  const text = storage('page')
</script>

<svelte:head>
  {#if browser}
    <meta data-testid="hydrated" />
  {/if}
</svelte:head>

<input bind:value={$text} />

<style>
  @media (prefers-color-scheme: dark) {
    :global(body),
    input {
      background: #161616;
      color: whitesmoke;
    }
  }
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    width: 90%;
    font-size: large;
  }
</style>
