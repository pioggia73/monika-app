import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <div className="section-center">
        <h2 className="section-title">{title}</h2>
        <div className="underline"></div>
      </div>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  .section-title {
    text-align: center;
    text-transform: uppercase;
    color: var(--clr-dirty-blue);
  }

  .underline {
    width: 5rem;
    height: 0.1rem;
    background: var(--clr-dirty-blue);
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export default Title;
