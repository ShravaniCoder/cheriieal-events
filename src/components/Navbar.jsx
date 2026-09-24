import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import Button from "./Button";
import LogoImage from "/CHLogo.png";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/events", "Our Events"],
  ["/services", "Our Services"],
  ["/contact", "Contact Us"],
];

export default function Navbar({ overlay = true }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-all duration-500 md:px-7 md:pt-6 ${
        overlay ? "" : "text-forest"
      }`}
    >
      {/* MAIN NAVBAR */}
      <div
        className={`mx-auto max-w-7xl rounded-[22px] border px-4 py-2.5 transition-all duration-500 md:px-5 ${
          overlay
            ? "border-champagne/40 bg-forest/70 shadow-[0_12px_45px_rgba(0,0,0,.18)] backdrop-blur-xl"
            : "border-forest/10 bg-ivory/90 shadow-lg backdrop-blur-xl"
        }`}
      >
        {/* NAVBAR ROW */}
        <div className="flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Chériieal Events home"
            className="group flex shrink-0 items-center"
          >
            <img
              src={LogoImage}
              alt="Chériieal Events"
              className="
                h-auto
                w-[145px]
                object-contain
                transition-all
                duration-500
                group-hover:scale-[1.02]
                sm:w-[165px]
                md:w-[180px]
              "
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className="group relative flex items-center gap-2 pt-2"
              >
                {({ isActive }) => (
                  <>
                    {/* ACTIVE DIAMOND */}
                    <span
                      className={`absolute -top-1 left-1/2 h-[4px] w-[4px] -translate-x-1/2 rotate-45 bg-champagne transition-all duration-500 ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    />

                    {/* NAV TEXT */}
                    <span
                      className={`text-[9px] font-semibold uppercase transition-all duration-300 ${
                        isActive
                          ? overlay
                            ? "tracking-[.23em] text-champagne"
                            : "tracking-[.23em] text-forest"
                          : overlay
                            ? "tracking-[.18em] text-ivory/80 group-hover:tracking-[.21em] group-hover:text-champagne"
                            : "tracking-[.18em] text-forest/65 group-hover:tracking-[.21em] group-hover:text-forest"
                      }`}
                    >
                      {label}
                    </span>

                    {/* PRIMARY ACTIVE LINE */}
                    <span
                      className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-champagne transition-all duration-500 ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-60"
                      }`}
                    />

                    {/* SECONDARY LUXURY LINE */}
                    <span
                      className={`absolute -bottom-[5px] left-1/2 h-px -translate-x-1/2 bg-champagne/40 transition-all duration-700 ${
                        isActive
                          ? "w-[55%] opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button
              to="/contact"
              light={!overlay}
            >
              Get in Touch
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={`mobile-menu-trigger relative grid h-11 w-11 shrink-0 place-items-center rounded-[14px] border transition-all duration-300 lg:hidden ${
              open
                ? "rotate-90 border-champagne bg-champagne text-forest shadow-[0_10px_30px_rgba(197,171,118,.28)]"
                : overlay
                  ? "border-champagne/45 bg-forest/35 text-ivory hover:border-champagne hover:bg-forest/65"
                  : "border-forest/15 bg-ivory/70 text-forest hover:border-champagne"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X
                size={18}
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                size={18}
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`mobile-menu-panel overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${
            open
              ? "max-h-[520px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mt-3 border-t pt-3 ${
              overlay
                ? "border-champagne/20"
                : "border-forest/10"
            }`}
          >
            <nav className="grid gap-1 pb-2">

              {links.map(([to, label], index) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: open
                      ? `${index * 55}ms`
                      : "0ms",
                  }}
                  className="group"
                >
                  {({ isActive }) => (
                    <div
                      className={`mobile-nav-item flex items-center justify-between rounded-[14px] border px-3 py-3 text-[10px] font-semibold uppercase tracking-[.18em] transition-all duration-300 ${
                        open
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-4 opacity-0"
                      } ${
                        overlay
                          ? isActive
                            ? "border-champagne/45 bg-champagne/10 text-champagne"
                            : "border-transparent text-ivory/75 hover:border-champagne/20 hover:bg-white/5 hover:text-champagne"
                          : isActive
                            ? "border-champagne/45 bg-champagne/10 text-forest"
                            : "border-transparent text-forest/70 hover:border-forest/10 hover:bg-forest/5 hover:text-forest"
                      }`}
                    >
                      <div className="flex items-center gap-3">

                        {/* MOBILE ACTIVE DIAMOND */}
                        <span
                          className={`h-[4px] w-[4px] rotate-45 bg-champagne transition-all duration-500 ${
                            isActive
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          }`}
                        />

                        <span
                          className={`transition-all duration-300 ${
                            isActive
                              ? "tracking-[.22em]"
                              : ""
                          }`}
                        >
                          {label}
                        </span>
                      </div>

                      {/* MOBILE ARROW */}
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 text-champagne opacity-100"
                            : "opacity-40 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  )}
                </NavLink>
              ))}

              {/* MOBILE CTA */}
              <div
                className={`mt-2 transition-all duration-500 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{
                  transitionDelay: open
                    ? "300ms"
                    : "0ms",
                }}
              >
                <Button
                  to="/contact"
                  light={!overlay}
                  className="w-full justify-center rounded-[14px]"
                >
                  Get in Touch
                </Button>
              </div>

            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}