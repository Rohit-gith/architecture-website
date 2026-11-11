import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ImageBox from "../common/ImageBox";

// Hover par photo halki dark hoti hai aur "View Project" dikhta hai. Category ka tag hamesha dikhta hai.
const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.id}`} className="group block">
    <div className="relative aspect-[16/10] overflow-hidden">
      <ImageBox src={project.image} alt={project.title} className="transition duration-700 ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/45" />
      <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
        {project.category}
      </span>
      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="flex translate-y-3 items-center gap-2 border border-white/80 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition duration-500 group-hover:translate-y-0">
          View Project <ArrowUpRight size={14} />
        </span>
      </span>
    </div>
    <div className="mt-4 flex items-start justify-between gap-4">
      <div>
        <h3 className="font-body text-base font-semibold transition group-hover:text-accent">{project.title}</h3>
        <p className="mt-0.5 text-xs text-neutral-500">{project.location} · {project.year}</p>
      </div>
      <ArrowRight size={16} className="mt-1 shrink-0 transition group-hover:translate-x-1 group-hover:text-accent" />
    </div>
  </Link>
);

export default ProjectCard;
