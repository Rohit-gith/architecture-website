import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Container from "./Container";

// Sabhi inner pages (About, Services, Projects, Contact, Team, Leadership) ka upar wala banner.
// Ek hi jagah badlo, sab pages me apne aap badal jayega.
const PageHero = ({ title, subtitle }) => (
  <section className="border-b border-accent/40 bg-[#efebe4] py-16 md:py-24">
    <Container>
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-500"
      >
        <Link to="/" className="transition hover:text-accent">Home</Link>
        <ChevronRight size={12} />
        <span className="text-[#8a6a2f]">{title}</span>
      </nav>

      <span className="mb-5 block h-0.5 w-12 bg-accent" />
      <h1 className="text-4xl font-semibold text-ink md:text-6xl">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-neutral-600">{subtitle}</p>}
    </Container>
  </section>
);

export default PageHero;