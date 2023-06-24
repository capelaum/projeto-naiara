import { type ComponentProps, type ElementType } from 'react'
import { styled } from '~/styles/stitches.config'

export const Text = styled('p', {
  fontFamily: '$quicksand',
  lineHeight: '$base',
  margin: 0,

  color: '$primary',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl', '@bp2': { fontSize: '$xl' } },
      '3xl': { fontSize: '$4xl', '@bp2': { fontSize: '$2xl' } },
      '4xl': { fontSize: '$4xl', '@bp2': { fontSize: '$3xl' } },
      '5xl': { fontSize: '$5xl', '@bp2': { fontSize: '$4xl' } },
      '6xl': { fontSize: '$6xl', '@bp2': { fontSize: '$5xl' } },
      '7xl': { fontSize: '$7xl', '@bp2': { fontSize: '$6xl' } },
      '8xl': { fontSize: '$8xl', '@bp2': { fontSize: '$7xl' } },
      '9xl': { fontSize: '$9xl', '@bp2': { fontSize: '$8xl' } },
    },

    weight: {
      light: { fontWeight: '$light' },
      regular: { fontWeight: '$regular' },
      medium: { fontWeight: '$medium' },
      semibold: { fontWeight: '$semibold' },
      bold: { fontWeight: '$bold' },
      extraBold: { fontWeight: '$extrabold' },
      black: { fontWeight: '$black' },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'regular',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
