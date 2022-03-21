import styled, { keyframes } from "styled-components"

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(70px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--dark-blue);
  height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Logo = styled.div`
  width: 180px;
  height: 100px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
    background: var(--white);
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  background: var(--white);
  border-radius: 9px;
  padding: 10px;
  width: 286px;
  animation: ${appearFromRight} 1s;


  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    margin: 155px 0 155px 0;
    width: 350px;
    padding: 30px;
    box-shadow: 2px 7px 16px 7px rgba(0, 0, 0, 0.63);
  }
`

export const Label = styled.p`
  margin-right: 200px;
`

export const ContainerButton = styled.div`
  margin: 20px;
  width: 260px;
  @media (min-width: 768px) {
    width: 289px;
  }
`
