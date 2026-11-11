import useScrollAnimation from "../../hooks/useScrollAnimation";

// Scroll karte hi andar ka content halke se neeche se upar fade hoke aata hai.
// delay (ms) se cards ek-ek karke aate hain. Reduced-motion wale users ko seedha dikh jata hai.
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
