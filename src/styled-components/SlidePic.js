import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import styled from "styled-components";
import { pic1, pic2, pic3, pic4 } from "../styled-components/imgLinks";
const SlidePic = () => {
  return (
    <Wrapper>
      <Carousel
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="img-container">
          <img src={pic1} alt="" className="img" />
        </div>
        <div className="img-container">
          <img src={pic2} alt="" className="img" />
        </div>
        <div className="img-container">
          <img src={pic3} alt="" className="img" />
        </div>
        <div className="img-container">
          <img src={pic4} alt="" className="img" />
        </div>
      </Carousel>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .img-container {
    max-height: 450px;
  }
`;
export default SlidePic;
