import { styled } from '~/styles/stitches.config'

export const SliderDotsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '$2',
})

export const SliderDotButton = styled('button', {
  width: 12,
  height: 12,
  minWidth: 12,
  minHeight: 12,

  borderRadius: '$full',

  transition: '$default',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary',
      },
    },

    variant: {
      red: {
        backgroundColor: 'transparent',
        border: '1px solid $white',
      },

      white: {
        backgroundColor: '$gray300',
      },
    },
  },

  compoundVariants: [
    {
      active: true,
      variant: 'white',

      css: {
        backgroundColor: '$primary',
      },
    },
    {
      active: true,
      variant: 'red',

      css: {
        backgroundColor: '$white',
      },
    },
  ],
})
