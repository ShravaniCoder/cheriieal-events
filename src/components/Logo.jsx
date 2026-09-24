export default function Logo({ light = true, compact = false }) {
  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}>
      <div className="relative flex h-10 w-10 items-center justify-center">
        <span className={`absolute text-4xl serif italic ${light ? "text-champagne" : "text-forest"}`}>C</span>
        <span className={`absolute -bottom-1 right-0 text-[9px] tracking-[.18em] ${light ? "text-ivory" : "text-forest"}`}>E</span>
      </div>
      {!compact && (
        <div className="leading-none">
          <div className={`serif text-[22px] font-semibold tracking-[.01em] ${light ? "text-ivory" : "text-forest"}`}>
            Chériieal
          </div>
          <div className={`mt-1 text-[8px] font-semibold tracking-[.36em] ${light ? "text-champagne" : "text-forest"}`}>
            EVENTS
          </div>
        </div>
      )}
    </div>
  );
}
