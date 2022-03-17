import Carousel from "react-material-ui-carousel"
import { CarouselCard } from "../CarouselCard"
import { ContainerCarousel } from "./styles"
import covid from "../../assets/covid.jpeg"
import vaccine from "../../assets/vacinação.jpeg"
import tranmition from "../../assets/transmissão.jpeg"

export const NewsCarousel = () =>{
    // Lista de itens, que sera substituida por uma lista de notícias.
    let news = [
        {
            title: "Nova variante",
            date: "11/03/2022",
            img:covid
        },
        {
            title: "Uso de máscaras",
            date: "10/03/2022",
            img:vaccine
        },
        {
            title: "Segunda dose",
            date: "17/03/2022",
            img:tranmition
        }
    ]

    return (
        <ContainerCarousel>
            {/* CointainerCarousel é apenas um componente de estilização */}
            <Carousel className="Carousel"
            // Coursel é o componente da biblioteca, next e prev fazem a troca automática
                next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
                prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }>
                {news.map( (item, i) => {
                    return(
                        <div className="CarouselBox">
                            {/* Aquivão as notícias, ainda não sei o farmato, 
                                por isso falta estilizar e deixei um exemplo.
                            */}
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