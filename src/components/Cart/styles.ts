import styled from 'styled-components'
import { cores } from '../../globalStyles'
import lixeira from '../../assets/images/lixeira-de-reciclagem.png'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  content: '';
`

export const SideBar = styled.aside`
  position: relative;
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 32px 8px 8px 8px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    overflow-y: auto;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    position: sticky;
    bottom: 0;
  }

  h4 {
    font-weight: bold;
    color: ${cores.damasco};
    margin-bottom: 16px;
  }

  .empty-text {
    line-height: 22px;
    text-align: center;
    color: ${cores.branca};
  }
`

export const Prices = styled.p`
  position: sticky;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.damasco};
  span {
    color: ${cores.damasco};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.damasco};
  padding: 8px;
  margin-bottom: 12px;
  position: relative;

  img {
    margin-right: 8px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
    color: ${cores.salmao};
  }

  span {
    font-size: 14px;
    color: ${cores.salmao};
  }

  button {
    border: none;
    background-image: url(${lixeira});
    background-color: transparent;
    height: 16px;
    width: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const FormContainer = styled.div`
  display: flex;
  column-gap: 34px;
  align-items: flex-end;
  flex-wrap: wrap;

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.damasco};
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-bottom: 8px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: ${cores.damasco}
  }

  input {
    background-color: ${cores.damasco};
    border: 1px solid ${cores.damasco};
    width: 100%;
    height: 32px;
    padding: 0 8px;

    &.error {
      background-color: red;
    }
`
export const FormButtons = styled.div`
  margin-top: 24px;

  button {
    margin-bottom: 8px;
  }
`
