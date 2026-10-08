import { useEffect, useState } from "react";
import Button from "../../components/common/Button";

// Video: public/videos/hero.mp4 (poster image: public/images/hero/hero.jpg)
const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Cities Served" },
];

// "250+" jaisi value ko 0 se 250 tak smooth chadhata hai (shuru me tez, ant me dheere).
// Reduced-motion wale users ko seedha final number dikhta hai.
const CountUp = ({ value, duration = 2000 }) => {
  const end = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(end);
      return undefined;
    }
    let raf;
    let start;
    const tick = (t) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / duration, 1);
      setCurrent(Math.round(end * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  // Invisible final number pehle se jagah gher leta hai, isliye chadhte waqt layout hilta nahi
  return (
    <span className="relative inline-block">
      <span className="invisible">{end}{suffix}</span>
      <span className="absolute inset-0">{current}{suffix}</span>
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

    <div className="relative container mx-auto px-4 pt-24 pb-40">
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
    <div className="absolute right-8 bottom-32 hidden md:flex flex-col items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">Scroll</span>
      <div className="relative h-14 w-px overflow-hidden bg-white/25">
        <span className="absolute inset-0 bg-white animate-scroll-line" />
      </div>
    </div>

    {/* Glass stats bar (gol / rounded) */}
    <div className="absolute bottom-6 md:bottom-8 inset-x-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 divide-x divide-white/20 rounded-[2rem] md:rounded-full border border-white/15 bg-black/30 px-5 py-4 md:px-12 md:py-5 backdrop-blur-md">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 px-3 md:px-10 first:pl-0 last:pr-0">
              <span className="font-heading text-2xl md:text-3xl text-[#d9b56d]">
                <CountUp value={s.value} />
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-200">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;