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
              optio quibusdam quidem vel quos veritatis omnis, nam aliquid
              ducimus suscipit. Cumque nobis, ducimus non at suscipit
              aspernatur. Provident quibusdam et id consequuntur magnam.
            </p>
            <div className="btn-container">
              <Button>
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button>
                <Link to="/blogs">Read Blog</Link>
              </Button>
            </div>
          </div>
        </article>
        <article className="about-me-2 wrapper">
          <div className="about-me-content">
            <h3>What career that you want to follow ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              perferendis nemo perspiciatis ipsum qui libero labore tempore ut
              maxime repellat molestias obcaecati officia, eos pariatur illum
              optio quibusdam quidem vel quos veritatis omnis, nam aliquid
              ducimus suscipit. Cumque nobis, ducimus non at suscipit
              aspernatur. Provident quibusdam et id consequuntur magnam.
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
  padding: 2rem 3rem;
  max-width: 1450px;
  margin: 0 auto;

  .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-700);
    span {
      color: var(--secondary-800);
    }
  }
  .about-me-wrapper {
    .wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 2.5rem;
      margin-top: 4.5rem;
    }

    /* This is for ABOUT-ME-CONTENT */
    .img-container {
      width: 100%;
      max-width: 450px;
      img {
        width: 100%;
      }
    }
    .about-me-content {
      h3 {
        margin-bottom: 1.5rem;
        letter-spacing: 0.1rem;
        color: var(--primary-700);
        max-width: 90%;
      }
      p {
        max-width: 550px;
      }
    }
    .btn-container {
      margin-top: 2rem;
      display: flex;
      column-gap: 1.5rem;
    }
  }

  @media ${devices.tabletL} {
    .about-me-wrapper {
      display: grid;
      justify-content: center;
      .wrapper {
        flex-wrap: nowrap;
      }
    }
  }
  @media ${devices.laptop} {
    .about-me-wrapper {
    }
  }
`;
export default About;
