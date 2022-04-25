import Footer from './'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
  it('should render correctly', () => {
    render(
      //vérifie que le footer est bien affiché
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )

    //vérifie l'affichage par défaut en mode 'light'
    const nightModeButton = screen.getByRole('button') //on récupère le bouton
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️') //on vérifie que le texte du bouton est bien 'Changer de mode : ☀️'

    //vérifie l'affichage en mode 'dark' lors du clic sur le bouton (interaction au click: fireEvent.click)
    fireEvent.click(nightModeButton) //on click sur le bouton
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙') //on vérifie que le texte du bouton est bien 'Changer de mode : 🌙'
  })
})
