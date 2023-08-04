import { MotionProps } from 'framer-motion'
import { ElementType, ReactNode } from 'react'
import { Wrapper } from './styles'

interface ContainerProps extends MotionProps {
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
