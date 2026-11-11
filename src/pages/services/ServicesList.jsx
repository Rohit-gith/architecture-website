import { Check } from "lucide-react";
import Container from "../../components/common/Container";
import ImageBox from "../../components/common/ImageBox";
import Reveal from "../../components/common/Reveal";
import Button from "../../components/common/Button";
import services from "../../data/services";

// Har service ek row: ek taraf photo, doosri taraf text. Rows baari-baari left/right badalti hain.
const ServicesList = () => (
  <section className="py-16 md:py-24">
    <Container className="space-y-20 md:space-y-28">
      {services.map((s, i) => {
        const Icon = s.icon;
        const flip = i % 2 === 1;
        return (
          <div key={s.id} id={s.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={`relative ${flip ? "lg:order-2" : ""}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <ImageBox src={s.image} alt={s.title} className="transition duration-700 hover:scale-105" />
              </div>
              <span className={`absolute -bottom-6 hidden h-24 w-24 items-center justify-center bg-accent text-white shadow-xl md:flex ${flip ? "-left-6" : "-right-6"}`}>
                <Icon size={36} strokeWidth={1.25} />
              </span>
            </Reveal>

            <Reveal delay={120}>
              <p className="font-heading text-6xl leading-none text-accent/25">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-3xl font-medium md:text-4xl">{s.title}</h2>
              <span className="mt-5 block h-0.5 w-12 bg-accent" />
              <p className="mt-5 max-w-lg leading-relaxed text-neutral-600">{s.description}</p>
              {s.includes?.length > 0 && (
                <>
                  <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-neutral-500">What's included</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="mt-8">
                <Button to="/contact" variant="dark" arrow>Discuss Your Project</Button>
              </div>
            </Reveal>
          </div>
        );
      })}
    </Container>
  </section>
);

export default ServicesList;
