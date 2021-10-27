import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header=()=>{
    return(
        <div>
             <header>
                 <div>Logo</div>
                 <nav>
                     <ul>
                         <li><NavLink to="/" exact>Home</NavLink></li>
                         <li><NavLink to="/works">Works</NavLink></li>   
                         <li><NavLink to="/aboutme">AboutMe</NavLink></li>  
                         <li><NavLink to="/contact">Contact</NavLink></li>  
                     </ul>
                 </nav>
             </header>
        </div>
    )
}