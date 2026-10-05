import { Link } from "react-router-dom";
import navLinks from "../../data/navLinks";
import siteConfig from "../../config/siteConfig";


const developer = {
  name: "Fidelsya Technologies Pvt Ltd",
  url: "https://www.fidelsya.com/",
};

const Footer = () => (
  <footer className="bg-ink text-neutral-300">
    <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-3">
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
          <li>{siteConfig.phone}</li>
          <li>{siteConfig.email}</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-neutral-800 py-6 text-xs text-neutral-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>
          Designed &amp; Maintained by{" "}
          {developer.url ? (
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition"
            >
              {developer.name}
            </a>
          ) : (
            <span className="text-accent">{developer.name}</span>
          )}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;