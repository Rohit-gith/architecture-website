import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Container from "../../components/common/Container";

const Contact = () => (
  <>
    <ContactHero />
    <section className="bg-cream py-16 md:py-24">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <ContactInfo />
        <ContactForm />
      </Container>
    </section>
    <ContactMap />
  </>
);

export default Contact;