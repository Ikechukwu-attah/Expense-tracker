import React from "react";
import { StyledCenterItems } from "../common/CenterItems";
import { StyledTextWrapper } from "../common/TextWrapper";
import {
  StyledTitle,
  StyledImage,
  StyledDescription,
  StyledContainer,
} from "./style";

const Leftside = ({
  Image,
  title,
  desc,
  color,
  fontSize,
  lineHeight,
  subTitle,
  marginBottom,
  Text,
}) => {
  return (
    <StyledContainer>
      <StyledImage src={Image} />
      {Text}
      <StyledDescription
        color={color}
        fontSize={fontSize}
        lineHeight={lineHeight}
        marginBottom={marginBottom}
      >
        {desc}
      </StyledDescription>
    </StyledContainer>
  );
};

export default Leftside;
