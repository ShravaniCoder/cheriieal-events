import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import LogoImage from "/CLogo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">

      {/* =========================================
          FOOTER BACKGROUND IMAGE
      ========================================== */}
       {/* RESPONSIVE FOOTER IMAGE */}
<div className="absolute inset-0">
  <picture className="pointer-events-none absolute inset-0 block">
    <source
      media="(max-width: 767px)"
      srcSet="/images/Footer1.png"
    />

    <img
      src="/images/FooterD.png"
      alt=""
      className="h-full w-full object-cover object-center opacity-50"
    />
  </picture>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-forest/70" />
</div>

      {/* =========================================
          DARK OVERLAY
          Keeps content readable while preserving
          the green botanical artwork.
      ========================================== */}
      <div className="pointer-events-none absolute inset-0 bg-forest/20" />

      {/* =========================================
          SOFT GREEN DEPTH
      ========================================== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forest/10 via-transparent to-forest/30" />

      {/* =========================================
          FOOTER CONTENT
      ========================================== */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8">

        {/* =======================================
            MAIN FOOTER GRID
        ======================================== */}
        <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr_.8fr]">

          {/* =====================================
              BRAND
          ====================================== */}
          <div>

            {/* LOGO */}
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
                  transition-transform
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

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  grid
                  h-9
                  w-9
                  place-items-center
                  rounded-full
                  border
                  border-champagne/30
                  text-champagne
                  transition-all
                  duration-300
                  hover:border-champagne
                  hover:bg-champagne
                  hover:text-forest
                "
              >
                <Instagram
                  size={15}
                  strokeWidth={1.4}
                />
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  grid
                  h-9
                  w-9
                  place-items-center
                  rounded-full
                  border
                  border-champagne/30
                  text-champagne
                  transition-all
                  duration-300
                  hover:border-champagne
                  hover:bg-champagne
                  hover:text-forest
                "
              >
                <Linkedin
                  size={15}
                  strokeWidth={1.4}
                />
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  grid
                  h-9
                  w-9
                  place-items-center
                  rounded-full
                  border
                  border-champagne/30
                  text-champagne
                  transition-all
                  duration-300
                  hover:border-champagne
                  hover:bg-champagne
                  hover:text-forest
                "
              >
                <Facebook
                  size={15}
                  strokeWidth={1.4}
                />
              </a>

            </div>
          </div>

          {/* =====================================
              EXPLORE
          ====================================== */}
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

          {/* =====================================
              CONNECT
          ====================================== */}
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
                  1311, Marathon Millennium,
LBS Road, Beside Nirmal Lifestyle Mall,
Mulund West, Mumbai - 400080
                </span>

              </div>

              {/* EMAIL */}
              <a
                href="mailto:hello@cheriiealevents.com"
                className="
                  flex
                  gap-3
                  transition-colors
                  duration-300
                  hover:text-champagne
                "
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
                className="
                  flex
                  gap-3
                  transition-colors
                  duration-300
                  hover:text-champagne
                "
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

        {/* =======================================
            BOTTOM BAR
        ======================================== */}
        <div
          className="
            mt-12
            flex
            flex-col
            gap-3
            border-t
            border-champagne/20
            pt-6
            text-[10px]
            uppercase
            tracking-[.18em]
            text-ivory/50
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