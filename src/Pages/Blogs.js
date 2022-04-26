import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import BasicPost from "../components/PostTemplate/BasicPost";
import { devices } from "../styled-components/size";
const Blogs = () => {
  const { loading, blogs, setQuery } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  const newestPost = blogs[0];
  const newBlogs = blogs.slice(1);

  return (
    <Wrapper>
      <div className="blogs-container">
        <div className="blog-header">
          <BasicPost post={newestPost} left={true} />
        </div>
        <div className="blog-post-section">
          {newBlogs.map((blog, id) => {
            return <BasicPost post={blog} key={id} left={true} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  .blogs-container {
    padding: 2rem 1.5rem;
    .blog-header {
      margin: 2rem 0 3.5rem 0;
      .post-container {
        column-gap:1.2rem;
        grid-template-columns: 1fr;
      }
      .img-container {
        max-height: 300px;
      }
    }
    .blog-post-section {
      
      display: grid;
      margin:0 auto;
      gap: 1rem;
      .post-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  @media ${devices.tabletM} {
    .blog-header {
      .post-container {
        grid-template-columns:550px 1fr !important;
      }
    
      .content-container {
        h3 {
          font-size: 2.7rem;
          max-width: 430px;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.1rem;
          max-width: 500px;
          margin-bottom: 1rem;
        }
        .read-btn {
          font-size: 1.1rem;
        }
      }
    }
    .blog-post-section{
      grid-template-columns: 1fr 1fr;
    }
  }
    @media ${devices.tabletL} {
      .blog-header {
        .img-container {
          max-height: 400px !important;
        }
      }
    }
  }
`;
export default Blogs;
