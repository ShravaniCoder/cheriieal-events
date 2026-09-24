import { ArrowDown, Check, Heart, Briefcase, Sparkles } from "lucide-react";
import { images, personalEvents, corporateEvents, services } from "../data";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import ServiceCard from "../components/ServiceCard";
import Process from "../components/Process";
import CTA from "../components/CTA";

const serviceIcons = [Sparkles, Heart, Briefcase, Sparkles, Sparkles, Briefcase];

export default function Home() {
  return (
    <div className="page-shell">
      <SEO title="Chériieal Events | Personal & Corporate Events" description="Chériieal Events creates refined personal and corporate experiences through thoughtful planning, creative direction and seamless execution." />
      <section className="relative min-h-[92vh] overflow-hidden bg-forest text-ivory">
        <img src={images.hero} alt="Luxury event dinner setting" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-vignette" />
        <Navbar />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-14 pt-36 md:pb-20 md:px-8">
          <div className="max-w-3xl reveal">
            <div className="eyebrow">Chériieal Events · Personal & Corporate Events</div>
            <h1 className="display mt-5 text-6xl sm:text-7xl md:text-[7.5rem]">Extraordinary<br /><span className="text-champagne">events,</span> beautifully<br />brought to life.</h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/75 md:text-base">
              At Chériieal Events, we turn meaningful occasions into considered experiences — thoughtfully planned, creatively directed and beautifully executed by our team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/events">Explore Our Events</Button>
              <Button to="/contact" light>Start a Conversation</Button>
            </div>
          </div>
          <div className="absolute bottom-7 right-6 hidden items-center gap-3 text-[9px] uppercase tracking-[.22em] text-ivory/50 md:flex">
            <span className="h-px w-14 bg-champagne/50" /> Scroll to discover
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[.8fr_1.2fr] md:px-8">
          <SectionHeading eyebrow="Introduction" title="Crafting extraordinary experiences." copy="Chériieal Events is a creative event company built around a simple idea: every celebration deserves its own point of view. We bring together thoughtful planning, refined design and precise execution to create events that feel personal, purposeful and unforgettable." />
          <div className="relative min-h-[420px]">
            <div className="image-zoom absolute left-0 top-0 h-72 w-[72%] overflow-hidden rounded-2xl md:h-80">
              <img src={images.wedding} alt="Wedding styling" className="h-full w-full object-cover" />
            </div>
            <div className="image-zoom absolute bottom-0 right-0 h-64 w-[55%] overflow-hidden rounded-2xl border-8 border-ivory md:h-72">
              <img src={images.floral} alt="Luxury floral styling" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-16 left-5 glass hidden rounded-xl px-5 py-4 text-ivory md:block">
              <div className="serif text-2xl">Designed around you.</div>
              <div className="mt-1 text-[9px] uppercase tracking-[.2em] text-champagne">Our creative signature</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="What We Do" title="Two worlds. One considered experience." copy="From deeply personal celebrations to purposeful corporate gatherings, our team creates the atmosphere, flow and detail your occasion deserves." light />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="glass group overflow-hidden rounded-2xl">
              <div className="image-zoom h-72"><img src={images.ceremony} alt="Personal celebration" className="h-full w-full object-cover" /></div>
              <div className="p-6"><div className="eyebrow">Personal Events</div><h3 className="serif mt-2 text-4xl">Moments that feel unmistakably yours.</h3><p className="mt-3 max-w-lg text-sm leading-6 text-ivory/65">Weddings, ceremonies, milestones and family celebrations shaped with warmth, elegance and a clear creative point of view.</p><Button to="/events" className="mt-6">Explore Personal Events</Button></div>
            </div>
            <div className="glass group overflow-hidden rounded-2xl">
              <div className="image-zoom h-72"><img src={images.corporate} alt="Corporate conference" className="h-full w-full object-cover" /></div>
              <div className="p-6"><div className="eyebrow">Corporate Events</div><h3 className="serif mt-2 text-4xl">Experiences built to connect.</h3><p className="mt-3 max-w-lg text-sm leading-6 text-ivory/65">Conferences, launches, galas, meetings and brand experiences designed around your audience, objectives and identity.</p><Button to="/events" className="mt-6">Explore Corporate Events</Button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Our Events" title="Celebrations for every occasion." copy="Our event worlds are distinct in character, yet connected by the same attention to detail, visual discipline and guest-first thinking." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {personalEvents.slice(0,4).map(([title, copy, image]) => <EventCard key={title} title={title} copy={copy} image={image} />)}
          </div>
          <div className="mt-5 rounded-2xl bg-forest p-7 text-ivory md:p-10">
            <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-center">
              <div><div className="eyebrow">Corporate Events</div><h3 className="display mt-3 text-5xl">Purposeful spaces. Memorable impact.</h3></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {corporateEvents.slice(0,4).map(([title, copy, image]) => <EventCard key={title} title={title} copy={copy} image={image} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Our Approach" title="Calm planning. Creative thinking. Precise delivery." copy="We make complex events feel effortless by giving every stage of the process a clear purpose — from the first conversation to the final guest departure." light />
          <div className="mt-10"><Process dark /></div>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Featured Services" title="The details behind the experience." copy="Our services work together as one considered system, supporting both personal and corporate events from concept through execution." />
            <Button to="/services">View All Services</Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0,6).map(([title, copy], i) => <ServiceCard key={title} index={i+1} title={title} copy={copy} Icon={serviceIcons[i]} />)}
          </div>
        </div>
      </section>

      <section className="bg-emerald py-20 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_.9fr] md:items-center md:px-8">
          <div className="image-zoom overflow-hidden rounded-2xl"><img src={images.table} alt="Luxury dinner table" className="h-[460px] w-full object-cover" /></div>
          <div>
            <div className="eyebrow">Why Chériieal Events</div>
            <h2 className="display mt-3 text-5xl md:text-6xl">Every detail has a reason.</h2>
            <p className="mt-5 text-sm leading-7 text-ivory/65">Our team combines creative direction with practical discipline. We look closely at the guest journey, visual rhythm, production, timing and small details that make an event feel effortless.</p>
            <div className="mt-7 grid gap-3">
              {["Creative event direction", "Attention to every detail", "Seamless end-to-end management", "Personalised experiences", "A calm, experienced team"].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm"><span className="grid h-6 w-6 place-items-center rounded-full border border-champagne/50 text-champagne"><Check size={12} /></span>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA image={images.contact} />
    </div>
  );
}
