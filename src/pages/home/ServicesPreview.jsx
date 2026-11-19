import { Link } from "react-router-dom";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";
import services from "../../data/services";

const ServicesPreview = () => (
  <section className="py-12 md:py-16 bg-cream">
    <Container>
      <SectionTitle
        eyebrow="Our Services"
        title="From Vision to Reality"
        subtitle="Architecture, interiors, planning and visualization, all under one roof."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-neutral-300/60">
        {services.map(({ id, title, icon: Icon }, i) => (
          <Reveal key={id} delay={i * 80}>
          <Link to="/services" className="group flex flex-col items-center px-4 py-6 text-center">
            <Icon size={40} strokeWidth={1.1} className="text-ink group-hover:text-accent transition" />
            <p className="mt-4 text-sm font-medium">{title}</p>
            <span className="mt-4 h-0.5 w-8 bg-accent" />
          </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default ServicesPreview;