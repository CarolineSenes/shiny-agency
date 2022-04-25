import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import {ThemeContext} from '../context'
import colors from '../style/colors'

const StyledGlobalStyle = createGlobalStyle`
  *{
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  body{
    margin: 0;
    background-color: ${({ isDarkMode }) => (isDarkMode ? `${colors.dark}` : `${colors.white}`)};
  }
`

const GlobalStyle = () => {
    const { theme } = useContext(ThemeContext)

  return (
    <StyledGlobalStyle isDarkMode={theme === 'dark'} />
  )
}

export default GlobalStyle