import { useEffect, useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

// "250+" jaisi value ko 0 se 250 tak smooth chadhata hai (shuru me tez, ant me dheere).
// Ginti tabhi shuru hoti hai jab number screen par dikhe. Reduced-motion wale users ko seedha final number.
const CountUp = ({ value, duration = 2000 }) => {
  const end = parseInt(value, 10) || 0;
  const suffix = String(value).replace(/[0-9]/g, "");
  const [ref, visible] = useScrollAnimation({ threshold: 0.4 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;
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
  }, [visible, end, duration]);

  // Invisible final number pehle se jagah gher leta hai, isliye chadhte waqt layout hilta nahi
  return (
    <span ref={ref} className="relative inline-block">
      <span className="invisible">{end}{suffix}</span>
      <span className="absolute inset-0">{current}{suffix}</span>
    </span>
  );
};

export default CountUp;
