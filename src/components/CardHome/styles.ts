import styled from 'styled-components'
import { cores } from '../../globalStyles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.div`
  position: relative;
  border: 1px solid ${cores.salmao};
  background-color: ${cores.branca};
  font-size: 14px;

  > img {
    max-width: 472px;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-left: 8px;
  }

  .container {
    padding: 8px;
    padding-bottom: 12px;
  }

  p {
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3,
  span {
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
