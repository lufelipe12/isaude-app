import styled from "styled-components"

export const Container = styled.div`
    section{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
    }
    
    .BeginSection{
        padding:200px;
        justify-content:space-around;
        height:calc(100vh - 100px);
        background-color:var(--dark-blue);
        color:#FFF;
        font-size:36px;
        font-weight:700;
        p{
            margin:50px
        }
        button{
            width:140px
        }
    }
    
    .CarouselSection{
        height:600px;
        background-color:var(--light-blue-2);
    }
`