import React from "react";
import { useFetch } from "../utils/UseFetch";
const url = "http://localhost:1337/projects";
const ProjectsContext = React.createContext();

const ProjectsProvider = ({ children }) => {
  const { projects, isLoading, isError } = useFetch(url);

  return (
    <ProjectsContext.Provider value={{ projects, isLoading, isError }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
