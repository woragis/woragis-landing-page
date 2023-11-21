import React from "react";
import { StyledAbout } from "./style";
import { AboutType } from "../../types/componentsType";

const About: React.FC<AboutType> = () => {
  return (
    <StyledAbout id="about-me">
      <a href="https://roadmap.sh">
        <img
          src="https://api.roadmap.sh/v1-badge/wide/647cc86c40cee644b2845e40?variant=dark"
          alt="roadmap.sh"
        />
      </a>
      <h3>
        About <span>Jezreel de Andrade</span>
      </h3>
      <p>
        Autodidata, fluente em ingles, programador, perde noites e feriados pelo
        projeto, pois programar /e um hobbie e nao um trabalho
      </p>
    </StyledAbout>
  );
};

export default About;
