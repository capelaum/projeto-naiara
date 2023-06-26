import Image from 'next/image'
import { Hero as HeroImage } from '~/assets'
import { ContactButton } from '~/components/ContactButton'
import { Container } from '~/components/Container'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { HeroContent, HeroImageWrapper, HeroWrapper, Notice } from './styles'

export function Hero() {
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

          <ContactButton />
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
