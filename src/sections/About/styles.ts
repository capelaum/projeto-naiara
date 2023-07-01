import { motion } from 'framer-motion'
import Image from 'next/image'
import { styled } from '~/styles/stitches.config'

export const AboutContentWrapper = styled('div', {
  width: '100%',
  position: 'relative',

  margin: '6rem 0 8rem 0',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6rem',

  '@bp1': {
    gap: '3rem',
  },

  '@bp2': {
    flexDirection: 'column-reverse',
    margin: '5rem 0',
  },
})

export const AboutImageWrapper = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  maxWidth: 400,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '$md',
    border: '1px solid $primary',
  },

  '@bp2': {
    maxWidth: '100%',
  },
})

export const AboutContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '4rem',
  width: '100%',

  '@bp2': {
    gap: '3rem',

    p: {
      maxWidth: '100%',
    },
  },
})

export const AboutText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',

  p: {
    maxWidth: 600,
    backdropFilter: 'blur(3px)',
  },

  '@bp2': {
    p: {
      maxWidth: '100%',
    },
  },
})

export const AboutImageBg = styled(Image, {
  position: 'absolute',

  right: -450,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: -1,
})
