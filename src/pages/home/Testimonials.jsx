import { Quote } from "lucide-react";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";
import testimonials from "../../data/testimonials";

const Testimonials = () => (
  <section className="bg-cream py-16 md:py-24">
    <Container>
      <Reveal>
        <SectionTitle
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by homeowners, businesses and developers across Odisha and beyond."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 120} className="h-full">
            <figure className="flex h-full flex-col border-t-2 border-accent bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <Quote size={28} strokeWidth={1.25} className="text-accent" />
              <blockquote className="mt-5 flex-1 font-heading text-lg italic leading-relaxed text-neutral-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-neutral-100 pt-5">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-neutral-500">{t.project}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default Testimonials;
