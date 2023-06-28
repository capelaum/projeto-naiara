import { styled } from '~/styles/stitches.config'

export const NavbarWrapper = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '1rem 1.5rem',

  position: 'fixed',
  width: '100%',

  color: '$white',

  zIndex: 99,

  transition: 'all 0.3s ease-in-out',
  backdropFilter: 'blur(2px)',

  variants: {
    isScrolled: {
      true: {
        background: 'rgba(150, 63, 51, 0.9)',
      },
      false: {
        background: 'rgba(150, 63, 51, 0.85)',
      },
    },
  },
})

export const NavbarContainer = styled('div', {
  width: '100%',
  maxWidth: '1200px',

  display: 'flex',
  justifyContent: 'space-between',
})

export const NavbarLeft = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
})

export const NavBarSocial = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',

  a: {
    color: '$white',
    textDecoration: 'none',

    transition: '$default',

    '&:hover': {
      color: '$highlight',
      filter: 'brightness(1.2)',
    },
  },

  '@bp4': {
    display: 'none',
  },
})

export const MobileSocial = styled(NavBarSocial, {
  marginTop: 'auto',
  gap: '1.5rem',

  '@bp4': {
    display: 'flex',
  },
})

export const NavbarRight = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  '@bp2': {
    display: 'none',
  },
})

export const MobileMenuButton = styled('button', {
  display: 'none',

  background: 'transparent',
  color: '$white',

  '&:hover': {
    filter: 'brightness(1.2)',
    color: '$highlight',
  },

  '@bp2': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const MobileMenu = styled('div', {
  position: 'fixed',
  width: '100vw',
  height: '100vh',

  background: 'rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(3px)',

  display: 'none',

  transition: '$default',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        zIndex: 999,
      },
      false: {
        opacity: 0,
        zIndex: -1,
      },
    },
  },

  '@bp2': {
    display: 'flex',
  },
})

export const MobileMenuNavHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
})

export const MobileMenuNav = styled('nav', {
  position: 'fixed',
  width: 300,
  height: '100vh',
  zIndex: 9991,

  background: 'rgba(150, 63, 51, 0.9)',

  padding: '1rem 1.5rem',
  display: 'none',

  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '2rem',

  transition: '$default',

  img: {
    marginBottom: '2rem',
  },

  variants: {
    isOpen: {
      true: {
        transform: 'translateX(0)',
      },
      false: {
        transform: 'translateX(-100%)',
      },
    },
  },

  '@bp2': {
    display: 'flex',
  },
})
