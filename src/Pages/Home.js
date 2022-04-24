import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { devices } from "../styled-components/size";
import FeaturedPost from "../components/SignlePost";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Slider from "react-slick";
const Home = () => {
  return (
    <Wrapper>
      <Header />
      <main className="home">
        <section className="featured-section">
          <div className="title">
            <h3>Featured Posts</h3>
            {/* <div className="btn-control">
              <GrFormPreviousLink />
              <GrFormNextLink />
            </div> */}
          </div>
          <FeaturedPost />
        </section>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .home {
    max-width: 1300px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    .featured-section {
      .title {
        display: flex;
        justify-content: space-between;
        .btn-control {
          align-self: center;
          padding-top: 3rem;
          font-size: 1.7rem;
          cursor: pointer;
        }
      }
    }
  }

  @media ${devices.laptopL} {
    .home {
      padding: 2rem 0;
    }
  }
`;
export default Home;
