import styled from 'styled-components'
import bannerImg from '../../assets/images/banner.png'
import { cores } from '../../globalStyles'

export const ContainerBanner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 32px;

  .container {
    padding-top: 24px;
    padding-bottom: 32px;
  }

  span {
    color: ${cores.branca};
    font-weight: 100;
  }

  h3 {
    color: ${cores.branca};
    font-weight: bold;
    margin-top: 152px;
  }
`
