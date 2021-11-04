import React,{useState} from 'react';
import {SlidesData} from "./Hero_Data.js"
import {HeroSection,SlideWrapper,Slider,SiledImage,OverLayer,SlideContent
    ,HouseTitleh,HousePrice,NextBtn,PrevBtn,Navbtn} from "./HeroStyle.js"


export const Hero=()=>{
const [current,SetCurrent]=useState(0)
const Length=SlidesData.length
const NextPage =()=>{
    SetCurrent(prev=>{return (prev===Length-1?0:prev+1)})
}
const PrevPage =()=>{
    SetCurrent(prev=>{return (prev===0?Length-1:prev-1)})
}
console.log(current)
    return (
       <HeroSection>
           <SlideWrapper>
               {SlidesData.map((elm,index)=>{
                  return (current===index && (<Slider style={{background:`${elm.color}`}} key={index}>
                      <SiledImage src={elm.image}></SiledImage>
                      <OverLayer></OverLayer>
                      <SlideContent>
                         
                          <HouseTitleh>{elm.title}</HouseTitleh>
                           <HousePrice>{elm.price}</HousePrice>
               
                      </SlideContent>
                  </Slider> ))
               })}
               <Navbtn> 
               <PrevBtn onClick={PrevPage}></PrevBtn>
               <NextBtn onClick={NextPage}></NextBtn>
               </Navbtn>
              
               
           </SlideWrapper>
           
        </HeroSection>
    )
}