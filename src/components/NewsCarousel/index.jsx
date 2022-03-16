import Carousel from "react-material-ui-carousel"
import { CarouselCard } from "../CarouselCard"

export const NewsCarousel = () =>{

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
        <Carousel>
            {
                items.map( (item, i) => <CarouselCard key={i} item={item}/> )
            }
        </Carousel>
    )       
}