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

  img:hover {
    cursor: pointer;
  }
`;

export const StyledNav = styled.nav`
  width: 90px;
  height: 50px;
  display: flex;
  align-items: center;

  ul {
    width: 70px;
    height: 40px;
    background-color: var(--dark-blue);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  hr {
    background-color: var(--light-blue-2);
    height: 6px;
  }

  li {
    background-color: var(--blue-2);
    list-style: none;
    display: none;
    margin-top: 8px;
    width: 80px;
    padding: 4px;
    margin: 2px;
  }

  ul:hover li {
    display: flex;
    justify-content: center;
  }

  ul:hover hr {
    display: none;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    width: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    ul {
      width: 480px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    hr {
      display: none;
    }

    li {
      display: block;
      background-color: rgba(0, 0, 0, 0);
      width: 50px;
    }

    a {
      font-size: 19px;
    }
  }
`;
