import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import LogoImage from "/CHLogo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">

      {/* BACKGROUND PATTERN */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C5AB76 0 1px, transparent 1px), radial-gradient(circle at 80% 70%, #89998B 0 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* SOFT BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-champagne/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sage/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">

        {/* MAIN FOOTER GRID */}
        <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr_.8fr]">

          {/* BRAND */}
          <div>

            {/* LOGO IMAGE */}
            <Link
              to="/"
              aria-label="Chériieal Events home"
              className="group inline-flex"
            >
              <img
                src={LogoImage}
                alt="Chériieal Events"
                className="
                  h-auto
                  w-[170px]
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-[1.02]
                  md:w-[195px]
                "
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-md text-sm leading-7 text-ivory/65">
              Chériieal Events creates personal and corporate experiences
              with considered design, thoughtful planning and seamless
              execution.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-champagne/30 text-champagne transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-forest"
              >
                <Instagram
                  size={15}
                  strokeWidth={1.4}
                />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-champagne/30 text-champagne transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-forest"
              >
                <Linkedin
                  size={15}
                  strokeWidth={1.4}
                />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-champagne/30 text-champagne transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-forest"
              >
                <Facebook
                  size={15}
                  strokeWidth={1.4}
                />
              </a>

            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <div className="eyebrow">
              Explore
            </div>

            <div className="mt-5 grid gap-3 text-sm text-ivory/70">

              <Link
                to="/about"
                className="transition-colors duration-300 hover:text-champagne"
              >
                About Us
              </Link>

              <Link
                to="/events"
                className="transition-colors duration-300 hover:text-champagne"
              >
                Our Events
              </Link>

              <Link
                to="/services"
                className="transition-colors duration-300 hover:text-champagne"
              >
                Our Services
              </Link>

              <Link
                to="/contact"
                className="transition-colors duration-300 hover:text-champagne"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* CONNECT */}
          <div>
            <div className="eyebrow">
              Connect
            </div>

            <div className="mt-5 grid gap-4 text-sm text-ivory/70">

              {/* LOCATION */}
              <div className="flex gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-champagne"
                />

                <span>
                  Mumbai, Maharashtra, India
                </span>
              </div>

              {/* EMAIL */}
              <a
                href="mailto:hello@cheriiealevents.com"
                className="flex gap-3 transition-colors duration-300 hover:text-champagne"
              >
                <Mail
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-champagne"
                />

                <span>
                  hello@cheriiealevents.com
                </span>
              </a>

              {/* PHONE */}
              <a
                href="tel:+919876543100"
                className="flex gap-3 transition-colors duration-300 hover:text-champagne"
              >
                <Phone
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-champagne"
                />

                <span>
                  +91 98765 43100
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-12
            flex
            flex-col
            gap-3
            border-t
            border-champagne/15
            pt-6
            text-[10px]
            uppercase
            tracking-[.18em]
            text-ivory/45
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <span>
            © {new Date().getFullYear()} Chériieal Events. All rights reserved.
          </span>

          <span>
            Personal & Corporate Events
          </span>

        </div>

      </div>
    </footer>
  );
}