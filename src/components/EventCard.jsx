import { ArrowUpRight } from "lucide-react";

export default function EventCard({ title, copy, image }) {
  return (
    <article className="group relative min-h-[290px] overflow-hidden rounded-2xl border border-champagne/35 bg-forest text-ivory shadow-glass">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 photo-overlay" />
      <div className="relative flex h-full min-h-[290px] flex-col justify-end p-5">
        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-champagne/50 bg-forest/50 text-champagne backdrop-blur-md">
          <ArrowUpRight size={14} />
        </div>
        <h3 className="serif text-2xl leading-none">{title}</h3>
        <p className="mt-2 max-w-xs text-xs leading-5 text-ivory/70">{copy}</p>
      </div>
    </article>
  );
}
