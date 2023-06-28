import Image from 'next/image'
import { AboutBg, About as AboutImage } from '~/assets'
import { Container } from '~/components/Container'
import { SectionHeading } from '~/components/SectionHeading'
import { Text } from '~/components/Text'
import {
  AboutContent,
  AboutContentWrapper,
  AboutImageBgWrapper,
  AboutImageWrapper,
} from './styles'

export function About() {
  return (
    <Container as="section" id="sobre">
      <AboutImageBgWrapper>
        <Image
          src={AboutBg}
          alt="Vetor do logotipo da Dra. Naiara Galvão, com um formato de flor, em baixa opacidade."
          blurDataURL={AboutBg.blurDataURL}
        />
      </AboutImageBgWrapper>

      <AboutContentWrapper>
        <AboutImageWrapper>
          <Image
            src={AboutImage}
            alt="Foto profissional da Dra. Naiara Galvão de pé em seu consultório, com um vestido florido branco com detalhes vermelhos, exibindo um largo e caloroso sorriso."
          />
        </AboutImageWrapper>

        <AboutContent>
          <SectionHeading title="Sobre" />

          <Text size="lg" weight="medium">
            Olá, sou mãe do Gabriel, nascido em 2022, tutora de quatro gatinhos
            adotados, médica formada pela Universidade de Brasília, com
            residência médica em Ginecologia e Obstetrícia no Hospital
            Universitário de Brasília.
            <br /> <br />
            Sou pos-graduada em Ultrassonografia em Ginecologia e Obstetricia e
            em Medicina Fetal pela NEXUS.
          </Text>
        </AboutContent>
      </AboutContentWrapper>
    </Container>
  )
}
