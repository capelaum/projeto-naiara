import { StyledHeading } from './styles'

interface SectionHeadingProps {
  title: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return <StyledHeading size="xl">{title}</StyledHeading>
}
