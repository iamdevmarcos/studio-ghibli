import * as S from './styles'

export type ButtonProps = {
  title: string
  colorScheme?: 'default' | 'secondary'
  hasIcon?: boolean
  href: string
}

const Button = ({
  title,
  colorScheme = 'default',
  hasIcon = false,
  href
}: ButtonProps) => (
  <S.Wrapper colorScheme={colorScheme} href={href} target="_blank">
    {hasIcon && <S.Image src="/img/icons/play.png" alt="Play Icon" />}
    <span>{title}</span>
  </S.Wrapper>
)

export default Button
