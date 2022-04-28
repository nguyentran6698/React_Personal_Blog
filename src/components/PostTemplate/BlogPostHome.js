import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import BasicPost from "./BasicPost";
import { devices } from "../../styled-components/size";
import { Link } from "react-router-dom";
import Loading from "../Loading";
const BlogPostHome = () => {
  const { blogs, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (blogs.length < 1) {
    return;
  }
  const leftPosts = blogs.slice(0, 2);
  const rightPosts = blogs.slice(2, 5);
  return (
    <Wrapper>
      <div className="title">
        <h3>New Posts</h3>
        <Link
          style={{
            fontSize: "0.85rem",
            marginTop: "1rem",
            textTransform: "capitalize",
            color: "var(--primary-700)",
          }}
          to="blogs"
        >
          see more
        </Link>
      </div>
      <div className="post-wrapper">
        <div className="newPostLeft">
          {leftPosts.map((post, id) => {
            return <BasicPost post={post} key={id} left={true} />;
          })}
        </div>
        <div className="newPostRight">
          {rightPosts.map((post, id) => {
            return <BasicPost post={post} key={id} left={false} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .title {
    display: flex;
    justify-content: space-between;
    color: var(--primary-700);
    a {
      align-self: center;
    }
  }
  .newPostLeft {
    display: grid;
    row-gap: 2.5rem;
  }
  .newPostRight {
    display: none;
  }
  @media ${devices.tabletM} {
    .post-wrapper {
      display: grid;
      grid-template-columns: 1fr 500px;
      column-gap: 2rem;
    }
    .newPostLeft {
      grid-template-columns: 1fr 1fr;
      column-gap: 1.2rem;
    }
    .newPostRight {
      display: block;
    }
  }
`;
export default BlogPostHome;