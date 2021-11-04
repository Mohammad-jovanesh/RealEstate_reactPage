import React from 'react';
import {GlobalStyle} from "./GlobalStyle.js"
import {Header} from "./Component/Header/Haeder.jsx"
import {Hero} from "./Component/Hero/Hero.jsx"
import {LatestHouse} from "./Component/LatestHouse/LatestHouse.jsx"
import {BestPrice} from "./Component/BestPriceSection/BestPrice.jsx"
import {ServiceSection} from "./Component/Service_Section/ServiceSection.jsx"
export const App=()=>{
    return(
        <>
        <GlobalStyle/>
        <Header></Header>
        <Hero></Hero>
        <LatestHouse />
        <BestPrice />
        <ServiceSection />
        </>
         
        
    )
}