import { styled } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Text } from '~/components/Text'

export const ContactItemWrapper = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  gap: '$3',
  color: '$primary',
})

export const ContactItemIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContents: 'center',
})

interface ContacItemProps extends ComponentProps<typeof ContactItemWrapper> {
  text: string
  icon: ElementType
}

export function ContacItem({ text, icon: Icon, ...props }: ContacItemProps) {
  return (
    <ContactItemWrapper {...props}>
      <ContactItemIcon>
        <Icon size={24} />
      </ContactItemIcon>
      <Text size="lg" weight="medium" css={{ lineHeight: 1.5 }}>
        {text}
      </Text>
    </ContactItemWrapper>
  )
}
