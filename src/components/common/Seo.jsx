import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { absUrl, getSeo } from "../../seo/seoData";
import siteConfig from "../../config/siteConfig";

// Page badalte hi <head> ke SEO tags update: title, description, canonical, Open Graph (WhatsApp/Facebook preview),
// Twitter card, robots aur JSON-LD. Data src/seo/seoData.js se aata hai.
const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    const url = absUrl(seo.path);
    const image = absUrl(seo.image);

    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "robots", seo.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");

    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:type", seo.type || "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", seo.title);
    setMeta("property", "og:site_name", siteConfig.name);
    setMeta("property", "og:locale", "en_IN");
    setMeta("property", "article:published_time", seo.published);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    let ld = document.getElementById("ld-json");
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "ld-json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(seo.jsonLd.length === 1 ? seo.jsonLd[0] : seo.jsonLd);
  }, [pathname]);

  return null;
};

export default Seo;
