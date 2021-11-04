import styled,{css} from "styled-components"
import {BiBed} from "react-icons/bi"
import {BiArea} from "react-icons/bi"
export const BestPriceSection =styled.section`
width: 100%;
height: 100vh;

padding: 10rem 2rem;
`
export const BestPriceTop =styled.div`
width: 100%;
min-height: 15rem;
display: flex;
align-items: flex-start;
justify-content: center;
padding: 1rem 5rem;
`


export const BestPriceTop_Image=styled.img`
flex:1 1  20%;
`
export const BestPriceTop_Content=styled.div`
flex:1 1 50%;


padding: 7.2rem 5rem 0.5rem;
h1{
    font-size: 3rem;text-transform:uppercase;
    margin-bottom:1rem ;
}
h3{
    text-align:justify;
    width: 80%;
    font-size: 1rem;
    color: #444;
    opacity: 0.6;
}
`

export const BestPriceTop_Icons=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
`
const style_icon_bestPrice=css`
display: flex;
align-items: center;
justify-content: center;
margin-top: 3rem;
`
export const Bed_area=styled.div`
${style_icon_bestPrice}
`
export const AreaValue=styled.div`
display: flex;
align-items: flex-start;

`
export const BedValue=styled.div`
display: flex;
align-items: center;

`
export const Area_area =styled.div`
${style_icon_bestPrice}

h3{
    white-space: nowrap;
    margin-top: 0.5rem;
}
`

export const Bed_icon=styled(BiBed)`
font-size: 4rem;
margin-right: 1rem;


`
export const Area_icon=styled(BiArea)`
font-size: 4rem;
margin-right: 1rem;

`
export const AreaContent=styled.div`


`