import styled from "styled-components"
import background from "../../assets/background.jpeg"

export const Container = styled.div`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .BeginSection {
    padding: 200px;
    justify-content: space-around;
    height: calc(100vh - 100px);
    background-color: var(--dark-blue);
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    p {
      margin: 50px;
    }
  }

  .CarouselSection {
    height: 600px;
    background-color: var(--light-blue-2);
  }
`

export const HeadSection = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 600px;
  object-fit: contain;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    text-shadow: 4px 7px 1px #021e33;
  }
`
export const HeadBackground = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
    height: 100%;
    width: 30%;
    background: transparent;
  }
`

export const HeadContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  h1 {
    margin-bottom: 20px;
    font-size: 50px;
  }

  h2 {
    font-weight: 200;
    width: 125%;
    @media (min-width: 768px) {
      width: 100%;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;

  width: 100%;
  justify-content: space-evenly;

  div {
    width: 70%;
    padding-top: 15px;
    max-width: 145px;
    button {
      width: 140px;
    }
  }

  .CarouselSection {
    height: 600px;
    background-color: var(--light-blue-2);
  }
`
