import React from "react";
import styled from "styled-components";
import imgSrc from "../img/headerImg.png";
import { devices } from "../styled-components/size";
import { Link } from "react-router-dom";
import Button from "../styled-components/Button";
const Header = () => {
  return (
    <Wrapper>
      <div className="header-wrapper">
        <div className="header-content">
          <div className="heading">
            <h2>welcome to my personal blog</h2>
          </div>
          <p>
            I’m an eager person who always try to challenges myself through
            every day task. My goal for this blog is to document every step of
            my medical journey to help new people to understand more about the
            difficulty and the challenge that document might face.
          </p>
          <div className="button-container">
            <Button>
              <Link to="about">About Me</Link>
            </Button>
            <Button>
              <Link to="contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="header-img">
          <img src={imgSrc} className="img" alt="" />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 3rem 1.5rem;
  background: var(--primary-300);
  .header-wrapper {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    .header-content {
      align-self: center;
      font-size: 1.1rem;
      .heading {
        h2 {
          text-transform: capitalize;
          margin: 0;
          margin-bottom: 1.3rem;
        }
      }
      p {
        margin: 2.5rem 0;
      }
      .button-container {
        display: flex;
        column-gap: 1.2rem;
      }
    }
    .header-img {
      display: none;
    }
  }
  @media ${devices.tablet} {
    padding: 2rem 1.5rem;
    .header-wrapper {
      grid-template-columns: 1fr 1fr;
      .header-content {
        h2 {
          width: 90%;
        }
        p {
          max-width: 550px;
        }
      }
      .header-img {
        display: inherit;
      }
    }
  }
`;
export default Header;
