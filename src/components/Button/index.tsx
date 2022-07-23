import * as S from './styles'

type ButtonProps = {
  title: string
}

const Button = ({ title }: ButtonProps) => (
  <S.Wrapper>
    <span>{title}</span>
  </S.Wrapper>
)

export default Button
