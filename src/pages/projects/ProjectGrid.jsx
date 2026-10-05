import Container from "../../components/common/Container";
import ProjectCard from "../../components/ui/ProjectCard";
import projects from "../../data/projects";

const ProjectGrid = ({ active = "All" }) => {
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-12 md:py-16">
      <Container>
        {list.length === 0 ? (
          <p className="text-center text-neutral-500">No projects in this category yet.</p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProjectGrid;
