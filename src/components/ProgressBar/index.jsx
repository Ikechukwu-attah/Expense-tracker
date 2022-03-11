import React from "react";
import { StyledContainer } from "./style";
import { StyledText } from "../common/Text";
import { StyledHeader } from "../common/Header";
import { LinearProgress } from "@mui/material";
import { withStyles } from "@mui/styles";

const ProgressBar = () => {
  return (
    <StyledContainer>
      <StyledText fontSize="2.8rem" color="#30443C" lineHeight="3.5rem">
        Target Monthly Expenses
      </StyledText>
      <StyledHeader
        fontSize="2.8rem"
        color="#30443C"
        lineHeight="3.5rem"
        display="flex"
      >
        ₦596,000
      </StyledHeader>
      <div
        style={{
          padding: "0.1rem",
          background: "#EFEFEF",
          border: "none !important",
          width: "59%",
          borderRadius: "10px",
        }}
      >
        <LinearProgress
          color="success"
          variant="determinate"
          style={{ width: "20%", height: "7px", color: "#4DE897 !important" }}
        />
      </div>
    </StyledContainer>
  );
};

export default ProgressBar;
