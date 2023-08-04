import Link from 'next/link'
import { styled } from '~/styles/stitches.config'

export const StyledLink = styled(Link, {
  position: 'relative',

  color: '$white',

  fontWeight: '$medium',
  textDecoration: 'none',

  transition: '$default',

  '&:hover': {
    filter: 'brightness(1.2)',
    color: '$highlight',
  },

  variants: {
    variant: {
      none: {},
      default: {},
      mobile: {
        fontSize: '$xl',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
