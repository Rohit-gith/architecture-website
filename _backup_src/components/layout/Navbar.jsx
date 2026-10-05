import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Building2 } from "lucide-react";
import navLinks from "../../data/navLinks";
import siteConfig from "../../config/siteConfig";
import Button from "../common/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const solid = pathname !== "/" || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm transition hover:text-accent ${isActive ? "text-accent" : ""}`;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${solid ? "bg-white text-ink shadow-sm" : "bg-transparent text-white"}`}>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Building2 size={34} strokeWidth={1.25} className="text-accent" />
          <span className="leading-tight">
            <span className="block font-body text-lg font-medium uppercase tracking-[0.2em]">{siteConfig.name}</span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-accent">Architecture & Design</span>
          </span>
        </Link>

        <ul className="hidden md:flex gap-9">
          {navLinks.map((l) => (
            <li key={l.path}><NavLink to={l.path} end={l.path === "/"} className={linkClass}>{l.label}</NavLink></li>
          ))}
        </ul>

        <div className="hidden md:block"><Button to="/contact" arrow>Get a Quote</Button></div>

        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {[0, 1, 2].map((i) => <span key={i} className={`block w-6 h-0.5 mb-1.5 last:mb-0 ${solid ? "bg-ink" : "bg-white"}`} />)}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-neutral-200 px-4 py-4 space-y-4">
          {navLinks.map((l) => (
            <li key={l.path}>
              <NavLink to={l.path} end={l.path === "/"} className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;