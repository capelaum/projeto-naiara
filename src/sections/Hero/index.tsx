import { motion } from 'framer-motion'
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

      <Notice>
        <Container
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <Heading as="h1">Planos de Saúde</Heading>

          <Text weight="medium" as="h2">
            Informações
          </Text>

          <Text weight="regular" size="md">
            O Atendimento é feito sob a forma de reembolso, não atendemos
            convênios/planos de saúde. Porém, para todos os atendimentos e
            procedimentos, emitimos nota fiscal para que possa solicitar o
            reembolso junto ao seu plano de saúde. Além disso, caso seja
            necessário, fornecemos relatórios para restituição na declaração do
            Imposto de Renda, proporcionando uma experiência tranquila para
            você. Dúvidas? Não se preocupe, estou aqui para ajudar! Agende agora
            mesmo a sua consulta e garanta um atendimento personalizado!
          </Text>
        </Container>
      </Notice>
    </>
  )
}
