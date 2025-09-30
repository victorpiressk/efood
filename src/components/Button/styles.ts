import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../globalStyles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  width: 100%;
  border: none;
  padding: 4px 6px;
  background-color: ${(props) =>
    props.variant === 'home' ? `${cores.salmao}` : `${cores.damasco}`};
  color: ${(props) =>
    props.variant === 'home' ? `${cores.damasco}` : `${cores.salmao}`};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

export const ButtonLink = styled(Link)<Props>`
  width: 100%;
  border: none;
  padding: 4px 6px;
  background-color: ${(props) =>
    props.variant === 'home' ? `${cores.salmao}` : `${cores.damasco}`};
  color: ${(props) =>
    props.variant === 'home' ? `${cores.damasco}` : `${cores.salmao}`};
  font-size: 14px;
  font-weight: bold;
`
