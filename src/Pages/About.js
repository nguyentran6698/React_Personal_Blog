import React from "react";
import styled from "styled-components";
import imgSrc from "../img/doctor.png";
import Button from "../styled-components/Button";
import { Link } from "react-router-dom";
import { devices } from "../styled-components/size";
import SlidePic from "../styled-components/SlidePic";
const About = () => {
  return (
    <Wrapper>
      <h2 className="title">
        About <span>Me</span>
      </h2>
      <section className="about-me-wrapper">
        <article className="about-me-1 wrapper ">
          <div className="img-container">
            <img src={imgSrc} alt="" className="img" />
          </div>
          <div className="about-me-content">
            <h3>Hi! Have we ever meet ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              perferendis nemo perspiciatis ipsum qui libero labore tempore ut
              maxime repellat molestias obcaecati officia, eos pariatur illum
            </p>
            <p>
              optio quibusdam quidem vel quos veritatis omnis, nam aliquid
              ducimus suscipit. Cumque nobis, ducimus non at suscipit
              aspernatur. Provident quibusdam et id consequuntur magnam.
            </p>
          </div>
        </article>
        <article className="about-me-2 wrapper">
          <div className="about-me-content">
            <h3>What career that you want to follow ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              perferendis nemo perspiciatis ipsum qui libero labore tempore ut
              maxime repellat molestias obcaecati officia, eos pariatur illum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              perferendis nemo perspiciatis ipsum qui libero labore tempore ut
              maxime repellat molestias obcaecati officia, eos pariatur illum
            </p>
          </div>
          <div className="img-container">
            <SlidePic className="slide-wrapper" />
          </div>
        </article>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 0 auto;
  .title {
    margin-bottom: 3.5rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-700);
    span {
      color: var(--secondary-800);
    }
  }
  .about-me-wrapper {
    .wrapper {
      display: grid;
      padding: 2rem 1.375rem;
    }
    .img-container {
      width: 100%;
      height: 100%;
      max-width: 570px;
      align-self: end;
    }
    .about-me-content {
      margin-bottom: 1.5rem;
      h3 {
        margin-top: 0;
        margin-bottom: 2.5rem;
        letter-spacing: 0.1rem;
        color: var(--primary-700);
        max-width: 90%;
      }
      p {
        max-width: 580px;
        font-size: 1.2rem;
      }
    }
  }

  @media ${devices.laptop} {
    .wrapper {
      padding: 2rem 2.5rem;
      max-width: 1400px;
      margin: 0 auto;
      grid-template-columns: 1fr 1fr;
      .about-me-content {
        margin-bottom: 0;
      }
    }
  }
`;
export default About;
