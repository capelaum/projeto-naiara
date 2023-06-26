import { styled } from '~/styles/stitches.config'

export const HeroWrapper = styled('section', {
  // minHeight: '100vh',
  height: '100%',
  width: '100%',

  // overflow: 'hidden',
  position: 'relative',

  padding: '15rem 0 10rem 0',

  display: 'flex',
  justifyContent: 'center',

  backgroundColor: '$secondary',

  // border: '1px solid red', rgba(221, 196, 182, 0.15)

  '&::after': {
    // border: '1px solid red',

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
    padding: '12.5rem 0 0 0',

    '&::after': {
      // display: 'none',
    },
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

  // border: '1px solid red',

  zIndex: 3,

  h1: {
    maxWidth: '520px',
    width: '100%',
    margin: '1rem 0 1.5rem 0',
    lineHeight: '$short',
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

    'h1, p, h2': {
      textAlign: 'center',
    },
  },

  '@bp2': {
    h1: {
      fontSize: '$4xl',
    },

    p: {
      fontSize: '$md',
    },
  },

  '@bp3': {
    h1: {
      fontSize: '$3xl',
    },
  },
})

export const HeroImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  marginTop: '6.125rem',

  // border: '1px solid red',

  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,

  zIndex: 0,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
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
      linear-gradient(to top, $secondary 0%, rgba(221, 196, 182, 0.5) 15%, transparent 20%, transparent 100%)`,
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
