import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    :root {
      --white: #F3FFE2;
      --dark-blue: #021E33;
      --blue-1: #225378;
      --blue-2: #1695A3;
      --light-blue: #ACF0F2;
      --orange: #EB7F00;
      --green: #11A131;
      --black: #000;
    }

    body {
        background-color: var(--vanilla);
        color: var(--black);
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
