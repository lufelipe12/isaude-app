import {CarouselCardStyled} from "./styles"

export const CarouselCard = ({item}) => {
  return (
    <CarouselCardStyled img={item.img}>
      <h3>{item.title}</h3>
      <p>{item.date}</p>
    </CarouselCardStyled>
  )
}
