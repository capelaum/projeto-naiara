import { ContactButton } from '~/components/ContactButton'
import { Container } from '~/components/Container'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { AppointmentSlider } from './AppointmentSlider'
import {
  AppointmentContent,
  AppointmentText,
  AppointmentWrapper,
} from './styles'

export function Appointment() {
  return (
    <Container as="section">
      <AppointmentWrapper>
        <AppointmentContent>
          <Heading size="lg" as="h1">
            Atendimento Humano, <br /> <span>leveza, empatia</span>
          </Heading>

          <AppointmentText>
            <Text size="lg" weight="medium">
              Durante nossas consultas vamos trabalhar e avaliar sua rotina e
              saúde de forma integral, refletindo e tentando melhorar o que for
              possível dentro do seu contexto de forma particular e
              individualizada.
            </Text>

            <Text size="lg" weight="medium">
              O principal objetivo do acompanhamento ginecológico e/ou
              obstétrico é a prevenção, mas, se necessário for, as intervenções
              e tratamentos possíveis serão recomendados.
            </Text>

            <Text size="lg" weight="medium">
              Com muita dedicação, ética e competência vamos sempre buscar o
              melhor resultado juntas.
            </Text>
          </AppointmentText>

          <ContactButton />
        </AppointmentContent>

        <AppointmentSlider />
      </AppointmentWrapper>
    </Container>
  )
}
