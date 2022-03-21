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
  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
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
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0);
      width: 100px;
    }

    a {
      font-size: 19px;
    }
  }
`;

export const FilterInput = styled.input`
  display: none;
  @media (min-width: 768px) {
    display: block;
    border-radius: 10px;
    padding: 5px;
    border: none;
    font-size: 15px;
    background: #f3ffe2;
    margin-right: 10px;
  }
`;

export const ButtonSearch = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: block;
    padding: 8px;
    margin-right: 20px;
    border: 0.7px solid var(--white);
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    border-radius: 10px;
    background-color: var(--dark-blue-2);
  }
`;

export const ButtonLogout = styled.button`
  width: 50px;
  color: #fff;
  font-weight: bold;
  background-color: var(--dark-blue-2);
  font-size: 16px;
  border: none;
`;

export const ContainerSearch = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
