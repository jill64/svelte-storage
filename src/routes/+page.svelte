<script lang="ts">
  import { storage } from '$lib'

  const text = storage('page')
</script>

<input bind:value={$text} />

<style>
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    width: 90%;
    font-size: large;
    background: inherit;
    color: inherit;
  }
</style>
