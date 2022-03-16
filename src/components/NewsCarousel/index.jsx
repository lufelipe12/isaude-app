import Carousel from "react-material-ui-carousel"
import { CarouselCard } from "../CarouselCard"
import { ContainerCarousel } from "./styles"

export const NewsCarousel = () =>{
    // Lista de itens, que sera substituida por uma lista de notícias.
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <ContainerCarousel>
            {/* CointainerCarousel é apenas um componente de estilização */}
            <Carousel className="Carousel"
            // Coursel é o componente da biblioteca, next e prev fazem a troca automática
                next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
                prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }>
                {items.map( (item, i) => {
                    return(
                        <div className="CarouselBox">
                            {/* Aquivão as notícias, ainda não sei o farmato, 
                                por isso falta estilizar e deixei um exemplo.
                            */}
                            <CarouselCard key={i} item={item}/>
                            <CarouselCard key={i} item={item}/>
                            <CarouselCard key={i} item={item}/>
                            <CarouselCard key={i} item={item}/>
                        </div>
                        
                
                    )
                })
            }
            </Carousel>
        </ContainerCarousel>
    )       
}