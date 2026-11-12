import { Link } from "react-router-dom";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import navLinks from "../../data/navLinks";
import services from "../../data/services";
import siteConfig from "../../config/siteConfig";
import SocialLinks from "../common/SocialLinks";

const developer = {
  name: "Fidelsya Technology Pvt. Ltd.",
  url: "https://www.fidelsya.com/",
};

const DeveloperLogo = () => (
  <img src="/images/logo/fidelsya-mark.webp" alt="" aria-hidden="true" className="h-3.5 w-auto shrink-0" width="20" height="14" />
);

const heading = "mb-5 text-sm uppercase tracking-widest text-white";
const linkCls = "transition hover:text-accent";

const Footer = () => {
  const contact = [
    { icon: MapPin, value: siteConfig.address },
    siteConfig.phone && { icon: Phone, value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
    siteConfig.email && { icon: Mail, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    siteConfig.hours && { icon: Clock, value: siteConfig.hours },
  ].filter(Boolean);

  return (
    <footer className="bg-ink text-neutral-300">
      <div className="container mx-auto grid gap-10 px-4 py-14 sm:grid-cols-2 md:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-12">
        {/* Brand + social */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <Building2 size={32} strokeWidth={1.25} className="text-accent" />
            <span className="leading-tight">
              <span className="block text-lg font-medium uppercase tracking-[0.2em] text-white">{siteConfig.name}</span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-accent">Architecture &amp; Design</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            We design spaces that are functional, timeless and rooted in their context.
          </p>
          <p className="mb-4 mt-7 text-[11px] uppercase tracking-[0.25em] text-neutral-500">Follow Us</p>
          <SocialLinks dark />
        </div>

        <div>
          <h4 className={heading}>Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.path}><Link to={l.path} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={heading}>Services</h4>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.title}><Link to="/services" className={linkCls}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={heading}>Contact</h4>
          <ul className="space-y-4 text-sm">
            {contact.map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex items-start gap-3">
                <Icon size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" />
                {href ? <a href={href} className={linkCls}>{value}</a> : <span>{value}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-6 text-xs text-neutral-500">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-center md:flex-row">
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
};

export default Footer;
