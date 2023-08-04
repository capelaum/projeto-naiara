import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heading } from '~/components/Heading'
import { Text } from '~/components/Text'
import { keyframes, styled } from '~/styles/stitches.config'

export const ContactWrapper = styled('div', {
  width: '100%',
  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  margin: '8rem 0',
  gap: '3rem',

  '@bp2': {
    margin: '5rem 0',
    flexDirection: 'column',
  },
})

export const ContactContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  width: '100%',
  maxWidth: '50%',

  [`& ${Heading}`]: {
    marginBottom: '2.5rem',
    lineHeight: '$base',

    textTransform: 'uppercase',
  },

  '@bp2': {
    maxWidth: '100%',
  },
})

export const ContactInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.25rem',
})

export const shake = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(10deg)' },
  '50%': { transform: 'rotate(0deg)' },
  '75%': { transform: 'rotate(-10deg)' },
  '100%': { transform: 'rotate(0deg)' },
})

export const ContactLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  color: '$primary',
  textDecoration: 'none',

  transition: '$default',

  [`& ${Text}`]: {
    position: 'relative',

    '&::after': {
      content: '""',
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

  '&:hover': {
    svg: {
      filter: 'brightness(1.1)',
      animation: `${shake} 0.5s linear infinite`,
    },

    [`& ${Text}`]: {
      '&::after': {
        content: '""',
        width: '100%',
        position: 'absolute',
      },
    },
  },
})

export const ContactItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  color: '$primary',
})

export const ContactLocalsList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.25rem',
  paddingLeft: '1.75rem',

  li: {
    color: '$primary',
    fontSize: '$md',
    fontWeight: '$medium',
    lineHeight: '$short',
  },
})

export const ContactMapWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  maxWidth: '50%',

  '@bp2': {
    maxWidth: '100%',
  },
})

export const ContactMapContainer = styled(motion.div, {
  cursor: 'grab',
  position: 'relative',

  width: '100%',
  height: 500,

  overflow: 'hidden',
  boxShadow: '$default',

  borderRadius: '$lg',

  transition: '$slow',

  '@bp2': {
    maxWidth: '100%',
    height: 350,
  },
})

export const ContactMap = styled('iframe', {
  width: '100%',
  height: '100%',
  border: 0,
})

export const ContactMapsButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  marginTop: '2rem',
})

export const ContactMapButton = styled('button', {
  width: 12,
  height: 12,
  minWidth: 12,
  minHeight: 12,

  borderRadius: '$full',

  transition: '$default',

  backgroundColor: '$gray300',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary',
      },
    },
  },
})
