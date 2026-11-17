import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ImageBox from "../../components/common/ImageBox";
import CountUp from "../../components/common/CountUp";

// Text client ke office profile PDF ke "About Us" se. Numbers PDF ke projects se gine gaye hain.
const stats = [
  { value: "25+", label: "Projects Designed" },
  { value: "126", label: "Housing Plots Planned" },
  { value: "7+", label: "Acres Master-Planned" },
  { value: "6400+", label: "Sq.ft. of Interiors" },
];

const CompanyStory = () => (
  <section className="py-20 md:py-28">
    <Container>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionTitle align="left" eyebrow="Who We Are" title="Crafting Luxury, Defining Spaces" />
          <div className="space-y-4 leading-relaxed text-neutral-600">
            <p>
              Urban Crafting is a forward-thinking design studio specializing in <strong className="font-semibold text-ink">luxury
              architecture and refined interior environments</strong>. We craft spaces that seamlessly blend modern
              aesthetics, functionality and timeless elegance.
            </p>
            <p>
              Based in Bhubaneswar, we bring a contextual design approach that respects local climate, culture, and
              lifestyle while delivering globally inspired solutions.
            </p>
            <p>
              Our work reflects a balance of innovation, precision, and premium detailing, ensuring every project
              stands out with a unique identity.
            </p>
          </div>
        </div>
        <div className="aspect-[4/3]">
          <ImageBox src="/images/about/our-story.webp" alt="Aerial view of a villa and landscaped garden designed by Urban Crafting" />
        </div>
      </div>
      <div className="mt-20 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-4xl text-accent md:text-5xl"><CountUp value={s.value} /></p>
            <p className="mt-2 text-xs uppercase tracking-widest text-neutral-500 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default CompanyStory;
