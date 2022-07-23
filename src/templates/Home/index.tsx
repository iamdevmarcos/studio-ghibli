import * as S from './styles'

import Logo from 'components/Logo'
import SocialLink from 'components/SocialLink'

import links from './content'
import Button from 'components/Button'

const HomeTemplate = () => (
  <S.Wrapper>
    <S.MenuWrapper>
      <Logo />

      <S.LinksWrapper>
        {links.map(({ icon, href, alternativeText }, index) => (
          <SocialLink
            key={index}
            icon={icon}
            alternativeText={alternativeText}
            href={href}
          />
        ))}
      </S.LinksWrapper>
    </S.MenuWrapper>

    <S.Content>
      <S.MainImage>
        <S.Image src="/img/main-photo.png" />
      </S.MainImage>

      <S.Info>
        <S.Author>HAYAO MIYAZAKI</S.Author>
        <S.Title>A VIAGEM DE CHIHIRO</S.Title>
        <S.Description>
          Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
          desobedecem são transformados em animais.
        </S.Description>

        <Button title="Assistir Agora" />
      </S.Info>
    </S.Content>
  </S.Wrapper>
)

export default HomeTemplate
