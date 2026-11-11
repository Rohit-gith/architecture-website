import Container from "../components/common/Container";
import Button from "../components/common/Button";

const NotFound = () => (
  <section className="bg-cream py-28 md:py-36">
    <Container className="text-center">
      <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">Error 404</p>
      <h1 className="text-5xl md:text-7xl font-medium">Page Not Found</h1>
      <span className="mx-auto mt-6 block h-0.5 w-12 bg-accent" />
      <p className="mx-auto mt-6 max-w-md text-neutral-600">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button to="/" arrow>Back to Home</Button>
        <Button to="/projects" variant="dark">View Projects</Button>
      </div>
    </Container>
  </section>
);

export default NotFound;
