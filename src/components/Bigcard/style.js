import styled from "styled-components";


export const StyledBigCard = styled.div `
width: ${({width})=>width};
height: ${({height})=>height};
background-color:${({backgroundColor})=>backgroundColor};
box-shadow:${({boxShadow})=>boxShadow};
border-radius:${({borderRadius})=>borderRadius};
flex:1 ;

`