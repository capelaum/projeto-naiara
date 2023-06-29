import Document, { Head, Html, Main, NextScript } from 'next/document'
import { Favicon } from '~/components/Head/Favicon'
import { SEO } from '~/components/Head/SEO'
import { getCssText } from '~/styles/stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
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
            title="Dra. Naiara Galvão - Obstetrícia e Ginecologia"
            description="Venha cuidar de sua saúde e tenha um acompanhamento em todas as fases da vida, da adolescência à menopausa, da pré-concepção ao pós-parto, com respeito, sem julgamentos ou “PRÉconceitos”."
            url={process.env.NEXT_PUBLIC_URL ?? ''}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
