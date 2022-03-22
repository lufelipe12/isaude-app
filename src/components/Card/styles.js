import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  ${(props) => {
    if (props.time <= 0) {
      return `
      border: var(--error) 4px solid;
    `
    } else if (props.time < 1) {
      return `
      border: var(--orange) 4px solid;
    `
    } else {
      return `
        border: var(--blue-2) 4px solid;
    `
    }
  }};
  border-radius: 11px;
  width: 280px;
  height: 280px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    14px 20px 7px 3px rgba(66, 66, 66, 0.06);
  box-shadow: 0px 10px 13px -7px #000000,
    14px 20px 7px 3px rgba(66, 66, 66, 0.06);
  margin: 20px;
  :hover {
    transition: 0.6s;
    box-shadow: 5px 3px 4px 3px #000000;
    -webkit-box-shadow: 0px 8px 10px 0px #000000;
  }
`

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    ${(props) => {
      if (props.time <= 0) {
        return `
      color: var(--error) ;
    `
      } else if (props.time < 1) {
        return `
      color: var(--orange) ;
    `
      } else {
        return `
        color: var(--blue-2) ;
    `
      }
    }};
    margin: 12px 0px;
  }
`

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
`

export const ContainerInfo = styled.div`
  display: flex;
  background: var(--grey);
  margin-top: 10px;
  width: 235px;
  height: 125px;
  padding: 10px;
  border-radius: 10px;
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0px 5px;
  border-left: 2px solid #424242;

  ${(props) => {
    if (props.time <= 0) {
      return `
      border-left: var(--error) 2px solid;
    `
    } else if (props.time < 1) {
      return `
      border-left: var(--orange) 2px solid;
    `
    } else {
      return `
        border-left: var(--blue-2) 2px solid;
    `
    }
  }};
`

export const Info = styled.p`
  font-size: 12px;
  margin: 5px;
  ${(props) => {
    switch (props.type) {
      case 'label':
        return css`
          color: var(--grey-2);
        `
      default:
        return css`
          color: var(--black);
        `
    }
  }}
`

export const ContainerStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      width: fit-content;
    }
  }
`

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
    if (props.time <= 0) {
      return `
      background-color: var(--error) ;
    `
    } else if (props.time < 1) {
      return `
      background-color: var(--orange) ;
    `
    } else {
      return `
        background-color: var(--blue-2) ;
    `
    }
  }};
`
