import React from "react";
import { StyledNavbar, StyledLogo, StyledMenu, StyledAuth } from "./style";
import { Link } from "react-router-dom";

const Navbar = ({ logo, login, signup }) => {
  return (
    <StyledNavbar>
      <StyledLogo src={logo} />
      <StyledMenu showlogo={login}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <StyledAuth>{login}</StyledAuth>
        </Link>
        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          <StyledAuth>{signup}</StyledAuth>
        </Link>
      </StyledMenu>
    </StyledNavbar>
  );
};

export default Navbar;
