import Layout from '@/components/Layout'
import { StrictModeDroppable } from '@/helper/StrictModeDroppable'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
     (<Layout>
      <Component {...pageProps} />
      </Layout>)
 )
}
