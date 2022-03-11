import styled from "styled-components";

export const StyledSmallCard = styled.div `
width: ${({width})=>width};
height: ${({height})=>height};
background-color:${({backgroundColor})=>backgroundColor};
box-shadow:${({boxShadow})=>boxShadow};
border-radius:${({borderRadius})=>borderRadius};
margin-top: ${({marginTop})=>marginTop};
padding:${({padding})=>padding};
margin-left:${({marginLeft})=>marginLeft};
position:${({position})=>position}
`