import Image from 'next/image'
import { useWindowSize } from 'usehooks-ts'
import { Container } from '~/components/Container'
import { Heading } from '~/components/Heading'
import { SectionHeading } from '~/components/SectionHeading'
import { Text } from '~/components/Text'
import { services } from './services'
import {
  ServiceCard,
  ServicesCards,
  ServicesCardsWrapper,
  ServicesWrapper,
} from './styles'

export function Services() {
  const { width } = useWindowSize()

  const calculateServiceCardDelay = (idx: number) => {
    if (width < 768) {
      return 0.2
    }

    return 0.2 * idx
  }

  return (
    <ServicesWrapper id="servicos">
      <Container>
        <SectionHeading title="SERVIÇOS" />
      </Container>

      <ServicesCardsWrapper>
        <Container>
          <ServicesCards>
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: calculateServiceCardDelay(idx),
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                <Image src={service.icon} alt={service.title} />
                <Heading>{service.title}</Heading>
                <Text weight="medium">{service.content}</Text>
              </ServiceCard>
            ))}
          </ServicesCards>
        </Container>
      </ServicesCardsWrapper>
    </ServicesWrapper>
  )
}
