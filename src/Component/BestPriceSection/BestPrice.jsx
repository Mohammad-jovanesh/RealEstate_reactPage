import React from 'react'
import {BestPriceSection,
    BestPriceTop,
    BestPriceTop_Image
    ,BestPriceTop_Content,
    BestPriceTop_Icons,
    Bed_icon,
    Bed_area,
    Area_icon,
    Area_area,
    AreaValue,
    BedValue,AreaContent,
    BestPrice_More,
    SeeMoreArrow} from "./BestPrice_Style.js"
import  bestImage from "../../Image/BestPrice/BestPrice.png"


export const BestPrice=()=>{
    return (
        <BestPriceSection>
            <BestPriceTop>
                <BestPriceTop_Image src={bestImage}></BestPriceTop_Image>
                <BestPriceTop_Content>
                   <h1>Best Price Home !! &#x1f525; </h1>
                   <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Cras in vehicula felis. Integer nec faucibus arcu. 
                       Praesent euismod tempor diam. Suspendisse consequat 
                       fringilla imperdiet. Praesent commodo sem vitae quam 
                       tristique aliquet nec non dolor. Quisque posuere lacinia 
                       condimentum. Aenean urna elit, ullamcorper et leo at, 
                       ullamcorper feugiat urna. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.</h3>
                    <BestPriceTop_Icons>
                           <Bed_area>
                            
                               
                               <Bed_icon/>
                               <AreaContent>
                               <BedValue><h2>80</h2><p>mm<sup>2</sup></p></BedValue>
                               <h3>Bedroom</h3>
                               </AreaContent>
                              
                                
                                   
                                 
                           </Bed_area>
                           <Area_area>
                               <Area_icon/>
                               
                               
                               
                                <AreaContent>
                                <AreaValue> <h2>80</h2><p>mm<sup>2</sup></p></AreaValue>
                                       <h3 >Living Area</h3>
                                </AreaContent>
                           </Area_area>
                           
                    </BestPriceTop_Icons>
                    <BestPrice_More>See more details <SeeMoreArrow></SeeMoreArrow></BestPrice_More>
                </BestPriceTop_Content> 
            </BestPriceTop>
        </BestPriceSection>
    )
}