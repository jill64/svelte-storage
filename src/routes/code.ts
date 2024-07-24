export const code = /* html */ `
<script>
  import { storage } from '@jill64/svelte-storage'

  const local = storage('localStorage-key')
  const session = storage('sessionStorage-key', {
    sessionStorage: true
  })
</script>

Persisted in LocalStorage   <input bind:value={local.value} />
Persisted in SessionStorage <input bind:value={session.value} />
`.trim()
