import PageHero from "../../components/common/PageHero";
import Team from "./Team";

// /team URL par khulne wala page (Team section About page me bhi dikhta hai)
const TeamPage = () => (
  <>
    <PageHero title="Our Team" subtitle="The people who design and deliver your projects." />
    <Team />
  </>
);

export default TeamPage;