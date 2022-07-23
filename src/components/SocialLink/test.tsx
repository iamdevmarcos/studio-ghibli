import { render, screen } from '@testing-library/react'

import SocialLink from '.'

describe('<SocialLink />', () => {
  const props = {
    href: 'https://facebook.com/iamdevmarcos',
    alternativeText: 'facebook icon',
    icon: 'facebook'
  }

  it('should render correctly', () => {
    render(<SocialLink {...props} />)

    expect(
      screen.getByRole('img', { name: /facebook icon/i })
    ).toBeInTheDocument()

    expect(
      screen
        .getByRole('img', {
          name: /facebook icon/i
        })
        .closest('a')
    ).toHaveAttribute('href', 'https://facebook.com/iamdevmarcos')
  })
})
