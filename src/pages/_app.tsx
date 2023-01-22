import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './partials/Header'
import {ThemeProvider} from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Header />
      <Component {...pageProps} />
      
    </>
  )
}
