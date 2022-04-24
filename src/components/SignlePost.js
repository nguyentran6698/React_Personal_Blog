import React, { useState } from "react";
import SinglePostComponent from "../components/Post";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { devices } from "../styled-components/size";
const SignlePost = () => {
  return (
    <Wrapper>
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        className="featured-section"
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
`;
export default SignlePost;

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
