import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
const SharedLayoutPage = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section``;
export default SharedLayoutPage;
