import Image from 'next/image'
import { RiWhatsappFill } from 'react-icons/ri'
import { Hero as HeroImage } from '~/assets'
import { ButtonLink } from '~/components/Button/ButtonLink'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { HeroHeadingWrapper, HeroImageWrapper, HeroWrapper } from './styles'

export function Hero() {
  const message = encodeURIComponent(
    'Olá Isabela, gostaria de marcar uma consulta.',
  )

  return (
    <HeroWrapper id="inicio">
      <HeroHeadingWrapper>
        <Text size="md" weight="medium" as="h2">
          Lorem ipsum dolor sit amet consectetur
        </Text>

        <Heading size="xl" as="h1">
          LOREM ipsum dolor sit amet consectetur.
        </Heading>

        <Text size="lg" weight="medium">
          Lorem ipsum dolor sit amet consectetur. Egestas fringilla vel amet
          tellus feugiat sagittis arcu. Fringilla rhoncus orci nulla massa cras
          varius feugiat viverra.
        </Text>

        <ButtonLink
          size="xl"
          href={`https://wa.me/5561981668336?text=${message}`}
          title="Agendar consulta!"
          target="_blank"
        >
          <RiWhatsappFill size={26} />
          Agendar Consulta
        </ButtonLink>
      </HeroHeadingWrapper>

      <HeroImageWrapper>
        <Image
          priority
          src={HeroImage}
          alt="Foto profissional da psicóloga Isabela castelli sentada e com as mãos em um notebook cinza."
        />
      </HeroImageWrapper>
    </HeroWrapper>
  )
}
