import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink, Loader } from '../../utils/style/Atoms'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function formatQueryParams(answers) {
  //renvoie un tableau contenant les noms des propriétés de l'objet "answers" ['a1', 'a2', etc...]
  const answerNumbers = Object.keys(answers)

  //formate les "answers" au format string attendu par l'API (voir le localhost de l'API pour le format)
  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    //vérifie si c'est la première réponse
    const isFirstAnswer = index === 0
    //si c'est la première réponse, on ajoute pas de séparateur devant, sinon on ajoute "&"
    const separator = isFirstAnswer ? '' : '&'
    //formate la string attendue par l'API (ex: a1=1&a2=0&a3=1)
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export function formatJobList(title, listLength, index){
  if(index === listLength - 1){
    return title
  }
  return `${title},`
}

const Results = () => {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext) //va récupérer les réponses de l'utilisateur
  const queryParams = formatQueryParams(answers)
  console.log(queryParams);
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${queryParams}`
  ) //va récupérer les états de l'API via useFetch

  if (error) {
    return <span>Il y a un problème</span>
  }

  // "?" permet de s'assurer que data existe bien.
  // voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const resultsData = data?.resultsData

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results
