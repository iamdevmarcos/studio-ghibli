import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (min-width: 100px) and (max-width: 380px) {
      font-size: 80%;
    }
  }

  body {
    font-family: 'Poppins', sans-serif
  }
`

export default GlobalStyles
