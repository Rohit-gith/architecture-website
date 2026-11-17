import { BookOpen, Compass, Users } from "lucide-react";
import siteConfig from "../config/siteConfig";

// children wale link dropdown me dikhte hain (icon + description ke saath)
// Leadership / Team tabhi dikhte hain jab siteConfig.showTeam = true ho.
const aboutLink = siteConfig.showTeam
  ? {
      label: "About",
      path: "/about",
      children: [
        { label: "Our Story", path: "/about", icon: BookOpen, description: "Who we are and how we began" },
        { label: "Leadership", path: "/leadership", icon: Compass, description: "The people guiding our vision" },
        { label: "Our Team", path: "/team", icon: Users, description: "Architects and designers behind the work" },
      ],
    }
  : { label: "About", path: "/about" };

const navLinks = [
  { label: "Home", path: "/" },
  aboutLink,
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default navLinks;
