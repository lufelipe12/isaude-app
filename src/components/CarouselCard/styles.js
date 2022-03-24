import styled from "styled-components";

export const CarouselCardStyled = styled.div`
  width: 295px;
  height: 183px;
  padding: 20px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  color: var(--light-blue-1);
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h3 {
    font-size: 20px;
    text-shadow: 1px 1px 2px black;
  }

  p {
    font-weight: 400;
    text-shadow: 1px 1px 2px black;
  }
`;
