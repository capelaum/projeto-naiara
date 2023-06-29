import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { ServicesBg } from '~/assets'
import { Container } from '~/components/Container'
import { Heading } from '~/components/Heading'
import { styled } from '~/styles/stitches.config'

Container.toString = () => '.container'

export const ServicesWrapper = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [`& > ${Container}`]: {
    alignItems: 'flex-start',
    marginBottom: '5rem',
  },
})

export const ServicesCardsWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',

  position: 'relative',

  paddingTop: '2rem',
  paddingBottom: '5rem',
  marginBottom: '15rem',

  backgroundImage: `url(${(ServicesBg as StaticImageData).src})`,
  backgroundPosition: 'top',
  backgroundRepeat: 'repeat',
  backgroundSize: '60%',

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: 0,

    background: `linear-gradient(to bottom, rgba(251, 251, 251, 0.8) 0%, rgba(221, 196, 182, 0.5) 10%,
      rgba(221, 196, 182, 0.75) 50%, rgba(221, 196, 182, 0.9) 95%, $secondary 100%)`,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: 500,
    bottom: -250,
    right: 0,
    left: 0,

    zIndex: -1,

    background:
      'linear-gradient(to bottom, transparent 0%, rgba(221, 196, 182, 1) 50%, transparent 100%)',
  },

  '@bp1': {
    backgroundSize: 'auto',
    marginBottom: '10rem',

    '&::after': {
      height: 300,
      bottom: -150,
    },
  },
})

export const ServicesCards = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '$20',
})

export const ServiceCard = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',

  padding: '2.5rem 2rem',

  borderRadius: '$lg',

  boxShadow: '$default',

  backgroundColor: '$white',

  transition: 'all 0.3s ease-in-out',

  [`& ${Heading}`]: {
    textTransform: 'uppercase',
    marginTop: '1.25rem',
    marginBottom: '2rem',

    borderBottom: '1px solid $highlight',
    paddingBottom: '0.25rem',
  },

  p: {
    textAlign: 'center',
  },

  '&:hover': {
    transform: 'translateY(-8px) !important',
    boxShadow: '0 0 12px 4px rgba(150, 63, 51, 0.5)',
  },
})
