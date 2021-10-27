
import styled from "styled-components"


export const Logo=styled.a`
color:#000;
font-size:2rem;
font-weight:800;
flex:1 1 30%;
`

export const Topheader=styled.header`
display:flex;
width:100%;
min-height:5rem;
align-items:center;
justify-content:space-between;
padding:.2rem 3rem;
z-index: 100;

`
export const Nav=styled.nav`
flex:1 1 60%;


`

export const Navbar=styled.ul`
list-style:none;
display: flex;
align-items: center;
justify-content: space-between;
padding-right: 2rem;
a{
    text-decoration: none;
    color: #444;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem;

    
}
.Active_Link {
    background: linear-gradient(to top left ,rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.5));
    border-radius: .5rem;
    transition: background 0.5s ease;
    
}
`
