import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heading } from '~/components/Heading'
import { SliderDots } from '~/components/SliderDots'
import { keyframes, styled } from '~/styles/stitches.config'

SliderDots.toString = () => '.slider-dots'

export const AppointmentWrapper = styled('div', {
  width: '100%',
  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  marginBottom: '8rem',
  gap: '7.5rem',

  '@bp1': {
    gap: '2.5rem',
  },

  '@bp2': {
    flexDirection: 'column',
    gap: '5rem',
  },

  [`& ${SliderDots}`]: {
    position: 'absolute',
    right: '16%',
    bottom: -40,

    '@bp2': {
      right: '50%',
      transform: 'translateX(50%)',
    },
  },
})

export const AppointmentContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  width: '100%',
  maxWidth: '50%',

  [`& ${Heading}`]: {
    marginBottom: '4rem',
    lineHeight: '$base',

    textTransform: 'uppercase',

    span: {
      borderBottom: '3px solid $highlight',
      paddingBottom: '0.25rem',
    },
  },

  '@bp2': {
    maxWidth: '100%',

    span: {
      borderBottom: '3px solid $highlight',
      paddingBottom: '0.125rem',
    },
  },
})

export const AppointmentText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',

  marginBottom: '2.5rem',
})

export const AppointmentGalleryWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  maxWidth: '50%',

  '@bp2': {
    maxWidth: '100%',
  },
})

export const AppointmentGalleryContainer = styled(motion.div, {
  width: '100%',
  height: 'auto',

  transition: '$slow',

  '@bp2': {
    maxWidth: '100%',
    height: 'auto',
  },

  // '@bp3': {
  //   height: 600,
  // },

  // '@bp4': {
  //   height: 500,
  // },
})

export const fade = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const AppointmentImage = styled(Image, {
  width: '100%',
  height: '100%',
  maxHeight: 700,

  cursor: 'pointer',

  borderRadius: '$lg',
  border: '2px solid $primary',

  objectFit: 'cover',
  objectPosition: 'center',

  variants: {
    active: {
      true: {
        animation: `${fade} 0.5s ease-in-out`,
      },
    },
  },

  '@bp3': {
    maxHeight: 600,
  },

  '@bp4': {
    maxHeight: 500,
  },
})

export const AppointmentMapsButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  marginTop: '2rem',
})

export const AppointmentMapButton = styled('button', {
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
