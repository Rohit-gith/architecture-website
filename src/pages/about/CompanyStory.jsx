import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ImageBox from "../../components/common/ImageBox";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "40+", label: "Team Members" },
  { value: "25", label: "Awards" },
];

const CompanyStory = () => (
  <section className="py-20 md:py-28">
    <Container>
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <SectionTitle align="left" title="Our Story" />
          <p className="text-neutral-600 leading-relaxed">
            Started as a small studio with a simple idea: design should serve people. Over the years
            we have grown into a full-service practice, but the approach remains the same. Listen
            carefully, design thoughtfully and build with care.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Replace this text with your own company story.
          </p>
        </div>
        <div className="aspect-[4/3]"><ImageBox src="/images/about/our-story.png" alt="Our story" /></div>
      </div>
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-4xl md:text-5xl text-accent">{s.value}</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">{s.label}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default CompanyStory;
