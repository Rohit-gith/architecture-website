import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageBox from "../common/ImageBox";

const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.id}`} className="group block">
    <div className="aspect-[16/10] overflow-hidden">
      <ImageBox src={project.image} alt={project.title} className="transition duration-500 group-hover:scale-105" />
    </div>
    <div className="mt-3 flex items-start justify-between">
      <div>
        <h3 className="font-body text-sm font-semibold">{project.title}</h3>
        <p className="text-xs text-neutral-500">{project.location}</p>
      </div>
      <ArrowRight size={16} className="mt-1 transition group-hover:text-accent" />
    </div>
  </Link>
);

export default ProjectCard;