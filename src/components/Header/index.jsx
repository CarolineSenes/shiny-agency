import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import darkLogo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px;
`

const Header = () => {
  return (
    <NavContainer>
      <Link to="/">
        <img src={darkLogo} alt="logo" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
