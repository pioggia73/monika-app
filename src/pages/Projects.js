import React from "react";
import styled from "styled-components";
////// ****** components ****** /////
import Title from "../components/Title";
import SingleProject from "../components/SingleProject";
import { ProjectsContext } from "../context/ProjectsContext";

const Projects = () => {
  const { projects, isLoading, isError } = React.useContext(ProjectsContext);

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isError) {
    return <h3>Error...</h3>;
  }

  return (
    <ProjectsContainer>
      <section className="section">
        <Title title="my projects" />
        <article className="section-center projects-container">
          {projects.map((project, index) => {
            return <SingleProject {...project} key={index} />;
          })}
        </article>
      </section>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  .projects-container {
    display: grid;
    margin-bottom: 4rem;
  }
`;

export default Projects;
