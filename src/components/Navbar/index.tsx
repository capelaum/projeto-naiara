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
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLeft>
          <Link href="#" title="Início">
            <Image
              src={LogoWhite}
              alt="Logotipo da Dra. Naiara Galvão, tendo escrito abaixo o seu nome, suas especialidades: Ginecologia e Obstetrícia, e seu CRM DF/20851 | RQE 17851"
              width={96}
            />
          </Link>

          <NavBarSocial>
            <Link href="#" title="E-mail da Dra. Naiara Galvão">
              <MdEmail size={27} />
            </Link>
            <Link href="#" title="Instagram da Dra. Naiara Galvão">
              <RiInstagramFill size={24} />
            </Link>
            <Link href="#" title="Whatsapp da Dra. Naiara Galvão">
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
