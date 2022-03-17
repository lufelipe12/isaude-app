import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-radius: 11px;
  width: 280px;
  height: 280px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    14px 20px 7px 3px rgba(66, 66, 66, 0.06);
  box-shadow: 0px 10px 13px -7px #000000,
    14px 20px 7px 3px rgba(66, 66, 66, 0.06);

  border: 4px solid var(--blue-2);

  ${(props) => {
    switch (props.type) {
      case "approaching":
        return css`
          border: 4px solid var(--orange);
        `;
      case "not-vaccinated":
        return css`
          border: 4px solid var(--error);
        `;
      default:
        css`
          border: 4px solid var(--blue-2);
        `;
    }
  }}
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--blue-2);
  h3 {
    margin: 12px 0px;
  }

  ${(props) => {
    switch (props.type) {
      case "approaching":
        return css`
          color: var(--orange);
        `;
      case "not-vaccinated":
        return css`
          color: var(--error);
        `;
      default:
        css`
          color: var(--blue-2);
        `;
    }
  }}
`;

export const ContainerButtons = styled.div`
  margin: 2px 0px 0px 0px;
  button {
    border: none;
    background: var(--white);
    color: #323232;
    margin: 5px;
  }

  button:hover {
    color: var(--orange);
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  background: var(--grey);
  margin-top: 10px;
  width: 235px;
  border-radius: 10px;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 25px;
  padding-left: 5px;
  border-left: 2px solid #424242;
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

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
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

  background: var(--green);

  ${(props) => {
    switch (props.type) {
      case "approaching":
        return css`
          background: var(--orange);
        `;
      case "not-vaccinated":
        return css`
          background: var(--error);
        `;
      default:
        css`
          background: var(--green);
        `;
    }
  }}
`;
