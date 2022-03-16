import { CarouselCardStyled } from "./styles"

export const CarouselCard = ({item}) => {
    return(
        <CarouselCardStyled>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>Outra coisa</p>
            <p>Coisa</p>
        </CarouselCardStyled>
    )
}