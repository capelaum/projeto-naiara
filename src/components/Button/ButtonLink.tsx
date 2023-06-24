import Link from 'next/link'
import { ReactNode } from 'react'
import { Button, ButtonProps } from '~/components/Button'

interface ButtonLinkProps extends ButtonProps {
  href: string
  children: ReactNode
}

export function ButtonLink({ children, href, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        asAnchor
        {...props}
        rel={props.target === '_blank' ? 'noreferrer noopener' : undefined}
      >
        {children}
      </Button>
    </Link>
  )
}
