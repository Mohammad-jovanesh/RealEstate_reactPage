import React from 'react';
import { NavLink } from 'react-router-dom';
import {Logo,Topheader,Nav,Navbar} from "./Header.js"
export const Header=()=>{
    return(
        <div>
             <Topheader>
                 <Logo>MP</Logo>
                 <Nav>
                     <Navbar>
                         <li><NavLink to="/" exact activeClassName="Active_Link">Home</NavLink></li>
                         <li><NavLink to="/works" activeClassName="Active_Link">Works</NavLink></li>   
                         <li><NavLink to="/aboutme" activeClassName="Active_Link">AboutMe</NavLink></li>  
                         <li><NavLink to="/contact" activeClassName="Active_Link">Contact</NavLink></li>  
                     </Navbar>
                 </Nav>
             </Topheader>
        </div>
    )
}