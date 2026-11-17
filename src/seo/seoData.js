// SEO ka saara data ek jagah: har page ka title, description, share-photo aur Google ke liye structured data (JSON-LD).
// Ye file browser (src/components/common/Seo.jsx) aur build script (scripts/seo-build.mjs) dono use karte hain,
// isliye isme koi React / icon import mat karna.
import siteConfig from "../config/siteConfig.js";
import projects from "../data/projects.js";
import blog from "../data/blog.js";

export const SITE_URL = siteConfig.website.replace(/\/$/, "");
const NAME = siteConfig.name;
const DEFAULT_IMAGE = "/images/projects/kaimatiya-villa/1.webp";

export const absUrl = (path = "/") => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

const clip = (text, max = 158) => (text.length <= max ? text : `${text.slice(0, max - 1).replace(/[s,.;:]+S*$/, "")}…`);
// Title Google me ~60 akshar tak poora dikhta hai: brand naam tabhi jodo jab jagah ho
const withBrand = (title, max = 62) => (`${title} | ${NAME}`.length <= max ? `${title} | ${NAME}` : title);
// Do hisson ko tabhi jodo jab poora text seema me rahe
const joinFit = (a, b, max = 158) => (b && `${a} ${b}`.length <= max ? `${a} ${b}` : clip(a, max));

// Poori company ki jaankari (har page par Google ko)
export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: NAME,
  alternateName: `${NAME} – ${siteConfig.tagline}`,
  slogan: siteConfig.slogan,
  description:
    "Urban Crafting is a Bhubaneswar-based design studio of architects and interior designers specializing in luxury architecture, refined interiors, Vastu-compliant planning and 3D visualization.",
  url: SITE_URL,
  logo: absUrl("/favicon.png"),
  image: absUrl(DEFAULT_IMAGE),
  telephone: siteConfig.phone.replace(/\s/g, ""),
  email: siteConfig.email || undefined,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Bhubaneswar" },
    { "@type": "City", name: "Cuttack" },
    { "@type": "State", name: "Odisha" },
  ],
  knowsAbout: [
    "Architecture Design",
    "Interior Design",
    "Luxury Villa Design",
    "Apartment Design",
    "Plotted Housing Layout",
    "Commercial Building Design",
    "Vastu-Compliant Planning",
    "Modular Kitchen & Wardrobes",
    "3D Visualization",
  ],
  sameAs: Object.values(siteConfig.social).filter(Boolean),
});

const breadcrumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absUrl(path),
  })),
});

// Har static page ka SEO
const pages = {
  "/": {
    title: `${NAME} | Architects & Interior Designers, Bhubaneswar`,
    description:
      "Architects and interior designers in Bhubaneswar, Odisha. Luxury villas, apartments, plotted housing, commercial buildings, interiors and Vastu planning.",
    priority: "1.0",
  },
  "/about": {
    title: `About Us | ${NAME} – Architects in Bhubaneswar`,
    description:
      "Urban Crafting is a Bhubaneswar design studio specializing in luxury architecture and refined interiors that blend modern aesthetics and timeless elegance.",
    image: "/images/about/our-story.webp",
    crumb: "About Us",
    priority: "0.8",
  },
  "/services": {
    title: `Architecture, Interiors & Vastu Planning | ${NAME}`,
    description:
      "Architecture design, luxury interiors, modular kitchens, Vastu-compliant planning, 2D drawings, 3D renders and walkthroughs by Urban Crafting, Bhubaneswar.",
    image: "/images/services/architecture.webp",
    crumb: "Services",
    priority: "0.9",
  },
  "/projects": {
    title: `Projects – Villas, Apartments & Interiors | ${NAME}`,
    description:
      "Villas, apartments, plotted housing, hotels, commercial buildings and luxury interiors designed by Urban Crafting across Bhubaneswar, Cuttack and Odisha.",
    image: "/images/projects/nuahata-triplex-housing/1.webp",
    crumb: "Projects",
    priority: "0.9",
  },
  "/blog": {
    title: `Architecture & Interior Design Blog | ${NAME}`,
    description:
      "Practical ideas on planning your home, sustainable design for Odisha's climate, interior trends and workspace design from the Urban Crafting team.",
    image: blog[0]?.image,
    crumb: "Blog",
    priority: "0.7",
  },
  "/contact": {
    title: `Contact ${NAME} | Architects in Bhubaneswar`,
    description: `Talk to Urban Crafting about your villa, apartment, interior or commercial project. Call ${siteConfig.phone} or email ${siteConfig.email}.`,
    crumb: "Contact",
    priority: "0.8",
  },
};

const notFound = {
  title: `Page Not Found | ${NAME}`,
  description: "The page you are looking for does not exist.",
  noindex: true,
};

// Kisi bhi URL ka SEO (title, description, image, canonical, JSON-LD)
export const getSeo = (pathname) => {
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  const org = organizationLd();

  if (pages[path]) {
    const p = pages[path];
    const jsonLd = [org];
    if (p.crumb) jsonLd.push(breadcrumbLd([["Home", "/"], [p.crumb, path]]));
    return { ...p, path, type: "website", image: p.image || DEFAULT_IMAGE, jsonLd };
  }

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const project = projects.find((x) => x.id === projectMatch[1]);
    if (!project) return { ...notFound, path, image: DEFAULT_IMAGE, jsonLd: [org] };
    const city = project.location.split(",").pop().trim();
    const named = project.title.includes(city) ? project.title : `${project.title}, ${city}`;
    const facts = [project.location, project.status, project.area, project.plots].filter(Boolean).join(" · ");
    return {
      path,
      type: "article",
      title: withBrand(named.length <= 50 ? named : project.title),
      description: joinFit(project.description, `${facts}.`),
      image: project.image,
      priority: "0.7",
      jsonLd: [
        org,
        breadcrumbLd([["Home", "/"], ["Projects", "/projects"], [project.title, path]]),
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          image: [project.image, ...project.gallery].map(absUrl),
          genre: project.category,
          locationCreated: { "@type": "Place", name: project.location },
          creator: { "@id": `${SITE_URL}/#organization` },
        },
      ],
    };
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = blog.find((x) => x.slug === blogMatch[1]);
    if (!post) return { ...notFound, path, image: DEFAULT_IMAGE, jsonLd: [org] };
    return {
      path,
      type: "article",
      title: withBrand(post.title),
      description: clip(post.excerpt),
      image: post.image,
      published: post.date,
      priority: "0.6",
      jsonLd: [
        org,
        breadcrumbLd([["Home", "/"], ["Blog", "/blog"], [post.title, path]]),
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: absUrl(post.image),
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: absUrl(path),
        },
      ],
    };
  }

  return { ...notFound, path, image: DEFAULT_IMAGE, jsonLd: [org] };
};

// Sitemap me jaane wale saare URL
export const allRoutes = () => [
  ...Object.keys(pages),
  ...projects.map((p) => `/projects/${p.id}`),
  ...blog.map((b) => `/blog/${b.slug}`),
];
