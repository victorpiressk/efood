import { styled } from 'styled-components'
import { breakpoints } from '../../globalStyles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 80px;
  margin-bottom: 120px;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 40px auto 60px auto;
    column-gap: 40px;
    row-gap: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: block;

    li {
      margin-bottom: 40px;
    }
  }
`
