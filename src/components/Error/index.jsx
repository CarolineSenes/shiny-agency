import React from 'react'
import ErrorIllustration from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.section`
text-align: center;
background-color: ${colors.backgroundLight};
margin: 30px;
padding: 99px;
`

const ErrorTitle = styled.h1`
font-size: 30px;
`

const Illustration = styled.img`
margin: 80px 0;
`

const ErrorSubtitle = styled.h2`
`


const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} alt="404" />
      <ErrorSubtitle>Il semblerait qu’il y ait un problème</ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
