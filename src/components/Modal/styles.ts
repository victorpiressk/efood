import { styled } from 'styled-components'
import { cores } from '../../globalStyles'

export const ModalContent = styled.div`
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

export const ModalContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 344px;
  background-color: ${cores.salmao};

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
    margin-bottom: 16px;
    color: ${cores.branca};
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
