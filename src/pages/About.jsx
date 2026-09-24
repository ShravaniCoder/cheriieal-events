import { Users, Quote } from "lucide-react";
import { images } from "../data";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Process from "../components/Process";
import CTA from "../components/CTA";

export default function About() {
  return (
    <div className="page-shell">
      <SEO title="About Us | Chériieal Events" description="Discover the philosophy and approach behind Chériieal Events." />
      <PageHero eyebrow="About Us" title={<>People. Passion. <span className="text-champagne">Purpose.</span></>} copy="We create events with a strong sense of place, a clear creative point of view and a calm, considered approach to every detail." image={images.abouth} />

      <section className="section-pad bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1fr] md:px-8">
          <SectionHeading eyebrow="Who We Are" title="Driven by creativity. Defined by excellence." copy="At Chériieal Events, we are a team of planners, creative thinkers and experience-makers who believe that an event should feel more than beautiful. It should feel intentional. We bring together strategy, styling, production and hospitality to create experiences people remember for the right reasons." />
          <div className="image-zoom overflow-hidden rounded-2xl"><img src={images.abouth} alt="Event floral details" className="h-[460px] w-full object-cover" /></div>
        </div>
      </section>

      <section className="bg-forest py-20 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[.8fr_1.2fr] md:px-8">
          <div>
            <div className="eyebrow">Our Philosophy</div>
            <h2 className="display mt-3 text-5xl md:text-6xl">Thoughtful planning. Inspired design. Seamless execution.</h2>
          </div>
          <div className="glass rounded-2xl p-7 md:p-10">
            <Quote className="text-champagne" size={28} strokeWidth={1.2} />
            <p className="serif mt-6 text-3xl leading-tight text-ivory/90">We believe the best events are felt before they are explained — through atmosphere, rhythm, hospitality and the confidence of knowing every detail has been considered.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Our Approach" title="A clear process, creatively led." copy="Our approach keeps the experience imaginative without losing sight of timelines, budgets, logistics and the details that make execution smooth." />
          <div className="mt-10"><Process /></div>
        </div>
      </section>

      <section className="bg-emerald py-20 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[.85fr_1.15fr] md:items-center md:px-8">
          <div className="image-zoom overflow-hidden rounded-2xl"><img src={images.corporate} alt="Event team working" className="h-[430px] w-full object-cover" /></div>
          <div>
            <div className="eyebrow">Our Team</div>
            <h2 className="display mt-3 text-5xl md:text-6xl">A passionate team behind every celebration.</h2>
            <p className="mt-5 text-sm leading-7 text-ivory/65">Our team brings together planning discipline, creative thinking and an appreciation for the small details that guests may never consciously notice — but always feel.</p>
            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-champagne/20 bg-forest/30 p-5">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-champagne/50 text-champagne"><Users size={20} /></div>
              <div><div className="serif text-2xl">Experience-led planning</div><div className="text-xs text-ivory/55">One team. One clear vision. Every detail connected.</div></div>
            </div>
          </div>
        </div>
      </section>

      <CTA image={images.AboutFF} title="Your vision. Our commitment." copy="We promise to approach every event with creativity, precision and genuine care — creating an experience that feels unmistakably yours." />
    </div>
  );
}
