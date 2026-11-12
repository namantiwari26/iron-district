import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../data/content";
import IronLogo from "./IronLogo";

export default function Navbar() {
  const navRef = useRef(null);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > prevScrollY.current && y > 200);
      prevScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
          transition:
            "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s, backdrop-filter 0.3s",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
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
          <Link
            to="/"
            aria-label="Iron District Home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
            }}
          >
            <IronLogo size={32} />
            <div>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.3rem",
                  color: "#EDEDED",
                  letterSpacing: "0.08em",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                IRON
              </span>
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.6rem",
                  color: "#8A8A8A",
                  letterSpacing: "0.25em",
                  display: "block",
                  lineHeight: 1,
                  marginTop: "2px",
                }}
              >
                DISTRICT
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "2.2rem",
              alignItems: "center",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      color: isActive ? "#EDEDED" : "#8A8A8A",
                      textDecoration: "none",
                      position: "relative",
                      paddingBottom: "4px",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "#EDEDED";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "#8A8A8A";
                    }}
                  >
                    {link.label}
                    {isActive && (
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
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              to="/contact"
              className="hidden-mobile"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#EDEDED",
                background: "#D62020",
                padding: "0.6rem 1.25rem",
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
            </Link>

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
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "#0A0A0A",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.2rem",
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(2.5rem, 8vw, 3.8rem)",
                      color: isActive ? "#D62020" : "#EDEDED",
                      textDecoration: "none",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.35 }}
            >
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: "1.5rem",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  color: "#EDEDED",
                  background: "#D62020",
                  padding: "0.9rem 2.2rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRadius: "2px",
                }}
              >
                START TRAINING <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 860px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 859px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
