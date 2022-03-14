import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    :root {
      --white: #fff;
      --black: #000;
      --dark-blue: #021E33;
      --light-blue: #1695A3;
      --green: #11A131;
      --light-green: #ACF0F2;
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
