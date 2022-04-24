import React from "react";
import styled from "styled-components";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import imgSrc from "../../img/testPic/pic_4.jpeg";
import { devices } from "../../styled-components/size";
const BasicPost = ({ post, left }) => {
  const {
    title,
    img,
    post_content,
    id,
    comments: { nb_comment },
    nb_likes,
  } = post;
  const [like, setLike] = React.useState(false);
  const handleClick = () => {
    setLike(!like);
    if (!like) {
      console.log("increase like");
    } else {
      console.log("decrease like");
    }
  };
  return (
    <Wrapper>
      <div className="post-container">
        {left && (
          <div className="img-container">
            <img src={imgSrc} alt="" className="img" />
          </div>
        )}

        <div className="content-container">
          <h3>{title}</h3>
          <p>{`${post_content.slice(0, 70)}...`}</p>
          <div className="icons-container">
            <p>
              <FaRegComment className="icon" />
              {nb_comment}
            </p>
            <p>
              <button className="like-btn" onClick={handleClick}>
                {like ? (
                  <AiTwotoneLike className="icon" />
                ) : (
                  <AiOutlineLike className="icon" />
                )}
              </button>
              <span>{nb_likes}</span>
            </p>
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
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    .img-container {
      height: 170px;
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
          font-size: 1rem;
        }
        span {
          font-size: 0.75rem;
        }
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
      display: block;
      margin-bottom: 1.5rem;
      .img-container {
        height: 270px;
        margin-bottom: 1.2rem;
      }
    }
  }
`;
export default BasicPost;
