import { Link } from "react-router-dom";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import services from "../../data/services";

const ServicesPreview = () => (
  <section className="py-16 md:py-20 bg-cream">
    <Container>
      <SectionTitle
        eyebrow="Our Services"
        title="From Vision to Reality"
        subtitle="We offer end-to-end architectural and design solutions tailored to your needs."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:divide-x divide-neutral-300/60">
        {services.map(({ id, title, icon: Icon }) => (
          <Link to="/services" key={id} className="group flex flex-col items-center px-4 py-6 text-center">
            <Icon size={40} strokeWidth={1.1} className="text-ink group-hover:text-accent transition" />
            <p className="mt-4 text-sm font-medium">{title}</p>
            <span className="mt-4 h-0.5 w-8 bg-accent" />
          </Link>
        ))}
      </div>
    </Container>
  </section>
);

export default ServicesPreview;