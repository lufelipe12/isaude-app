import styled from "styled-components";

export const UserContainer = styled.div`
  width: 300px;
  height: 115px;
  display: flex;
  align-items: center;
  margin: 20px;

  img {
    width: 85px;
    height: 110px;
    margin: 20px;
    border-radius: 5px;
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
`;

export const UserInfos = styled.div`
  width: 200px;
  height: 105px;
  display: flex;
  flex-wrap: wrap;

  h3 {
    font-weight: bold;
    font-size: 14px;
  }
`;

export const UserData = styled.section`
  width: 150px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  div {
    margin: 0px 6px;
  }

  span {
    color: var(--grey-2);
    font-weight: bold;
    font-size: 9px;
  }

  p {
    color: var(--dark-blue-2);
    font-weight: bold;
    font-size: 10px;
  }
`;

export const CardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
