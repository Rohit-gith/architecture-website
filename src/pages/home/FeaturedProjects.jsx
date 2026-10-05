import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../components/common/Container";
import ProjectCard from "../../components/ui/ProjectCard";
import projects from "../../data/projects";

const FeaturedProjects = () => (
  <section className="py-16 md:py-20">
    <Container>
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Featured Projects</p>
          <h2 className="text-3xl md:text-4xl font-medium">Our Recent Work</h2>
          <p className="mt-3 text-neutral-500">A glimpse of our latest architectural and interior design projects.</p>
        </div>
        <Link to="/projects" className="hidden sm:flex items-center gap-2 text-sm text-accent whitespace-nowrap">
          View All Projects <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.slice(0, 4).map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </Container>
  </section>
);

export default FeaturedProjects;