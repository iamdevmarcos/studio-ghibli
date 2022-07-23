import * as S from './styles'

type SocialLinkProps = {
  href: string
  alternativeText: string
  icon: string
}

const SocialLink = ({ href, alternativeText, icon }: SocialLinkProps) => (
  <S.Wrapper href={href} target="_blank">
    <S.Image src={`/img/icons/${icon}.png`} alt={alternativeText} />
  </S.Wrapper>
)

export default SocialLink
