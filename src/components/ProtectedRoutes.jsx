import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sinup from "../pages/Signup";

const useAuth = () => {
  const user = localStorage.getItem("userToken");
  if (user) {
    return false;
  } else {
    return true;
  }
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return !isAuth ? <Navigate replace to="/login" /> : <Outlet />;
};

export default ProtectedRoutes;
