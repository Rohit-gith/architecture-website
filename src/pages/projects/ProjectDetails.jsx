import { Link, useParams } from "react-router-dom";
import Container from "../../components/common/Container";
import ImageBox from "../../components/common/ImageBox";
import projects from "../../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-block underline">Back to Projects</Link>
      </Container>
    );
  }

  const meta = [
    ["Category", project.category],
    ["Location", project.location],
    ["Year", project.year],
    ["Area", project.area],
  ];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Link to="/projects" className="text-sm uppercase tracking-widest text-accent">← All Projects</Link>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold">{project.title}</h1>
        <div className="mt-10 aspect-[16/9]"><ImageBox src={project.image} alt={project.title} /></div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <p className="md:col-span-2 text-neutral-600 leading-relaxed">{project.description}</p>
          <dl className="space-y-4">
            {meta.map(([k, v]) => (
              <div key={k} className="border-b border-neutral-200 pb-3">
                <dt className="text-xs uppercase tracking-widest text-neutral-400">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetails;
