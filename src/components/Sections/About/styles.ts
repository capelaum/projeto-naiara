import { styled } from '~/styles/stitches.config'

export const AboutWrapper = styled('section', {
  width: '100%',

  margin: '10rem 0',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6rem',

  // border: '1px solid red',

  '@bp1': {
    flexDirection: 'column-reverse',
    margin: '5rem 0',
  },
})

export const AboutImageWrapper = styled('div', {
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

  '@bp1': {
    maxWidth: '100%',
  },
})

export const AboutContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '4rem',

  p: {
    maxWidth: 500,
  },

  '@bp1': {
    p: {
      maxWidth: '100%',
    },
  },
})
