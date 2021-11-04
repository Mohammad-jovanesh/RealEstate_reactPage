import React from 'react';
import {TopHeader,MyLogo,NavBar,HeaderLink} from "./Header.js"
import {navkinks_Data} from "./navLink_data.js"
import {NavLink} from "react-router-dom"
import {BarBtn} from "../Bar_Btn/BatBtn.jsx"

export const Header=()=>{
    return (
      <TopHeader>
            <MyLogo to="/">
                MP
            </MyLogo>
            <NavBar>
              {navkinks_Data.map((Elm,Index)=>{return(<HeaderLink to={Elm.path}  key={Index}>{Elm.title}
              
              
               </HeaderLink>)})}
               
            </NavBar>  
      </TopHeader>
    )
}