import Image from 'next/image'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'
import { FooterLogo } from '~/assets'
import { Container } from '~/components/Container'
import ScrollLink from '~/components/ScrollLink'
import { Text } from '~/components/Text'
import {
  FooterFinal,
  FooterLeft,
  FooterLinks,
  FooterRight,
  FooterRightImageContainer,
  FooterSocial,
  FooterWrapper,
} from './styles'

export function Footer() {
  const message = encodeURIComponent(
    'Olá Dra. Naiara, gostaria de saber mais sobre seus serviços.',
  )

  return (
    <FooterWrapper>
      <Container>
        <FooterLeft>
          <FooterLinks>
            <ScrollLink variant="mobile" href="#sobre" title="Sobre">
              Sobre
            </ScrollLink>
            <ScrollLink variant="mobile" href="#servicos" title="Serviços">
              Serviços
            </ScrollLink>
            <ScrollLink
              variant="mobile"
              href="#depoimentos"
              title="Depoimentos"
            >
              Depoimentos
            </ScrollLink>
            <ScrollLink variant="mobile" href="#contato" title="Contato">
              Contato
            </ScrollLink>
          </FooterLinks>

          <FooterSocial>
            <Link
              href="mailto:naigsilva@gmail.com"
              title="E-mail da Dra. Naiara Galvão"
            >
              <MdEmail size={27} />
            </Link>
            <Link
              href="https://www.instagram.com/naigalvao"
              title="Instagram da Dra. Naiara Galvão"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill size={24} />
            </Link>
            <Link
              href={`https://wa.me/5561992561470?text=${message}`}
              title="Whatsapp da Dra. Naiara Galvão"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill size={24} />
            </Link>
          </FooterSocial>

          <FooterFinal>
            <Text size="sm">Copyright © 2023 - Dra. Naiara Galvão</Text>
            <Text size="sm">
              Desenvolvido com 🤍 por{' '}
              <Link
                href="https://github.com/capelaum"
                title="Github de Luís V. Capelletto"
                target="_blank"
                rel="noreferrer noopener"
              >
                Luís V. Capelletto
              </Link>
            </Text>
          </FooterFinal>
        </FooterLeft>

        <FooterRight>
          <FooterRightImageContainer>
            <Image
              src={FooterLogo}
              alt="Dra. Naiara Galvão - Ginecologia e Obstetrícia, CRM: DF/20851 | RQE: 17851."
            />
          </FooterRightImageContainer>

          <Text size="md">
            <strong>Dra. Naiara Galvão</strong> - Ginecologista e Obstetra - CRM
            DF/20851 | RQE 17851
          </Text>

          <Text size="md">
            <strong>Endereço: </strong>
            Life - Centro Médico Integrado de Saúde - SGAN 608, módulo F, bloco
            II-A, salas 25 e 27, entrada pela Via L3 Norte - Asa Norte, Brasília
            - DF, 70830-356
          </Text>

          <Text size="md">
            <strong>Telefone: </strong>(61) 99256-1470
          </Text>
        </FooterRight>
      </Container>
    </FooterWrapper>
  )
}
