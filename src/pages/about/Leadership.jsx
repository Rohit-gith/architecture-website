import PageHero from "../../components/common/PageHero";
import Container from "../../components/common/Container";
import ImageBox from "../../components/common/ImageBox";
import leadership from "../../data/leadership";

const Leadership = () => (
  <>
    <PageHero title="Leadership" subtitle="The people who guide our vision and values." />
    <section className="py-20 md:py-28">
      <Container className="space-y-24">
        {leadership.map((l, i) => (
          <div key={l.id} className="grid gap-12 md:grid-cols-2 items-center">
            <div className={`aspect-[4/5] ${i % 2 ? "md:order-2" : ""}`}>
              <ImageBox src={l.image} alt={l.name} />
            </div>
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">{l.role}</p>
              <h2 className="text-3xl md:text-4xl font-medium">{l.name}</h2>
              <blockquote className="mt-6 border-l-2 border-accent pl-5 font-heading text-xl italic text-neutral-700">
                &ldquo;{l.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-neutral-600 leading-relaxed">{l.bio}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  </>
);

export default Leadership;