import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'colorScheme'>

const wrapperModifiers = {
  default: () => css`
    background-color: #658e76;
  `,

  secondary: () => css`
    background-color: transparent;
  `
}

export const Wrapper = styled.a<WrapperProps>`
  ${({ colorScheme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    ${wrapperModifiers[colorScheme!]}

    width: 100%;
    height: 4rem;

    color: #f9f9f9;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;

    border: 2px solid #658e76;
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
