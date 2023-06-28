import { Text } from '~/components/Text'
import { styled } from '~/styles/stitches.config'

export const HeroWrapper = styled('section', {
  height: '100%',
  width: '100%',

  position: 'relative',

  padding: '10rem 0',
  marginTop: 97,

  display: 'flex',
  justifyContent: 'center',

  backgroundColor: '$secondary',

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: 300,
    zIndex: 3,
    bottom: -300,
    right: 0,
    left: 0,
    background:
      'linear-gradient(to bottom, $secondary 0%, rgba(221, 196, 182, 0.5) 50%, transparent 100%)',
  },

  '@bp1': {
    minHeight: '100%',
    height: 'auto',
    flexDirection: 'column',
    padding: '3rem 0 0 0',
  },
})

export const HeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  overflow: 'visible',

  justifyContent: 'center',
  alignItems: 'flex-start',

  width: '100%',
  maxWidth: '1200px',
  margin: '0 1.5rem',

  zIndex: 3,

  h1: {
    maxWidth: '50%',
    width: '100%',
    margin: '1rem 0 1.5rem 0',
    lineHeight: '$short',
    textTransform: 'uppercase',
  },

  p: {
    maxWidth: '540px',
    width: '100%',
    lineHeight: '$short',
    marginBottom: '2.5rem',
  },

  '@bp1': {
    flexDirection: 'column',
    width: 'auto',
    alignItems: 'center',

    h1: {
      maxWidth: '80%',
    },

    'h1, p, h2': {
      textAlign: 'center',
    },
  },

  '@bp2': {
    h1: {
      fontSize: '$3xl',
    },

    p: {
      fontSize: '$md',
    },
  },

  '@bp3': {
    h1: {
      fontSize: '$2xl',
      maxWidth: '100%',
    },
  },
})

export const HeroImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  height: '100%',
  // marginTop: 97,

  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,

  zIndex: 0,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'right',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    top: 0,
    right: 0,
    background: `linear-gradient(to right, $secondary 0%, rgba(221, 196, 182, 0.5) 25%, transparent 50%, transparent 100%),
      linear-gradient(to top, $secondary 0%, rgba(221, 196, 182, 0.5) 10%, transparent 15%, transparent 100%)`,
  },

  '@bp1': {
    position: 'relative',
    marginTop: '5rem',

    width: '100%',
    height: '100%',

    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 1,
      top: 0,
      right: 0,
      background: `linear-gradient(to bottom, $secondary 0%, rgba(221, 196, 182, 0.5) 10%, transparent 20%, transparent 100%),
        linear-gradient(to top, $secondary 0%, rgba(221, 196, 182, 0.5) 10%, transparent 20%, transparent 100%)`,
    },
  },
})

export const Notice = styled('article', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '1.25rem',
  margin: '8rem 0 0 0',

  width: '100%',

  borderRadius: '$lg',

  backgroundColor: '$white',

  zIndex: 3,

  boxShadow: '$default',

  [`& ${Text}`]: {
    lineHeight: '$short',
  },
})
