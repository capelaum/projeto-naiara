import { motion } from 'framer-motion'
import { Heading } from '~/components/Heading'
import { styled } from '~/styles/stitches.config'

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
  maxWidth: '45%',

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
  gap: '2rem',
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
