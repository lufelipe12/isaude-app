import styled from "styled-components"

export const CarouselCardStyled=styled.div`
    width:295px;
    height:183px;
    font-size:15px;
    font-weight:600;
    border:none;
    border-radius:4px;
    color:var(--light-blue-1);
    background-image:url(${props=>props.img});
    margin:20px;
`