import React from "react";
import { useGlobalContext } from "../context";
import { Navigate, useLocation } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const { userAuth } = useGlobalContext();
  const location = useLocation();
  console.log(userAuth);
  return userAuth ? (
    children
  ) : (
    <Navigate to="/auth/login" replace state={{ path: location.pathname }} />
  );
};

export default AuthProvider;
