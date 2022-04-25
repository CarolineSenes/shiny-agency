import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from './'
import { ThemeProvider } from '../../utils/context'

describe('Home', () => {
  it('should render the title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    const content =
      'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
    expect(
      screen.getByRole('heading', { level: 2, text: content })
    ).toBeTruthy()
  })
})
