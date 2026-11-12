import { useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import IronLogo from "./IronLogo";
import { footer, navLinks, brand } from "../data/content";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const year = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const socialIcons = {
    Instagram: () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    "Twitter / X": () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    YouTube: () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    TikTok: () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.07a8.17 8.17 0 0 0 4.77 1.52V7.14a4.86 4.86 0 0 1-1.01-.45z" />
      </svg>
    ),
  };

  return (
    <footer
      id="contact"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
      role="contentinfo"
    >
      {/* Top strip with newsletter */}
      <div
        style={{
          background: "#141414",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "2.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "0.08em",
                color: "#EDEDED",
                marginBottom: "0.25rem",
              }}
            >
              STAY IN THE LOOP
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "#8A8A8A",
              }}
            >
              Training tips, member stories, and exclusive offers — straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "0", maxWidth: "420px", width: "100%" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              aria-label="Newsletter email"
              style={{
                flex: 1,
                background: "#0A0A0A",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRight: "none",
                borderRadius: "2px 0 0 2px",
                padding: "0.85rem 1rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "#EDEDED",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#D62020",
                border: "1px solid #D62020",
                borderRadius: "0 2px 2px 0",
                padding: "0.85rem 1.5rem",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "#EDEDED",
                cursor: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                whiteSpace: "nowrap",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FF2D2D")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#D62020")}
            >
              {submitted ? "SUBSCRIBED ✓" : (<>SUBSCRIBE <ArrowUpRight size={14} /></>)}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "3rem",
        }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.5rem",
            }}
          >
            <IronLogo size={36} />
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
                }}
              >
                DISTRICT
              </span>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.75,
              color: "#8A8A8A",
              maxWidth: "280px",
              marginBottom: "2rem",
            }}
          >
            {footer.description}
          </p>

          {/* Socials */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {footer.socials.map((s) => {
              const Icon = socialIcons[s.name] || Instagram;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8A8A8A",
                    textDecoration: "none",
                    transition: "border-color 0.3s, color 0.3s, background 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#D62020";
                    e.currentTarget.style.color = "#EDEDED";
                    e.currentTarget.style.background = "#D62020";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "#8A8A8A";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              color: "#EDEDED",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            QUICK LINKS
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {footer.quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#8A8A8A",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D62020")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
                >
                  <span style={{ color: "#D62020", fontSize: "0.6rem" }}>▶</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              color: "#EDEDED",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            HOURS
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {footer.hours.map((h) => (
              <li key={h.day}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  <Clock size={12} color="#D62020" />
                  <span
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      color: "#EDEDED",
                    }}
                  >
                    {h.day}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#8A8A8A",
                    paddingLeft: "1.25rem",
                  }}
                >
                  {h.time}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              color: "#EDEDED",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            CONTACT
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { Icon: MapPin, text: footer.address },
              { Icon: Phone, text: footer.phone },
              { Icon: Mail, text: footer.email },
            ].map(({ Icon, text }) => (
              <div
                key={text}
                style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
              >
                <Icon
                  size={14}
                  style={{ color: "#D62020", flexShrink: 0, marginTop: "2px" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "#8A8A8A",
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "#8A8A8A",
            }}
          >
            © {year} Iron District. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "#8A8A8A",
            }}
          >
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 639px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
