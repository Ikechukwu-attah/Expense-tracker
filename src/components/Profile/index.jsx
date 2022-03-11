import React from "react";
import {
  StyledContainer,
  StyledImageWrapper,
  StyledProfileImage,
  StyledProfileText,
  StyledProfileTextWrapper,
  StyledProfileWrapper,
} from "./style";
import { StyledHeader } from "../common/Header";
import { StyledText } from "../common/Text";

const Profile = ({ userData }) => {
  return (
    <StyledContainer>
      <StyledProfileWrapper>
        <StyledImageWrapper>
          <StyledProfileImage src="/assets/vector.svg" />
        </StyledImageWrapper>
        <StyledProfileTextWrapper>
          <StyledHeader
            fontSize="2.8rem"
            color="#30443C"
            lineHeight="3.5rem"
            display="flex"
          >
            {userData.firstname}
          </StyledHeader>
          <StyledProfileText>{userData.email}</StyledProfileText>
        </StyledProfileTextWrapper>
      </StyledProfileWrapper>
    </StyledContainer>
  );
};

export default Profile;
