import { styled } from 'styled-components'
import { breakpoints } from '../../globalStyles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 56px;
  margin-bottom: 120px;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 40px auto 60px auto;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: block;

    li {
      margin-bottom: 40px;
    }
  }
`
