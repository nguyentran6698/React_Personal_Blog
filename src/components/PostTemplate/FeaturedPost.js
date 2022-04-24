import React from "react";
import { Link } from "react-router-dom";
import postPic from "../../img/testPic/pic_2.jpeg";
import styled from "styled-components";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
const FeaturedPost = () => {
  const [comments, setComment] = React.useState(10);
  const [like, setLike] = React.useState(false);
  const [nb_like, setNumberLike] = React.useState(5);
  const handleClick = () => {
    setLike(!like);
    if (!like) {
      setNumberLike((oldState) => {
        return oldState + 1;
      });
    } else {
      setNumberLike((oldState) => {
        return oldState - 1;
      });
    }
  };
  return (
    <Wrapper className="featured-post">
      <div className="post-img-container">
        <img src={postPic} alt="" className="img blog-img" />
      </div>
      <div className="blog">
        <h4 className="blog-title">How to learn different language ?</h4>
        <p className="blog-intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          assumenda magnam, repudiandae molestiae, sequi repellat ab...
        </p>
        <div className="icons-container">
          <p>
            <FaRegComment className="icon" />
            {comments}
          </p>
          <p>
            <button className="like-btn" onClick={handleClick}>
              {like ? (
                <AiTwotoneLike className="icon" />
              ) : (
                <AiOutlineLike className="icon" />
              )}
            </button>
            <span>{nb_like}</span>
          </p>
        </div>
        <Link to="/blogs/3" className="blog-btn">
          read article
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .post-img-container {
    height: 210px;
    width: 100%;
    .blog-img {
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
      width: 100%;
    }
  }
  .blog {
    border: 1px solid var(--primary-500);
    border-top: none;
    padding: 1rem 0.75rem 1.2rem 0.75rem;
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    .blog-title {
      color: var(--primary-600);
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
    .blog-intro {
      padding-right: 0.5rem;
      font-size: 0.85rem;
      color: var(--grey-clr);
    }
  }
  .icons-container {
    display: flex;
    column-gap: 1.2rem;
    .like-btn {
      background: transparent;
      border: none;
      cursor: pointer;
    }
    text-align: baseline;
    p {
      display: flex;
      column-gap: 0.25rem;
      align-items: center;
    }
    .icon {
      font-size: 1.5rem;
    }
    span {
      font-size: 1.1rem;
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
