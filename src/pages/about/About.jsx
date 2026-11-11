import AboutHero from "./AboutHero";
import CompanyStory from "./CompanyStory";
import MissionVision from "./MissionVision";
import Team from "./Team";
import Reveal from "../../components/common/Reveal";

const About = () => (
  <>
    <AboutHero />
    <Reveal><CompanyStory /></Reveal>
    <MissionVision />
    <Reveal><Team /></Reveal>
  </>
);

export default About;
