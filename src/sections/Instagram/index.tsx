import Image from 'next/image'
import Script from 'next/script'
import { InstaProfile } from '~/assets'
import { Container } from '~/components/Container'
import { Text } from '~/components/Text'
import { InstaProfileImageWrapper, InstaTitle, InstaWrapper } from './styles'

export function Instagram() {
  return (
    <Container as="section">
      <InstaWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <InstaTitle
          href="https://www.instagram.com/naigalvao"
          title="@naigalvao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaProfileImageWrapper>
            <Image
              src={InstaProfile}
              alt="Imagem de perfil do instagram da Dra. Naiara Galvão."
            />
          </InstaProfileImageWrapper>

          <Text size="3xl" weight="medium" as="h1">
            @naigalvao
          </Text>
        </InstaTitle>

        <div data-mc-src="50aee569-f799-42f1-9adc-134a2e477670#instagram"></div>

        <Script
          src="https://cdn2.woxo.tech/a.js#613117f8ed78380016017a38"
          async
          defer
          data-usrc
          strategy="afterInteractive"
        ></Script>
      </InstaWrapper>
    </Container>
  )
}
