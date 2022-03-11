import styled from 'styled-components'




export const StyledNavbar = styled.nav `
  display:flex ;
  align-items:center ;
  justify-content:space-between ;
`

export const StyledLogo = styled.img ``

export const StyledMenu = styled.div `
  display: ${({showlogo})=>showlogo?"flex":"none"};
  gap: 2rem;
`
export const StyledAuth = styled.span `
   width: 98px;
   height: 42px;
   font-size: 1.8rem;
   line-height: 2.3rem;
   color: #000000;
   border-radius: 1rem;
   cursor: pointer;
   text-transform:uppercase;
   display: flex;
   align-items:center ;
   justify-content:center ;
   font-weight:bold ;

   &:hover{
       background-color: #4CE895;

   }
`