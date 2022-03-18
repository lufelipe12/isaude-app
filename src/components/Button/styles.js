import styled from "styled-components"

export const ButtonStyled = styled.div`
  button {
    width: 140px;
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

<<<<<<< HEAD
  .secondary {
    color: #fff;
    background-color: var(--green);
  }

  .terciary {
    color: #fff;
=======
  .Secondary {
    color: var(--white);
    background-color: var(--green);
  }

  .Tertiary {
    color: var(--white);
>>>>>>> feature-component-footer
    background-color: var(--orange);
  }
`;
