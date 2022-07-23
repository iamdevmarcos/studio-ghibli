import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render a default button', () => {
    render(<Button title="Assistir Agora" />)

    expect(
      screen.getByRole('button', { name: /assistir agora/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /assistir agora/i })).toHaveStyle(
      {
        'background-color': '#658E76',
        border: '2px solid #658e76',
        color: '#f9f9f9'
      }
    )
  })
})
