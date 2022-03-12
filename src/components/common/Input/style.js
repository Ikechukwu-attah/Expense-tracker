import styled from "styled-components";

export const StyledInputLabelContainer = styled.div `
 display:flex ;
 flex-direction: column;
 width: 100%;
 position: relative;
 
`
export const StyledInput = styled.input `
 width: ${({width})=>width || "100%"};
 height:4rem;
 border-radius: 0.4rem;
 background-color:#fff;
 border:  1px solid #CAD0C9;
 padding-left:${({paddingLeft}) => paddingLeft || "1rem"};
 margin-bottom: 4rem;

 &:focus {
    
    outline: none;
    border-color: #4DE897;
;
};

 ::placeholder{
    font-family: Nunito Sans;
    font-style: italic;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #30443C;
    opacity: 0.5;
    padding-left:${({paddingLeft}) => paddingLeft || "1rem"};
 };
 
 


 
`

export const StyledLabel = styled.label `
  margin: 2rem 0rem 2rem 0rem;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #30443C;
  position: absolute;
  top: -4rem;
  ${StyledInput}:focus ~ & {
    
    color:  #4DE897;
;
  };

  

`

export const StyledInputBody = styled.div `
padding: ${({padding})=>padding};
`
export const StyledForm = styled.form ``

export const StyledInputContainer = styled.div `
display:flex ;
flex-direction:column ;

`

export const StyledInputWrapper = styled.div `
display: flex;
justify-content:${({justifyContent}) => justifyContent || "space-between"} ;
gap:4rem ;
align-items:flex-end ;
justify-self:${({justifySelf})=>justifySelf} ;
margin-bottom: ${({marginBottom})=>marginBottom};

`