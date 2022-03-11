import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { StyledLayout } from "../../components/common/Layout";
import Leftside from "../../components/Leftside";
import Navbar from "../../components/Navbar";
import { StyledContainer, StyledWrapper } from "./style";
import Bigcard from "../../components/Bigcard";
import { StyledBigCard } from "../../components/Bigcard/style";
import { StyledText } from "../../components/common/Text";
import { StyledTextWrapper } from "../../components/common/TextWrapper";
import { StyledButton } from "../../components/common/Button";
import { StyledHeader } from "../../components/common/Header";

import {
  StyledInput,
  StyledLabel,
  StyledInputBody,
  StyledForm,
  StyledInputContainer,
  StyledInputWrapper,
  StyledInputLabelContainer,
} from "../../components/common/Input/style";
import { ClassNames } from "@emotion/react";

const Login = () => {
  const check = "We miss you.";

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMesage] = useState();
  const handleLogin = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
    console.log("loginData", loginData);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/login`,
        loginData
      );
      setLoading(false);
      const { access_token } = response.data.success.user;
      localStorage.setItem("userToken", access_token);
      navigate("/dashboard");
    } catch (error) {
      setErrorMesage(error?.response?.data?.error?.message);
      setLoading(false);
    }
  };
  return (
    <StyledLayout>
      <StyledContainer>
        <Navbar logo="assets/logo.svg" />
        <StyledWrapper>
          <Leftside
            Image="assets/Group 1.svg"
            title={`Welcome back!  ${check}`}
            color="#000000"
            fontSize="2.1rem"
            lineHeight="2.65rem"
            // subTitle="We miss you."
            marginBottom="-10.5rem"
          />
          <StyledBigCard
            width="592px"
            height="max-content"
            backgroundColor="#fff"
            boxShadow=" 0px 0px 10px rgba(0, 0, 0, 0.082937)"
            // padding="7.5rem 9.3rem 0 9.3rem"
            borderRaduis="0.6rem"
          >
            <StyledInputBody padding="7.5rem 9.3rem 0 9.3rem">
              <StyledHeader fontSize="3.4rem" lineHeight="4.3rem" display>
                Holla
              </StyledHeader>
              <StyledText fontSize="2.5rem">Sign in to the vibe!</StyledText>
              {loading && (
                <StyledText fontSize="1.6rem">Sigining you in</StyledText>
              )}
              <StyledForm onSubmit={handleLoginSubmit}>
                <StyledInputContainer>
                  <StyledInputLabelContainer>
                    <StyledLabel>Email address</StyledLabel>
                    <StyledInput
                      type="email"
                      placeholder="jane_doe@gma"
                      name="email"
                      value={loginData.email}
                      onChange={handleLogin}
                    />
                  </StyledInputLabelContainer>
                  <StyledInputLabelContainer>
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput
                      type="Password"
                      placeholder="Enter Password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLogin}
                    />
                  </StyledInputLabelContainer>
                </StyledInputContainer>

                <StyledText fontSize="1.5rem" color="red" margin="1rem 0 0 0">
                  {errorMessage}
                </StyledText>
                <StyledButton
                  width="100%"
                  height="5.7rem"
                  borderRadius="0.3rem"
                  boxShadow="0px 4px 10px rgba(118, 212, 45, 0.3)"
                  fontSize="1.6rem"
                  letterSpacing="0.06rem"
                  lineHeight="2rem"
                >
                  LogIn
                </StyledButton>
              </StyledForm>
              <StyledTextWrapper justifyContent="center" gap="1rem">
                <StyledText
                  fontSize="1.6rem"
                  lineHeight="2.2rem"
                  color=""
                  display="flex"
                >
                  Don’t have an account?
                </StyledText>
                <StyledText color="#4DE897" cursor="pointer" fontSize="1.6rem">
                  Register Here?
                </StyledText>
              </StyledTextWrapper>
            </StyledInputBody>
            <StyledTextWrapper justifyContent="center" gap="1rem">
              <StyledText
                fontSize="1.6rem"
                lineHeight="1.6rem"
                color=""
                display="flex"
              >
                By clicking on Login, you agree to our
              </StyledText>
              <StyledText color="#4DE897" cursor="pointer" fontSize="1.6rem">
                Terms & Conditions and Privacy Policy
              </StyledText>
            </StyledTextWrapper>
          </StyledBigCard>
        </StyledWrapper>
      </StyledContainer>
    </StyledLayout>
  );
};

export default Login;
