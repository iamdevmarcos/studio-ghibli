import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background: linear-gradient(130.02deg, #628e75 0.66%, #1a4855 83.32%);
  min-height: 100vh;

  padding: 1.875rem 1.563rem;
`

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.563rem;
`

export const Content = styled.div`
  background: red;
`

export const MainImage = styled.div`
  max-width: 31.25rem; // 500px
  max-height: 23.125rem; // 370px
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Info = styled.div``

export const Author = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
  `}
`

export const Title = styled.h1``

export const Description = styled.p``
