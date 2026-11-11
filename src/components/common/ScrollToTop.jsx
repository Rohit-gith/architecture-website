import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

// Har page ka browser tab title
const titles = {
  "/": "Architecture & Design",
  "/about": "About Us",
  "/leadership": "Leadership",
  "/team": "Our Team",
  "/services": "Our Services",
  "/projects": "Our Projects",
  "/contact": "Contact Us",
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const page = titles[pathname] || (pathname.startsWith("/projects/") ? "Project" : "Page Not Found");
    document.title = `${page} | ${siteConfig.name}`;
  }, [pathname]);
  return null;
};

export default ScrollToTop;
