import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo', () => {
    render(<Logo />)

    expect(
      screen.getByRole('img', { name: /logo of studio ghibli/i })
    ).toBeInTheDocument()
  })
})
