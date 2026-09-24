import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/events", "Our Events"],
  ["/services", "Our Services"],
  ["/contact", "Contact Us"]
];

export default function Navbar({ overlay = true }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`absolute left-0 right-0 top-0 z-50 px-4 pt-4 md:px-7 md:pt-6 ${overlay ? "" : "text-forest"}`}>
      <div className={`mx-auto max-w-7xl rounded-[22px] border px-4 py-2.5 md:px-5 ${overlay ? "glass border-champagne/40" : "bg-ivory/90 border-forest/10 shadow-lg backdrop-blur-xl"}`}>
        <div className="flex items-center justify-between gap-4">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Chériieal Events home">
            <Logo light={overlay} compact={false} />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-[9px] font-semibold uppercase tracking-[.18em] transition ${overlay ? "text-ivory/85 hover:text-champagne" : "text-forest/75 hover:text-forest"} ${isActive ? (overlay ? "text-champagne" : "text-forest") : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" light={!overlay}>Get in Touch</Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
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
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            <span className={`absolute -right-1 -top-1 h-2 w-2 rounded-full bg-champagne transition-transform duration-300 ${open ? "scale-0" : "scale-100"}`} />
          </button>
        </div>

        <div
          className={`mobile-menu-panel overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${
            open ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className={`mt-3 border-t pt-3 ${overlay ? "border-champagne/20" : "border-forest/10"}`}>
            <nav className="grid gap-1 pb-2">
              {links.map(([to, label], index) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${index * 55}ms` : "0ms" }}
                  className={({ isActive }) =>
                    `mobile-nav-item group flex items-center justify-between rounded-[14px] border px-3 py-3 text-[10px] font-semibold uppercase tracking-[.18em] transition-all duration-300 ${
                      open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    } ${
                      overlay
                        ? isActive
                          ? "border-champagne/45 bg-champagne/10 text-champagne"
                          : "border-transparent text-ivory/75 hover:border-champagne/20 hover:bg-white/5 hover:text-champagne"
                        : isActive
                          ? "border-champagne/45 bg-champagne/10 text-forest"
                          : "border-transparent text-forest/70 hover:border-forest/10 hover:bg-forest/5 hover:text-forest"
                    }`
                  }
                >
                  <span>{label}</span>
                  <ArrowUpRight size={13} strokeWidth={1.5} className="opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </NavLink>
              ))}
              <div className={`mt-2 transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`} style={{ transitionDelay: open ? "300ms" : "0ms" }}>
                <Button to="/contact" light={!overlay} className="w-full justify-center rounded-[14px]">
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
