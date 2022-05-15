import React, { useRef } from "react";
import SinglePost from "../PostTemplate/BasicPost";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
const FeaturedPosts = () => {
  const sliderRef = useRef();
  const { blogs, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  const featuredBlogs = blogs.filter((blog) => blog.featured === true);
  return (
    <Wrapper>
      <div className="title">
        <h3>Featured Posts</h3>
        <div className="btn-control">
          <GrFormPreviousLink onClick={() => sliderRef.current.slickPrev()} />
          <GrFormNextLink onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
      <Slider
        ref={sliderRef}
        infinite={true}
        speed={500}
        autoplay={true}
        autoplaySpeed={3000}
        draggable={false}
        responsive={[
          {
            breakpoint: Number.MAX_SAFE_INTEGER,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },

          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ]}
      >
        {featuredBlogs.map((blog, id) => {
          return (
            <div key={id}>
              <SinglePost post={blog} left={true} />
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .slick-slide {
    padding-right: 1rem;
  }
  .title {
    display: flex;
    justify-content: space-between;
    color: var(--primary-700);
    .btn-control {
      align-self: center;
      padding-top: 3rem;
      font-size: 1.7rem;
      cursor: pointer;
    }
  }
`;
export default FeaturedPosts;
