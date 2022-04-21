import React from "react";
import styled from "styled-components";
import imgSrc from "../img/404Page.png";
import { Link } from "react-router-dom";
import Button from "../styled-components/Button";
const ErrorPage = () => {
  return (
    <Wrapper>
      <img src={imgSrc} alt="" />
      <Button>
        <Link to="/">Back Home</Link>
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 550px;
  margin: 2rem auto;
  text-align: center;
  img {
    width: 100%;
  }
`;
export default ErrorPage;
