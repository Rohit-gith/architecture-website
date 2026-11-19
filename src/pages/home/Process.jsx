import { MessagesSquare, Compass, PencilRuler, Box, FileCheck2 } from "lucide-react";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";

const steps = [
  { icon: MessagesSquare, title: "Consultation", text: "We understand your needs, lifestyle, budget and site." },
  { icon: Compass, title: "Planning", text: "Vastu-compliant layouts that make the most of every space." },
  { icon: PencilRuler, title: "Design", text: "A customized design language with 2D drawings and details." },
  { icon: Box, title: "Visualization", text: "Photorealistic 3D renders and walkthroughs before you build." },
  { icon: FileCheck2, title: "Detailing", text: "Precise drawings and premium detailing ready for execution." },
];

const Process = () => (
  <section className="py-12 md:py-20">
    <Container>
      <Reveal>
        <SectionTitle
          eyebrow="How We Work"
          title="A Clear Process, Start to Finish"
          subtitle="Five simple steps that take your project from first idea to a design ready to build."
        />
      </Reveal>

      <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-5 lg:gap-6">
        {/* Desktop par steps ko jodne wali line */}
        <span className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-accent/30 lg:block" aria-hidden="true" />
        {steps.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 120} className={i === steps.length - 1 ? "col-span-2 lg:col-span-1" : ""}>
            <div className="relative flex flex-col items-center text-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-white text-accent">
                <Icon size={26} strokeWidth={1.25} />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="mt-4 text-base font-medium sm:mt-5 sm:text-lg">{title}</h3>
              <p className="mt-1.5 max-w-[16rem] text-[13px] leading-relaxed text-neutral-500 sm:mt-2 sm:text-sm">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default Process;
