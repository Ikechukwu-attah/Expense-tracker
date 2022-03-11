import React from "react";
import styled from "styled-components";

export const StyledText = styled.p`
  font-family: Nunito Sans;
  font-style: normal;
  display: ${({ displayInline }) => displayInline};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  /* padding-left: ${({ paddingLeft }) => paddingLeft}; */
`;
