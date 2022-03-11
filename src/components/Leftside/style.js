import styled from 'styled-components'

export const StyledContainer = styled.div `
 display: flex;
 flex-direction:column ;
 justify-content:center ;
 align-items:center ;
 flex: 1;
`
export const StyledImage = styled.img ``
export const StyledTitle = styled.h1 `
  font-size: 4rem;
  line-height: 5.1rem;  
  color: ${({color})=>color};
  width: ${({width})=>width};
`
export const StyledDescription = styled.span `
  font-size: ${({fontSize})=>fontSize};
  line-height: ${({lineHeight})=>lineHeight};
  color: ${({color})=>color};
  margin-bottom:${({marginBottom})=>marginBottom} 
`