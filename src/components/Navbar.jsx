import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, brand } from "../data/content";
import IronLogo from "./IronLogo";

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > prevScrollY.current && y > 200);
      prevScrollY.current = y;

      // Update active link based on scroll position
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveLink("#" + sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setActiveLink(href);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s, backdrop-filter 0.3s",
          background: scrolled
            ? "rgba(10,10,10,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            aria-label="Iron District Home"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
          >
            <IronLogo size={32} />
            <div>
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.3rem",
                color: "#EDEDED",
                letterSpacing: "0.08em",
                display: "block",
                lineHeight: 1,
              }}>IRON</span>
              <span style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.6rem",
                color: "#8A8A8A",
                letterSpacing: "0.25em",
                display: "block",
                lineHeight: 1,
                marginTop: "2px",
              }}>DISTRICT</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: activeLink === link.href ? "#EDEDED" : "#8A8A8A",
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "4px",
                    transition: "color 0.3s",
                  }}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "#D62020",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href="#training"
              onClick={(e) => { e.preventDefault(); handleNavClick("#training"); }}
              className="hidden-mobile"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#EDEDED",
                background: "#D62020",
                padding: "0.6rem 1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                textDecoration: "none",
                transition: "background 0.3s",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FF2D2D")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#D62020")}
            >
              START TRAINING
              <ArrowUpRight size={14} />
            </a>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="show-mobile"
              style={{
                background: "none",
                border: "none",
                color: "#EDEDED",
                cursor: "none",
                padding: "0.5rem",
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "#0A0A0A",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 10vw, 4rem)",
                  color: activeLink === link.href ? "#D62020" : "#EDEDED",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#training"
              onClick={(e) => { e.preventDefault(); handleNavClick("#training"); setMenuOpen(false); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              style={{
                marginTop: "2rem",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.2em",
                color: "#EDEDED",
                background: "#D62020",
                padding: "1rem 2.5rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "2px",
              }}
            >
              START TRAINING <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}

