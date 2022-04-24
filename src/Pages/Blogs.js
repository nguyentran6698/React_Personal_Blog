import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import BasicPost from "../components/PostTemplate/BasicPost";
const Blogs = () => {
  const { loading, blogs } = useGlobalContext();
  return (
    <Wrapper>
      <div className="title">
        <h3>All Posts</h3>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  .title {
    display: flex;
    justify-content: space-between;
    color: var(--primary-700);
  }
`;
export default Blogs;
