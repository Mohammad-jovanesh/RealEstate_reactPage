import styled,{css} from "styled-components/macro"
import { BsFillArrowRightSquareFill,BsArrowLeftSquareFill } from 'react-icons/bs';


export const HeroSection=styled.section`
width: 100%;
height: 100vh;

`

export const SlideWrapper=styled.div`
width: 100%;
height: 100%;
position: relative;

`


export const Slider=styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;

`

export const Button=styled.button`
position: absolute;
z-index: 111;
right: 10rem;
bottom: 5rem;
color: #fff;
font-size:3rem ;
`

export const SiledImage =styled.img`
animation: opacity 0.5s ease;
width: 100%;
height: 100%;
position: relative;
top: 0;
left: 0;
object-fit: cover;
object-position: center;
z-index: 1;

@keyframes  opacity {
from{
    opacity: 0;
}
to{
    opacity:1
}
}

`


export const OverLayer=styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(to top, rgba(0,0,0,0.3),rgba(0,0,0,0.6));
z-index: 20;
`

export const SlideContent=styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding-left: 10rem;
z-index: 30;
color: #fff;
font-size: clamp(1rem , 4vw, 2rem);

`

export const HouseTitleh=styled.h1`

animation: ShowText 0.5s ease;
@keyframes ShowText{
    from{
       opacity: 0;
       transform: translateX(-10vw);
    }
    to{
        opacity: 1;
       transform: translateX(-0);
    }
}
`

export const HousePrice =styled.h3`
margin-top: 1rem;
opacity: 0;
animation: ShowPriceText 0.5s ease 0.2s forwards;
@keyframes ShowPriceText{
    from{
       opacity: 0;
       transform: translateY(+10vw);
    }
    to{
        opacity: 1;
       transform: translateY(-0);
    }}

`
export const Navbtn=styled.div`
z-index: 100;
position: absolute;
bottom: 5rem;
right: 5rem;
display: flex;
align-items: center;
justify-content: center;
`
const IconStyle=css`

color: #fff;
font-size: clamp(1rem , 5vw,2rem);
cursor: pointer;
`
export const NextBtn =styled(BsFillArrowRightSquareFill)`
${IconStyle}
margin-left: 1rem;
`

export const PrevBtn=styled(BsArrowLeftSquareFill)`
${IconStyle}
`