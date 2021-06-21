import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <div className="banner">
        <h3>I am Monika</h3>
        <h1>I am a Front-End developer</h1>
        <button className="btn">
          <Link to="/contact">contact me</Link>
        </button>
      </div>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  .banner {
    background-color: var(--clr-dirty-pink);
    width: 80vw;
    height: 37vh;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: banner 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    h1,
    h3 {
      color: var(--clr-grey-1);
    }
  }

  @media screen and (min-width: 692px) {
    .banner {
      width: 60vw;
    }
  }

  @media screen and (min-width: 992px) {
    .banner {
      width: 40vw;
    }
  }

  @keyframes banner {
    0% {
      transform: translateX(50rem) rotate(360deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default Banner;
