import React from "react";
import { StyledProjects } from "./style";
import { ProjectsType } from "../../types/componentsType";

const Projects: React.FC<ProjectsType> = () => {
  return (
    <StyledProjects id="projects">
      <h3>Projects</h3>
    </StyledProjects>
  );
};

export default Projects;
