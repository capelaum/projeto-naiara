import { styled } from '@stitches/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Text } from '~/components/Text'

export const InstaWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',

  marginBottom: '5rem',

  '.wx-widget-container': {
    maxWidth: 'none !important',
  },
})

export const InstaTitle = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  alignSelf: 'center',

  textDecoration: 'none',

  transition: '$default',

  position: 'relative',

  [`& ${Text}`]: {
    transition: '$default',
    position: 'relative',

    '&::after': {
      content: '""',
      width: 0,
      height: 3,
      backgroundColor: '$highlight',
      position: 'absolute',
      bottom: 0,
      left: 0,
      display: 'block',
      borderRadius: '$full',

      transition: '$slow',
    },
  },

  '&:hover': {
    cursor: 'pointer',

    [`& ${Text}`]: {
      '&::after': {
        content: '""',
        width: '100%',
        position: 'absolute',
      },
    },
  },
})

export const InstaProfileImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '4rem',
  height: '4rem',

  borderRadius: '$full',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',

    padding: 2,

    borderRadius: '$full',

    objectPosition: 'center',
    border: '2px solid $primary',
  },

  '@bp2': {
    width: '2rem',
    height: '2rem',
  },
})
