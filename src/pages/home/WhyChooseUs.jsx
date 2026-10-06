import { Lightbulb, Recycle, Users, CalendarCheck } from "lucide-react";
import ImageBox from "../../components/common/ImageBox";
import SectionTitle from "../../components/common/SectionTitle";

const points = [
  { icon: Lightbulb, text: "Innovative & Modern Designs" },
  { icon: Recycle, text: "Sustainable and Eco-friendly Solutions" },
  { icon: Users, text: "Experienced & Dedicated Team" },
  { icon: CalendarCheck, text: "On-time Project Delivery" },
];

const WhyChooseUs = () => (
  <section className="grid lg:grid-cols-[1.15fr_1fr]">
    <div className="min-h-[300px]"><ImageBox src="/images/home/why-us.png" alt="Why choose us" /></div>
    <div className="px-6 md:px-16 py-14 flex flex-col justify-center">
      <SectionTitle align="left" eyebrow="Why Choose Us" title="Design with Purpose" />
      <p className="-mt-6 mb-8 text-neutral-600 leading-relaxed">
        We believe in creating spaces that are functional, sustainable and inspiring. Our client-centric approach
        ensures every project is unique and built with long-term value.
      </p>
      <ul className="space-y-4">
        {points.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-4 text-sm">
            <Icon size={20} strokeWidth={1.25} className="text-accent" /> {text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChooseUs;