import React from "react";
import styled from "styled-components";
import imgSrc from "../img/doctor.png";
import Button from "../styled-components/Button";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <Wrapper>
      <h3 className="title">
        About <span>Me</span>
      </h3>
      <div className="about-me-wrapper">
        <div className="about-me-content">
          <h3>Hi! Have we ever meet ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            perferendis nemo perspiciatis ipsum qui libero labore tempore ut
            maxime repellat molestias obcaecati officia, eos pariatur illum
            optio quibusdam quidem vel quos veritatis omnis, nam aliquid ducimus
            suscipit. Cumque nobis, ducimus non at suscipit aspernatur.
            Provident quibusdam et id consequuntur magnam.
          </p>
          <div className="btn-container">
            <Button>
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button className="primary">
              <Link to="/blogs">Read Blog</Link>
            </Button>
          </div>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 1.2rem;
  .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-700);
    span {
      color: var(--secondary-800);
    }
  }
  .about-me-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .img-container {
      width: 100%;
      max-width: 450px;
      img {
        width: 100%;
      }
    }
    .btn-container {
      display: flex;
      column-gap: 1.5rem;
    }
  }
  .about-me-content {
    h3 {
      letter-spacing: 0.1rem;
      color: var(--primary-700);
    }
    p {
      max-width: 550px;
    }
  }
`;
export default About;
