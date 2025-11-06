import { createGlobalStyle } from 'styled-components'

// 🎨 Paleta de cores
export const colors = {
  white: '#fff',
  cream: '#FFF8F2',
  apricot: '#FFEBD9',
  salmon: '#E66767'
}

// 📱 Breakpoints de responsividade
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '640px'
}

// 🌍 Estilos globais
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${colors.salmon};
  }

  body {
    background-color: ${colors.cream};
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
