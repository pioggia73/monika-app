import React from "react";
import { useFetch } from "../utils/UseFetch";
const url = "http://localhost:1337/courses";

const CoursesContext = React.createContext();

const CoursesProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { isLoading, courses, isError } = useFetch(url);

  return (
    <CoursesContext.Provider
      value={{ isOpen, toggleSidebar, isLoading, courses, isError }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesProvider };
