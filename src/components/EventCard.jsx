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

      {/* Image Overlay */}
      <div className="absolute inset-0 photo-overlay" />

      {/* Text Background */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-forest/50 backdrop-blur-[0.5px]" />

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