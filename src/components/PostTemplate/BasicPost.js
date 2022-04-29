import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import imgSrc from "../../img/testPic/pic_5.jpeg";
import dateFormat from "dateformat";
import { devices } from "../../styled-components/size";
const BasicPost = ({ post, left }) => {
  const {
    title,
    post_date: public_date,
    image,
    description,
    id,
    categories,
  } = post;
  return (
    <Wrapper>
      <div className="post-container">
        {left && (
          <div className="img-container">
            <img src={image} alt="" className="img" />
          </div>
        )}
        <div className="content-container">
          <span className="post-date">
            {dateFormat(public_date, "mmmm dd, yyyy")}
          </span>
          <h2 className="post-title">{title}</h2>
          <p>{`${description.slice(0, 85)}...`}</p>
          <div className="post-meta">
            <span className="categories">Categories: </span>
            {categories.map((category, id) => {
              return (
                <Link to={`blogs/${id}`} key={id}>
                  {category}
                </Link>
              );
            })}
          </div>
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
    grid-template-columns: 1fr;
    .img-container {
      height: 294.91px;
      border-radius: var(--borderRadius);
      transition: var(--fast-transition);
      overflow: hidden;
      margin-bottom: 1rem;
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
      .post-title {
        color: var(--primary-700);
        font-size: 1rem;
        font-weight: 700;
        text-transform: capitalize;
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.75rem;
        margin: 0;
        color: var(--grey-clr);
      }
      .post-meta {
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
      }
      span {
        font-size: 0.75rem;
        margin-top: 0;
        color: var(--grey-clr);
      }
      .read-btn {
        font-size: 0.85rem;
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
    }
  }
`;
export default BasicPost;
