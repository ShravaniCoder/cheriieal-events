import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "radial-gradient(circle at 20% 20%, #C5AB76 0 1px, transparent 1px), radial-gradient(circle at 80% 70%, #89998B 0 1px, transparent 1px)", backgroundSize: "38px 38px"}} />
      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-md text-sm leading-7 text-ivory/65">
              Chériieal Events creates personal and corporate experiences with considered design, thoughtful planning and seamless execution.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-champagne/30 text-champagne transition hover:bg-champagne hover:text-forest" aria-label="Social media">
                  <Icon size={15} strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow">Explore</div>
            <div className="mt-5 grid gap-3 text-sm text-ivory/70">
              <Link to="/about" className="hover:text-champagne">About Us</Link>
              <Link to="/events" className="hover:text-champagne">Our Events</Link>
              <Link to="/services" className="hover:text-champagne">Our Services</Link>
              <Link to="/contact" className="hover:text-champagne">Contact Us</Link>
            </div>
          </div>

          <div>
            <div className="eyebrow">Connect</div>
            <div className="mt-5 grid gap-4 text-sm text-ivory/70">
              <div className="flex gap-3"><MapPin size={16} className="shrink-0 text-champagne" /> Mumbai, Maharashtra, India</div>
              <div className="flex gap-3"><Mail size={16} className="shrink-0 text-champagne" /> hello@cheriiealevents.com</div>
              <div className="flex gap-3"><Phone size={16} className="shrink-0 text-champagne" /> +91 98765 43100</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-champagne/15 pt-6 text-[10px] uppercase tracking-[.18em] text-ivory/45 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Chériieal Events. All rights reserved.</span>
          <span>Personal & Corporate Events</span>
        </div>
      </div>
    </footer>
  );
}
