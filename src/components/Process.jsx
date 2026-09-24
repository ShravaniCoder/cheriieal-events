import { Compass, PenTool, CalendarCheck, Sparkles, Gem } from "lucide-react";
import { process } from "../data";

const icons = [Compass, PenTool, CalendarCheck, Sparkles, Gem];

export default function Process({ dark = false }) {
  return (
    <div className={`grid gap-px overflow-hidden rounded-2xl border ${dark ? "border-champagne/20 bg-champagne/10" : "border-forest/10 bg-forest/10"} sm:grid-cols-5`}>
      {process.map(([title, copy], i) => {
        const Icon = icons[i];
        return (
          <div key={title} className={`p-5 ${dark ? "bg-emerald/70 text-ivory" : "bg-ivory"}`}>
            <Icon size={18} className="text-champagne" strokeWidth={1.4} />
            <div className="mt-5 flex items-center gap-2">
              <span className="text-[9px] font-bold tracking-[.18em] text-champagne">0{i + 1}</span>
              <h3 className="serif text-xl">{title}</h3>
            </div>
            <p className={`mt-2 text-[11px] leading-5 ${dark ? "text-ivory/55" : "text-forest/55"}`}>{copy}</p>
          </div>
        );
      })}
    </div>
  );
}
