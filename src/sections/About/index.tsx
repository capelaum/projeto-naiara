import Image from 'next/image'
import { AboutBg, About as AboutImage } from '~/assets'
import { Container } from '~/components/Container'
import { SectionHeading } from '~/components/SectionHeading'
import { Text } from '~/components/Text'
import {
  AboutContent,
  AboutContentWrapper,
  AboutImageBg,
  AboutImageWrapper,
  AboutText,
} from './styles'

export function About() {
  return (
    <Container as="section" id="sobre">
      <AboutContentWrapper>
        <AboutImageBg
          src={AboutBg}
          alt="Vetor do logotipo da Dra. Naiara Galvão, com um formato de flor, em baixa opacidade."
          width={900}
        />

        <AboutImageWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <Image
            src={AboutImage}
            alt="Foto profissional da Dra. Naiara Galvão de pé em seu consultório, com um vestido florido branco com detalhes vermelhos, exibindo um largo e caloroso sorriso."
          />
        </AboutImageWrapper>

        <AboutContent
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <SectionHeading title="Sobre" />

          <AboutText>
            <Text size="md" weight="medium">
              Olá, sou mãe do Gabriel, nascido em 2022, tutora de quatro
              gatinhos adotados. Desde muito cedo me identifico com a qualidade
              de vida e com a natureza. Amo os cuidados com a saúde física e
              mental. Creio na plenitude: corpo, mente e espírito.
            </Text>

            <Text size="md" weight="medium">
              Sou médica formada pela Universidade de Brasília, com residência
              médica em Ginecologia e Obstetrícia pelo Hospital Universitário de
              Brasília.
            </Text>

            <Text size="md" weight="medium">
              Amo trabalhar com a saúde da mulher por estarmos sempre (ou quase
              sempre) atentas e seguindo a máxima “melhor prevenir que
              remediar”. Quanto a obstetrica… ah, a obstetricia! Há amdo mais
              potente e belo do que ASSISTIR a uma pessoa parindo? Não….
            </Text>

            <Text size="md" weight="medium">
              Possuo pós-graduação em Ultrassonografia em Ginecologia e
              Obstetricia e em Medicina Fetal pela NEXUS.
            </Text>

            <Text size="md" weight="medium">
              Te convido a vir me conhecer pessoalmente.
            </Text>
          </AboutText>
        </AboutContent>
      </AboutContentWrapper>
    </Container>
  )
}
