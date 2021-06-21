import React from "react";
// ****** components ***** //
import Background from "../components/Background";
import Overlay from "../components/Overlay";
import { CoursesContext } from "../context/CoursesContext";

const Home = () => {
  const { isOpen } = React.useContext(CoursesContext);
  return (
    <main>
      <Background />
      {isOpen ? <Overlay /> : null}
    </main>
  );
};

export default Home;
