import styled from "styled-components"
import {SiHomebridge} from "react-icons/si"
export const LatestHouseContent=styled.div`
width:100%;
min-height: 10rem;
padding: 1rem 2rem;
display: flex;
align-items: center;
justify-content: center;
`
export const LatestPropety=styled.div`
flex:1 1 50%;
display: flex;
align-items: center;
justify-content:flex-start;

h1{
    text-transform: uppercase;
    width: 50%;
    margin-left: 2rem;
}

`
export const LatestPropety_options=styled.div`
flex:1 1 50%;

border-left:2px solid #444 ;
padding: 0.5rem 1.5rem;

h2{
    font-size: clamp(1rem,1.5vw,1.2rem);
    color: #444;
    opacity: 0.5;
    text-align:justify;
}
`

export const LatestHouseSection=styled.div`
width: 100%;
min-height: 100vh;
padding: 3rem 2rem;
`

export const CardHouse_Grid =styled.div`
width: 100%;
min-height: 30rem;
display: grid;
grid-gap: 2rem;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(1,1fr);
margin-top: 5rem;
margin-bottom:3rem ;
`

export const HomeIcon=styled(SiHomebridge)`
color: #fff;
font-size: 4rem;
background: linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%);
border-radius: 50%;
font-weight: 800;
border: 2px solid #444;
`

export const Bnt_ShowMore =styled.div`
cursor: pointer;
width: 10rem;
min-height: 3rem;
background: #548668;
margin-left:auto ;
margin-right:auto ;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.3rem;

`