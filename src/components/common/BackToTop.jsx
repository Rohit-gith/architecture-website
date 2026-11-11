import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Upar jaane wala gol button. Iske chaaron taraf gold ring scroll ke saath bharti hai (page kitna padha, wo dikhata hai).
// WhatsApp button ke theek upar rehta hai. 400px scroll ke baad dikhta hai.
const R = 22; // ring ka radius
const CIRC = 2 * Math.PI * R;

const BackToTop = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setVisible(window.scrollY > 400);
    };
    // Scroll par har frame me sirf ek baar calculate (fast rehta hai)
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-[76px] right-[18px] z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-[#d9b56d] shadow-xl transition-all duration-500 hover:bg-accent hover:text-white md:bottom-[94px] md:right-7 md:h-12 md:w-12 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Progress ring */}
      <svg viewBox="0 0 50 50" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="25" cy="25" r={R} fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
        <circle
          cx="25"
          cy="25"
          r={R}
          fill="none"
          stroke="#d9b56d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - progress)}
          className="transition-[stroke-dashoffset] duration-150 ease-out group-hover:stroke-white"
        />
      </svg>
      <ArrowUp size={18} strokeWidth={2} className="relative transition-transform duration-300 group-hover:-translate-y-0.5 motion-safe:group-hover:animate-bounce" />
    </button>
  );
};

export default BackToTop;
