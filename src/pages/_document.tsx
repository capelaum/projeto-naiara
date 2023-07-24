import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { Favicon } from '~/components/Head/Favicon'
import { SEO } from '~/components/Head/SEO'
import { getCssText } from '~/styles/stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <Favicon />

          <SEO
            title="Dra. Naiara Galvão - Ginecologista e Obstetra"
            description="Ginecologista e Obstetra - Atendimento Particular - Especializada em Medicina Fetal e Ultrassonografia - Venha cuidar de sua saúde e tenha um acompanhamento em todas as fases da vida com a Dra. Naiara Galvão!"
            url={process.env.NEXT_PUBLIC_URL ?? ''}
          />

          <Script
            id={process.env.NEXT_PUBLIC_GTM_ID}
            src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            async
            strategy="afterInteractive"
            onLoad={() => {
              console.log('Google Tag Manager loaded!')
            }}
          />
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
