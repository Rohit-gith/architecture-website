import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

// Background image upar wale "Why Choose Us" se alag rakho, warna dono sections chipke hue lagte hain
const ContactCTA = () => (
  <section className="relative overflow-hidden bg-ink py-20 text-white md:py-24">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/projects/green-court.webp)" }} />
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
    <Container className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="mb-4 flex items-center gap-4">
          <span className="h-px w-10 bg-[#d9b56d]" />
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#d9b56d]">Let's Build Together</p>
        </div>
        <h2 className="text-3xl font-medium md:text-5xl">Ready to Start Your Project?</h2>
        <p className="mt-4 max-w-lg text-neutral-300">Contact us today and let's turn your vision into a remarkable space.</p>
      </div>
      <Button to="/contact" arrow className="shrink-0 self-start md:self-auto">Get in Touch</Button>
    </Container>
  </section>
);

export default ContactCTA;
