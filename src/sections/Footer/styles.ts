import { StaticImageData } from 'next/image'
import { BgPatternRed } from '~/assets'
import { Container } from '~/components/Container'
import { NavBarSocial } from '~/components/Navbar/styles'
import ScrollLink from '~/components/ScrollLink'
import { Text } from '~/components/Text'
import { styled } from '~/styles/stitches.config'

Container.toString = () => '.container'

export const FooterWrapper = styled('footer', {
  width: '100%',
  backgroundColor: '$primary',

  backgroundImage: `url(${(BgPatternRed as StaticImageData).src})`,
  backgroundPosition: 'top',
  backgroundRepeat: 'repeat',
  backgroundSize: '60%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  paddingTop: '2.5rem',
  paddingBottom: '0.5rem',
  color: '$white',

  [`& ${Text}`]: {
    color: '$white',
  },

  [`& ${Container}`]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '2rem',
  },

  '@bp1': {
    backgroundSize: 'auto',
  },

  '@bp2': {
    [`& ${Container}`]: {
      flexDirection: 'column',
      alignItems: 'center',

      paddingBottom: '8rem',
    },
  },
})

export const FooterLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '3rem',

  width: '100%',

  '@bp2': {
    alignItems: 'center',
  },
})

ScrollLink.toString = () => '.scroll-link'

export const FooterLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.5rem',

  [`& ${ScrollLink}`]: {
    paddingLeft: 0,
    fontSize: '$lg',

    '@bp2': {
      '&:hover': {
        '&::after': {
          width: '100%',
        },
      },

      '&::after': {
        width: 0,
        height: 2,
        bottom: 0,
        left: 0,
        top: 28,

        transition: '$slow',
      },
    },
  },

  '@bp2': {
    alignItems: 'center',
  },
})

export const FooterSocial = styled(NavBarSocial, {
  '@bp3': {
    display: 'flex',
  },
})

export const FooterFinal = styled(NavBarSocial, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.125rem',

  '@bp2': {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,

    p: {
      textAlign: 'center',
    },
  },
})

export const FooterRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  width: '100%',
  maxWidth: '50%',

  'p + p': {
    marginTop: '1rem',
  },

  strong: {
    color: '$highlight',
    filter: 'brightness(1.2)',
  },

  '@bp2': {
    alignItems: 'center',
    maxWidth: '90%',

    [`& ${Text}`]: {
      textAlign: 'center',
    },
  },
})

export const FooterRightImageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '3rem',

  img: {
    width: '100%',
    height: '100%',
  },
})
