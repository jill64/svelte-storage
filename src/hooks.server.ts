import { hooks } from '@jill64/npm-demo-layout'
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://f476ffd69d9fed59ce80394a73f07bac@o4505814639312896.ingest.sentry.io/4506366354194432'
)

export const handle = onHandle(hooks)
export const handleError = onError()
