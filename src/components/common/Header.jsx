import styled from "styled-components";

export const StyledHeader = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  display: ${({ display }) => (display ? "flex" : "none")};
  line-height: ${({ lineHeight }) => lineHeight};
`;
