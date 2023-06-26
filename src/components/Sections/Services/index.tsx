import Image from 'next/image'
import { Container } from '~/components/Container'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { SectionHeading } from '../SectionHeading'
import { services } from './services'
import {
  ServiceCard,
  ServicesCards,
  ServicesCardsWrapper,
  ServicesWrapper,
} from './styles'

export function Services() {
  return (
    <ServicesWrapper>
      <Container>
        <SectionHeading title="SERVIÇOS" />
      </Container>

      <ServicesCardsWrapper>
        <Container>
          <ServicesCards>
            {services.map((service) => (
              <ServiceCard key={service.id}>
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
