import React from "react";
import styled from "styled-components";


export const StyledButton = styled.button `
width: ${({width})=>width};
height:${({height})=>height} ;
color: #000000;
border: ${({border})=>border || "none"};
background-color:#4DE897;
box-shadow:${({boxShadow})=>boxShadow};
border-radius:${({borderRadius})=>borderRadius};
font-size: ${({fontSize})=>fontSize};
line-height: ${({lineHeight})=>lineHeight};
text-align: center;
letter-spacing: ${({letterSpacing})=>letterSpacing};
margin-top: 2.5rem;
padding: ${({padding})=>padding} ;
cursor: pointer ;
text-transform: uppercase;
font-weight:${({fontWeight})=>fontWeight} ;
margin-bottom:${({marginBottom})=>marginBottom}

`