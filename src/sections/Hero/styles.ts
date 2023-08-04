import { motion } from 'framer-motion'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { styled } from '~/styles/stitches.config'

export const HeroContainer = styled('section', {
  width: '100%',
  backgroundColor: '$secondary',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  flexDirection: 'column',
})

export const HeroWrapper = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2.5rem',

  marginTop: '10rem',
  marginBottom: '5rem',

  '@bp1': {
    gap: '5rem',
    flexDirection: 'column',
  },
})

export const HeroContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'flex-start',

  h1: {
    marginBottom: '1.5rem',
    lineHeight: '$short',
    textTransform: 'uppercase',
  },

  p: {
    maxWidth: '520px',
    width: '100%',
    lineHeight: '$base',
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

export const HeroImageWrapper = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flex: 1,

  maxWidth: 400,
  borderRadius: '$md',
  border: '2px solid $primary',

  overflow: 'hidden',

  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
})

export const Notice = styled(motion.section, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$primary',
  color: '$white',

  padding: '2.5rem 0',

  width: '100%',
  zIndex: 3,

  [`& ${Heading}`]: {
    color: '$white',
    textTransform: 'uppercase',
  },

  [`& ${Text}`]: {
    color: '$white',
    textAlign: 'justify',
  },

  h1: {
    marginBottom: '0.5rem',
  },

  h2: {
    marginBottom: '1.25rem',
  },
})
