import styled,{css} from "styled-components"


const SpanStyle = css`
position: absolute;
background: #444;
width: 50%;
height: 10px;
right: 0;
`
export const Bar =styled.div`
width: 3rem;
height: 3rem;
background: red;
position: relative;
`
export const SpanOne =styled.span`
${SpanStyle}
top:30%;
width: 30%;
left: 60%;
transform: rotateZ(45deg) translateY(-50%);

`
export const SpanTwo =styled.span`
${SpanStyle}
top: 50%;
transform: rotateZ(45deg) translateY(-50%);
width: 70%;
`


export const SpanThree =styled.span`
${SpanStyle}

bottom: 50%;


transform: rotateZ(-45deg) translateY(50%);
width: 100%;

`