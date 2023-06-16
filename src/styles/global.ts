import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  html: {
    scrollBehavior: 'smooth'
  },

  body: {
    fontFamily: '$roboto',
    '-webkit-font-smoothing': 'antialiased',

    color: '$gray50',
    backgroundColor: '$gray900'
  },

  'a, button': {
    cursor: 'pointer',
    border: 'none'
  }
})
