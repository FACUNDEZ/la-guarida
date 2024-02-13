import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MenuProvider } from '@/context/MenuContex'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>La Guarida</title>
      </Head>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </>
  )
}
