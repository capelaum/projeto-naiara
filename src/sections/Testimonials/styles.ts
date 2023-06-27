import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { BgPatternRed } from '~/assets'
import { Container } from '~/components/Container'
import { Heading } from '~/components/Heading'
import { styled } from '~/styles/stitches.config'

export const TestimonialsWrapper = styled('section', {
  width: '100%',
  backgroundColor: '$primary',

  backgroundImage: `url(${(BgPatternRed as StaticImageData).src})`,
  backgroundPosition: 'top',
  backgroundRepeat: 'repeat',
  backgroundSize: '60%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '2.5rem 1.5rem',
  marginBottom: '10rem',

  [`& ${Heading}`]: {
    color: '$white',
  },

  [`& ${Container}`]: {
    alignItems: 'flex-start',
  },

  '@bp1': {
    backgroundSize: 'auto',
  },
})

export const TestimonialsSliderContainer = styled(motion.div, {
  display: 'flex',
  cursor: 'grab',
  position: 'relative',
  margin: '$12 $4 $8 $4',
  padding: '$4 0',

  // border: '1px solid white',

  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    // background:
    //   'linear-gradient(to right, $primary 0%, transparent 25%, transparent 70%, $primary 100%)',
  },

  '@bp1': {
    '&:after': {
      display: 'none',
    },
  },
})

export const TestimonialCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '$6',

  borderRadius: '$lg',
  padding: '$6',

  backgroundColor: '$white',
})

export const TestimonialCardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})

export const TestimonialCardProfile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  p: {
    color: '$primary',
  },

  svg: {
    color: '$gray300',
  },
})

export const TestimonialQuotes = styled(RiDoubleQuotesL, {
  color: '$primary',
})
