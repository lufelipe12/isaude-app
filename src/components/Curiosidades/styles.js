import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  justify-content: space-evenly;

  img {
    width: 50%;
    max-width: 300px;
    height: 300px;
    object-fit: contain;
    min-width: 300px;
    padding-bottom: 30px;
  }

  p {
    color: var(--blue-1);
    width: 50%;
    font-family: "Roboto", sans-serif;
    line-height: 20px;
    font-size: 15px;
    font-weight: 600;
    max-width: 300px;
    min-width: 300px;
  }

  li {
    margin-top: 5px;
  }

  @media (max-width: 650px) {
    flex-direction: ${(props) =>
      props.imageFirst ? "column" : "column-reverse"};
  }
`;
