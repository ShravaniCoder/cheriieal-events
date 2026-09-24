import Navbar from "./Navbar";
import Button from "./Button";

export default function PageHero({ title, eyebrow, copy, image }) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-forest text-ivory">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 hero-vignette" />
      <Navbar />
      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <div className="max-w-3xl reveal">
          <div className="eyebrow mb-5">{eyebrow}</div>
          <h1 className="display text-6xl md:text-8xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/75 md:text-base">{copy}</p>
          <div className="mt-7"><Button to="/contact">Begin Your Event</Button></div>
        </div>
      </div>
    </section>
  );
}
