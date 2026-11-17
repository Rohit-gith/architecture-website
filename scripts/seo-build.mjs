// Build ke baad chalta hai (npm run build -> postbuild). Kaam:
// 1. Har page ke liye alag HTML (dist/about.html, dist/projects/<id>.html ...) jisme us page ka apna
//    title, description, canonical, share-photo aur JSON-LD hota hai. Google, WhatsApp, Facebook, LinkedIn
//    ko link share karne par sahi title + photo dikhta hai (ye bots JavaScript nahi chalate).
// 2. dist/sitemap.xml  3. dist/robots.txt
// Data src/seo/seoData.js se aata hai. Vercel par vercel.json ka "cleanUrls" /about ko about.html se jodta hai.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL, absUrl, allRoutes, getSeo } from "../src/seo/seoData.js";
import siteConfig from "../src/config/siteConfig.js";

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const headFor = (seo) => {
  const url = absUrl(seo.path);
  const image = absUrl(seo.image);
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="robots" content="${seo.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:type" content="${seo.type || "website"}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:alt" content="${esc(seo.title)}" />`,
    `<meta property="og:site_name" content="${esc(siteConfig.name)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    seo.published && `<meta property="article:published_time" content="${esc(seo.published)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    `<script type="application/ld+json" id="ld-json">${JSON.stringify(seo.jsonLd.length === 1 ? seo.jsonLd[0] : seo.jsonLd).replace(/</g, "\\u003c")}</script>`,
  ].filter(Boolean);
  return tags.join("\n    ");
};

// JavaScript band ho to bhi page ka naam, description aur saare links dikhein (search engines ke liye)
const navLinks = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Blog", "/blog"], ["Contact", "/contact"]];
const bodyFor = (seo) =>
  `<noscript>
      <h1>${esc(seo.title)}</h1>
      <p>${esc(seo.description)}</p>
      <nav>${navLinks.map(([n, h]) => `<a href="${h}">${n}</a>`).join(" | ")}</nav>
      <p>${esc(siteConfig.name)} – ${esc(siteConfig.tagline)}, ${esc(siteConfig.address)}. Phone: ${esc(siteConfig.phone)}. Email: ${esc(siteConfig.email)}</p>
    </noscript>`;

const template = await readFile(path.join(DIST, "index.html"), "utf8");
const START = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;
if (!START.test(template) || !template.includes("<!-- seo:body -->")) {
  console.error("seo-build: index.html me seo markers nahi mile. Kuch nahi badla.");
  process.exit(1);
}

const render = (seo) => template.replace(START, headFor(seo)).replace("<!-- seo:body -->", bodyFor(seo));

const routes = allRoutes();
for (const route of routes) {
  const html = render(getSeo(route));
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  await mkdir(path.dirname(path.join(DIST, file)), { recursive: true });
  await writeFile(path.join(DIST, file), html);
}
// 404 page (Vercel apne aap galat URL par dikhata hai) – noindex
await writeFile(path.join(DIST, "404.html"), render(getSeo("/404")));

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map((r) => {
    const seo = getSeo(r);
    return `  <url>
    <loc>${esc(absUrl(r))}</loc>
    <lastmod>${seo.published || today}</lastmod>
    <priority>${seo.priority || "0.5"}</priority>
    <image:image><image:loc>${esc(absUrl(seo.image))}</image:loc></image:image>
  </url>`;
  })
  .join("\n")}
</urlset>
`;
await writeFile(path.join(DIST, "sitemap.xml"), sitemap);

// robots.txt
await writeFile(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`seo-build: ${routes.length} pages + 404.html, sitemap.xml (${routes.length} URLs), robots.txt -> dist/`);
