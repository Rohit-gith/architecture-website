import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ChevronRight, Expand } from "lucide-react";
import Container from "../../components/common/Container";
import ImageBox from "../../components/common/ImageBox";
import Reveal from "../../components/common/Reveal";
import Button from "../../components/common/Button";
import Lightbox from "../../components/common/Lightbox";
import ProjectCard from "../../components/ui/ProjectCard";
import projects from "../../data/projects";
import siteConfig from "../../config/siteConfig";

const ProjectDetails = () => {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const [photo, setPhoto] = useState(null); // lightbox me kaunsi photo khuli hai (null = band)

  // Dusre project par jaate hi lightbox band
  useEffect(() => setPhoto(null), [id]);

  // Browser tab me project ka naam
  useEffect(() => {
    if (project) document.title = `${project.title} | ${siteConfig.name}`;
  }, [project]);

  if (!project) {
    return (
      <Container className="py-28 text-center">
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Projects</p>
        <h1 className="text-4xl font-medium">Project Not Found</h1>
        <div className="mt-8"><Button to="/projects" arrow>Back to Projects</Button></div>
      </Container>
    );
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  // Pehle same category wale, phir baaki — max 3
  const related = [
    ...projects.filter((p) => p.id !== project.id && p.category === project.category),
    ...projects.filter((p) => p.id !== project.id && p.category !== project.category),
  ].slice(0, 3);

  const photos = [project.image, ...(project.gallery || [])];

  // Photo par click karo to full screen (lightbox) me khulti hai
  // (Function ki tarah call hota hai, component ki tarah nahi, taaki har render par photo dobara mount na ho)
  const zoomable = (i, children) => (
    <button
      type="button"
      onClick={() => setPhoto(i)}
      aria-label={`View ${project.title} photo ${i + 1} full screen`}
      className="group relative block h-full w-full cursor-zoom-in overflow-hidden"
    >
      {children}
      <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white opacity-100 backdrop-blur transition md:opacity-0 md:group-hover:opacity-100">
        <Expand size={14} /> View
      </span>
    </button>
  );

  const meta = [
    ["Category", project.category],
    ["Location", project.location],
    ["Year", project.year],
    ["Area", project.area],
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-[#efebe4] pt-12 pb-10 md:pt-16">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
            <Link to="/" className="transition hover:text-accent">Home</Link>
            <ChevronRight size={12} />
            <Link to="/projects" className="transition hover:text-accent">Projects</Link>
            <ChevronRight size={12} />
            <span className="text-[#8a6a2f]">{project.title}</span>
          </nav>
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">{project.category}</p>
          <h1 className="text-4xl font-semibold md:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-neutral-600">{project.description}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-accent/30 pt-6 md:grid-cols-4">
            {meta.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Main image */}
      <Container className="-mt-px pt-10 md:pt-14">
        <Reveal className="aspect-[16/9] overflow-hidden">
          {zoomable(
            0,
            <ImageBox src={project.image} alt={project.title} className="transition duration-700 group-hover:scale-[1.02]" />
          )}
        </Reveal>
      </Container>

      {/* Challenge / Solution / Highlights */}
      {(project.challenge || project.solution || project.highlights?.length) && (
        <section className="py-16 md:py-24">
          <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-10">
              {project.challenge && (
                <Reveal>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">The Challenge</p>
                  <p className="text-lg leading-relaxed text-neutral-700">{project.challenge}</p>
                </Reveal>
              )}
              {project.solution && (
                <Reveal>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Our Solution</p>
                  <p className="text-lg leading-relaxed text-neutral-700">{project.solution}</p>
                </Reveal>
              )}
            </div>
            {project.highlights?.length > 0 && (
              <Reveal>
                <div className="border-t-2 border-accent bg-cream p-8">
                  <h2 className="text-2xl font-medium">Key Highlights</h2>
                  <ul className="mt-6 space-y-4">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-neutral-700">
                        <Check size={18} className="mt-0.5 shrink-0 text-accent" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </Container>
        </section>
      )}

      {/* Gallery (sirf tab dikhega jab data me photos hon) */}
      {project.gallery?.length > 0 && (
        <section className="pb-16 md:pb-24">
          <Container className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 100} className="aspect-[4/3] overflow-hidden">
                {zoomable(
                  i + 1,
                  <ImageBox src={src} alt={`${project.title} ${i + 2}`} className="transition duration-700 group-hover:scale-[1.02]" />
                )}
              </Reveal>
            ))}
          </Container>
        </section>
      )}

      {/* Previous / Next */}
      <section className="border-y border-neutral-200">
        <Container className="grid grid-cols-2 divide-x divide-neutral-200">
          <Link to={`/projects/${prev.id}`} className="group py-8 pr-4">
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              <ArrowLeft size={14} className="transition group-hover:-translate-x-1" /> Previous
            </span>
            <span className="mt-2 block font-heading text-lg transition group-hover:text-accent md:text-2xl">{prev.title}</span>
          </Link>
          <Link to={`/projects/${next.id}`} className="group py-8 pl-4 text-right">
            <span className="flex items-center justify-end gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              Next <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </span>
            <span className="mt-2 block font-heading text-lg transition group-hover:text-accent md:text-2xl">{next.title}</span>
          </Link>
        </Container>
      </section>

      {/* More projects */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-medium md:text-4xl">More Projects</h2>
            <Link to="/projects" className="hidden items-center gap-2 whitespace-nowrap text-sm text-accent sm:flex">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}><ProjectCard project={p} /></Reveal>
            ))}
          </div>
        </Container>
      </section>

      {photo !== null && (
        <Lightbox images={photos} index={photo} onChange={setPhoto} onClose={() => setPhoto(null)} title={project.title} />
      )}
    </>
  );
};

export default ProjectDetails;
