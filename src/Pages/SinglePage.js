import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import ErrorPage from "../Pages/ErrorPage";
import imgSrc from "../img/testPic/pic_6.jpeg";
import styled from "styled-components";
import { devices } from "../styled-components/size";
const SinglePage = () => {
  const { blogId } = useParams();

  const { loading, error, setQuery, blogs } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  const { title, img, public_date, img: imgPost, post_content } = blogs.find(
    (blog) => blog.id === parseInt(blogId)
  );
  if (error.show) {
    return <ErrorPage {...error} />;
  }

  return (
    <Wrapper>
      <img src={imgSrc} alt="" className="img img-post" />
      <div className="post-content">
        <div className="header">
          <h2>{title}</h2>
          <p>{public_date}</p>
        </div>
        <p>{post_content}</p>
        <Link to="/blogs" className="btn">
          Go Back
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  .img-post {
    margin-top: 2rem;
    max-height: 500px;
  }
  .post-content {
    padding: 0.75rem 1rem;
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
  }

  .btn:hover {
    background: var(--primary-700);
    color: var(--white-clr);
  }
  @media ${devices.tabletL} {
    .post-content {
      padding: 0;
      .header {
        width: 80%;
      }
    }
  }
`;
export default SinglePage;
