import React, { useState } from "react";
import Bigcard from "../../components/Bigcard";
import { StyledButton } from "../../components/common/Button";
import axios from "axios";

import { StyledLayout } from "../../components/common/Layout";
import Leftside from "../../components/Leftside";
import Navbar from "../../components/Navbar";
import { StyledText } from "../../components/common/Text";
import { StyledTextWrapper } from "../../components/common/TextWrapper";
import { StyledHeader } from "../../components/common/Header";
import { StyledContainer, StyledWrapper } from "./style";
import { StyledBigCard } from "../../components/Bigcard/style";
import {
  StyledInput,
  StyledLabel,
  StyledInputBody,
  StyledForm,
  StyledInputContainer,
  StyledInputWrapper,
  StyledInputLabelContainer,
} from "../../components/common/Input/style";
import { Link } from "react-router-dom";
import { StyledTitle } from "../../components/Leftside/style";

const Sinup = () => {
  const [signupData, setSignupData] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });

    console.log("data", signupData, name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/register`,
        signupData
      );
      console.log("sign up", response);
      setIsLoading(false);
      setIsSignedUp(true);
    } catch (error) {
      setIsLoading(setIsLoading);
    }
  };
  return (
    <StyledLayout>
      {isloading && "Signing you up ..."}
      <StyledContainer>
        <Navbar logo="assets/logo.svg" />
        <StyledWrapper>
          <Leftside
            Image="assets/Group 2.svg"
            title="Welcome! Let’s get to know you."
            desc="Your first step toward a better financial lifestyle starts here."
            color="#000000"
            fontSize="2.1rem"
            lineHeight="2.65rem"
            marginBottom="1.5rem"
            Text={
              <StyledTextWrapper
                flexDirection="column"
                alignItem="flex-start !important"
                margin="0px 0px 0px 0px"
              >
                <StyledTextWrapper gap="2ch">
                  <StyledTitle color="green">Welcome </StyledTitle>
                  <StyledTitle color="black">Let's get</StyledTitle>
                </StyledTextWrapper>
                <StyledTitle color="#000" margin="0px 0px 50px 0px">
                  to know you.
                </StyledTitle>
              </StyledTextWrapper>
            }
          />
          <StyledBigCard
            width="592px"
            height="635px"
            backgroundColor="#fff"
            boxShadow=" 0px 0px 10px rgba(0, 0, 0, 0.082937)"
            // padding="7.5rem 9.3rem 0 9.3rem"
            borderRaduis="0.6rem"
          >
            <StyledInputBody padding="7.5rem 9.3rem 0 9.3rem">
              {/* <StyledHeader fontSize="3.4rem" lineHeight="4.3rem" display>
                Holla
              </StyledHeader> */}

              {isSignedUp ? (
                <StyledTextWrapper flexDirection="column">
                  <StyledText fontSize="3rem" fontWeight="600">
                    Signed up successful
                  </StyledText>
                  <StyledText fontSize="2.5rem" fontWeight="600">
                    You can proceed to <Link to="/login">Login</Link>
                  </StyledText>
                </StyledTextWrapper>
              ) : (
                <StyledForm onSubmit={handleSubmit}>
                  <StyledInputContainer>
                    <StyledInputWrapper>
                      <StyledInputLabelContainer>
                        <StyledInput
                          type="text"
                          placeholder="Enter First Name"
                          name="firstname"
                          value={signupData.firstname}
                          onChange={handleChange}
                        />
                        <StyledLabel>First Name</StyledLabel>
                      </StyledInputLabelContainer>
                      <StyledInputLabelContainer>
                        <StyledInput
                          type="text"
                          placeholder="Enter Last Name"
                          name="lastname"
                          value={signupData.lastname}
                          onChange={handleChange}
                        />
                        <StyledLabel>Last Name</StyledLabel>
                      </StyledInputLabelContainer>
                    </StyledInputWrapper>
                    <StyledInputLabelContainer>
                      <StyledInput
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={signupData.email}
                        onChange={handleChange}
                      />
                      <StyledLabel>Email address</StyledLabel>
                    </StyledInputLabelContainer>
                    <StyledInputLabelContainer>
                      <StyledInput
                        type="Password"
                        placeholder="Enter Password"
                        name="password"
                        value={signupData.password}
                        onChange={handleChange}
                      />
                      <StyledLabel>Password</StyledLabel>
                    </StyledInputLabelContainer>
                    <StyledInputLabelContainer>
                      <StyledInput
                        type="Password"
                        placeholder="Confirm Password"
                        name="password_confirmation"
                        value={signupData.password_confirmation}
                        onChange={handleChange}
                      />
                      <StyledLabel>Confirm Password</StyledLabel>
                    </StyledInputLabelContainer>
                  </StyledInputContainer>
                  <StyledButton
                    width="100%"
                    height="5.7rem"
                    borderRadius="0.3rem"
                    boxShadow="0px 4px 10px rgba(118, 212, 45, 0.3)"
                    fontSize="1.6rem"
                    letterSpacing="0.06rem"
                    lineHeight="2rem"
                    fontWeight="900"
                  >
                    Sign Up
                  </StyledButton>
                </StyledForm>
              )}
              {!isSignedUp && (
                <StyledTextWrapper justifyContent="center" gap="1rem">
                  <StyledText
                    fontSize="1.6rem"
                    lineHeight="2.2rem"
                    color=""
                    display="flex"
                  >
                    Already have an account?
                  </StyledText>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <StyledText
                      color="#4DE897"
                      cursor="pointer"
                      fontSize="1.6rem"
                    >
                      Login Here
                    </StyledText>
                  </Link>
                </StyledTextWrapper>
              )}
            </StyledInputBody>
            {!isSignedUp && (
              <StyledTextWrapper justifyContent="center" gap="1rem">
                <StyledText
                  fontSize="1.6rem"
                  lineHeight="2.2rem"
                  color=""
                  display="flex"
                >
                  By clicking on SignUp, you agree to our
                </StyledText>
                <StyledText color="#4DE897" cursor="pointer" fontSize="1.6rem">
                  Terms & Conditions and Privacy Policy
                </StyledText>
              </StyledTextWrapper>
            )}
          </StyledBigCard>
        </StyledWrapper>
      </StyledContainer>
    </StyledLayout>
  );
};

export default Sinup;
