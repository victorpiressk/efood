import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../globalStyles'

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  display: inline-block;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.variant === 'home' ? colors.salmon : colors.apricot};
  color: ${(props) =>
    props.variant === 'home' ? colors.apricot : colors.salmon};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`

export const ButtonLink = styled(Link)<ButtonProps>`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.variant === 'home' ? colors.salmon : colors.apricot};
  color: ${(props) =>
    props.variant === 'home' ? colors.apricot : colors.salmon};
  font-size: 14px;
  font-weight: bold;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`
