import { ArrowUpRight } from "lucide-react";

export default function EventCard({ title, copy, image }) {
  return (
    <article className="group relative min-h-[290px] overflow-hidden rounded-2xl border border-champagne/35 bg-forest text-ivory shadow-glass">

      {/* Background Image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Smooth natural gradient — deeper + taller reach */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(15,22,18,0.98) 0%, rgba(15,22,18,0.92) 25%, rgba(15,22,18,0.65) 45%, rgba(15,22,18,0.25) 70%, rgba(15,22,18,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[90px] flex-col justify-end p-5">

        <h3 className="serif text-2xl leading-none">
          {title}
        </h3>

        <p className="mt-2 max-w-xs text-xs leading-5 text-ivory/70">
          {copy}
        </p>

      </div>
    </article>
  );
}