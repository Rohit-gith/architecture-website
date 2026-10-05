import Container from "../../../components/common/Container";

const items = [
  { title: "Our Mission", text: "To create functional, sustainable and beautiful spaces that improve the way people live and work." },
  { title: "Our Vision", text: "To be a trusted design partner known for honest process, quality craft and timeless architecture." },
];

const MissionVision = () => (
  <section className="py-20 bg-cream">
    <Container className="grid gap-8 md:grid-cols-2">
      {items.map((i) => (
        <div key={i.title} className="bg-white p-10 border-t-2 border-accent">
          <h3 className="text-2xl font-semibold">{i.title}</h3>
          <p className="mt-4 text-neutral-600 leading-relaxed">{i.text}</p>
        </div>
      ))}
    </Container>
  </section>
);

export default MissionVision;
