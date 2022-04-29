import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { devices } from "../../styled-components/size";
import SinglePostComponent from "../PostTemplate/BasicPost";
const BlogPostHeader = ({ blogs }) => {
  const newPosts = blogs.slice(0, 4);
  return (
    <Wrapper>
      <h2>All Posts</h2>
      <Slider
        className="posts-header"
        dots={true}
        infinite={true}
        speed={500}
        autoplay={true}
        autoplaySpeed={3000}
        draggable={false}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {newPosts.map((blog, id) => {
          console.log(blog);
          return <SinglePostComponent key={id} post={blog} left={true} />;
        })}
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  .posts-header {
    margin: 2rem 0;
    .post-container {
      grid-template-columns: 1fr;
      column-gap: 2rem;
      .content-container {
        h2 {
          font-size: 2.3rem;
        }
        p {
          font-size: 1.2rem;
          max-width: 100%;
        }
        a,
        span,
        .read-btn {
          font-size: 1.1rem;
        }
      }
    }
    .img-container {
      height: 350px;
    }
  }
  @media ${devices.tabletM} {
    .post-container {
      grid-template-columns: 1fr;
      margin-bottom: 0;
    }
  }
`;
export default BlogPostHeader;
