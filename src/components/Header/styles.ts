import styled from 'styled-components'
import headerImg from '../../assets/images/fundo-cabecalho.png'
import { Props } from '.'

export const ContainerHeader = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.variant === 'home' ? '384px' : '160px')};
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding-top: ${(props) => (props.variant === 'home' ? '64px' : '51px')};
    padding-bottom: ${(props) => (props.variant === 'home' ? '40px' : '51px')};
    display: flex;
    flex-direction: ${(props) => (props.variant === 'home' ? 'column' : 'row')};
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: ${(props) => (props.variant === 'home' ? '36px' : '18px')};
    font-weight: bold;
  }
`

export const Title = styled.div`
  max-width: 536px;
  width: 100%;
  margin-top: 136px;
`
