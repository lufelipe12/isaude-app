import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
    :root {
      --white: #FFFFFF;
      --beige: #F3FFE2;
      --dark-blue: #021E33;
      --blue-1: #225378;
      --blue-2: #1695A3;
      --light-blue-1: #ACF0F2;
      --light-blue-2:  #EEFFFF;
      --orange: #EB7F00;
      --green: #11A131;
      --black: #000;
      --error: #ff0000;
      --success: #3FE864;
      --grey:#EBEDEE;
      --grey-2:#868E96;
    }
    body {
        
    }
    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
    h1, h2, h3 , h4 , h5 , h6 {
        font-weight: 700;
    }
    button {
        cursor: pointer;
    }
`