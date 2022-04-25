import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from '../../utils/style/colors'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s linear infinite;
  height: 0;
  width: 0;
`


export const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${({ $isFullLink }) =>
    $isFullLink &&
    `color: ${colors.white}; border-radius: 30px; background-color: ${colors.primary}`}
`
