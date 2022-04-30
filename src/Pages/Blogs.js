import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import BasicPost from "../components/PostTemplate/BasicPost";
import { devices } from "../styled-components/size";
import Header from "../components/PostHeaderSlide/BlogPostHeader";
import { useSearchParams } from "react-router-dom";
const mapValueJsonServer = {
  categories: "_like",
  order: "_order",
  sort: "_sort",
};
const Blogs = () => {
  const { loading, blogs, setQuery } = useGlobalContext();
  console.log(blogs);
  const [currentParams, setCurrentParams] = useState({ categories: "all" });
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (currentParams.categories !== "all") {
      let queryParse = Object.keys(currentParams).map((key) => {
        return `${key}${mapValueJsonServer[key]}=${currentParams[key]}`;
      });
      let query = queryParse.join("&");
      setQuery(`http://localhost:3000/posts?${query}`);
    } else {
      setQuery(`http://localhost:3000/posts`);
    }
  }, [currentParams]);
  // handle params
  useEffect(() => {
    setCurrentParams({
      ...currentParams,
      ...Object.fromEntries([...searchParams]),
    });
  }, [searchParams]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="blogs-container">
        <h2 className="blogs-heading">{`${currentParams.categories} Posts`}</h2>
        {blogs.length > 3 && (
          <div className="blog-header">
            <Header blogs={blogs} />
          </div>
        )}
        <div className="blog-post-section">
          {blogs.map((blog, id) => {
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
    .blogs-heading {
      text-transform: capitalize;
    }
    .blog-post-section {
      display: grid;
      margin: 0 auto;
      column-gap: 2rem;
      .post-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 2rem;
      }
    }
  }
  @media ${devices.tabletM} {
    .blog-header {
      .post-container {
        grid-template-columns: 550px 1fr !important;
      }

      .content-container {
        h3 {
          font-size: 2.7rem;
          max-width: 430px;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.1rem;
        }
        .read-btn {
          font-size: 1.1rem;
        }
      }
    }
    .blog-post-section {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media ${devices.tabletL} {
    .blog-header {
      .img-container {
        height: 370px;
        max-height: 370px !important;
      }
    }
    .blog-post-section {
    }
  }
`;
export default Blogs;
