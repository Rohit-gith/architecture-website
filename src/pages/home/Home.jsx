import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import ServicesPreview from "./ServicesPreview";
import Process from "./Process";
import Marquee from "./Marquee";
import FeaturedProjects from "./FeaturedProjects";
import WhyChooseUs from "./WhyChooseUs";
import LatestBlog from "./LatestBlog";
import ContactCTA from "./ContactCTA";
import Reveal from "../../components/common/Reveal";

const Home = () => (
  <>
    <Hero />
    <Reveal><AboutPreview /></Reveal>
    <ServicesPreview />
    <Process />
    <Marquee />
    <FeaturedProjects />
    <Reveal><WhyChooseUs /></Reveal>
    {/* Testimonials: client ke asli reviews aane par yahan <Testimonials /> wapas lagao */}
    <LatestBlog />
    <ContactCTA />
  </>
);

export default Home;
