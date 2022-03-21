import styled from 'styled-components'

export const ButtonStyled = styled.div`
  button {
    width: 100%;
    height: 38px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    color: var(--blue-2);
    background-color: var(--light-blue-1);
  }

  .primary {
    color: var(--light-blue-1);
    background-color: var(--blue-2);
  }

  .secondary {
    color: #fff;
    background-color: var(--green);
  }

  .terciary {
    color: #fff;
    background-color: var(--orange);
  }
`
