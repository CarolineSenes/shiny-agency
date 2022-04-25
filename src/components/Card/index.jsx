import React from 'react'
import { useState } from 'react'
import { useTheme } from '../../utils/hooks'
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const CardLabel = styled.span`
  color: ${colors.primary};
  font-size: 22px;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  align-self: center;
  margin: 30px;
`

const CardTitle = styled.span`
  font-size: 25px;
  align-self: center;

`

//on récupère les props de "Freelances" (sauf picture)
const Card = ({ label, title, picture }) => {
  const { theme } = useTheme()
  const [isFavorite, setIsFavorite] = useState(false)
  const star = isFavorite ? '⭐️' : ''

  return (
    <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle theme={theme}>{star} {title} {star}</CardTitle>
    </CardWrapper>
  )
}

//définit les typage des props
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

//définit la valeur par défaut de la prop picture (car elle est "Require")
Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
