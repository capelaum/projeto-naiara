import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { globalStyles } from '~/styles/global'
import '~/styles/global.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
