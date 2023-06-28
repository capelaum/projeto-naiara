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
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <Text size="md" weight="medium" as="h2">
            Obstetrícia e Ginecologia
          </Text>

          <Heading size="xl" as="h1" weight="regular">
            Saúde Feminina em <br /> Todas as Fases da vida
          </Heading>

          <Text size="lg" weight="medium">
            Venha cuidar de sua saúde e tenha um acompanhamento em todas as
            fases da vida, da adolescência à menopausa, da pré-concepção ao
            pós-parto, com respeito, sem julgamentos ou “PRÉconceitos”.
          </Text>

          <ContactButton />
        </HeroContent>

        <HeroImageWrapper
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <Image
            priority
            src={HeroImage}
            alt="Foto profissional da Dra. Naiara galvão, sentada de frente para uma mesa, com os braços cruzados e com um computador branco a sua frente, exibindo um largo sorriso caloroso."
          />
        </HeroImageWrapper>
      </HeroWrapper>

      <Container as="section">
        <Notice
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
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
