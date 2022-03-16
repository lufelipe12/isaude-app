import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-blue);

  img {
    width: 90px;
    height: 90px;
  }
`;

export const StyledNav = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: relative;

  :hover div {
    display: block;
  }

  div {
    display: none;
    position: absolute;
    z-index: 1;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 19px;
    font-weight: bold;
  }
`;
