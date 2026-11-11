import { MessagesSquare, PencilRuler, Box, HardHat, KeyRound } from "lucide-react";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";

const steps = [
  { icon: MessagesSquare, title: "Consultation", text: "We listen to your needs, budget and timeline, and visit the site." },
  { icon: PencilRuler, title: "Concept", text: "Initial sketches and layout options that set the design direction." },
  { icon: Box, title: "Design & 3D", text: "Detailed drawings, materials and 3D views so you see it before it is built." },
  { icon: HardHat, title: "Construction", text: "Site supervision and vendor coordination to keep quality on track." },
  { icon: KeyRound, title: "Handover", text: "Final checks, snag fixing and a space ready for you to move in." },
];

const Process = () => (
  <section className="py-16 md:py-24">
    <Container>
      <Reveal>
        <SectionTitle
          eyebrow="How We Work"
          title="A Clear Process, Start to Finish"
          subtitle="Five simple steps that take your project from first idea to final handover."
        />
      </Reveal>

      <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {/* Desktop par steps ko jodne wali line */}
        <span className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-accent/30 lg:block" aria-hidden="true" />
        {steps.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 120}>
            <div className="relative flex flex-col items-center text-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-white text-accent">
                <Icon size={26} strokeWidth={1.25} />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="mt-5 text-lg font-medium">{title}</h3>
              <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-neutral-500">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default Process;
