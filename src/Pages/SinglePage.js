import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import ErrorPage from "../Pages/ErrorPage";
import imgSrc from "../img/testPic/pic_6.jpeg";
import styled from "styled-components";
import { devices } from "../styled-components/size";
import dateFormat from "dateformat";
import DOMPurify from "dompurify";
const SinglePage = () => {
  // debug Purpose
  window.scrollTo(0, 0);
  const { blogId } = useParams();
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  const { loading, error, setQuery, blogs, userAuth } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  const blog = blogs.find((blog) => blog.id === parseInt(blogId));
  const { title, post_date, image, content, categories, id } = blog;
  if (error.show) {
    return <ErrorPage {...error} />;
  }
  return (
    <Wrapper>
      <div className="post-content">
        <div className="header">
          <h2>{title}</h2>
          <span className="categories">Categories: </span>
          {categories.map((category, id) => {
            return (
              <Link to={`/blogs?categories=${category}`} key={id}>
                {category}
              </Link>
            );
          })}
          <p>{dateFormat(post_date, "mmmm dd, yyyy")}</p>
          {image && (
            <div className="img-container">
              <img src={image} alt="" className="img img-post" />
            </div>
          )}
        </div>
        <p
          dangerouslySetInnerHTML={createMarkup(content)}
          className="content-wrapper"
        />
        <Link to="/blogs" className="btn">
          Go Back
        </Link>
        {userAuth && (
          <Link
            to={`/blogs/blogEdit`}
            state={{ editPost: blog }}
            className="btn"
            style={{ marginLeft: "1rem" }}
          >
            Edit Post
          </Link>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 5rem;
  .post-content {
    padding: 0.75rem 1rem;
    .header {
      a {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: capitalize;
        display: inline-block;
        margin-right: 3px;
        padding: 0.1rem 0.25rem;
        background: var(--secondary-500);
        border-radius: var(--borderRadius);
      }
      .categories {
        margin-right: 3px;
      }
      span {
        margin-top: 0;
        color: var(--grey-clr);
      }
    }
    .img-container {
      margin: 1.5rem auto;
      width: 100%;
      height: 500px;
      img {
        max-width: 100%;
        border-radius: var(--borderRadius);
      }
    }
    .header {
      h2 {
        margin: 0;
        margin-top: 1.2rem;
        color: var(--primary-700);
        text-transform: capitalize;
      }
      p {
        color: var(--grey-clr);
      }
    }
    .btn {
      display: inline-block;
      padding: 0.375rem 1.5rem;
      border-radius: 1.25rem;
      color: var(--primary-700);
      background: transparent;
      border: 1px solid var(--primary-700);
    }
    .content-wrapper {
      img {
        max-width: 100%;
      }
    }
  }

  .btn:hover {
    background: var(--primary-700);
    color: var(--white-clr);
  }
  @media ${devices.tabletL} {
    .post-content {
      padding: 0;
    }
  }
`;
export default SinglePage;
