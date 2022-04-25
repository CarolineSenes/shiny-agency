import Freelances from './'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    // On passe les datas mockées dans ce qui est retourné en json
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: 'https://randomuser.me/api/portraits/',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

it('should render correctly', () => {
    render(
        <ThemeProvider>
            <Freelances />
        </ThemeProvider>
    )
    //après avoir ajouter l'attribute data-testid dans le component 'Freelances' pour cibler l'élément 'Loader', on peut l'atteindre avec screen.getByTestId
    expect(screen.getByTestId('loader')).toBeTruthy()
})

it('should display freelancers names', async () => {
    render(
        <ThemeProvider>
            <Freelances />
        </ThemeProvider>
    )
    // On attend que le loader soit caché
    await waitFor(() => expect(screen.queryByTestId('loader')).toBeNull())
    // On attend que le premier nom soit affiché
    await waitFor(() => expect(screen.getByText('Harry Potter')).toBeTruthy())
    // On attend que le deuxième nom soit affiché
    await waitFor(() => expect(screen.getByText('Hermione Granger')).toBeTruthy())
})