import Image from 'next/image'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'
import { LogoWhite } from '~/assets'
import {
  NavBarSocial,
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
  NavbarWrapper,
} from './styles'

export function Navbar() {
  const message = encodeURIComponent(
    'Olá Dra. Naiara, gostaria de saber mais sobre seus serviços.',
  )

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLeft>
          <Link href="#inicio" title="Início">
            <Image
              src={LogoWhite}
              alt="Logotipo da Dra. Naiara Galvão, tendo escrito abaixo o seu nome, suas especialidades: Ginecologia e Obstetrícia, e seu CRM DF/20851 | RQE 17851"
              width={96}
            />
          </Link>

          <NavBarSocial>
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
            >
              <RiInstagramFill size={24} />
            </Link>
            <Link
              href={`https://wa.me/5561992561470?text=${message}`}
              title="Whatsapp da Dra. Naiara Galvão"
              target="_blank"
            >
              <RiWhatsappFill size={24} />
            </Link>
          </NavBarSocial>
        </NavbarLeft>

        <NavbarRight>
          <Link href="#" title="Sobre">
            Sobre
          </Link>
          <Link href="#" title="Serviços">
            Serviços
          </Link>
          <Link href="#" title="Depoimentos">
            Depoimentos
          </Link>
          <Link href="#" title="Contato">
            Contato
          </Link>
        </NavbarRight>
      </NavbarContainer>
    </NavbarWrapper>
  )
}
