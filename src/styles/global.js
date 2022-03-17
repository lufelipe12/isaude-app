import { createGlobalStyle } from "styled-components";

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

    .modal-content {
      width: 100%;
    max-width: 370px;
    background: #fff;
    padding: 2rem;
    position: relative;
    border-radius: 8px;
    
}

.modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.close-modal{
    color: var(--grey-1);
    background: transparent;
    border: none;
    position: absolute;
    right: 36px;
    top: 21px;
}


`
