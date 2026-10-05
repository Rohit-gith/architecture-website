const SectionTitle = ({ eyebrow, title, subtitle, align = "center", light = false }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
    {eyebrow && <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-accent">{eyebrow}</p>}
    <h2 className={`text-3xl md:text-4xl font-medium ${light ? "text-white" : ""}`}>{title}</h2>
    {subtitle && (
      <p className={`mt-3 max-w-2xl ${align === "center" ? "mx-auto" : ""} ${light ? "text-neutral-300" : "text-neutral-500"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;