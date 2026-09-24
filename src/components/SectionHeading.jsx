export default function SectionHeading({ eyebrow, title, copy, light = false, align = "left" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div className={`eyebrow ${light ? "text-champagne" : ""}`}>{eyebrow}</div>
      <h2 className={`display mt-3 text-5xl md:text-6xl ${light ? "text-ivory" : "text-forest"}`}>{title}</h2>
      {copy && <p className={`mt-5 max-w-2xl text-sm leading-7 md:text-base ${light ? "text-ivory/65" : "text-forest/65"} ${align === "center" ? "mx-auto" : ""}`}>{copy}</p>}
    </div>
  );
}
