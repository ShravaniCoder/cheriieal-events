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

      {/* =====================================================
          LUXURY CSS BACKGROUND
      ====================================================== */}

      {/* Deep emerald gradient */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-br
          from-[#0A2119]
          via-[#10231D]
          to-[#071914]
        "
      />

      {/* Soft emerald glow — top right */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald/20
          blur-[120px]
        "
      />

      {/* Soft emerald glow — bottom left */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald/25
          blur-[130px]
        "
      />

      {/* =====================================================
          MINIMAL GOLD TEXTURE
      ====================================================== */}

      {/* Bottom gold glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          left-[-80px]
          h-[260px]
          w-[500px]
          rounded-full
          bg-champagne/10
          blur-[100px]
        "
      />

      {/* Minimal gold decorative line */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-16
          right-[-80px]
          h-px
          w-[420px]
          rotate-[-12deg]
          bg-gradient-to-r
          from-transparent
          via-champagne/30
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-24
          right-[-50px]
          h-px
          w-[300px]
          rotate-[-12deg]
          bg-gradient-to-r
          from-transparent
          via-champagne/15
          to-transparent
        "
      />

      {/* Tiny gold accent */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          left-12
          h-1
          w-1
          rounded-full
          bg-champagne/60
          shadow-[0_0_20px_rgba(197,171,118,.45)]
        "
      />

      {/* =====================================================
          FOOTER CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-16">

        {/* =================================================
            MAIN FOOTER GRID
        ================================================== */}

        <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr_.9fr] lg:gap-20">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            {/* Logo */}
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

            {/* Description */}
            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-ivory/65
              "
            >
              Chériieal Events creates personal and corporate experiences
              with considered design, thoughtful planning and seamless
              execution.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex gap-3">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  grid
                  h-10
                  w-10
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

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  grid
                  h-10
                  w-10
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

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  grid
                  h-10
                  w-10
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


          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>

            {/* Heading */}
            <div
              className="
                font-display
                text-xl
                tracking-wide
                text-ivory
              "
            >
              Explore
            </div>

            {/* Gold underline */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-px w-8 bg-champagne/50" />
              <span className="h-1 w-1 rotate-45 bg-champagne/70" />
              <span className="h-px w-8 bg-champagne/50" />
            </div>

            {/* Links */}
            <div
              className="
                mt-6
                grid
                gap-4
                text-sm
                text-ivory/65
              "
            >

              <Link
                to="/about"
                className="
                  w-fit
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-champagne
                "
              >
                About Us
              </Link>

              <Link
                to="/events"
                className="
                  w-fit
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-champagne
                "
              >
                Our Events
              </Link>

              <Link
                to="/services"
                className="
                  w-fit
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-champagne
                "
              >
                Our Services
              </Link>

              <Link
                to="/contact"
                className="
                  w-fit
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-champagne
                "
              >
                Contact Us
              </Link>

            </div>
          </div>


          {/* =================================================
              CONNECT
          ================================================== */}

          <div>

            {/* Heading */}
            <div
              className="
                font-display
                text-xl
                tracking-wide
                text-ivory
              "
            >
              Connect
            </div>

            {/* Gold underline */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-px w-8 bg-champagne/50" />
              <span className="h-1 w-1 rotate-45 bg-champagne/70" />
              <span className="h-px w-8 bg-champagne/50" />
            </div>

            {/* Contact Details */}
            <div
              className="
                mt-6
                grid
                gap-5
                text-sm
                leading-6
                text-ivory/65
              "
            >

              {/* Location */}
              <div className="flex gap-3">

                <MapPin
                  size={17}
                  strokeWidth={1.4}
                  className="
                    mt-0.5
                    shrink-0
                    text-champagne
                  "
                />

                <span>
                  1311, Marathon Millennium,
                  <br />
                  LBS Road, Beside Nirmal Lifestyle Mall,
                  <br />
                  Mulund West, Mumbai - 400080
                </span>

              </div>


              {/* Email */}
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
                  size={17}
                  strokeWidth={1.4}
                  className="
                    mt-0.5
                    shrink-0
                    text-champagne
                  "
                />

                <span>
                  hello@cheriiealevents.com
                </span>

              </a>


              {/* Phone */}
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
                  size={17}
                  strokeWidth={1.4}
                  className="
                    mt-0.5
                    shrink-0
                    text-champagne
                  "
                />

                <span>
                  +91 98765 43100
                </span>

              </a>

            </div>
          </div>

        </div>


        {/* =================================================
            BOTTOM BAR
        ================================================== */}

        <div
          className="
            mt-14
            border-t
            border-champagne/15
            pt-6
          "
        >

          <div
            className="
              flex
              flex-col
              gap-3
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
              © {new Date().getFullYear()} Chériieal Events.
              All rights reserved.
            </span>

            <span className="text-champagne/65">
              Personal & Corporate Events
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}