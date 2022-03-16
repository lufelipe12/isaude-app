import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--white);

  border: 4px solid var(--blue-2);
  border-radius: 11px;

  width: 280px;
  height: 280px;
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin-top: 20px; */
  color: var(--blue-2);
  h3 {
    color: var(--blue-2);
    margin: 0px 0px 2px 10px;
  }
`;

export const ContainerButtons = styled.div`
  margin: 2px 0px 0px 218px;
  button {
    border: none;
    background: var(--white);
    color: var(--blue-2);
    margin: 5px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  background: var(--grey);
  margin-top: 10px;
  width: 235px;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 25px;

  border-left: 2px solid var(--blue-2);
`;

export const Info = styled.p`
  font-size: 12px;
  margin: 5px;
  ${(props) => {
    switch (props.type) {
      case "label":
        return css`
          color: var(--grey-2);
        `;

      default:
        return css`
          color: var(--black);
        `;
    }
  }}
`;

export const ContainerStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10px;
`;

export const Status = styled.h3`
  width: 220px;
  height: 35px;
  text-align: center;
  color: var(--white);
  font-size: 18px;

  margin-top: 10px;
  padding-top: 7px;

  border-radius: 4px;

  ${(props) => {
    switch (props.type) {
      case "vaccinated":
        return css`
          background: var(--green);
        `;
      case "upcoming":
        return css`
          background: var(--orange);
        `;
      case "not-vaccinated":
        return css`
          background: var(--error);
        `;

      default:
        return css`
          background: var(--green);
        `;
    }
  }}
`;
