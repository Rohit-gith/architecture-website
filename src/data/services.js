import { Building2, Sofa, Compass, Box } from "lucide-react";

// Client ke office profile PDF ki "Our Services" list.
// image: Services page par har service ke saath dikhne wali photo. includes: "What's included" list.
const services = [
  {
    id: "architecture-design",
    title: "Architecture Design",
    icon: Building2,
    image: "/images/services/architecture.webp",
    description:
      "Luxury architecture for homes, businesses and institutions, with contemporary facades, functional planning and a design language created for each project.",
    includes: [
      "Residential (Villas, Apartments, Group Housing)",
      "Commercial Buildings",
      "Institutional Projects",
      "Plotted Housing Developments",
    ],
  },
  {
    id: "interior-design",
    title: "Interior Design",
    icon: Sofa,
    image: "/images/services/interior.webp",
    description:
      "Refined interiors that feel luxurious yet warm, with a balanced use of textures, lighting, materials and spatial planning.",
    includes: ["Luxury Residential Interiors", "Modular Kitchen & Wardrobes", "Office & Retail Interiors"],
  },
  {
    id: "planning-consultancy",
    title: "Planning & Consultancy",
    icon: Compass,
    image: "/images/services/planning.webp",
    description:
      "Smart, Vastu-aware planning that makes the most of every square foot, backed by clear drawings at every stage.",
    includes: ["Vastu-Compliant Planning", "Layout Planning & Space Optimization", "2D Drawings & 3D Visualization"],
  },
  {
    id: "visualization-presentation",
    title: "Visualization & Presentation",
    icon: Box,
    image: "/images/services/visualization.webp",
    description:
      "See your project before it is built, with photorealistic renders, walkthroughs and presentation-ready drawings.",
    includes: ["3D Renders (Photorealistic)", "Walkthrough Animations", "Presentation Drawings"],
  },
];

export default services;
