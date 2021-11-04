import styled from "styled-components"
import { NavLink } from "react-router-dom"


export const TopHeader=styled.header`
width: 100%;
min-height: 5rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem 5rem;
position: fixed;
top: 0;
left: 0;
background: transparent;
z-index: 10000;

`


 export const MyLogo =styled(NavLink)`
 text-transform: uppercase;
 flex: 1 1 10rem;
 text-decoration:none;
 font-size: 3rem;
 color: #000;
 font-weight: 800;
 text-shadow: #000;
 color: #fff;
 `
export const NavBar=styled.nav`
flex: 1 1 20rem;
display: flex;
align-items: center;
justify-content: flex-end;

`

export const HeaderLink=styled(NavLink)`
color: #000;
text-decoration: none;
margin-left:6rem;
font-size: 1.2rem;
font-weight: 500;
white-space: nowrap;
color: #fff;
text-shadow:0px 0px 10px #000;
`

