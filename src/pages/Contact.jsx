import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { images } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="page-shell">
      <SEO title="Contact Us | Chériieal Events" description="Start a conversation with the Chériieal Events team about your personal or corporate event." />
      <PageHero eyebrow="Contact Us" title={<>Let’s create something <span className="text-champagne">exceptional.</span></>} copy="Tell us about your event, your vision and what matters most. Our team would love to hear what you are planning." image={images.contact} />

      <section className="section-pad bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[.72fr_1.28fr] md:px-8">
          <div>
            <div className="eyebrow">Begin the conversation</div>
            <h2 className="display mt-3 text-5xl md:text-6xl">Every event begins with a conversation.</h2>
            <p className="mt-5 text-sm leading-7 text-forest/60">Share a few details with us and our team will use them as a starting point for the right questions, ideas and next steps.</p>
            <div className="mt-8 grid gap-4">
              <div className="glass-light rounded-2xl p-5"><Mail className="text-champagne" size={19} /><div className="mt-4 text-xs uppercase tracking-[.18em] text-forest/45">Email</div><div className="mt-1 text-sm text-forest">hello@cheriiealevents.com</div></div>
              <div className="glass-light rounded-2xl p-5"><Phone className="text-champagne" size={19} /><div className="mt-4 text-xs uppercase tracking-[.18em] text-forest/45">Phone</div><div className="mt-1 text-sm text-forest">+91 98765 43100</div></div>
              <div className="glass-light rounded-2xl p-5"><MapPin className="text-champagne" size={19} /><div className="mt-4 text-xs uppercase tracking-[.18em] text-forest/45">Location</div><div className="mt-1 text-sm text-forest">1311, Marathon Millennium,
LBS Road, Beside Nirmal Lifestyle Mall,
Mulund West, Mumbai - 400080</div></div>
            </div>
          </div>

          <div className="rounded-3xl bg-forest p-5 text-ivory shadow-luxury md:p-8">
            {sent ? (
              <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-champagne/50 text-champagne"><Send size={20} /></div>
                <div className="eyebrow mt-6">Thank you</div>
                <h3 className="display mt-3 text-5xl">Your event story starts here.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-ivory/60">We’ve received your enquiry. Our team will review the details and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Full Name", "text", true],
                  ["Company Name", "text", false],
                  ["Email Address", "email", true],
                  ["Phone Number", "tel", true],
                  ["Event Type", "text", true],
                  ["Event Date", "date", true],
                  ["Event Location", "text", true],
                  ["Estimated Guest Count", "text", false]
                ].map(([label, type, required]) => (
                  <label key={label} className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-ivory/55">
                    {label}
                    <input required={required} type={type} className="h-12 rounded-xl border border-champagne/20 bg-white/5 px-4 text-sm font-normal tracking-normal text-ivory outline-none transition placeholder:text-ivory/30 focus:border-champagne/70" />
                  </label>
                ))}
                <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-ivory/55 sm:col-span-2">
                  Tell Us About Your Event
                  <textarea required rows="6" className="resize-none rounded-xl border border-champagne/20 bg-white/5 px-4 py-4 text-sm font-normal tracking-normal text-ivory outline-none transition placeholder:text-ivory/30 focus:border-champagne/70" placeholder="Tell us about the occasion, date, location, atmosphere and anything already decided." />
                </label>
                <button className="luxury-btn luxury-btn-light mt-2 justify-center sm:col-span-2" type="submit">Begin Your Event <Send size={14} /></button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-center text-ivory">
        <div className="mx-auto max-w-3xl px-5">
          <div className="eyebrow">Chériieal Events</div>
          <h2 className="display mt-3 text-5xl md:text-6xl">Beautifully considered. Calmly delivered.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/60">We look forward to hearing your story and creating an event that feels exceptional from the first impression to the moments that stay with you.</p>
        </div>
      </section>
    </div>
  );
}
