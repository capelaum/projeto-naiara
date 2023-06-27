import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heading } from '~/components/Heading'
import { SliderDots } from '~/components/SliderDots'
import { styled } from '~/styles/stitches.config'

SliderDots.toString = () => '.slider-dots'

export const AppointmentWrapper = styled('div', {
  width: '100%',
  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginBottom: '5rem',
  gap: '7.5rem',

  '@bp2': {
    flexDirection: 'column',
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

export const AppointmentContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  width: '100%',
  maxWidth: '50%',

  [`& ${Heading}`]: {
    marginBottom: '4rem',
  },

  '@bp2': {
    maxWidth: '100%',
  },
})

export const AppointmentText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',

  marginBottom: '2.5rem',
})

export const AppointmentSliderContainer = styled(motion.div, {
  cursor: 'grab',
  position: 'relative',

  height: '100%',
  maxHeight: 700,
  overflow: 'hidden',

  borderRadius: '$lg',
  border: '3px solid $primary',

  transition: '$slow',

  '@bp2': {
    maxWidth: '100%',
  },
})

export const AppointmentImage = styled(Image, {
  width: '100%',
  height: '100%',

  objectFit: 'cover ',
  objectPosition: 'center',
})

export const AppointmentSliderDots = styled(SliderDots, {})
