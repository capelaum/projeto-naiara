import Link from 'next/link'
import { styled } from '~/styles/stitches.config'

export const StyledLink = styled(Link, {
  position: 'relative',

  color: '$white',
  textDecoration: 'none',

  fontWeight: '$medium',

  '&::after': {
    position: 'absolute',
    content: '""',
    backgroundColor: '$highlight',

    display: 'block',
    borderRadius: '$full',
  },

  variants: {
    variant: {
      none: {},
      default: {
        borderBottom: '2px solid transparent',
        fontSize: '$md',
        padding: '0.75rem 0',

        '&:hover': {
          '&::after': {
            width: '100%',
          },
        },

        '&::after': {
          width: 0,
          height: 2,
          bottom: 0,
          left: 0,

          transition: '$slow',
        },
      },
      mobile: {
        fontSize: '$xl',

        '&:hover': {
          '&::after': {
            opacity: 1,
          },
        },

        '&::after': {
          opacity: 0,
          width: 3,
          height: 20,

          top: '50%',
          transform: 'translateY(-50%)',
          left: -14,

          transition: '$fast',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
