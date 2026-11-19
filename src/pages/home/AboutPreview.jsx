import { useEffect, useState } from "react";
import { Building2, LandPlot, Map, MapPin, Sofa } from "lucide-react";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import ImageBox from "../../components/common/ImageBox";
import Button from "../../components/common/Button";
import CountUp from "../../components/common/CountUp";
import Reveal from "../../components/common/Reveal";

// Numbers client ke office profile PDF se gine gaye hain
const stats = [
  { icon: Building2, value: "25+", label: "Projects Designed" },
  { icon: LandPlot, value: "126", label: "Housing Plots Planned" },
  { icon: Map, value: "7+", label: "Acres Master-Planned" },
  { icon: Sofa, value: "6400+", label: "Sq.ft. of Interiors" },
];

// Collage ki photos (sab client ke projects). Badi = architecture, chhoti = interior. Dono saath-saath badalti hain.
const exteriors = [
  { src: "/images/projects/kaimatiya-villa/1.webp", alt: "Contemporary villa, Kaimatiya" },
  { src: "/images/home/about.webp", alt: "Residential apartment with lit facade" },
  { src: "/images/projects/hotel-gothapatna/1.webp", alt: "Hotel building, Gothapatna" },
  { src: "/images/projects/nuahata-triplex-housing/1.webp", alt: "Triplex housing project, Nuahata" },
  { src: "/images/projects/sankarpur-residence/1.webp", alt: "Residence at Sankarpur" },
];
const interiors = [
  { src: "/images/projects/raghunathpur-apartment-interior/1.webp", alt: "Classical luxury apartment interior" },
  { src: "/images/projects/kaimatiya-villa-interior/1.webp", alt: "Contemporary luxury villa interior" },
  { src: "/images/projects/balasore-compact-home/1.webp", alt: "Compact home kitchen, ACPL Greens" },
  { src: "/images/projects/interior-design-portfolio/2.webp", alt: "Lounge with arched wall panels" },
  { src: "/images/projects/raghunathpur-apartment-interior/4.webp", alt: "Luxury bedroom interior" },
];
const SLIDE_MS = 4500;

// Ek ke upar ek rakhi photos; active wali fade-in hoti hai aur dheere zoom hoti hai
const Slides = ({ items, active, zoom = true }) =>
  items.map((img, i) => (
    <div
      key={img.src}
      className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
      aria-hidden={i !== active}
    >
      <ImageBox
        src={img.src}
        alt={img.alt}
        className={`transition-transform ease-linear motion-reduce:transition-none ${
          zoom && i === active ? "scale-110 duration-[6000ms]" : "scale-100 duration-[1200ms]"
        }`}
      />
    </div>
  ));

const AboutCollage = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % exteriors.length);
    }, SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative pb-10 pr-6 sm:pb-14 sm:pr-12">
      {/* Badi photo: architecture */}
      <Reveal>
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 shadow-xl">
          <Slides items={exteriors} active={active} />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Location badge */}
          <span className="absolute left-3 top-3 flex items-center gap-1.5 bg-forest/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-4 sm:top-4">
            <MapPin size={12} className="text-[#d9b56d]" /> Bhubaneswar, Odisha
          </span>

          {/* Kaunsi photo chal rahi hai: chhoti lines (click karke bhi badal sakte hain) */}
          <div className="absolute bottom-3 left-3 flex gap-1.5 sm:bottom-4 sm:left-4">
            {exteriors.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}: ${img.alt}`}
                className="py-2"
              >
                <span className={`block h-0.5 transition-all duration-500 ${i === active ? "w-7 bg-[#d9b56d]" : "w-3.5 bg-white/60"}`} />
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Chhoti photo: interior, badi photo ke kone par chadhi hui */}
      <Reveal delay={250} className="absolute bottom-0 right-0 w-[44%]">
        <div className="relative aspect-[4/3] overflow-hidden border-[5px] border-white bg-neutral-200 shadow-2xl sm:border-8">
          <Slides items={interiors} active={active} zoom={false} />
        </div>
      </Reveal>

      {/* Gold corner frame (sajawat) */}
      <span className="absolute -left-3 -top-3 hidden h-16 w-16 border-l-2 border-t-2 border-accent sm:block" aria-hidden="true" />
    </div>
  );
};

const AboutPreview = () => (
  <section className="py-12 md:py-20">
    <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr_0.6fr] lg:gap-12">
      <div>
        <SectionTitle align="left" eyebrow="About Us" title="Luxury Architecture, Refined Interiors" />
        <p className="-mt-4 mb-4 leading-relaxed text-neutral-600">
          Urban Crafting is a forward-thinking design studio specializing in luxury architecture and refined
          interior environments. We craft spaces that seamlessly blend modern aesthetics, functionality and
          timeless elegance.
        </p>
        <p className="mb-8 leading-relaxed text-neutral-600">
          Based in Bhubaneswar, we bring a contextual design approach that respects local climate, culture and
          lifestyle while delivering globally inspired solutions.
        </p>
        <Button to="/about" variant="dark" arrow>Know More</Button>
      </div>

      <AboutCollage />

      <div className="grid grid-cols-2 gap-6 bg-cream p-6 sm:p-8 lg:grid-cols-1">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4">
            <Icon size={28} strokeWidth={1.25} className="shrink-0 text-accent" />
            <div>
              <p className="font-heading text-2xl leading-none"><CountUp value={value} /></p>
              <p className="mt-1 text-xs text-neutral-500">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default AboutPreview;
