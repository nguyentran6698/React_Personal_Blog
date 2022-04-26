import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h2>This is a footer</h2>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--secondary-500);
  width: 100%;
  height: 250px;
  text-align: center;
`;
export default Footer;
