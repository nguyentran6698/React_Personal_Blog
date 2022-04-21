import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { socialLinks, links } from "../styled-components/links";
import { Link } from "react-router-dom";
const Sidebar = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <IoMdClose onClick={toggleSidebar} className="close-btn" />
      <div className="link-wrapper">
        <ul className="links">
          {links.map((link, id) => {
            return (
              <li className="link" key={id}>
                <Link
                  onClick={toggleSidebar}
                  to={link.refLink}
                  className="check"
                >
                  {link.linkTitle}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {socialLinks.map((link, id) => {
          return (
            <li key={id}>
              <a href="www.facebook.com">{link.refIcon}</a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--primary-500);
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 2.5rem;
  right: 0;
  z-index: 2;
  .close-btn {
    cursor: pointer;
    font-size: 2.5rem;
  }
  .link-wrapper {
    text-align: center;
    .link {
      padding: 1.5rem 0;
      text-transform: uppercase;
      font-size: 1.3rem;
      font-family: "Libre Franklin", sans-serif;
      font-weight: 600;
    }
  }
  .social-icons {
    margin-top: 5rem;
    display: flex;
    column-gap: 2rem;
    justify-content: center;
    li {
      font-size: 2rem;
    }
    a {
      display: block;
      transition: var(--fast-transition);
    }
    a:hover {
      color: var(--white-clr);
      transform: translateY(-10px);
    }
  }
`;
export default Sidebar;
