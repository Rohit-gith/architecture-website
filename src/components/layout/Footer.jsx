import { Link } from "react-router-dom";
import navLinks from "../../data/navLinks";
import siteConfig from "../../config/siteConfig";


const developer = {
  name: "Fidelsya Technology Pvt. Ltd.",
  url: "https://www.fidelsya.com/",
};


const DeveloperLogo = () => (
  <img src="/images/logo/fidelsya-mark.webp" alt="" aria-hidden="true" className="h-3.5 w-auto shrink-0" width="20" height="14" />
);

const Footer = () => (
  <footer className="bg-ink text-neutral-300">
    <div className="container mx-auto px-4 py-14 md:py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
      <div>
        <h3 className="font-heading text-2xl text-white">{siteConfig.name}</h3>
        <p className="mt-4 text-sm leading-relaxed">
          We design spaces that are functional, timeless and rooted in their context.
        </p>
      </div>
      <div>
        <h4 className="text-white uppercase tracking-widest text-sm mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.path}><Link to={l.path} className="hover:text-accent">{l.label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-white uppercase tracking-widest text-sm mb-4">Contact</h4>
        <ul className="space-y-2 text-sm">
          <li>{siteConfig.address}</li>
          {siteConfig.phone && (
            <li><a href={`tel:${siteConfig.phone.replace(/[^+d]/g, "")}`} className="hover:text-accent">{siteConfig.phone}</a></li>
          )}
          {siteConfig.email && (
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a></li>
          )}
        </ul>
      </div>
    </div>

    <div className="border-t border-neutral-800 py-6 text-xs text-neutral-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
          <span>Designed &amp; developed by:</span>
          <a
            href={developer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-neutral-400 transition hover:text-white"
          >
            <DeveloperLogo />
            {developer.name}
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;