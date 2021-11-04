import React from 'react'
import {MyCard,MyCard_Title,MyCard_Contetn,MyCard_Icon} from "./ServicesCard_Style.js"


export const ServicesCard=({title,icon})=>{


    return (
       <MyCard>
        
            <MyCard_Icon>{icon}</MyCard_Icon>
            <MyCard_Title>{title}</MyCard_Title>
            <MyCard_Contetn> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</MyCard_Contetn>
       </MyCard>
    )
}