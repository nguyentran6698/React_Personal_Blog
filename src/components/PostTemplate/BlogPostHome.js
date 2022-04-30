import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import BasicPost from "./BasicPost";
import { devices } from "../../styled-components/size";
import { Link } from "react-router-dom";
import Loading from "../Loading";
const BlogPostHome = () => {
  const { blogs, loading, setQuery } = useGlobalContext();
  useEffect(() => {
    setQuery("http://localhost:3000/posts");
  }, []);
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
    row-gap: 2rem;
  }
  .newPostRight {
    display: none;
  }
  @media ${devices.tabletM} {
    .post-wrapper {
      display: grid;
      grid-template-columns: 1fr 300px;
      column-gap: 3rem;
    }
    .newPostLeft {
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;
      .post-container {
        margin: 0;
        gap: 0;
      }
      .img-container {
        height: 290px;
      }
    }
    .newPostRight {
      display: block;
      .post-container {
        padding-bottom: 0.3rem;
        border-bottom: 1px solid var(--grey-clr);
      }
    }
  }
`;
export default BlogPostHome;
