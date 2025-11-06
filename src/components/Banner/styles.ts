import styled from 'styled-components'
import { breakpoints, cores } from '../../globalStyles'

export const ContainerBanner = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 32px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    content: '';
  }

  .container {
    position: relative;
    z-index: 1;
    padding-top: 24px;
    padding-bottom: 32px;
  }

  h3,
  span {
    color: ${cores.branca};
  }

  span {
    font-weight: 100;
  }

  h3 {
    font-weight: bold;
    margin-top: 152px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
    }
  }
`
