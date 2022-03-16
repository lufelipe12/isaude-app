import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 265px;
  height: 565px;
  background: var(--white);
  border-radius: 10px;
`;

export const Error = styled.span`
  color: var(--error);
  font-size: 12px;
  text-align: left;
`;
