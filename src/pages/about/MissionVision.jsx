import Container from "../../components/common/Container";

// Client ke office profile PDF se
const items = [
  {
    title: "Our Vision",
    text: "To become a leading design studio known for creating iconic, sustainable, and luxurious living spaces that elevate everyday life.",
  },
  {
    title: "Our Approach",
    text: "We believe every project is unique and deserves a customized design language, one that is timeless and elegant, functionally planned, full of natural light, sensitive to materials and Vastu-responsive.",
  },
];

const MissionVision = () => (
  <section className="bg-forest py-12 md:py-16">
    <Container className="grid gap-8 md:grid-cols-2">
      {items.map((i) => (
        <div key={i.title} className="border-t-2 border-accent bg-white p-8 md:p-10">
          <h3 className="text-2xl font-semibold">{i.title}</h3>
          <p className="mt-4 leading-relaxed text-neutral-600">{i.text}</p>
        </div>
      ))}
    </Container>
  </section>
);

export default MissionVision;
