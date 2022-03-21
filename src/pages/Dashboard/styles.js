import styled from "styled-components";

export const DashHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const UserContainer = styled.div`
  width: 300px;
  height: 125px;
  display: flex;
  align-items: center;
  margin: 20px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  img {
    width: 90px;
    height: 110px;
    margin: 20px;
    border-radius: 5px;
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

.segunda-coluna {
  margin-left: 7px;
}
  span {
    color: var(--grey-2);
    font-weight: bold;
    font-size: 10px;
  }

  p {
    color: var(--dark-blue-2);
    font-weight: bold;
    font-size: 12px;
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

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: var(--blue-2);

    :hover {
      color: var(--orange);
    }
  }
`;
export const ContainerSearchMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const FilterInputMobile = styled.input`
  width: 160px;
  display: block;
  border-radius: 10px;
  padding: 8px;
  border: none;
  font-size: 15px;
  background: #f3ffe2;
  margin-right: 10px;
  margin-top: 10px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonSearchMobile = styled.button`
  display: block;
  padding: 8px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  border-radius: 10px;
  background-color: var(--dark-blue);

  @media (min-width: 768px) {
    display: none;
  }
`;
