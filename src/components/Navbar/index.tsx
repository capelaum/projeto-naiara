import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'
import { LogoWhite } from '~/assets'
import ScrollLink from '../ScrollLink'
import {
  MobileMenu,
  MobileMenuButton,
  MobileMenuNav,
  MobileMenuNavHeader,
  MobileSocial,
  NavBarSocial,
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
  NavbarWrapper,
} from './styles'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  const message = encodeURIComponent(
    'Olá Dra. Naiara, gostaria de saber mais sobre seus serviços.',
  )

  function handleToggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  function handleCloseMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    }

    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <NavbarWrapper
        isScrolled={offsetY > 0}
        isMobileMenuOpen={isMobileMenuOpen}
      >
        <NavbarContainer>
          <NavbarLeft>
            <ScrollLink
              variant="none"
              href="#inicio"
              title="Início"
              onClick={handleCloseMobileMenu}
            >
              <Image
                src={LogoWhite}
                alt="Logotipo da Dra. Naiara Galvão, tendo escrito abaixo o seu nome, suas especialidades: Ginecologia e Obstetrícia, e seu CRM DF/20851 | RQE 17851"
                width={96}
              />
            </ScrollLink>

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
            <ScrollLink href="#sobre" title="Sobre">
              Sobre
            </ScrollLink>
            <ScrollLink href="#servicos" title="Serviços">
              Serviços
            </ScrollLink>
            <ScrollLink href="#depoimentos" title="Depoimentos">
              Depoimentos
            </ScrollLink>
            <ScrollLink href="#contato" title="Contato">
              Contato
            </ScrollLink>
          </NavbarRight>

          <MobileMenuButton
            type="button"
            onClick={handleToggleMobileMenu}
            title={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? null : <FiMenu size={40} />}
          </MobileMenuButton>
        </NavbarContainer>
      </NavbarWrapper>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuNav isOpen={isMobileMenuOpen}>
          <MobileMenuNavHeader>
            <ScrollLink
              variant="none"
              href="#inicio"
              title="Início"
              onClick={handleCloseMobileMenu}
            >
              <Image
                src={LogoWhite}
                alt="Logotipo da Dra. Naiara Galvão, tendo escrito abaixo o seu nome, suas especialidades: Ginecologia e Obstetrícia, e seu CRM DF/20851 | RQE 17851"
                width={96}
              />
            </ScrollLink>

            <MobileMenuButton
              type="button"
              onClick={handleCloseMobileMenu}
              title="Fechar menu"
            >
              <FiX size={32} />
            </MobileMenuButton>
          </MobileMenuNavHeader>

          <ScrollLink
            variant="mobile"
            href="#sobre"
            title="Sobre"
            onClick={handleCloseMobileMenu}
          >
            Sobre
          </ScrollLink>
          <ScrollLink
            variant="mobile"
            href="#servicos"
            title="Serviços"
            onClick={handleCloseMobileMenu}
          >
            Serviços
          </ScrollLink>
          <ScrollLink
            variant="mobile"
            href="#depoimentos"
            title="Depoimentos"
            onClick={handleCloseMobileMenu}
          >
            Depoimentos
          </ScrollLink>
          <ScrollLink
            variant="mobile"
            href="#contato"
            title="Contato"
            onClick={handleCloseMobileMenu}
          >
            Contato
          </ScrollLink>

          <MobileSocial>
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
          </MobileSocial>
        </MobileMenuNav>
      </MobileMenu>
    </>
  )
}
