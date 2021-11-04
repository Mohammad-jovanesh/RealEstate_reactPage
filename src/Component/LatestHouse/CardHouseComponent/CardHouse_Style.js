import styled,{css} from "styled-components";
import {BiBed} from "react-icons/bi"
import {MdOutlineBathtub} from "react-icons/md"
import {BiArea} from "react-icons/bi"

export const CardItem =styled.div`
width:70% ;
min-height: 10rem;
background: #fff;
box-shadow:1px 1px 5px #444;
margin: auto;
border: 1px solid #444;
cursor: pointer;
transition:transform 0.5s ease;
&:hover{
    transform: scale(1.05);
transition:transform 0.5s ease;
}
`
export const CardImage=styled.img`
width: 100%;
height: 20rem;
object-fit: cover;
object-position: center;

`
export const CardContent =styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 2rem  1.5rem;
`

export const CardPrice=styled.h2`
`

export const CardAddress=styled.h3`
margin-left: 0.2rem;
margin-top: 0.5rem;
color: #444;
opacity: 0.7;
`
export const CardDetails=styled.div`
width: 100%;
padding: 2rem 1.5rem;
border-top: 2px solid rgba(100,100,100,0.2);
display: flex;
align-items: center;
`
const CardDetails_Items=css`
display: flex;
align-items:center;
justify-content:center;
width: 100%;
height: 1rem;
`

export const Bed=styled.div`
${CardDetails_Items}
`

export const Bath=styled.div`
${CardDetails_Items}
`
export const Area=styled.div`
${CardDetails_Items}
`
export const CardDetails_icon=styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items:center;
p{
    font-size: 0.7rem;
    margin-top: 0.5rem;
    margin-left: 0.2rem;

}
`

export const Bed_icon=styled(BiBed)`

`
export const Bath_icon=styled(MdOutlineBathtub)`

`
export const Area_icon=styled(BiArea)`

`