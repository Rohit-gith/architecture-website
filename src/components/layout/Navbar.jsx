import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Building2, ChevronDown } from "lucide-react";
import navLinks from "../../data/navLinks";
import siteConfig from "../../config/siteConfig";
import Button from "../common/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown (kaunsa khula hai)
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const solid = pathname !== "/" || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Page badalte hi dropdown band
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  const isPath = (path) => (path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/"));
  const isActive = (l) => isPath(l.path) || (l.children || []).some((c) => isPath(c.path));
  const base = "text-sm transition hover:text-accent";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${solid ? "bg-white text-ink shadow-sm" : "bg-transparent text-white"}`}>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Building2 size={34} strokeWidth={1.25} className="text-accent" />
          <span className="leading-tight">
            <span className="block font-body text-lg font-medium uppercase tracking-[0.2em]">{siteConfig.name}</span>
            <span className="block text-[9px] uppercase tracking-[0.25em] text-accent">Architecture &amp; Design</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-9">
          {navLinks.map((l) =>
            l.children ? (
              <li
                key={l.path}
                className="relative"
                onMouseEnter={() => setOpenMenu(l.path)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(l.path)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(null);
                }}
              >
                <Link to={l.path} className={`${base} flex items-center gap-1 ${isActive(l) ? "text-accent" : ""}`}>
                  {l.label}
                  <ChevronDown size={14} className={`transition ${openMenu === l.path ? "rotate-180" : ""}`} />
                </Link>
                {openMenu === l.path && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-5">
                    <div className="w-80 animate-dropdown-in border-t-2 border-accent bg-white text-ink shadow-2xl">
                      <ul className="divide-y divide-neutral-100">
                        {l.children.map((c) => {
                          const Icon = c.icon;
                          const active = pathname === c.path;
                          return (
                            <li key={c.path}>
                              <Link
                                to={c.path}
                                onClick={() => setOpenMenu(null)}
                                className={`group flex items-start gap-4 border-l-2 px-5 py-4 transition hover:border-accent hover:bg-cream ${active ? "border-accent bg-cream" : "border-transparent"}`}
                              >
                                {Icon && <Icon size={22} strokeWidth={1.25} className="mt-0.5 shrink-0 text-accent" />}
                                <span className="flex-1">
                                  <span className={`block text-sm font-medium ${active ? "text-accent" : ""}`}>{c.label}</span>
                                  {c.description && (
                                    <span className="mt-0.5 block text-xs leading-snug text-neutral-500">{c.description}</span>
                                  )}
                                </span>
                                <ArrowRight size={14} className="mt-1 -translate-x-2 text-accent opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li key={l.path}>
                <Link to={l.path} className={`${base} ${isActive(l) ? "text-accent" : ""}`}>{l.label}</Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:block"><Button to="/contact" arrow>Get a Quote</Button></div>

        <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {[0, 1, 2].map((i) => <span key={i} className={`block w-6 h-0.5 mb-1.5 last:mb-0 ${solid ? "bg-ink" : "bg-white"}`} />)}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden border-t border-neutral-200 px-4 py-4 space-y-4">
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link to={l.path} className={`${base} ${isActive(l) ? "text-accent" : ""}`} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
              {l.children && (
                <ul className="mt-3 ml-4 space-y-3 border-l border-neutral-200 pl-4">
                  {l.children.map((c) => (
                    <li key={c.path}>
                      <Link to={c.path} className={`${base} text-neutral-500 ${pathname === c.path ? "text-accent" : ""}`} onClick={() => setOpen(false)}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;