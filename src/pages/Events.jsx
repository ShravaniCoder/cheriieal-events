import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import EventCard from "../components/EventCard";
import { images, personalEventsE, corporateEvents } from "../data";
import CTA from "../components/CTA";

export default function Events() {
  return (
    <div className="page-shell">
      <SEO title="Our Events | Chériieal Events" description="Explore personal and corporate event experiences created by Chériieal Events." />
      <PageHero eyebrow="Our Events" title={<>Celebrations for <span className="text-champagne">every occasion.</span></>} copy="From deeply personal milestones to high-impact corporate gatherings, we create event experiences with character, intention and a memorable sense of place." image={images.hero} />

      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Personal Events" title="Moments designed around you." copy="Our personal celebrations are warm, expressive and deeply considered — giving your story room to lead the experience." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personalEventsE.map(([title, copy, image]) => <EventCard key={title} title={title} copy={copy} image={image} />)}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Corporate Events" title="Experiences that elevate your brand." copy="Our corporate events balance purpose with atmosphere — creating environments that support communication, connection and confident brand expression." light />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {corporateEvents.map(([title, copy, image]) => <EventCard key={title} title={title} copy={copy} image={image} />)}
          </div>
        </div>
      </section>

      <CTA image={images.stage} />
    </div>
  );
}
