import React, { useState, useRef } from "react";
import SinglePostComponent from "./Post";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
const FeaturedPosts = () => {
  const sliderRef = useRef();

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
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        draggable={false}
        responsive={[
          {
            breakpoint: 2200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1500,
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
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        <div>
          <SinglePostComponent />
        </div>
        <div>
          <SinglePostComponent />
        </div>
        <div>
          <SinglePostComponent />
        </div>
        <div>
          <SinglePostComponent />
        </div>
        <div>
          <SinglePostComponent />
        </div>
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .slick-slide {
    padding-left: 1rem;
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

//   .featured-posts {
//     display: grid;
//     @media ${devices.tablet} {
//       grid-template-columns: 1fr 1fr;
//       gap: 1rem;
//     }
//     @media ${devices.tabletL} {
//       grid-template-columns: 1fr 1fr 1fr 1fr;
//       gap: 1rem;
//     }
//   }
