import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../img/logo-crop.png";
import Search from "../components/Search";
import { devices } from "../styled-components/size";
import Sidebar from "../components/Sidebar";
import { FaBars } from "react-icons/fa";
import { socialLinks, links } from "../styled-components/links";
const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const toggleSidebar = () => {
    setSideBar(!sidebar);
  };
  return (
    <>
      <SideBarWrapper>
        {sidebar && <Sidebar toggleSidebar={toggleSidebar} />}
      </SideBarWrapper>
      <Wrapper>
        <div className="col-1">
          <Link className="logo" to="/">
            <img src={LogoImg} alt="" className="img" />
          </Link>
          <ul className="links">
            {links.map((link, id) => {
              return (
                <li className="link" key={id}>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive
                          ? "var(--primary-800)"
                          : "var(--primary-600)",
                      };
                    }}
                    to={`${link.refLink}`}
                  >
                    {link.linkTitle}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-2">
          <div className="search">
            <Search />
          </div>
          <FaBars className="nav-btn" onClick={toggleSidebar} />
          <ul className="social-icons">
            {socialLinks.map((link, id) => {
              return (
                <li className="icon" key={id}>
                  <a href={link.refLink} target="_blank">
                    {link.refIcon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </>
  );
};
const SideBarWrapper = styled.section`
  @media ${devices.laptop} {
    display: none;
  }
`;
const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  .col-1 {
    display: flex;
    column-gap: 3rem;
    .logo {
      width: 200px;
    }
    .links {
      display: none;
      flex-wrap: wrap;
      align-self: center;
      column-gap: 1.3rem;
      text-transform: capitalize;
      font-weight: bold;

      a {
        color: var(--primary-600);
        font-weight: 700;
      }
    }
  }

  .col-2 {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    flex-wrap: wrap;
    .social-icons {
      display: none;
      align-items: center;
      column-gap: 1rem;
      .icon {
        font-size: 1.4rem;
      }
      a {
        color: var(--primary-600);
      }
    }
    .nav-btn {
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: var(--primary-600);
    }
  }
  @media ${devices.tablet} {
    max-width: 1450px;
  }
  @media ${devices.laptop} {
    .col-1 {
      .links {
        display: flex;
      }
    }
    .col-2 {
      .social-icons {
        display: flex;
      }
      .nav-btn {
        display: none;
      }
    }
  }
`;
export default Navbar;
