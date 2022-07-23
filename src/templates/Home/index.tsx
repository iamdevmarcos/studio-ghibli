import * as S from './styles'

import Logo from 'components/Logo'
import SocialLink from 'components/SocialLink'
import Button from 'components/Button'

import links from './content'

const HomeTemplate = () => (
  <S.Wrapper>
    <S.Container>
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
          <S.Title>
            A VIAGEM <br />
            DE CHIHIRO
          </S.Title>
          <S.Description>
            Chihiro chega a um mundo mágico dominado
            <br /> por uma bruxa. Aqueles que a desobedecem são
            <br /> transformados em animais.
          </S.Description>

          <S.ButtonsWrapper>
            <Button
              title="Assistir Agora"
              href="https://www.netflix.com/br/title/60023642"
              hasIcon
            />
            <Button
              title="Assista o trailer"
              href="https://www.youtube.com/watch?v=SgZI655GgHk"
              colorScheme="secondary"
            />
          </S.ButtonsWrapper>
        </S.Info>
      </S.Content>
    </S.Container>
  </S.Wrapper>
)

export default HomeTemplate
