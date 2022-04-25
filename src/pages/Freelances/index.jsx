import { useFetch, useTheme } from '../../utils/hooks'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

const CardTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`

const CardSubTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  color: ${colors.secondary};
  margin-bottom: 97px;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  max-width: 900px;
  margin: auto;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Freelances = () => {
  const { theme } = useTheme()
  const { isLoading, data, error } = useFetch(
    'http://localhost:8000/freelances'
  )

  // "?" permet de s'assurer que data existe bien.
  // voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <CardTitle theme={theme}>Trouvez votre prestataire</CardTitle>
      <CardSubTitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </CardSubTitle>

      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader"/>
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((freelance, index) => (
            <Card
              key={`${freelance.name}-${index}`}
              label={freelance.job}
              title={freelance.name}
              picture={freelance.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
