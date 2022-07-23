import * as S from './styles'

import Logo from 'components/Logo'
import SocialLink from 'components/SocialLink'

import links from './content'

const HomeTemplate = () => (
  <S.Wrapper>
    <Logo />

    {links.map(({ icon, href, alternativeText }, index) => (
      <SocialLink
        key={index}
        icon={icon}
        alternativeText={alternativeText}
        href={href}
      />
    ))}
  </S.Wrapper>
)

export default HomeTemplate
