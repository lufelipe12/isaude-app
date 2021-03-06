import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  color: var(--blue-1);
  font-weight: bold;

  background: var(--light-blue-2);

  div > p {
    color: var(--dark-blue);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export const ContainerLeaders = styled.div`
  margin: 250px 10px 10px 0px;

  p {
    margin: 20px 0 20px 0;
  }
  li {
    margin-left: 21px;
  }
  @media (min-width: 768px) {
    margin: 10px 10px 10px 100px;
  }
`

export const ContainerQuite = styled.div`
  position: absolute;
  align-items: center;
  text-align: center;
  margin-top: 10px;

  img {
    width: 297px;
    border-radius: 113px;
    margin-top: 10px;
  }
  @media (min-width: 768px) {
    position: relative;
  }
`

export const ContainerOthers = styled.div`
  margin: 10px 10px 10px 0px;

  p {
    margin: 20px 0 20px 0;
  }
  li {
    margin: 20px 0 20px 21px;
  }

  @media (min-width: 768px) {
    margin: 10px 100px 10px 10px;
  }
`
