import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import TeamCard from "../../components/ui/TeamCard";
import team from "../../data/team";

const Team = () => (
  <section className="py-20 md:py-28">
    <Container>
      <SectionTitle title="Meet Our Team" subtitle="The people who design and deliver your projects." />
      <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
        {team.map((m) => <TeamCard key={m.id} member={m} />)}
      </div>
    </Container>
  </section>
);

export default Team;
