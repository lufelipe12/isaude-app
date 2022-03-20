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
        },
        {
            title: "Uso de máscaras",
            date: "10/03/2022",
            img:vaccine
        },
    ]
    let newArr=[]
    const newsPortions = () => {
        
        for (let i =0; i<=Math.floor(news.length/3); i++){
            newArr.push([]);
        }
        // let newArr=[]
        console.log(newArr)
        news.forEach((item,index)=>newArr[Math.floor(index/3)]?.push(item) )
        console.log(newArr)

        return(newArr)
    }
    newsPortions()
    console.log(newArr)

    return (
        <ContainerCarousel>
            {/* CointainerCarousel é apenas um componente de estilização */}
            <Carousel className="Carousel"
            // Coursel é o componente da biblioteca, next e prev fazem a troca automática
                next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
                prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }>
                {newArr.map((item)=><div className="CarouselBox">
                            {item.map((card,i)=><CarouselCard key={i} item={card}/>)}
                        </div>)}
                    
                
            </Carousel>
        </ContainerCarousel>
    )       
}