import ContactHero from "./sections/ContactHero";
import ContactForm from "./sections/ContactForm";
import ContactInfo from "./sections/ContactInfo";
import Container from "../../components/common/Container";

const Contact = () => (
  <>
    <ContactHero />
    <section className="py-20 md:py-28">
      <Container className="grid gap-16 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </Container>
    </section>
  </>
);

export default Contact;
