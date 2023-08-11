import { keyframes, styled } from '@stitches/react'
import Link from 'next/link'
import { ComponentProps, ElementType } from 'react'
import { Text } from '~/components/Text'

export const shake = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(10deg)' },
  '50%': { transform: 'rotate(0deg)' },
  '75%': { transform: 'rotate(-10deg)' },
  '100%': { transform: 'rotate(0deg)' },
})

export const ContactLinkWrapper = styled(Link, {
  display: 'flex',
  alignItems: 'stretch',
  gap: '$3',
  color: '$primary',
  textDecoration: 'none',

  transition: '$default',

  [`& ${Text}`]: {
    position: 'relative',

    '&::after': {
      content: '""',
      width: 0,
      height: 2,
      backgroundColor: '$highlight',
      position: 'absolute',
      bottom: 0,
      left: 0,
      display: 'block',
      borderRadius: '$full',

      transition: '$slow',
    },
  },

  '&:hover': {
    svg: {
      animation: `${shake} 0.5s linear infinite`,
    },

    [`& ${Text}`]: {
      '&::after': {
        content: '""',
        width: '100%',
        position: 'absolute',
      },
    },
  },
})

export const ContactLinkIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContents: 'center',
})

interface ContactLinkProps extends ComponentProps<typeof ContactLinkWrapper> {
  text: string
  icon: ElementType
}

export function ContactLink({ text, icon: Icon, ...props }: ContactLinkProps) {
  return (
    <ContactLinkWrapper {...props}>
      <ContactLinkIcon>
        <Icon size={24} />
      </ContactLinkIcon>
      <Text size="lg" weight="medium">
        {text}
      </Text>
    </ContactLinkWrapper>
  )
}
