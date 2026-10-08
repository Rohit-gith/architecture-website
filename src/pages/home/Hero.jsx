import { useEffect, useState } from "react";
import { Award, Building2, MapPin } from "lucide-react";
import Button from "../../components/common/Button";

// Video: public/videos/hero.mp4 (poster image: public/images/hero/hero.webp)
const stats = [
  { icon: Award, end: 10, suffix: "+", label: "Years of Experience" },
  { icon: Building2, end: 250, suffix: "+", label: "Projects Completed" },
  { icon: MapPin, end: 15, suffix: "+", label: "Cities Served" },
];

// Number 0 se upar ki taraf chadhta hai (page load par). Reduced-motion wale users ko seedha final number dikhta hai.
const CountUp = ({ end, suffix = "", duration = 1600 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return undefined;
    }
    let raf;
    let start;
    const tick = (t) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / duration, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  // Invisible final number jagah gher leta hai, taaki chadhte waqt layout hilta nahi
  return (
    <span className="relative inline-block tabular-nums">
      <span className="invisible">{end}{suffix}</span>
      <span className="absolute inset-0">{value}{suffix}</span>
    </span>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-900 to-neutral-700 text-white overflow-hidden">
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster="/images/hero/hero.webp"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

    {/* Left fade (text ke liye), top aur bottom halka dark */}
    <div className="absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

    <div className="relative container mx-auto px-4 pt-24 pb-48 md:pb-44">
      <div className="mb-6 flex items-center gap-4 animate-fade-up">
        <span className="h-px w-12 bg-[#d9b56d]" />
        <p className="text-xs uppercase tracking-[0.35em]">Designing a Better Tomorrow</p>
      </div>

      <h1
        className="max-w-xl text-5xl md:text-7xl font-medium leading-[1.05] drop-shadow-lg animate-fade-up"
        style={{ animationDelay: "150ms" }}
      >
        Spaces That <span className="italic text-[#d9b56d]">Inspire</span> Life
      </h1>

      <p
        className="mt-6 max-w-md text-neutral-100 leading-relaxed drop-shadow animate-fade-up"
        style={{ animationDelay: "300ms" }}
      >
        We create innovative, sustainable and timeless architectural spaces that enhance the way you live, work and connect.
      </p>

      <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "450ms" }}>
        <Button to="/projects" arrow>Explore Our Work</Button>
        <Button to="/contact" variant="light">Contact Us</Button>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute right-8 bottom-10 hidden md:flex flex-col items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</span>
      <div className="relative h-14 w-px overflow-hidden bg-white/25">
        <span className="absolute inset-0 bg-white animate-scroll-line" />
      </div>
    </div>

    {/* Stats: rounded glass card, har stat ke saath gol icon */}
    <div className="absolute bottom-6 md:bottom-10 inset-x-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-3 w-full md:w-fit  divide-x divide-white/15 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md shadow-2xl">
          {/* upar patli gold line */}
          <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b56d]/70 to-transparent" />

          {stats.map(({ icon: Icon, end, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-4 px-2 py-4 md:px-9 md:py-5 text-center md:text-left"
            >
              <span className="flex h-9 w-9 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border border-[#d9b56d]/50 bg-[#d9b56d]/10 text-[#d9b56d]">
                <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-heading text-2xl md:text-4xl leading-none text-white">
                  <CountUp end={end} suffix={suffix} />
                </p>
                <p className="mt-1.5 text-[9px] md:text-[11px] uppercase leading-tight tracking-widest text-neutral-300">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;