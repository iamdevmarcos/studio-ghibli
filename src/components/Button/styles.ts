import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'colorScheme'>

const wrapperModifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `,

  secondary: () => css`
    background-color: transparent;
  `
}

export const Wrapper = styled.a<WrapperProps>`
  ${({ colorScheme, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    ${wrapperModifiers[colorScheme!](theme)}

    width: 100%;
    height: 4rem;

    color: ${theme.colors.white};
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;

    border: 2px solid ${theme.colors.green};
    cursor: pointer;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 180%;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`

export const Image = styled.img`
  margin-right: 1rem;
`
