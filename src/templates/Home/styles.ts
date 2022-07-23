import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background: linear-gradient(130.02deg, #628e75 0.66%, #1a4855 83.32%);
  min-height: 100vh;

  padding: 1.875rem 1.563rem;
`

export const Container = styled.div`
  @media (min-width: 1000px) {
    max-width: 1440px;
    margin: 0 auto;
  }
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
  @media (min-width: 1000px) {
    margin-top: 100px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    /* gap: 10rem; */

    /* background: red; */
  }
`

export const MainImage = styled.div`
  animation: floating 5s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translateX(0);
    }
    66% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (min-width: 1000px) {
    flex: 1;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Info = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    margin-top: -2.5rem;
    /* background: green; */
    flex: 1;
  `}
`

export const Author = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.688rem;

  margin-bottom: 1rem;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 109%;

  margin-bottom: 1rem;

  @media (min-width: 1000px) {
    font-size: 6rem;
    line-height: auto;
  }
`

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 180%;

  margin-bottom: 2.813rem;

  @media (min-width: 1000px) {
    font-size: 1.3rem;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-bottom: 2rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`
