import { useEffect, useRef, useState } from "react";
import siteConfig from "../../config/siteConfig";

// Pehli baar site khulne par branded intro (ek browser session me sirf ek baar):
// logo neeche se upar "draw" hota hai -> naam ke akshar ek-ek karke -> gold line + tagline -> parda upar khulta hai.
// Click / koi bhi key dabane par turant skip. Reduced-motion wale users ko chhota, simple fade.
// index.html ka chhota script <html> par "intro-active" class lagata hai (JS load hone se pehle hi green background).
const STORAGE_KEY = "intro-seen";
const HOLD = 2700; // kitni der brand dikhe (ms), phir parda uthta hai
const EXIT = 1000; // parda uthne ka time (ms)

const seen = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const IntroSplash = () => {
  const [show, setShow] = useState(() => !seen());
  const [leaving, setLeaving] = useState(false);
  const skipRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!show) {
      root.classList.remove("intro-active");
      return undefined;
    }
    root.classList.add("intro-active");
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // storage band ho to har baar dikhega, koi baat nahi
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduce ? 900 : HOLD;
    const exit = reduce ? 400 : EXIT;
    let doneTimer;

    // Parda uthna shuru: page ke hero animations isi waqt chalu hote hain
    const leave = () => {
      setLeaving(true);
      root.classList.remove("intro-active");
      clearTimeout(holdTimer);
      doneTimer = setTimeout(() => setShow(false), exit);
    };
    const holdTimer = setTimeout(leave, hold);

    const skip = () => {
      window.removeEventListener("keydown", skip);
      leave();
    };
    window.addEventListener("keydown", skip, { once: true });
    skipRef.current = skip;

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
      window.removeEventListener("keydown", skip);
      skipRef.current = null;
      root.classList.remove("intro-active");
    };
  }, [show]);

  if (!show) return null;

  const letters = siteConfig.name.toUpperCase().split("");

  return (
    <div
      className={`intro-splash ${leaving ? "intro-leave" : ""}`}
      onClick={() => !leaving && skipRef.current?.()}
      role="presentation"
    >
      {/* Halki gold roshni beech me */}
      <div className="intro-glow" aria-hidden="true" />

      <div className="intro-content">
        <img
          src="/images/logo/urban-crafting-light.webp"
          alt=""
          aria-hidden="true"
          width="230"
          height="320"
          className="intro-logo"
        />

        <p className="intro-name" aria-label={siteConfig.name}>
          {letters.map((ch, i) => (
            <span key={i} className="intro-mask" aria-hidden="true">
              <span className="intro-letter" style={{ animationDelay: `${700 + i * 45}ms` }}>
                {ch === " " ? " " : ch}
              </span>
            </span>
          ))}
        </p>

        <span className="intro-line" aria-hidden="true" />
        <p className="intro-tagline">{siteConfig.tagline}</p>
        <p className="intro-slogan">{siteConfig.slogan}</p>
      </div>

      {/* Neeche loading line */}
      <span className="intro-progress" aria-hidden="true" />
    </div>
  );
};

export default IntroSplash;
