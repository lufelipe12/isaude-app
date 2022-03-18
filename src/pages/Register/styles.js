import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 680px;
  background: var(--white);
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    height: 680px;
    padding: 20px;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    text-align: center;
    color: black;
    margin-top: 0px;
    margin-left: 4px;
    :hover {
      cursor: pointer;
    }
  }
  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #868e96;
    margin-top: 0px;
  }

  @media (min-width: 768px) {
    width: 40%;
    height: 680px;
    margin-left: 50px;
    form {
      width: 100%;
      height: 680px;
    }
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
  width: 100%;
  height: 100%;
  background: #021e33;
`;
export const InputContainer = styled.div``;
export const ImageContainer = styled.div`
  width: 60%;
  height: 100vh;
  display: none;
  @media (min-width: 768px) {
    img {
      width: 100%;
      height: 100vh;
    }
    display: flex;
    flex-direction: row;
  }
`;
