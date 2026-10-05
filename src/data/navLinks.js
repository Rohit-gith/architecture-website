import { BookOpen, Compass, Users } from "lucide-react";

// children wale link dropdown me dikhte hain (icon + description ke saath)
const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Our Story", path: "/about", icon: BookOpen, description: "Who we are and how we began" },
      { label: "Leadership", path: "/leadership", icon: Compass, description: "The people guiding our vision" },
      { label: "Our Team", path: "/team", icon: Users, description: "Architects and designers behind the work" },
    ],
  },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default navLinks;