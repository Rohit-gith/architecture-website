import { useState } from "react";
import ProjectsHero from "./sections/ProjectsHero";
import ProjectFilter from "./sections/ProjectFilter";
import ProjectGrid from "./sections/ProjectGrid";

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
