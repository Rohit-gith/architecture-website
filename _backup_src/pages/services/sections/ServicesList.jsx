import Container from "../../../components/common/Container";
import ServiceCard from "../../../components/ui/ServiceCard";
import services from "../../../data/services";

const ServicesList = () => (
  <section className="py-20 md:py-28">
    <Container>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
      </div>
    </Container>
  </section>
);

export default ServicesList;
