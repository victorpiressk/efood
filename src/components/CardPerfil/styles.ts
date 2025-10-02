import styled from 'styled-components'
import { cores } from '../../globalStyles'

export const CardContainer = styled.div`
  background-color: ${cores.salmao};

  .container {
    padding: 8px;
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
