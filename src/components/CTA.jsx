import Button from "./Button";

export default function CTA({ image, title = "Let’s Create Something Exceptional", copy = "Tell our team what you are imagining. We’ll bring together the ideas, details and people to make it beautifully real." }) {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-forest/65" />
      <div className="relative mx-auto max-w-5xl px-5 py-20 text-center md:py-28">
        <div className="eyebrow">Start the conversation</div>
        <h2 className="display mx-auto mt-4 max-w-3xl text-5xl md:text-7xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/70">{copy}</p>
        <div className="mt-8"><Button to="/contact">Begin Your Event</Button></div>
      </div>
    </section>
  );
}
