import React from "react";
import styled from "styled-components";
import { CoursesContext } from "../context/CoursesContext";
///////////////////////////////////////////////////////////
import Title from "../components/Title";

const Courses = ({ title }) => {
  const { courses, isLoading, isError } = React.useContext(CoursesContext);

  const [value, setValue] = React.useState(0);

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isError) {
    return <h3>Error ...</h3>;
  }
  return (
    <CoursesContainer>
      <article className="section">
        <Title title="my courses" />
        <div className="section-center">
          <div className="btn-container">
            {courses.map((course, index) => {
              const { id, skill } = course;
              return (
                <button
                  type="button"
                  key={id}
                  className={`courses-btn ${index === value && "active-btn"}`}
                  onClick={() => setValue(index)}
                >
                  {skill}
                </button>
              );
            })}
          </div>

          <div className="course-info"></div>
        </div>
      </article>
    </CoursesContainer>
  );
};

const CoursesContainer = styled.article`
  .btn-container {
    width: 80vw;
    margin: 3rem auto;
    display: flex;
    justify-content: space-around;
  }

  .courses-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.25rem 0;
    transition: all 0.5s ease-in-out;
    color: var(--clr-black);
  }

  .active-btn {
    color: var(--clr-pink);
  }
`;

export default Courses;
