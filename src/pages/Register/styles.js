import styled, { keyframes } from 'styled-components'

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-70px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`

export const Container = styled.div`
  width: 83%;
  max-width: 370px;
  min-height: 700px;
  height: 100%;
  background: var(--white);
  border-radius: 10px;
  animation: ${appearFromLeft} 1.4s;
  margin-top: 50px;
  margin-bottom: 50px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 20px;

    .MuiTextField-root {
      margin-bottom: 10px;
    }
    .MuiFormControl-root {
      margin-bottom: 10px;
    }
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    text-align: center;
    color: black;
    margin-top: 0px;
    margin-left: 4px;
    :hover {
      cursor: pointer;
    }
  }

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-style: normal;
    font-size: 14px;
    color: #868e96;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    width: 40%;
    height: 100%;
    margin-left: 50px;
    form {
      width: 100%;
      height: 100%;
    }
  }
`

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const FullContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #021e33;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const ImageContainer = styled.div`
  width: 60%;
  height: 100vh;
  display: none;

  @media (min-width: 768px) {
    img {
      width: 100%;
      height: 100vh;
      object-fit: contain;
    }
    display: flex;
    justify-content: center;
  }
`

export const ImageHome = styled.span`
  align-self: flex-start;
  background: var(--light-blue-2);
  border-radius: 100px;
  padding: 5px;
  margin-top: 15px;
  margin-left: 15px;

  :hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin-right: 15px;
  }
`
