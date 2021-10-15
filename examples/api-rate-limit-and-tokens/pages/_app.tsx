import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { getLayout } from '@edge-functions/ui'
import '@edge-functions/ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout(Component)

  return (
    <SWRConfig
      value={{
        refreshInterval: 40000,
        revalidateOnFocus: false,
        fetcher: (path, init) => fetch(path, init).then((res) => res.json()),
      }}
    >
      <Head>
        <title>Vercel Edge Functions - API Rate Limiting and IP Blocking</title>
      </Head>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}