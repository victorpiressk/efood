import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  creme: '#FFF8F2',
  damasco: '#FFEBD9',
  salmao: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '640px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${cores.salmao};
  }

  body {
    background-color: ${cores.creme};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 90%;
    }
  }
`
