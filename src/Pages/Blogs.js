import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import BasicPost from "../components/PostTemplate/BasicPost";
const Blogs = () => {
  const { loading, blogs } = useGlobalContext();
  return (
    <Wrapper>
      <div className="blogs-container"></div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1450px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;
export default Blogs;
