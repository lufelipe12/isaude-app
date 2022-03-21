import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  justify-content: space-evenly;

  img {
    width: 50%;
    max-width: 300px;
    height: 200px;
    object-fit: contain;
    min-width: 300px;
    padding-bottom: 30px;
  }

  p {
    color: #225378;
    font-family: sans-serif;
    width: 50%;
    max-width: 300px;
    text-align: justify;
    min-width: 300px;
  }

  @media (max-width: 650px) {
    flex-direction: ${(props) =>
      props.imageFirst ? 'column' : 'column-reverse'};
  }
`
