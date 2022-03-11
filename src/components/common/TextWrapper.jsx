import styled from "styled-components";

export const StyledTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
`;
