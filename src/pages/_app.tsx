import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { globalStyles } from '~/styles/global'
import '~/styles/global.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
