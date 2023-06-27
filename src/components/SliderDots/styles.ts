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
  backgroundColor: '$gray300',

  transition: '$default',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary',
      },
    },
  },
})
