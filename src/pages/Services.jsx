import { CalendarCheck, Sparkles, MapPin, Layers, Monitor, Music, Utensils, ClipboardCheck, Truck, Megaphone, Users, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { images, services } from "../data";

const icons = [CalendarCheck, Sparkles, MapPin, Layers, Layers, Monitor, Music, Utensils, ClipboardCheck, Truck, Megaphone, ShieldCheck];

export default function Services() {
  return (
    <div className="page-shell">
      <SEO title="Our Services | Chériieal Events" description="End-to-end event planning, creative direction, design, production and on-site coordination." />
      <PageHero eyebrow="Our Services" title={<>End-to-end event <span className="text-champagne">solutions.</span></>} copy="Our services are designed to work together — giving personal and corporate events one connected creative and operational team from beginning to end." image={images.stage} />

      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="What We Offer" title="Every detail, thoughtfully connected." copy="Choose a focused service or bring our team in across the full event journey. We adapt our support to the scale, character and requirements of your occasion." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, copy], i) => <ServiceCard key={title} index={i + 1} title={title} copy={copy} Icon={icons[i]} />)}
          </div>
        </div>
      </section>

      <section className="bg-emerald py-20 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.1fr_.9fr] md:px-8 md:items-center">
          <div>
            <div className="eyebrow">One Team, One Experience</div>
            <h2 className="display mt-3 text-5xl md:text-6xl">From first idea to final farewell.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-ivory/65">We connect creative direction with the practical work behind the scenes, so your event feels cohesive from the first visual impression to the last guest interaction.</p>
          </div>
          <div className="image-zoom overflow-hidden rounded-2xl"><img src={images.hospitality} alt="Event hospitality" className="h-[400px] w-full object-cover" /></div>
        </div>
      </section>

      <CTA image={images.dinner} />
    </div>
  );
}
