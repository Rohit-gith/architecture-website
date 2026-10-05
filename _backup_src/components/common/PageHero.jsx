import Container from "./Container";

const PageHero = ({ title, subtitle }) => (
  <section className="bg-ink text-white py-20 md:py-28">
    <Container>
      <span className="block h-0.5 w-12 bg-accent mb-5" />
      <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-neutral-300">{subtitle}</p>}
    </Container>
  </section>
);

export default PageHero;
