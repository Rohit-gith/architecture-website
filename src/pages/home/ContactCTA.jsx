import Container from "../../components/common/Container";
import Button from "../../components/common/Button";

const ContactCTA = () => (
  <section className="relative bg-ink text-white py-16 overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(/images/home/cta.webp)" }} />
    <Container className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <p className="mb-3 text-[11px] uppercase tracking-[0.3em]">Let's Build Together</p>
        <h2 className="text-3xl md:text-4xl font-medium">Ready to Start Your Project?</h2>
        <p className="mt-3 text-sm text-neutral-300">Contact us today and let's turn your vision into a remarkable space.</p>
      </div>
      <Button to="/contact" arrow>Get in Touch</Button>
    </Container>
  </section>
);

export default ContactCTA;