import React from "react";
import { Link } from "react-router-dom";
import postPic from "../../img/testPic/pic_5.jpeg";
import styled from "styled-components";

const FeaturedPost = ({ blog }) => {
  const { id, title, public_date, img, post_content } = blog;
  return (
    <Wrapper className="featured-post">
      <div className="post-img-container">
        <img src={postPic} alt="" className="img blog-img" />
      </div>
      <div className="blog">
        <p>{public_date}</p>
        <h4 className="blog-title">{title}</h4>
        <p>{`${post_content.slice(0, 70)}...`}</p>
        <Link to={`/blogs/${id}`} className="blog-btn">
          read article
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .post-img-container {
    height: 150px;
    width: 100%;
    .blog-img {
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
    }
  }
  .blog {
    border: 1px solid var(--primary-500);
    border-top: none;
    height: 100%;
    padding: 1rem 0.75rem 1.2rem 0.75rem;
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    .blog-title {
      color: var(--primary-700);
      font-size: 1rem;
      text-transform: capitalize;
      margin: 0 0 0.5rem;
    }
    p {
      font-size: 0.75rem;
      max-width: 250px;
      margin-bottom: 0.75rem;
      color: var(--grey-clr);
    }
  }
  .blog-btn {
    display: block;
    width: 100%;
    text-align: center;
    color: var(--secondary-900);
    background: transparent;
    border: none;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    outline: 2px solid var(--secondary-800);
  }
`;
export default FeaturedPost;