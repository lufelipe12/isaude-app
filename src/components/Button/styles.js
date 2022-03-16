import styled from "styled-components"

export  const ButtonStyled = styled.div`
    
    button{
        width:260px;
        height:38px;
        font-size:15px;
        font-weight:600;
        border:none;
        border-radius:4px;
    }
    button:hover{
        color:var(--blue-2);
        background-color:var(--light-blue-1);
    }

    .Primary{
        color:var(--light-blue-1);
        background-color:var(--blue-2);

    }
    .Secondary{
        color:#FFF;
        background-color:var(--green);
    }
    .Tertiary{
        color:#FFF;
        background-color:var(--orange);
    }
    
`