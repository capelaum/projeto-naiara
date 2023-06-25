import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    fontFamily: '$quicksand',
    '-webkit-font-smoothing': 'antialiased',

    color: '$primary',
    backgroundColor: '$white',
  },

  'a, button': {
    cursor: 'pointer',
    border: 'none',
  },
})
