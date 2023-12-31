import type { AppProps } from 'next/app'
import '@aws-amplify/ui-react/styles.css'
import '@/styles/globals.scss'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
