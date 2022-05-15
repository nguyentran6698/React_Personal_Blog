import React from "react";
import { Outlet } from "react-router-dom";
const SharedAuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SharedAuthLayout;
