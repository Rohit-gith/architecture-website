import { Award, Ruler, MapPin, Trophy } from "lucide-react";
import Container from "../../../components/common/Container";
import SectionTitle from "../../../components/common/SectionTitle";
import ImageBox from "../../../components/common/ImageBox";
import Button from "../../../components/common/Button";

const stats = [
  { icon: Award, value: "10+", label: "Years of Experience" },
  { icon: Ruler, value: "250+", label: "Projects Completed" },
  { icon: MapPin, value: "15+", label: "Cities Served" },
  { icon: Trophy, value: "12+", label: "Awards & Recognition" },
];

const AboutPreview = () => (
  <section className="py-16 md:py-20">
    <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr_0.6fr] items-center">
      <div>
        <SectionTitle align="left" eyebrow="About Us" title="Architecture Beyond Buildings" />
        <p className="-mt-6 mb-8 text-neutral-600 leading-relaxed">
          We are a passionate team of architects, designers and creatives dedicated to crafting meaningful spaces.
          Our approach blends innovation, functionality and aesthetics to bring your vision to life.
        </p>
        <Button to="/about" variant="dark" arrow>Know More</Button>
      </div>

      <div className="aspect-[16/10]"><ImageBox src="/images/home/about.jpg" alt="About us" /></div>

      <div className="bg-cream p-8 space-y-6">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4">
            <Icon size={28} strokeWidth={1.25} className="text-accent shrink-0" />
            <div>
              <p className="font-heading text-2xl leading-none">{value}</p>
              <p className="mt-1 text-xs text-neutral-500">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default AboutPreview;