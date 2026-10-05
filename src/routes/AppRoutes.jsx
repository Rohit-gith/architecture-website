import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import TeamPage from "../pages/about/TeamPage";
import Leadership from "../pages/about/Leadership";
import Projects from "../pages/projects/Projects";
import ProjectDetailsPage from "../pages/projects/ProjectDetailsPage";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route element={<PageLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;