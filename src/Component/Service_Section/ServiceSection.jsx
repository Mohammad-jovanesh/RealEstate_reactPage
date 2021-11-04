import React,{useEffect,useState} from 'react'
import {ServicesSection
,ServicesSection_title
,ServicesSection_Grid
} from "./ServiceSection_Style.js"
import {ServicesCard} from "./ServicesCard/ServicesCard.jsx"
import {ServicesCardData} from "./ServicesCard/Services_Card_Data.js"
export const ServiceSection=()=>{
    const [Cardlist,SetCardList]=useState(null)
    useEffect(() => {
        SetCardList(ServicesCardData)
    }, []);
    return(
        <ServicesSection>
           <ServicesSection_title>Some Services Of Us</ServicesSection_title>
           <ServicesSection_Grid>
              {Cardlist&&Cardlist.map((card,index)=>{
                  return <ServicesCard  title={card.title} icon={card.icon}/>
              })}
               
               </ServicesSection_Grid>
        </ServicesSection>
    )
}
