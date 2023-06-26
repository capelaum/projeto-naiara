import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FBFBFB',
      black: '#000000',

      primary: '#963F33',
      secondary: '#DDC4B6',
      highlight: '#ABC4A9',

      gray900: '#171717',
      gray800: '#262626',
      gray700: '#404040',
      gray600: '#525252',
      gray500: '#737373',
      gray400: '#a3a3a3',
      gray300: '#d4d4d4',
      gray200: '#e5e5e5',
      gray100: '#f5f5f5',
      gray50: '#fafafa',
    },

    fonts: {
      quicksand: 'Quicksand, sans-serif',
      carla: 'Carla, sans-serif',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },

    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },

    radii: {
      px: '1px',
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '20px',
      full: '99999px',
    },

    shadows: {
      default: '4px 4px 8px rgba(0, 0, 0, 0.25)',
    },

    transitions: {
      default: 'all 0.3s ease-in-out',
      fast: 'all 0.15s ease-in-out',
      slow: 'all 0.45s ease-in-out',
    },
  },

  media: {
    bp1: '(max-width: 992px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 576px)',
    bp4: '(max-width: 480px)',
  },
})
