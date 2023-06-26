import Image from 'next/image'
import { RiWhatsappFill } from 'react-icons/ri'
import { Hero as HeroImage } from '~/assets'
import { ButtonLink } from '~/components/Button/ButtonLink'
import { Container } from '~/components/Container'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { HeroContent, HeroImageWrapper, HeroWrapper, Notice } from './styles'

export function Hero() {
  const message = encodeURIComponent(
    'Olá Dra. Naiara, gostaria de saber mais sobre seus serviços.',
  )

  return (
    <>
      <HeroWrapper id="inicio">
        <HeroContent>
          <Text size="md" weight="medium" as="h2">
            Obstetrícia e Ginecologia
          </Text>

          <Heading size="lg" as="h1" weight="regular">
            Saúde da mulher, prevenção e acompanhamento em todas as fases da sua
            vida
          </Heading>

          <Text size="lg" weight="medium">
            Venha cuidar de e acompanhar todas as suas fases, da adolescência à
            menopausa, da pré-concepção ao pós-parto, sem julgamentos ou
            “PRÉconceitos”.
          </Text>

          <ButtonLink
            size="xl"
            href={`https://wa.me/5561992561470?text=${message}`}
            title="Agendar consulta!"
            target="_blank"
          >
            <RiWhatsappFill size={28} />
            Agendar Consulta
          </ButtonLink>
        </HeroContent>

        <HeroImageWrapper>
          <Image
            priority
            src={HeroImage}
            alt="Foto profissional da Dra. Naiara galvão, sentada de frente para uma mesa, com os braços cruzados e com um computador branco a sua frente, exibindo um largo sorriso caloroso."
          />
        </HeroImageWrapper>
      </HeroWrapper>

      <Container as="section">
        <Notice>
          <Text weight="medium" size="md">
            Trabalhamos exclusivamente com atendimento particular, não atendemos
            convênios ou planos de saúde. No entanto, fique tranquilo(a), se
            você possui algum convênio ou plano de saúde, você pode agendar sua
            consulta na modalidade particular. Nós iremos fornecer orientações e
            assistência para que você possa solicitar o reembolso junto ao seu
            convênio e também aproveitar possíveis deduções no Imposto de Renda.
          </Text>
        </Notice>
      </Container>
    </>
  )
}
