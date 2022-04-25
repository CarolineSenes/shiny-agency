import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  margin: 30px;
`

const LeftCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${StyledLink} {
    max-width: 250px;
  }
`

const Text = styled.h2`
  padding-bottom: 30px;
  line-height: 80px;
  font-size: 50px;
`

const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>
          <Text>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </Text>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>{' '}
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
