import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/renderWithTheme'

import Button from '.'

describe('<Button />', () => {
  it('should render a default button', () => {
    renderWithTheme(
      <Button
        title="Assistir Agora"
        href="https://www.netflix.com/br/title/60023642"
      />
    )

    const buttonElement = screen.getByText(/assistir agora/i)

    expect(buttonElement).toBeInTheDocument()

    expect(buttonElement.parentElement).toHaveStyle({
      'background-color': '#658E76',
      border: '2px solid #658e76',
      color: '#f9f9f9'
    })

    expect(buttonElement.closest('a')).toHaveAttribute(
      'href',
      'https://www.netflix.com/br/title/60023642'
    )
  })

  it('should render a secondary button when color scheme is passed', () => {
    renderWithTheme(
      <Button
        title="Assistir Agora"
        href="https://www.netflix.com/br/title/60023642"
        colorScheme="secondary"
      />
    )

    expect(screen.getByText(/assistir agora/i).parentElement).toHaveStyle({
      'background-color': 'transparent'
    })
  })

  it('should render a icon when prop is passed', () => {
    renderWithTheme(
      <Button
        title="Assistir Agora"
        href="https://www.netflix.com/br/title/60023642"
        hasIcon
      />
    )

    expect(screen.getByRole('img', { name: /play icon/i })).toBeInTheDocument()
  })
})
