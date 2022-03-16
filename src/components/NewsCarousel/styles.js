import styled from "styled-components"
export const ContainerCarousel = styled.div`
    width:850px;
    display:flex;
    
    .Carousel{
        display:flex;
        flex-direction:column;
        width:800px;
        height:250px;
        font-size:15px;
        font-weight:600;
        border:none;
        border-radius:4px;
        color:var(--blue-2);
        background-color:var(--light-blue-1); 
    }
    
    
    /* margin:20px; */
    .CarouselBox,.Carousel{
        width:100%;
        height:250px;
    }
    .CarouselBox{
        display:flex;
    }
`