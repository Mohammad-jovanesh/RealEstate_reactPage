import styled from "styled-components"


export const ServicesSection =styled.section`
width: 100%;
height: 100vh;
position: relative;
&::after{
    position: absolute;
    content: "";
    width: 80%;
    top:0;
    left:10%;
    height: 3px;
    background: #f1f1f1;
    border-radius: 1rem;
    
}
`