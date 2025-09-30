import { styled } from 'styled-components'
import { Props } from '.'
import { Card } from '../Product/styles'
import { cores } from '../../globalStyles'

export const List = styled.ul<Omit<Props, 'foods'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.variant === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  margin-top: ${(props) => (props.variant === 'home' ? '80px' : '56px')};
  margin-bottom: 120px;
  column-gap: ${(props) => (props.variant === 'home' ? '80px' : '32px')};
  row-gap: ${(props) => (props.variant === 'home' ? '48px' : '32px')};

  ${Card} {
    border: ${(props) =>
      props.variant === 'home' ? `1px solid ${cores.salmao}` : 'none'};
    background-color: ${(props) =>
      props.variant === 'home' ? `${cores.branca}` : `${cores.salmao}`};

    img {
      margin: ${(props) => (props.variant === 'home' ? '0' : '8px')};
    }

    h3,
    p {
      color: ${(props) =>
        props.variant === 'home' ? `${cores.salmao}` : `${cores.damasco}`};
    }
  }
`
