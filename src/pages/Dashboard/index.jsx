import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { StyledLayout } from "../../components/common/Layout";
import {
  StyledContainer,
  StyledDashboardImage,
  StyledLeftContainer,
  StyledTextImageWrapper,
  StyledWrapper,
} from "./style";
import Navbar from "../../components/Navbar";
import { StyledBigCard } from "../../components/Bigcard/style";
import Profile from "../../components/Profile";
import ProgressBar from "../../components/ProgressBar";
import { StyledSmallCard } from "../../components/Smallcard/style";
import { StyledText } from "../../components/common/Text";
import DataTable from "../../components/Table/DataTable";
import { StyledTextWrapper } from "../../components/common/TextWrapper";
import {
  StyledForm,
  StyledInput,
  StyledInputBody,
  StyledInputLabelContainer,
  StyledLabel,
  StyledInputWrapper,
} from "../../components/common/Input/style";
import { StyledButton } from "../../components/common/Button";

const Dashboard = () => {
  const [isLoading, setisLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    const access_token = localStorage.getItem("userToken");
    setisLoading(true);

    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/base/profile`
    );
    setUserData(response.data.success.data);
    console.log("user data", response);
    try {
    } catch (error) {}
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <StyledLayout>
      <StyledContainer>
        <Navbar logo="/assets/logo.svg" />
        <StyledWrapper>
          <StyledLeftContainer>
            <Profile userData={userData} />
            <ProgressBar />
            <StyledSmallCard
              width="392px"
              height="405px"
              backgroundColor="#FFF"
              boxShadow=" 0px 0px 6px rgba(77, 232, 151, 0.19)"
              // padding="7.5rem 9.3rem 0 9.3rem"
              marginTop="4rem"
              borderRaduis="1rem"
            >
              <StyledText
                fontSize="1.4rem"
                lineHeight="1.8rem"
                color="#30443C"
                padding="2rem 0rem 0rem 2rem"
                // paddingLeft="2rem"
              >
                Daily Expenses Summary
              </StyledText>
              <DataTable />
            </StyledSmallCard>
          </StyledLeftContainer>

          <StyledBigCard
            width="700px"
            height="100vh"
            backgroundColor="#F2F3F7"
            boxShadow=" 0px 0px 10px rgba(0, 0, 0, 0.082937)"
            // padding="7.5rem 9.3rem 0 9.3rem"
            borderRaduis="0.6rem"
          >
            <StyledSmallCard
              width="800px"
              backgroundColor="#FFF"
              boxShadow="  0px 0px 10px rgba(0, 0, 0, 0.082937)"
              padding="1.5rem 1rem 3rem 1rem"
              position="relative"
              marginTop="3rem"
              marginLeft="5rem"
              borderRaduis="0.6rem"
            >
              <StyledTextWrapper gap="1rem">
                <StyledText
                  fontSize="3rem"
                  color="green"
                  fontWeight="900"
                  margin="0"
                >
                  Welcome back,
                </StyledText>
                <StyledText
                  fontSize="3rem"
                  color="#30443C"
                  fontWeight="900"
                  margin="0"
                >
                  {userData.firstname}
                </StyledText>
              </StyledTextWrapper>
              <StyledText
                fontSize="1.5rem"
                color="#30443C"
                lineHeight="1.8rem"
                margin="0.5rem"
              >
                Now, let’s get your expenses for this month
              </StyledText>

              <StyledDashboardImage src="/assets/last.svg" />
            </StyledSmallCard>
            <StyledInputBody padding="7.5rem 9.3rem 0 9.3rem">
              <StyledForm>
                <StyledContainer>
                  <StyledInputLabelContainer>
                    <StyledLabel>Target Monthly Expenses</StyledLabel>
                    <StyledInput
                      type="text"
                      placeholder="596,000"
                      width="70%"
                    />
                  </StyledInputLabelContainer>
                  <StyledInputLabelContainer>
                    <StyledLabel>Date</StyledLabel>
                    <StyledInput
                      type="text"
                      width="70%"
                      placeholder="08/08/2019"
                    />
                  </StyledInputLabelContainer>

                  <StyledInputWrapper marginBottom="3rem">
                    <StyledInputLabelContainer>
                      <StyledLabel>Today’s Expenses</StyledLabel>
                      <StyledInput type="text" placeholder="Pizza" />
                    </StyledInputLabelContainer>

                    <StyledInputLabelContainer>
                      {/* <StyledLabel>Last Name</StyledLabel> */}
                      <StyledInput type="number" placeholder="10,000" />
                    </StyledInputLabelContainer>
                  </StyledInputWrapper>

                  <StyledInputWrapper marginBottom="3rem">
                    <StyledInputLabelContainer>
                      <StyledInput type="text" placeholder="Textbook" />
                    </StyledInputLabelContainer>
                    <StyledInputLabelContainer>
                      <StyledInput
                        type="number"
                        placeholder="Enter Last Name"
                      />
                    </StyledInputLabelContainer>
                  </StyledInputWrapper>

                  <StyledInputWrapper marginBottom="3rem">
                    <StyledInputLabelContainer>
                      <StyledInput type="text" placeholder="Tuition Fee" />
                    </StyledInputLabelContainer>
                    <StyledInputLabelContainer>
                      <StyledInput type="number" placeholder="2000" />
                    </StyledInputLabelContainer>
                  </StyledInputWrapper>
                  <StyledTextWrapper justifyContent="flex-end" gap="1rem">
                    <StyledText fontSize="1.7rem" color="#000" fontWeight="900">
                      Total Actual Expenses: ₦
                    </StyledText>
                    <StyledInput
                      type="number"
                      width="25%"
                      placeholder="40000"
                    />
                  </StyledTextWrapper>
                  <StyledTextWrapper justifyContent="center">
                    <StyledButton
                      padding="1.5rem"
                      borderRadius="1.5rem"
                      border="2.5px solid #fff"
                      fontSize="1.6rem"
                      fontWeight="700"
                      marginBottom="3rem"
                    >
                      SAVE TODAY’S EXPENSES
                    </StyledButton>
                  </StyledTextWrapper>
                </StyledContainer>
              </StyledForm>
            </StyledInputBody>
          </StyledBigCard>
        </StyledWrapper>
      </StyledContainer>
    </StyledLayout>
  );
};

export default Dashboard;
