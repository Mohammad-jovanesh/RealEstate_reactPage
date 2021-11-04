import React,{useEffect,useState} from 'react'
import {LatestHouseContent,HomeIcon,LatestPropety,LatestPropety_options,LatestHouseSection,CardHouse_Grid,Bnt_ShowMore} from "./LatestHouse_Style.js"
import {CardHouse} from "./CardHouseComponent/CardHouse.jsx"
import {HouseListData} from "./CardHouseComponent/CardHouse_DataBase.js"

export const LatestHouse=()=>{
    const [listcard,SetListCard]=useState([])
    const [display,SetDisplay]=useState(true)
   useEffect(() => {
    const listLength=HouseListData.length
    SetListCard(HouseListData.slice(0,3))
 
    
   }, []);
   useEffect(() => {
      console.log(HouseListData.length)
      console.log(listcard.length)
      if(HouseListData.length===listcard.length){
        SetDisplay(false)
      }
   }, [listcard]);
   const ShowMore=()=>{
    SetListCard(prev=>[...prev,...HouseListData.slice(3.0)])
  
   }
    return(
        <LatestHouseSection>
        <LatestHouseContent>
            <LatestPropety>
                <HomeIcon></HomeIcon>
                <h1>latest Propety for Sale</h1>
            </LatestPropety>
            <LatestPropety_options>
                <h2>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Duis non vestibulum libero. 
                    Nullam finibus at nibh ac pellentesque. Nam diam lectus, 
                    maximus vitae blandit ut, consequat id eros. 
                    Suspendisse dictum urna ut eleifend pretium</h2>
            </LatestPropety_options>
        </LatestHouseContent>
         <CardHouse_Grid>
             {listcard&&listcard.map((card,index)=>{return( <CardHouse 
             cardimage={card.image} 
             key={index} 
             Address={card.address} 
             price={card.price} 
             BedRoom={card.Bedroom} 
             BathRoom={card.bathroom} 
             LivingArea={card.LivingArea}/>)})}
         </CardHouse_Grid>
         {display&&<Bnt_ShowMore onClick={ShowMore}>LoadMore</Bnt_ShowMore>}
        </LatestHouseSection>
    )
}