import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { navLinks } from "../utils/constants";
import { CoursesContext } from "../context/CoursesContext";

const Navbar = () => {
  const { toggleSidebar } = React.useContext(CoursesContext);

  return (
    <NavContainer>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="company logo" />
        </Link>
        <button type="button" className="nav-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <ul className="nav-links">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  height: 5rem;
  background-color: var(--clr-dirty-pink);

  .nav-center {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 auto;

    img {
      width: 4rem;
      height: auto;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    font-size: 2rem;
    color: var(--clr-grey-1);
  }

  .nav-links {
    display: none;
  }

  .nav-links a {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--clr-grey-1);
    margin-left: 4vw;
    display: block;
    padding: 0.2rem 0;
    position: relative;
  }

  .nav-links a::before,
  .nav-links a:after {
    content: "";
    width: 100%;
    height: 0.15rem;
    position: absolute;
    left: 0;
    background-color: var(--clr-pink);
    transform: scaleX(0);
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  }

  .nav-links a::before {
    top: 0;
    transform-origin: right;
  }

  .nav-links a::after {
    bottom: 0;
    transform-origin: left;
  }

  .nav-links a:hover::after,
  .nav-links a:hover::before {
    transform: scaleX(1);
  }

  @media screen and (min-width: 692px) {
    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
    }
  }
`;

export default Navbar;
