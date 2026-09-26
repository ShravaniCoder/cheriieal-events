import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check, X } from "lucide-react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { images } from "../data";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mdek1rgb",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        form.reset();
        setShowSuccess(true);
      } else {
        const data = await response.json();

        if (data.errors) {
          setError(
            data.errors.map((error) => error.message).join(", ")
          );
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      setError(
        "Unable to send your enquiry. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="page-shell">
      <SEO
        title="Contact Us | Chériieal Events"
        description="Start a conversation with the Chériieal Events team about your personal or corporate event."
      />

      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let’s create something{" "}
            <span className="text-champagne">exceptional.</span>
          </>
        }
        copy="Tell us about your event, your vision and what matters most. Our team would love to hear what you are planning."
        image={images.contact}
      />

      <section className="section-pad bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[.72fr_1.28fr] md:px-8">

          {/* LEFT CONTENT */}
          <div>
            <div className="eyebrow">
              Begin the conversation
            </div>

            <h2 className="display mt-3 text-5xl md:text-6xl">
              Every event begins with a conversation.
            </h2>

            <p className="mt-5 text-sm leading-7 text-forest/60">
              Share a few details with us and our team will use them as a
              starting point for the right questions, ideas and next steps.
            </p>

            <div className="mt-8 grid gap-4">

              <div className="glass-light rounded-2xl p-5">
                <Mail
                  className="text-champagne"
                  size={19}
                />

                <div className="mt-4 text-xs uppercase tracking-[.18em] text-forest/45">
                  Email
                </div>

                <div className="mt-1 text-sm text-forest">
                  hello@cheriiealevents.com
                </div>
              </div>

              <div className="glass-light rounded-2xl p-5">
                <Phone
                  className="text-champagne"
                  size={19}
                />

                <div className="mt-4 text-xs uppercase tracking-[.18em] text-forest/45">
                  Phone
                </div>

                <div className="mt-1 text-sm text-forest">
                  +91 98765 43100
                </div>
              </div>

              <div className="glass-light rounded-2xl p-5">
                <MapPin
                  className="text-champagne"
                  size={19}
                />

                <div className="mt-4 text-xs uppercase tracking-[.18em] text-forest/45">
                  Location
                </div>

                <div className="mt-1 text-sm leading-6 text-forest">
                  1311, Marathon Millennium,
                  <br />
                  LBS Road, Beside Nirmal Lifestyle Mall,
                  <br />
                  Mulund West, Mumbai - 400080
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl bg-forest p-5 text-ivory shadow-luxury md:p-8">

            <form
              onSubmit={submit}
              className="grid gap-4 sm:grid-cols-2"
            >

              {[
                ["Full Name", "text", true, "fullName"],
                ["Company Name", "text", false, "companyName"],
                ["Email Address", "email", true, "email"],
                ["Phone Number", "tel", true, "phone"],
                ["Event Type", "text", true, "eventType"],
                ["Event Date", "date", true, "eventDate"],
                ["Event Location", "text", true, "eventLocation"],
                [
                  "Estimated Guest Count",
                  "text",
                  false,
                  "guestCount",
                ],
              ].map(
                ([label, type, required, name]) => (
                  <label
                    key={name}
                    className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-ivory/55"
                  >
                    {label}

                    <input
                      required={required}
                      type={type}
                      name={name}
                      className="h-12 rounded-xl border border-champagne/20 bg-white/5 px-4 text-sm font-normal tracking-normal text-ivory outline-none transition placeholder:text-ivory/30 focus:border-champagne/70 focus:bg-white/[0.07]"
                    />
                  </label>
                )
              )}

              {/* MESSAGE */}
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-ivory/55 sm:col-span-2">
                Tell Us About Your Event

                <textarea
                  required
                  name="message"
                  rows="6"
                  placeholder="Tell us about the occasion, date, location, atmosphere and anything already decided."
                  className="resize-none rounded-xl border border-champagne/20 bg-white/5 px-4 py-4 text-sm font-normal tracking-normal text-ivory outline-none transition placeholder:text-ivory/30 focus:border-champagne/70 focus:bg-white/[0.07]"
                />
              </label>

              {/* FORM ERROR */}
              {error && (
                <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200 sm:col-span-2">
                  {error}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`luxury-btn luxury-btn-light mt-2 justify-center sm:col-span-2 ${
                  isSubmitting
                    ? "cursor-not-allowed opacity-60"
                    : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    Sending...
                  </>
                ) : (
                  <>
                    Begin Your Event
                    <Send size={14} />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-forest py-20 text-center text-ivory">
        <div className="mx-auto max-w-3xl px-5">

          <div className="eyebrow">
            Chériieal Events
          </div>

          <h2 className="display mt-3 text-5xl md:text-6xl">
            Beautifully considered. Calmly delivered.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/60">
            We look forward to hearing your story and creating an event
            that feels exceptional from the first impression to the
            moments that stay with you.
          </p>

        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest/60 px-5 backdrop-blur-md"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-champagne/30 bg-ivory p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-forest/10 text-forest/50 transition hover:border-champagne hover:text-forest"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* SUCCESS ICON */}
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-champagne/50 bg-champagne/10 text-champagne">
              <Check size={26} strokeWidth={1.7} />
            </div>

            <div className="eyebrow mt-7">
              Thank You
            </div>

            <h3 className="display mt-3 text-4xl text-forest md:text-5xl">
              Your event story
              <br />
              starts here.
            </h3>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-forest/60">
              We’ve received your enquiry successfully. Our team will
              review your details and get back to you soon.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="luxury-btn mt-7 justify-center"
            >
              Continue
            </button>

          </div>
        </div>
      )}
    </div>
  );
}