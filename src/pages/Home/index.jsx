import React from "react";
import { StyledContainer } from "./style";
import Navbar from "../../components/Navbar";
import Layout, { StyledLayout } from "../../components/common/Layout";
import Leftside from "../../components/Leftside";
import { StyledCenterItems } from "../../components/common/CenterItems";
import { StyledTitle } from "../../components/Leftside/style";
import { StyledTextWrapper } from "../../components/common/TextWrapper";

const Home = () => {
  return (
    <StyledLayout>
      <StyledContainer>
        <Navbar logo="assets/logo.svg" login="Log in" signup="sign up" />
      </StyledContainer>
      <StyledCenterItems>
        <Leftside
          Image="assets/Group 2.svg"
          title="Fundall Expense Tracker"
          desc="Mini Project Frontend"
          color="#000000"
          fontSize="4rem"
          lineHeight="5.1rem"
          Text={
            <StyledTextWrapper
              flexDirection="column"
              gap="0px"
              margin="0px 0px 0px 0px"
            >
              <StyledTitle color="#000">Fundall Expense Tracker</StyledTitle>
            </StyledTextWrapper>
          }
        />
      </StyledCenterItems>
    </StyledLayout>
  );
};

export default Home;
