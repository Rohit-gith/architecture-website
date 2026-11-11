import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

// Har page ka browser tab title
const titles = {
  "/": "Architecture & Design",
  "/about": "About Us",
  "/leadership": "Leadership",
  "/team": "Our Team",
  "/services": "Our Services",
  "/projects": "Our Projects",
  "/contact": "Contact Us",
};

// Scroll ka niyam:
// - Link click karke naye page par jao -> page upar se khulta hai.
// - Back / Forward dabao -> page wahin khulta hai jahan aap pehle the (jaise Home ka "Recent Work").
// Har history entry (location.key) ki scroll position yaad rakhi jaati hai, refresh ke baad bhi (sessionStorage).
const STORAGE_KEY = "scroll-positions";

const loadPositions = () => {
  try {
    return new Map(JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "[]"));
  } catch {
    return new Map();
  }
};
const positions = loadPositions();

const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const currentKey = useRef(location.key);

  // Browser ka apna scroll-restore band, warna wo hamare saath takrata hai
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";

    // Scroll hote hi current page ki position yaad rakho
    const onScroll = () => positions.set(currentKey.current, window.scrollY);
    // Tab band / refresh hone se pehle positions save
    const save = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...positions].slice(-50)));
      } catch {
        // storage band ho to koi baat nahi
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", save);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", save);
    };
  }, []);

  // Naya page paint hone se pehle hi sahi jagah scroll (taaki jhatka na dikhe)
  useLayoutEffect(() => {
    currentKey.current = location.key;
    const saved = positions.get(location.key);

    if (navType === "POP" && saved !== undefined) {
      // Back/Forward: purani jagah. Page poora banne tak kuch frames dobara try karte hain.
      let tries = 0;
      let raf;
      const restore = () => {
        window.scrollTo(0, saved);
        if (Math.abs(window.scrollY - saved) > 2 && tries++ < 40) raf = requestAnimationFrame(restore);
      };
      restore();
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [location.key, navType]);

  useEffect(() => {
    const { pathname } = location;
    const page = titles[pathname] || (pathname.startsWith("/projects/") ? "Project" : "Page Not Found");
    document.title = `${page} | ${siteConfig.name}`;
  }, [location]);

  return null;
};

export default ScrollToTop;
