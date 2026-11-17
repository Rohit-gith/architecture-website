import AboutHero from "./AboutHero";
import CompanyStory from "./CompanyStory";
import MissionVision from "./MissionVision";
import Team from "./Team";
import WhyChooseUs from "../home/WhyChooseUs";
import ContactCTA from "../home/ContactCTA";
import Reveal from "../../components/common/Reveal";
import siteConfig from "../../config/siteConfig";

const About = () => (
  <>
    <AboutHero />
    <Reveal><CompanyStory /></Reveal>
    <MissionVision />
    <Reveal><WhyChooseUs /></Reveal>
    {/* Team section sirf tab jab siteConfig.showTeam = true */}
    {siteConfig.showTeam && <Reveal><Team /></Reveal>}
    <ContactCTA />
  </>
);
export default About;
