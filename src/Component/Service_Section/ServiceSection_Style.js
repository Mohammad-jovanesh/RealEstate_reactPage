import styled from "styled-components"


export const ServicesSection =styled.section`
width: 100%;
height: 100vh;
position: relative;
padding: 5rem 4rem 2rem;
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
export const ServicesSection_title=styled.h1`
color: #444;
text-transform: uppercase;
text-shadow:1px 1px 5px rgba(0,0,0,0.2);
font-size:2rem;
`

export const ServicesSection_Grid=styled.div`
 display: grid;
 grid-gap: 2rem;
 grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
 grid-template-rows: repeat(1,1fr);
 margin-top:8rem ;

`