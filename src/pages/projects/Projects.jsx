import { useState } from "react";
import ProjectsHero from "./ProjectsHero";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const [active, setActive] = useState("All");

  return (
    <>
      <ProjectsHero />
      <ProjectFilter active={active} onChange={setActive} />
      <ProjectGrid active={active} />
    </>
  );
};

export default Projects;
