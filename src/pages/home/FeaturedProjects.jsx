import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "../../components/common/Container";
import ImageBox from "../../components/common/ImageBox";
import Reveal from "../../components/common/Reveal";
import projects from "../../data/projects";

// Photo ke upar text wala tile. big = bada (left), baaki chhote (right).
const Tile = ({ project, big = false }) => (
  <Link to={`/projects/${project.id}`} className="group relative block h-full min-h-[260px] overflow-hidden sm:min-h-[300px]">
    <ImageBox src={project.image} alt={project.title} className="absolute inset-0 transition duration-700 ease-out group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition duration-500 group-hover:from-black/90" />
    <div className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 text-white ${big ? "p-6 md:p-10" : "p-6"}`}>
      <div>
        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#d9b56d]">{project.category}</p>
        <h3 className={`font-heading font-medium ${big ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>{project.title}</h3>
        <p className="mt-1 text-xs text-neutral-300">{project.location} · {project.year}</p>
      </div>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 transition duration-500 group-hover:rotate-45 group-hover:border-[#d9b56d] group-hover:bg-[#d9b56d]">
        <ArrowUpRight size={18} />
      </span>
    </div>
  </Link>
);

const FeaturedProjects = () => {
  const [first, ...rest] = projects.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Featured Projects</p>
            <h2 className="text-3xl md:text-4xl font-medium">Our Recent Work</h2>
            <p className="mt-3 text-neutral-500">A glimpse of our latest architectural and interior design projects.</p>
          </div>
          <Link to="/projects" className="hidden sm:flex items-center gap-2 text-sm text-accent whitespace-nowrap">
            View All Projects <ArrowRight size={14} />
          </Link>
        </Reveal>

        <div className="grid gap-5 lg:h-[640px] lg:grid-cols-[1.6fr_1fr] lg:grid-rows-2">
          <Reveal className="h-full lg:row-span-2"><Tile project={first} big /></Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i + 1) * 120} className="h-full"><Tile project={p} /></Reveal>
          ))}
        </div>

        <Link to="/projects" className="mt-8 flex items-center justify-center gap-2 text-sm text-accent sm:hidden">
          View All Projects <ArrowRight size={14} />
        </Link>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
