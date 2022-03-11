import React from "react";
import styled from "styled-components";

const Layout = () => {
  return <StyledLayout></StyledLayout>;
};

export default Layout;

export const StyledLayout = styled.div`
  padding: 2rem 8rem 2rem 8rem;
  background-color: #fcfbfc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
  height: ${({ height }) => height || "100vh"};
  /* border-radius: 4rem; */
`;
