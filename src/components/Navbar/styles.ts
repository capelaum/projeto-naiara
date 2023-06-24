import { styled } from '~/styles/stitches.config'

export const NavbarWrapper = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem 1.5rem',

  position: 'fixed',
  width: '100%',

  color: '$white',

  zIndex: 999,

  background: 'rgba(150, 63, 51, 0.8)',
  backdropFilter: 'blur(3px)',
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
      color: 'white',
    },
  },
})

export const NavbarRight = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  a: {
    position: 'relative',

    color: '$white',
    textDecoration: 'none',
    fontSize: '$md',
    fontWeight: '$medium',
    borderBottom: '2px solid transparent',
    padding: '0.75rem 0',

    '&:hover': {
      '&::after': {
        content: '',
        width: '100%',
      },
    },

    '&::after': {
      content: '',
      width: 0,
      height: 2,
      backgroundColor: '$highlight',
      position: 'absolute',
      bottom: 0,
      left: 0,
      display: 'block',
      borderRadius: '$full',

      transition: '$slow',
    },
  },
})
