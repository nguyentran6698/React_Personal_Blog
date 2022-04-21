import React from "react";
import { Outlet } from "react-router-dom";

const SharedBlogLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SharedBlogLayout;
