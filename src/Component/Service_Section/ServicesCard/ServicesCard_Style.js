import styled from "styled-components";
import {MdHomeWork} from "react-icons/md"

export const MyCard = styled.div`
width: 85%;
margin: auto;
min-height: 5rem;
padding: 2rem 1.5rem;
cursor: pointer;
transition: all 0.5s ease;
box-shadow: 5px 5px 10px rgba(20,20,20,0.3);
&:hover {
    box-shadow: 5px 5px 15px rgba(50,50,50,0.9);
    transition: all 0.5s ease;
}

`

export const MyCard_Title=styled.h3`
text-transform: uppercase;
`

export const MyCard_Contetn=styled.p`
width: 90%;
margin-top:1rem;
color: #444;
opacity: 0.6;

`


export const MyCard_Icon=styled.div`
color: #4a64cc;
font-size: 3rem;
margin-bottom:1rem ;

`
