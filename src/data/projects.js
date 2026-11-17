// Client (Urban Crafting) ke office profile PDF ke projects.
// Photos: public/images/projects/<id>/1.webp, 2.webp ... (1 = main photo, baaki gallery).
// Fields: status (Completed / Ongoing / Proposed), area, style, plots, cost — jo pata ho wahi likho, baaki chhod do.
// overview: project page ke paragraphs. highlights: "Key Highlights" list. Dono optional.
// List me pehle 3 projects Home page ke "Featured Projects" me dikhte hain.

// photos("kaimatiya-villa", 3) -> ["/images/projects/kaimatiya-villa/1.webp", ... 3.webp]
const photos = (id, count) => Array.from({ length: count }, (_, i) => `/images/projects/${id}/${i + 1}.webp`);

const residentialNote =
  "At Urban Crafting, we design residences that are contemporary, contextual and timeless. Each facade is not just a visual statement, but a carefully crafted response that enhances the everyday living experience.";

const make = ({ id, count = 1, ...rest }) => {
  const [image, ...gallery] = photos(id, count);
  return { id, image, gallery, ...rest };
};

const projects = [
  make({
    id: "kaimatiya-villa",
    title: "Contemporary Villa, Kaimatiya",
    category: "Residential",
    location: "Kaimatiya, Bhubaneswar",
    status: "Ongoing",
    description: "An ongoing residential villa with an arched central glazing, layered terraces and landscaped approach.",
    overview: [residentialNote],
  }),
  make({
    id: "nuahata-triplex-housing",
    count: 4,
    title: "Triplex Housing Project, Nuahata",
    category: "Plotted Housing",
    location: "Nuahata, Cuttack",
    area: "3.448 Acres",
    plots: "53 Sub Plots",
    description: "A high-end plotted development of spacious triplex villas with a strong emphasis on privacy, openness and connection to nature.",
    overview: [
      "The Triplex Housing Project is envisioned as a high-end residential development that seamlessly blends modern architecture, functional planning, and luxurious living experiences. Designed to cater to contemporary urban lifestyles, the project offers spacious triplex villas with a strong emphasis on privacy, openness, and connection to nature.",
      "The architectural language reflects a clean, modern aesthetic characterized by bold massing, layered facades, and a refined material palette of stone, textured concrete, glass, and metal accents. Each unit is carefully designed to create a distinct identity while maintaining a cohesive visual harmony across the development.",
    ],
    highlights: ["Spacious triplex villas", "Bold massing and layered facades", "Stone, textured concrete, glass and metal palette", "Distinct identity for every unit"],
  }),
  make({
    id: "raghunathpur-apartment-interior",
    count: 6,
    title: "Classical Luxury Apartment Interior",
    category: "Interior",
    location: "Raghunathpur, Bhubaneswar",
    status: "Completed",
    area: "Approx. 1,400 sq ft",
    style: "Classical Luxury Interior",
    description: "A luxury apartment designed as an elegant fusion of classical detailing and contemporary comfort.",
    overview: [
      "This luxury apartment has been designed as an elegant fusion of classical detailing and contemporary comfort, creating a timeless living environment that reflects sophistication, warmth and refined modern living.",
      "The design philosophy revolves around bringing grandeur into everyday residential spaces through balanced proportions, luxurious materials, layered lighting and carefully curated detailing. Inspired by classical interiors yet adapted for modern lifestyles, the apartment combines ornamental aesthetics with clean contemporary functionality.",
    ],
    highlights: ["Balanced proportions", "Luxurious materials", "Layered lighting", "Carefully curated detailing"],
  }),
  make({
    id: "kaimatiya-villa-interior",
    count: 8,
    title: "Contemporary Luxury Villa Interior",
    category: "Interior",
    location: "Kaimatiya, Bhubaneswar",
    status: "Ongoing",
    area: "Approx. 4,200 sq ft",
    style: "Contemporary Luxury Interior",
    cost: "₹75 Lakhs",
    description: "A premium contemporary interior for a modern villa, focused on elegance, comfort, functionality and timeless aesthetics.",
    overview: [
      "The project involves designing a premium contemporary luxury interior for a modern villa residence with a focus on elegance, comfort, functionality and timeless aesthetics.",
      "The interior spaces reflect a calm and sophisticated lifestyle through a balanced use of textures, lighting, materials and spatial planning.",
      "The design intent was to create a home interior that feels luxurious yet warm, modern yet inviting. The overall atmosphere emphasizes openness, natural light, refined detailing, and seamless spatial flow while maintaining practicality for everyday family living.",
    ],
    highlights: ["Luxurious yet warm", "Openness and natural light", "Refined detailing", "Seamless spatial flow"],
  }),
  make({
    id: "sankarpur-residence",
    title: "Residence at Sankarpur",
    category: "Residential",
    location: "Sankarpur, Bhubaneswar",
    status: "Completed",
    description: "A completed contemporary residence with a stone-clad tower element, timber accents and generous glazing.",
    overview: [residentialNote],
  }),
  make({
    id: "hotel-gothapatna",
    title: "Hotel Building, Gothapatna",
    category: "Commercial",
    location: "Gothapatna, Bhubaneswar",
    status: "Proposed",
    description: "A proposed hotel with a classical facade, ornamental screens and a grand arched entrance colonnade.",
  }),
  make({
    id: "sarat-villa-balianta",
    count: 3,
    title: "Sarat Villa – Duplex Housing, Balianta",
    category: "Plotted Housing",
    location: "Balianta, Bhubaneswar",
    area: "3.6 Acres",
    plots: "73 Sub Plots",
    description: "An economical duplex housing project offering quality, cost-effective homes for middle-income families.",
    overview: [
      "The Economical Duplex Housing Project is conceived as a cost-effective residential development that balances functionality, affordability and aesthetic simplicity.",
      "The project aims to provide quality housing solutions for middle-income families without compromising on spatial comfort, ventilation, and long-term usability. The design focuses on maximum efficiency of space and resources, ensuring that every element contributes to practical living while maintaining a clean architectural expression.",
      "The built form is designed with minimal projections and structural complexity, enabling faster construction and cost control.",
    ],
    highlights: [
      "Simplicity in form and structure",
      "Optimized planning to reduce construction cost",
      "Use of locally available materials",
      "Low-maintenance and durable finishes",
    ],
  }),
  make({
    id: "jharpada-apartments",
    title: "Residential Apartments, Jharpada",
    category: "Apartments",
    location: "Jharpada, Bhubaneswar",
    status: "Completed",
    description: "A completed residential apartment building with a modern grey-and-white facade and timber-lined balconies.",
  }),
  make({
    id: "balasore-compact-home",
    count: 7,
    title: "Compact Home Renovation, ACPL Greens",
    category: "Interior",
    location: "ACPL Greens, Balasore",
    status: "Completed",
    area: "Approx. 800 sq ft",
    style: "Contemporary Interior",
    cost: "₹20 Lakhs",
    description: "A budget-friendly renovation where smart planning makes a compact 800 sq ft home modern, comfortable and spacious.",
    overview: [
      "This project is a thoughtfully designed low-budget residential interior developed within an 800 sq ft compact home, where smart planning and practical design solutions come together to create a modern, comfortable and visually appealing living environment.",
      "The design approach focuses on achieving maximum functionality with minimum expenditure while maintaining a clean and contemporary aesthetic. Every space has been carefully optimized to ensure efficient circulation, ample storage, and a sense of openness despite the compact footprint.",
      "A simple yet elegant material palette has been used throughout, featuring economical laminates, soft neutral tones, warm wood textures, and minimal decorative elements to create a calm and welcoming atmosphere. Strategic use of lighting, reflective finishes, and subtle accent details enhances the perception of space while keeping the interiors budget-friendly.",
    ],
    highlights: ["Maximum function, minimum spend", "Efficient circulation and ample storage", "Warm wood and soft neutral palette", "Lighting that makes the space feel bigger"],
  }),
  make({
    id: "dumduma-apartments",
    title: "Residential Apartments, Dumduma",
    category: "Apartments",
    location: "Dumduma, Bhubaneswar",
    status: "Ongoing",
    description: "An ongoing residential apartment project with a refined white facade, golden accents and landscaped frontage.",
  }),
  make({
    id: "sum-hospital-residence",
    title: "Residence near SUM Hospital",
    category: "Residential",
    location: "Near SUM Hospital, Bhubaneswar",
    status: "Ongoing",
    description: "An ongoing residence with a bold frame, terracotta and timber accents and a patterned jaali screen.",
    overview: [residentialNote],
  }),
  make({
    id: "kalinganagar-commercial",
    title: "Commercial Building, Kalinganagar",
    category: "Commercial",
    location: "Kalinganagar, Bhubaneswar",
    status: "Ongoing",
    description: "An ongoing commercial project with a contrasting dark-and-white facade and golden screen panels.",
  }),
  make({
    id: "madhavnagar-residence",
    title: "Residence at Madhavnagar",
    category: "Residential",
    location: "Madhavnagar, Bhubaneswar",
    status: "Ongoing",
    description: "An ongoing residential project with a strong framed facade, warm timber cladding and planted terraces.",
    overview: [residentialNote],
  }),
  make({
    id: "patrapada-apartments",
    title: "Residential Apartments, Patrapada",
    category: "Apartments",
    location: "Patrapada, Bhubaneswar",
    status: "Ongoing",
    description: "An ongoing residential apartment project with timber-finish feature panels and planted balconies.",
  }),
  make({
    id: "hotel-mendhasala",
    title: "Hotel Building, Mendhasala",
    category: "Commercial",
    location: "Mendhasala, Bhubaneswar",
    status: "Proposed",
    description: "A proposed boutique hotel with large glazed volumes, timber louvers and a cantilevered roof.",
  }),
  make({
    id: "jharpada-classic-apartments",
    title: "Classic Facade Apartments, Jharpada",
    category: "Apartments",
    location: "Jharpada, Bhubaneswar",
    status: "Completed",
    description: "A completed residential apartment project with a classical stone-textured facade and elegant cornices.",
  }),
  make({
    id: "bypass-road-commercial",
    title: "Commercial Building, Cuttack-Puri Bypass",
    category: "Commercial",
    location: "Cuttack-Puri Bypass Road, Bhubaneswar",
    status: "Ongoing",
    description: "An ongoing commercial project with a full-height glazed showroom front and timber-clad feature box.",
  }),
  make({
    id: "patrapada-proposed-apartments",
    title: "Proposed Apartments, Patrapada",
    category: "Apartments",
    location: "Patrapada, Bhubaneswar",
    status: "Proposed",
    description: "A proposed residential apartment project with a playful, colour-blocked facade.",
  }),
  make({
    id: "interior-design-portfolio",
    count: 8,
    title: "Interior Design Portfolio",
    category: "Interior",
    location: "Odisha",
    description: "A selection of interior spaces and details, from lounges, retail and dining to modular kitchens, wrought-iron entrances and the sketches behind them.",
    overview: [
      "Our interiors are timeless and elegant, functionally planned, and designed around natural light, honest materials and Vastu-responsive layouts.",
    ],
    highlights: ["Timeless & Elegant Design", "Functional Planning", "Natural Light Optimization", "Material Sensitivity", "Vastu-responsive planning"],
  }),
  make({
    id: "residential-facades",
    count: 8,
    title: "Residential Facade Designs",
    category: "Residential",
    location: "Odisha",
    description: "A collection of contemporary residential facades, each with its own identity.",
    overview: [residentialNote],
  }),
];

export const categories = ["All", "Residential", "Apartments", "Plotted Housing", "Commercial", "Interior"];

export default projects;
