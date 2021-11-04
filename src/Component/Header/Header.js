import styled,{css} from "styled-components/macro"
import { NavLink } from "react-router-dom"

const StyledShared=css`
width: 100%;
min-height: 5rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem 5rem;
position: fixed;
top: 0;
left: 0;

z-index: 10000;
transition: all 0.5s ease;
`
export const TopHeader=styled.header`
${
    StyledShared
}
background:${prop=>prop.ScrollEffect?"#f1f1f1":"transparet"};
transition: all 0.5s ease;

`

// export const TopHeader_Scroll=styled.header`
// ${StyledShared}


// `
 export const MyLogo =styled(NavLink)`
 text-transform: uppercase;
 flex: 1 1 10rem;
 text-decoration:none;
 font-size: 3rem;
 color:${prop=>prop.ScrollEffect?"#000":"#fff"};
 font-weight: 800;
 text-shadow: #000;
 transition: color 0.5s ease;

 `
export const NavBar=styled.nav`
flex: 1 1 20rem;
display: flex;
align-items: center;
justify-content: flex-end;

`

export const HeaderLink=styled(NavLink)`

text-decoration: none;
margin-left:6rem;
font-size: 1.2rem;
font-weight: 500;
white-space: nowrap;
color:${prop=>prop.ScrollEffect?"#000":"#fff"};
text-shadow:0px 0px 10px ${prop=>prop.ScrollEffect?"#fff":"#000"};
transition: color 0.5s ease;
`

