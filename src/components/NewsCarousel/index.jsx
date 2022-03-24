import Carousel from "react-material-ui-carousel"
import { CarouselCard } from "../CarouselCard"
import { ContainerCarousel } from "./styles"
import covid from "../../assets/21-3-2022-17-30-18.jpg"
import vaccine from "../../assets/secretaria-de-saude.jpeg"
import tranmition from "../../assets/ministro.jpg"
import diabetes from "../../assets/diabetes-glicemia-glicose-17032022183012613.jpeg"
import peopleEurope from "../../assets/peopleEurope.jpg"
import seteEstados from "../../assets/seteEstados.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"

export const NewsCarousel = () =>{
    // Lista de itens, que sera substituida por uma lista de notícias.
    let news = [
        {
            title: "Palmas terá vacinação em feira coberta",
            date: "22/03/2022",
            img:covid,
            url:"https://g1.globo.com/to/tocantins/noticia/2022/03/22/palmas-tera-vacinacao-contra-a-covid-em-feira-coberta-e-na-uft-veja-programacao.ghtml"
        },
        {
            title: "Petrolina Registra duas mortes por covid",
            date: "22/03/2022",
            img:vaccine,
            url:"https://g1.globo.com/pe/petrolina-regiao/noticia/2022/03/22/petrolina-registra-duas-mortes-por-covid-19-numero-de-novos-casos-e-o-menor-desde-outubro-de-2021.ghtml"
        
        },
        {
            title: "Brasil iniciará 4 dose da vacina",
            date: "22/03/2022",
            img:tranmition,
            url:"https://www.nsctotal.com.br/noticias/brasil-deve-indicar-4a-dose-contra-covid-para-maiores-de-80-anos-ainda-nesta-semana"
        
        },
        {
            title: "Entenda como uma pessoa saudável pode desenvolver diabetes pós-Covid",
            date: "21/03/2022",
            img:diabetes,
            url:"https://noticias.r7.com/saude/entenda-como-uma-pessoa-saudavel-pode-desenvolver-diabetes-pos-covid-21032022"
        
        },
        {
            title: "Países que acabaram com as restrições contra a covid",
            date: "19/03/2022",
            img:peopleEurope,
            url:"https://www.bbc.com/portuguese/internacional-60793953"
        
        },
        {
            title: "Sete estados que aplicam a dose 4 de covid",
            date: "21/03/2022",
            img:seteEstados,
            url:"https://www.cnnbrasil.com.br/saude/estados-aplicam-quarta-dose-contra-a-covid-19-no-publico-geral/"
        
        }
    ]

    let newArr=[]
    const newsPortions = () => {
        
        for (let i =0; i<Math.floor(news.length/3); i++){
            newArr.push([]);
        }
        news.forEach((item,index)=>newArr[Math.floor(index/3)]?.push(item) )
        return(newArr)
    }
    newsPortions()

    return (
        <ContainerCarousel>
            <Carousel className="Carousel">
    
                {window.matchMedia("(min-width:600px)").matches?
                    newArr.map((item,index)=>
                        <div className="CarouselBox">
                            {item.map((card,i)=><a href={card.url}><CarouselCard key={i} item={card}/></a>)}
                        </div>)
                    :
                    news.map((item, i)=>
                        <div className="CarouselBox">
                            <a href={item.url}><CarouselCard key={i} item={item}/></a>
                        </div>)
                        
                 }
            </Carousel>
        </ContainerCarousel>
    )       
}
