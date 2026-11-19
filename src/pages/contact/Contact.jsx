import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Container from "../../components/common/Container";
import BlueprintDoodles from "../../components/common/BlueprintDoodles";

const Contact = () => (
  <>
    <ContactHero />
    <section className="relative overflow-hidden bg-cream py-12 md:py-20">
      {/* Peeche halki blueprint lines (architect ke auzaar, plan, elevation) */}
      <BlueprintDoodles />
      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <ContactInfo />
        <ContactForm />
      </Container>
    </section>
    <ContactMap />
  </>
);

export default Contact;