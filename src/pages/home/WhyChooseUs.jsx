import { Lightbulb, Sun, Gem, Leaf } from "lucide-react";
import ImageBox from "../../components/common/ImageBox";
import SectionTitle from "../../components/common/SectionTitle";

// Client ke office profile ki "Design Philosophy"
const points = [
  { icon: Lightbulb, text: "Modern aesthetics with functional planning" },
  { icon: Sun, text: "Natural light and ventilation" },
  { icon: Gem, text: "Material honesty and detailing" },
  { icon: Leaf, text: "Contextual and climate-responsive design" },
];

const WhyChooseUs = () => (
  <section className="grid lg:grid-cols-[1.15fr_1fr]">
    <div className="min-h-[300px] sm:min-h-[420px]">
      <ImageBox src="/images/home/philosophy.webp" alt="Interior with arched shelving by Urban Crafting" />
    </div>
    <div className="flex flex-col justify-center bg-cream px-6 py-12 md:px-16">
      <SectionTitle align="left" eyebrow="Design Philosophy" title="Design Is How It Feels" />
      <blockquote className="-mt-4 mb-6 border-l-2 border-accent pl-5 font-heading text-xl italic leading-relaxed text-neutral-700">
        &ldquo;Design is not just what it looks like, but how it feels.&rdquo;
      </blockquote>
      <p className="mb-8 leading-relaxed text-neutral-600">
        We believe every project is unique and deserves a customized design language. Our approach blends:
      </p>
      <ul className="space-y-4">
        {points.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-4 text-sm">
            <Icon size={20} strokeWidth={1.25} className="shrink-0 text-accent" /> {text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChooseUs;
