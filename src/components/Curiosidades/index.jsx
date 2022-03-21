import {Container} from "./styles"

const Curiosidades = ({img, children, imageFirst}) => {
  return imageFirst ? (
    <Container imageFirst>
      <img src={img} alt={img} />
      <p> {children} </p>
    </Container>
  ) : (
    <Container>
      <p>{children} </p>
      <img src={img} alt={img} />
    </Container>
  )
}

export default Curiosidades
