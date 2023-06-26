import { type ComponentProps, type ElementType } from 'react'
import { styled } from '~/styles/stitches.config'

export const Heading = styled('h2', {
  fontFamily: '$carla',
  lineHeight: '$shorter',
  margin: 0,

  color: '$primary',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl', '@bp1': { fontSize: '$xl' } },
      lg: { fontSize: '$4xl', '@bp1': { fontSize: '$3xl' } },
      xl: { fontSize: '$5xl', '@bp1': { fontSize: '$4xl' } },
      '2xl': { fontSize: '$6xl', '@bp1': { fontSize: '$5xl' } },
      '4xl': { fontSize: '$7xl', '@bp1': { fontSize: '$6xl' } },
      '5xl': { fontSize: '$8xl', '@bp1': { fontSize: '$7xl' } },
      '6xl': { fontSize: '$9xl', '@bp1': { fontSize: '$8xl' } },
    },

    weight: {
      light: { fontWeight: 300 },
      regular: { fontWeight: 400 },
      semibold: { fontWeight: 600 },
      bold: { fontWeight: 700 },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'regular',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
