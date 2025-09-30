import styled from 'styled-components'
import { cores } from '../../globalStyles'
import { TagContainer } from '../Tag/styles'
import { Props } from '.'

export const Card = styled.div<
  Omit<Props, 'image' | 'infos' | 'title' | 'score' | 'description'>
>`
  position: relative;
  border: 1px solid ${cores.salmao};
  background-color: ${cores.branca};
  font-size: 14px;

  ${TagContainer} {
    margin-left: 8px;
  }

  .container {
    padding: 8px;
    padding-bottom: ${(props) => (props.variant === 'home' ? '12px' : '8px')};
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
