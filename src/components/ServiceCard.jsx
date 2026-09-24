import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ index, title, copy, Icon }) {
  return (
    <article className="group rounded-2xl border border-forest/10 bg-ivory/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-champagne/55 hover:shadow-luxury">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-champagne/55 bg-champagne/10 text-champagne">
          <Icon size={16} strokeWidth={1.4} />
        </span>
        <span className="font-sans text-[10px] font-bold tracking-[.18em] text-sage">{String(index).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-7 serif text-2xl leading-none text-forest">{title}</h3>
      <p className="mt-3 text-xs leading-5 text-forest/60">{copy}</p>
      <div className="mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-forest/55">
        Explore <ArrowUpRight size={12} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </article>
  );
}
