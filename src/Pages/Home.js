import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { devices } from "../styled-components/size";
import FeaturedPost from "../components/FeaturedPosts";
const Home = () => {
  return (
    <Wrapper>
      <Header />
      <main className="home">
        <section className="featured-section">
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
    }
  }

  @media ${devices.laptopL} {
    .home {
      padding: 2rem 0;
    }
  }
`;
export default Home;
