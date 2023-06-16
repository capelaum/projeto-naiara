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

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$carla',
  },
})
