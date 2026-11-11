import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ImageBox from "../../components/common/ImageBox";
import CountUp from "../../components/common/CountUp";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Cities Served" },
  { value: "12+", label: "Awards" },
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
            From private homes and interiors to commercial buildings and landscapes, every project
            starts with understanding the site, the budget and the people who will use the space.
            We stay involved from the first sketch to the final handover.
          </p>
        </div>
        <div className="aspect-[4/3]"><ImageBox src="/images/about/our-story.png" alt="Our story" /></div>
      </div>
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-4xl md:text-5xl text-accent"><CountUp value={s.value} /></p>
            <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">{s.label}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default CompanyStory;
