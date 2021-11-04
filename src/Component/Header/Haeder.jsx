import React,{useEffect,useState}from 'react';
import {TopHeader,MyLogo,NavBar,HeaderLink,TopHeader_Scroll} from "./Header.js"
import {navkinks_Data} from "./navLink_data.js"
import {NavLink} from "react-router-dom"
import {BarBtn} from "../Bar_Btn/BatBtn.jsx"

export const Header=()=>{
  const [headerChange,setHeaderChange]=useState(false)
  useEffect(()=>{
     window.addEventListener("scroll",(e)=>{
         console.log()
         if(window.scrollY>100){
          setHeaderChange(true)
         }
         if(window.scrollY<100){
          setHeaderChange(false)
         }
     })
  },[])
    return (
      <>     
      <TopHeader ScrollEffect={headerChange}>
            <MyLogo to="/" ScrollEffect={headerChange}>
                MP
            </MyLogo>
            <NavBar>
              {navkinks_Data.map((Elm,Index)=>{return(<HeaderLink  ScrollEffect={headerChange} to={Elm.path}  key={Index}>{Elm.title}
              
              
               </HeaderLink>)})}
               
            </NavBar>  
      </TopHeader>
      </>
    )
}