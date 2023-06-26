import { ElementType, ReactNode } from 'react'
import { Wrapper } from './styles'

interface ContainerProps {
  children: ReactNode
  as?: ElementType
}

export function Container({ children, as }: ContainerProps) {
  return <Wrapper as={as}>{children}</Wrapper>
}
