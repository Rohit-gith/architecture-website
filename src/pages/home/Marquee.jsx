// Chalti hui text patti. Words badalne ho to yahan badlo.
const words = ["Architecture", "Interiors", "Landscape", "Planning", "3D Visualization", "Sustainable Design"];

const Row = ({ hidden = false }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
    {words.map((w) => (
      <span key={w} className="flex items-center">
        <span className="whitespace-nowrap px-6 font-heading text-4xl italic text-ink/80 md:px-10 md:text-6xl">{w}</span>
        <span className="h-2 w-2 rotate-45 bg-accent md:h-2.5 md:w-2.5" />
      </span>
    ))}
  </div>
);

// Same row do baar, aur -50% tak khiskane se patti bina ruke chalti rehti hai
const Marquee = () => (
  <section className="overflow-hidden border-y border-accent/30 bg-cream py-8 md:py-10" aria-label="What we do">
    <div className="flex w-max animate-marquee motion-reduce:animate-none">
      <Row />
      <Row hidden />
    </div>
  </section>
);

export default Marquee;
