import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import ServicesPreview from "./ServicesPreview";
import Process from "./Process";
import Marquee from "./Marquee";
import FeaturedProjects from "./FeaturedProjects";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
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
    <Testimonials />
    <LatestBlog />
    <ContactCTA />
  </>
);

export default Home;
