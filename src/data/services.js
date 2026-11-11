import { Building2, Armchair, Leaf, Box, Landmark, Settings } from "lucide-react";

// image: Services page par har service ke saath dikhne wali photo (public/images/ me se).
// includes: "What's included" list.
const services = [
  {
    id: "architectural-design",
    title: "Architectural Design",
    icon: Building2,
    image: "/images/projects/commercial-building.webp",
    description: "Concept to construction drawings for residential, commercial and institutional buildings.",
    includes: ["Site study and concept design", "Floor plans, elevations and sections", "Working and approval drawings", "Structure and services coordination"],
  },
  {
    id: "interior-design",
    title: "Interior Design",
    icon: Armchair,
    image: "/images/projects/residential-interior.webp",
    description: "Space planning, materials, furniture and lighting that match how you live and work.",
    includes: ["Space planning and layouts", "Material and colour selection", "Custom furniture and joinery", "Lighting design"],
  },
  {
    id: "landscape-design",
    title: "Landscape Design",
    icon: Leaf,
    image: "/images/home/why-us.webp",
    description: "Gardens, courtyards and outdoor spaces that connect buildings with nature.",
    includes: ["Garden and courtyard design", "Native and low-water planting", "Water features and paving", "Outdoor lighting"],
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    icon: Box,
    image: "/images/about/our-story.webp",
    description: "Realistic renders and walkthroughs so you can see the design before it is built.",
    includes: ["Photo-realistic exterior renders", "Interior views", "Walkthrough videos", "Design options to compare"],
  },
  {
    id: "urban-planning",
    title: "Urban Planning",
    icon: Landmark,
    image: "/images/projects/green-court.webp",
    description: "Site analysis and layout planning for townships, campuses and large developments.",
    includes: ["Site analysis and master planning", "Plot and road layouts", "Open space and amenity planning", "Phasing strategy"],
  },
  {
    id: "project-management",
    title: "Project Management",
    icon: Settings,
    image: "/images/projects/sustainable-home.webp",
    description: "Site supervision, vendor coordination and quality control until handover.",
    includes: ["Budget and schedule tracking", "Vendor and contractor coordination", "Regular site supervision", "Quality checks and handover"],
  },
];

export default services;
