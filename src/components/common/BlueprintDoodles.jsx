import useScrollAnimation from "../../hooks/useScrollAnimation";

// Architect ke auzaar aur drawings ki patli gold lines (background sajawat).
// Dikhte hi lines "draw" hoti hain, phir dheere-dheere tairti rehti hain. Content ke peeche, click nahi hoti.
// Har shape 100x100 ke box me bani hai.
const shapes = {
  house: "M10 50 L50 15 L90 50 M20 42 V90 H80 V42 M42 90 V66 H58 V90 M27 54 H38 V65 H27 Z M62 54 H73 V65 H62 Z M66 28 V16 H74 V35",
  compass: "M44 14 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M50 4 V8 M47 19 L30 92 M53 19 L70 92 M36 66 Q50 58 64 66 M30 92 L28 97 M70 92 L71 97",
  setSquare: "M10 90 L10 12 L88 90 Z M22 78 L22 42 L58 78 Z M10 30 H16 M10 48 H16 M10 66 H16 M28 90 V84 M46 90 V84 M64 90 V84",
  ruler: "M4 38 H96 V62 H4 Z M12 38 V48 M20 38 V44 M28 38 V48 M36 38 V44 M44 38 V48 M52 38 V44 M60 38 V48 M68 38 V44 M76 38 V48 M84 38 V44 M92 38 V48",
  pencil: "M22 78 L72 28 L82 38 L32 88 Z M22 78 L16 94 L32 88 M66 34 L76 44 M18 89 L21 92",
  plan: "M8 8 H92 V92 H8 Z M8 50 H44 M44 50 V92 M60 8 V40 H92 M44 64 A14 14 0 0 1 58 50 M58 50 V64 M8 22 H14 M8 30 H14 M92 64 H86 M92 72 H86 M70 92 V86 M78 92 V86",
  arch: "M24 92 V46 A26 26 0 0 1 76 46 V92 Z M50 20 V92 M24 58 H76 M24 76 H76 M18 92 H82",
  jaali: "M50 8 L92 50 L50 92 L8 50 Z M50 28 L72 50 L50 72 L28 50 Z M8 50 H92 M50 8 V92 M29 29 L71 71 M71 29 L29 71",
  elevation: "M20 92 V22 H80 V92 M10 92 H90 M14 22 H86 M30 32 H42 V44 H30 Z M58 32 H70 V44 H58 Z M30 54 H42 V66 H30 Z M58 54 H70 V66 H58 Z M44 92 V74 H56 V92",
  dimension: "M8 50 H92 M8 40 V60 M92 40 V60 M8 50 L18 45 M8 50 L18 55 M92 50 L82 45 M92 50 L82 55 M40 44 H60",
  stairs: "M10 90 H30 V72 H48 V54 H66 V36 H84 V18 H92 M10 90 V96 M30 90 L92 28",
  tree: "M50 92 V58 M50 70 L38 60 M50 64 L62 54 M50 12 A22 22 0 1 0 50.1 12 M30 92 H70",
};

// Kahan, kitna bada, kitna ghooma hua. mobile:false wale chhote phone par nahi dikhte.
const presets = {
  section: [
    { s: "compass", top: "4%", left: "2%", size: 120, rot: -12, mobile: true },
    { s: "plan", top: "8%", left: "44%", size: 110, rot: 6, mobile: false },
    { s: "setSquare", top: "6%", right: "3%", size: 110, rot: 10, mobile: true },
    { s: "house", top: "36%", left: "-1%", size: 130, rot: 4, mobile: false },
    { s: "ruler", top: "52%", left: "40%", size: 150, rot: -18, mobile: false },
    { s: "arch", top: "40%", right: "1%", size: 120, rot: -6, mobile: false },
    { s: "pencil", bottom: "6%", left: "4%", size: 110, rot: 8, mobile: true },
    { s: "jaali", bottom: "4%", left: "46%", size: 90, rot: 0, mobile: false },
    { s: "elevation", bottom: "8%", right: "4%", size: 120, rot: 5, mobile: true },
    { s: "dimension", top: "28%", left: "30%", size: 120, rot: -4, mobile: false },
    { s: "stairs", top: "70%", left: "24%", size: 90, rot: 0, mobile: false },
  ],
  hero: [
    { s: "elevation", top: "14%", right: "6%", size: 150, rot: 4, mobile: false },
    { s: "compass", top: "8%", right: "24%", size: 90, rot: -14, mobile: false },
    { s: "plan", bottom: "-6%", right: "15%", size: 130, rot: -6, mobile: false },
    { s: "setSquare", bottom: "10%", right: "2%", size: 70, rot: 12, mobile: true },
    { s: "tree", top: "10%", right: "40%", size: 70, rot: 0, mobile: false },
  ],
};

const BlueprintDoodles = ({ variant = "section", className = "" }) => {
  const [ref, visible] = useScrollAnimation({ threshold: 0.05 });
  const items = presets[variant] || presets.section;

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((d, i) => (
        <span
          key={`${d.s}-${i}`}
          className={`bp-doodle absolute ${d.mobile ? "block" : "hidden md:block"} ${visible ? "bp-visible" : ""}`}
          style={{
            top: d.top,
            left: d.left,
            right: d.right,
            bottom: d.bottom,
            width: `clamp(${Math.round(d.size * 0.6)}px, ${(d.size / 14).toFixed(1)}vw, ${d.size}px)`,
            "--rot": `${d.rot}deg`,
            "--delay": `${i * 160}ms`,
            "--float": `${10 + (i % 4) * 2}s`,
          }}
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-auto w-full">
            <path d={shapes[d.s]} pathLength="1" />
          </svg>
        </span>
      ))}
    </div>
  );
};

export default BlueprintDoodles;
