import * as S from './styles'

type SocialLinkProps = {
  href: string
  alternativeText: string
  icon: string
}

const SocialLink = ({ href, alternativeText, icon }: SocialLinkProps) => (
  <S.Wrapper href={href} target="_blank">
    <S.Image src={`/public/img/icons/${icon}`} alt={alternativeText} />
  </S.Wrapper>
)

export default SocialLink
