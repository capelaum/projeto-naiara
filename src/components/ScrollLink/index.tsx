import { LinkProps } from 'next/link'
import React, { PropsWithChildren } from 'react'
import { StyledLink } from './styles'

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>

type ScrollLinkProps = AnchorProps &
  LinkProps &
  PropsWithChildren & {
    variant?: 'default' | 'mobile' | 'none'
  }

const ScrollLink = ({ children, variant, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = e.currentTarget.href.replace(/.*#/, '')
    const elem = document.getElementById(targetId)
    const headerHeight = 120
    const container = document.querySelector('#main')

    if (!elem || !container) return

    const containerTop = container.getBoundingClientRect().top

    window.scrollTo({
      top:
        elem?.getBoundingClientRect().top +
        container.scrollTop -
        containerTop -
        headerHeight,
      behavior: 'smooth',
    })
  }

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (props?.onClick) {
      props.onClick(e)
    }
    handleScroll(e)
  }

  return (
    <StyledLink
      variant={variant}
      {...props}
      onClick={handleOnClick}
      className="scroll-link"
    >
      {children}
    </StyledLink>
  )
}
export default ScrollLink
