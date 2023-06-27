import { Heading } from '~/components/Heading'
import { styled } from '~/styles/stitches.config'

export const StyledHeading = styled(Heading, {
  borderBottom: '3px solid $highlight',
  paddingBottom: '0.5rem',
  textTransform: 'uppercase',
  lineHeight: '$base',
})
