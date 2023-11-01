import React from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import { StyledLandingPage } from "./style";

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <div id="top"></div>
      <Projects />
      <About />
      <Contact />
    </StyledLandingPage>
  );
};

export default LandingPage;
