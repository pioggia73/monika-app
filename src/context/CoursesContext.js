import React from "react";

const CoursesContext = React.createContext();

const CoursesProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CoursesContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </CoursesContext.Provider>
  );
};

export { CoursesContext, CoursesProvider };
