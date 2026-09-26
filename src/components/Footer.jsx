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
          BACKGROUND
      ====================================================== */}

      {/* Deep green background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-[#0A2119]
          via-[#10231D]
          to-[#071914]
        "
      />

      {/* Soft emerald glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald/20
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald/20
          blur-[130px]
        "
      />

      {/* Very subtle gold glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-0
          h-[260px]
          w-[500px]
          rounded-full
          bg-champagne/5
          blur-[110px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-14
          md:px-8
          md:py-16
        "
      >

        {/* =================================================
            MAIN FOOTER
        ================================================== */}

        <div
          className="
            grid
            gap-12
            md:grid-cols-[1.2fr_.8fr_.9fr]
            md:gap-16
            lg:gap-20
          "
        >

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

            {/* =================================================
                SOCIAL ICONS
            ================================================== */}

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
            <h3
              className="
                font-display
                text-xl
                tracking-wide
                text-ivory
              "
            >
              Explore
            </h3>

            {/* Minimal gold line */}
            <div className="mt-3 h-px w-12 bg-champagne/50" />

            {/* Links */}
            <nav
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

            </nav>
          </div>


          {/* =================================================
              CONNECT
          ================================================== */}

          <div>

            {/* Heading */}
            <h3
              className="
                font-display
                text-xl
                tracking-wide
                text-ivory
              "
            >
              Connect
            </h3>

            {/* Minimal gold line */}
            <div className="mt-3 h-px w-12 bg-champagne/50" />

            {/* Contact information */}
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