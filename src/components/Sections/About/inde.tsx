import Image from 'next/image'
import { About as AboutImage } from '~/assets'
import { Container } from '~/components/Container'
import { Text } from '~/components/Text'
import { SectionHeading } from '../SectionHeading'
import { AboutContent, AboutImageWrapper, AboutWrapper } from './styles'

export function About() {
  return (
    <Container>
      <AboutWrapper>
        <AboutImageWrapper>
          <Image src={AboutImage} alt="" />
        </AboutImageWrapper>

        <AboutContent>
          <SectionHeading title="Sobre" />

          <Text size="lg" weight="medium">
            Lorem ipsum dolor sit amet consectetur. In enim rutrum volutpat vel
            elementum risus quis. Velit molestie turpis sit ut sapien phasellus
            massa tellus euismod. Magna id a amet id volutpat suspendisse cum
            vestibulum scelerisque. Amet leo nisl nec urna quam. Tellus commodo
            auctor tellus pharetra ut augue dictumst pellentesque rhoncus.
            Imperdiet sit pulvinar euismod diam semper venenatis dictum. Aliquet
            eu pellentesque auctor pharetra a elementum vitae turpis vitae. Nisl
            curabitur odio tincidunt elementum orci id purus faucibus risus.
            Donec vitae rhoncus pretium pellentesque euismod interdum cursus sit
            fusce. Aliquam turpis fames quisque egestas ut sed in odio nulla.
          </Text>
        </AboutContent>
      </AboutWrapper>
    </Container>
  )
}
