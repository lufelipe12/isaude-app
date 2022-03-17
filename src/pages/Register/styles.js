import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 565px;

  background: var(--white);
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 300px;
    height: 565px;
    padding: 20px;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FullContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #021e33;
`;
export const InputContainer = styled.div``;
