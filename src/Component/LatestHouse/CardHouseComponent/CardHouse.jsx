import React from 'react'
import {CardItem,CardImage,CardContent,CardPrice,CardAddress,CardDetails,
    CardDetails_icon,Bed,Bath,Area,Bed_icon,Bath_icon,Area_icon} from "./CardHouse_Style.js"

export const CardHouse=({cardimage,price,Address,BedRoom,BathRoom,LivingArea})=>{
   
    return(
        <CardItem>
             <CardImage src={cardimage}></CardImage>
             <CardContent>
                   <CardPrice>{price}</CardPrice>
                   <CardAddress>{Address}</CardAddress>
              </CardContent>
              <CardDetails>
             < CardDetails_icon  >
                <Bed>
                    <Bed_icon />
                    <span>{BedRoom}</span>
                </Bed>
                <p>BedRoom</p>
             </CardDetails_icon>
               <CardDetails_icon>
                <Bath>
                <Bath_icon />
                <span>{BathRoom}</span>
                </Bath>
                <p>BathRoom</p>
                </CardDetails_icon>
                <CardDetails_icon>
                <Area>
                <Area_icon />
                <span>{LivingArea} mm<sup>2</sup></span>
                </Area>
                <p>LivingArea</p>
                </CardDetails_icon>

              </CardDetails>
        </CardItem>
    )
}