import { init } from '@jill64/sentry-sveltekit-cloudflare/client'

const onError = init(
  'https://f476ffd69d9fed59ce80394a73f07bac@o4505814639312896.ingest.sentry.io/4506366354194432'
)

export const handleError = onError()
