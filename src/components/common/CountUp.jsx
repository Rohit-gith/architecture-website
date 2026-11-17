import { useEffect, useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

// "250+" jaisi value ko 0 se 250 tak smooth chadhata hai (shuru me tez, ant me dheere).
// Ginti tabhi shuru hoti hai jab number screen par dikhe. Reduced-motion wale users ko seedha final number.
const CountUp = ({ value, duration = 2000 }) => {
  const end = parseInt(value, 10) || 0;
  const suffix = String(value).replace(/[0-9]/g, "");
  const [ref, visible] = useScrollAnimation({ threshold: 0.4 });
  const [current, setCurrent] = useState(0);
  // Pehli visit ka intro chal raha ho to ginti uske khatam hone tak ruki rahe
  const [introDone, setIntroDone] = useState(() => !document.documentElement.classList.contains("intro-active"));

  useEffect(() => {
    if (introDone) return undefined;
    const root = document.documentElement;
    const obs = new MutationObserver(() => {
      if (!root.classList.contains("intro-active")) setIntroDone(true);
    });
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, [introDone]);

  useEffect(() => {
    if (!visible || !introDone) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(end);
      return undefined;
    }
    let raf;
    let start;
    const tick = (t) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / duration, 1);
      setCurrent(Math.round(end * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, introDone, end, duration]);

  // Invisible final number pehle se jagah gher leta hai, isliye chadhte waqt layout hilta nahi
  return (
    <span ref={ref} className="relative inline-block">
      <span className="invisible">{end}{suffix}</span>
      <span className="absolute inset-0">{current}{suffix}</span>
    </span>
  );
};

export default CountUp;
