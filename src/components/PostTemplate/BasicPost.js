import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import imgSrc from "../../img/testPic/pic_5.jpeg";
import { devices } from "../../styled-components/size";
const BasicPost = ({ post, left, header }) => {
  const { title, public_date: date, img, post_content, id } = post;
  return (
    <Wrapper>
      <div className="post-container">
        {left && (
          <div className="img-container">
            <img src={imgSrc} alt="" className="img" />
          </div>
        )}
        <div className="content-container">
          <p>{date}</p>
          <h3>{title}</h3>
          <p>{`${post_content.slice(0, 85)}...`}</p>
          <Link to={`/blogs/${id}`} className="read-btn">
            Read More
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .post-container {
    box-shadow: var(--boxShadow);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    .img-container {
      max-height: 200px;
      border-radius: var(--borderRadius);
      box-shadow: var(--box-normal-shadow);
      transition: var(--fast-transition);
      overflow: hidden;
      img {
        border-radius: var(--borderRadius);
        transition: var(--fast-transition);
      }
    }
    .img-container:hover {
      box-shadow: var(--box-hover-shadow);
      img {
        transform: scale(1.5);
      }
    }
    .content-container {
      h3 {
        color: var(--primary-700);
        font-size: 1rem;
        text-transform: capitalize;
        margin: 0;
      }
      p {
        font-size: 0.75rem;
        margin-bottom: 0.375rem;
        max-width: 250px;
        color: var(--grey-clr);
      }
      .read-btn {
        font-size: 0.85rem;
        padding: 0.35rem;
        padding-left: 0;
        color: var(--primary-600);
        &:hover {
          color: var(--secondary-700);
        }
      }
    }
  }
  @media ${devices.tabletM} {
    .post-container {
      grid-template-columns: 1fr;
      margin-bottom: 1.5rem;
      .img-container {
        margin-bottom: 1.2rem;
      }
    }
  }
`;
export default BasicPost;
