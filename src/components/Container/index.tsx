import { ElementType, HTMLAttributes, ReactNode } from 'react'
import { Wrapper } from './styles'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  as?: ElementType
}

export function Container({ children, as, ...props }: ContainerProps) {
  return (
    <Wrapper as={as} className="container" {...props}>
      {children}
    </Wrapper>
  )
}
