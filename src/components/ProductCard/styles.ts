import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const CardContainer = styled.div`
  background-color: ${cores.salmao};

  .container {
    padding: 8px;
  }

  img {
    max-width: 304px;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    margin: 8px 0;
    color: ${cores.damasco};
    font-size: 18px;
    font-weight: bold;
  }

  p {
    color: ${cores.damasco};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  height: 344px;
  background-color: ${cores.salmao};
  padding: 8px;

  header {
    display: flex;
    justify-content: end;
  }

  main {
    display: flex;
    align-items: flex-start;
    padding: 8px 24px;
    gap: 24px;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branca};
  }

  p {
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branca};
  }
`
