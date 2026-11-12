import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import BackgroundDriftText from "../components/BackgroundDriftText";
import { footer } from "../data/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Maximum Strength & Powerlifting",
    time: "Morning (5AM - 10AM)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    setToastMessage(`Welcome aboard, ${formData.name.split(" ")[0]}! Your 1-Day Free Pass has been sent to ${formData.email}.`);

    setTimeout(() => {
      setSubmitted(false);
      setToastMessage("");
    }, 6000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      goal: "Maximum Strength & Powerlifting",
      time: "Morning (5AM - 10AM)",
      message: "",
    });
  };

  return (
    <div style={{ position: "relative", background: "#0A0A0A" }}>
      <PageBanner
        title="JOIN THE DISTRICT"
        subtitle="CLAIM YOUR 1-DAY PASS. STEP ONTO THE FLOOR AND PROVE YOURSELF."
        breadcrumb="CONTACT"
        driftWord="BEGIN"
        bgImage="/images/cta/cta-bg.jpg"
      />

      {/* Toast Notification */}
      {submitted && (
        <div
          role="alert"
          style={{
            position: "fixed",
            bottom: "2.5rem",
            right: "2.5rem",
            background: "#141414",
            border: "1px solid #D62020",
            borderRadius: "4px",
            padding: "1.25rem 1.75rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(214, 32, 32, 0.3)",
            zIndex: 100001,
            maxWidth: "420px",
            animation: "slideIn 0.3s ease-out",
          }}
        >
          <CheckCircle2 size={24} color="#D62020" style={{ flexShrink: 0 }} />
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
                color: "#EDEDED",
                margin: "0 0 2px 0",
              }}
            >
              PASS ISSUED SUCCESSFULLY
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "#8A8A8A",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {toastMessage}
            </p>
          </div>
        </div>
      )}

      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <BackgroundDriftText text="COMMENCE" opacity={0.03} top="15%" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
          }}
          className="contact-layout-grid"
        >
          {/* Left: Application Form */}
          <div
            style={{
              background: "#141414",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "4px",
              padding: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                color: "#D62020",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              FREE TRIAL PASS
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                letterSpacing: "0.04em",
                color: "#EDEDED",
                lineHeight: 0.95,
                marginBottom: "2rem",
              }}
            >
              CLAIM YOUR <span style={{ color: "#D62020" }}>FIRST SESSION</span>
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Name */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    color: "#8A8A8A",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Alex Mercer"
                  style={{
                    width: "100%",
                    background: "#0A0A0A",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "2px",
                    padding: "0.85rem 1rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#EDEDED",
                    outline: "none",
                  }}
                />
              </div>

              {/* Email & Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-two-col">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      color: "#8A8A8A",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                    }}
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@domain.com"
                    style={{
                      width: "100%",
                      background: "#0A0A0A",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "2px",
                      padding: "0.85rem 1rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#EDEDED",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      color: "#8A8A8A",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                    }}
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    style={{
                      width: "100%",
                      background: "#0A0A0A",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "2px",
                      padding: "0.85rem 1rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#EDEDED",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Primary Goal Dropdown */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    color: "#8A8A8A",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  PRIMARY FOCUS / GOAL
                </label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    background: "#0A0A0A",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "2px",
                    padding: "0.85rem 1rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#EDEDED",
                    outline: "none",
                  }}
                >
                  <option value="Maximum Strength & Powerlifting">Maximum Strength & Powerlifting</option>
                  <option value="Metabolic Conditioning & Stamina">Metabolic Conditioning & Stamina</option>
                  <option value="1-on-1 Personal Transformation">1-on-1 Personal Transformation</option>
                  <option value="Boxing & Striking Conditioning">Boxing & Striking Conditioning</option>
                  <option value="Mobility & Pain-Free Recovery">Mobility & Pain-Free Recovery</option>
                  <option value="General Athletic Body Recomposition">General Athletic Body Recomposition</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    color: "#8A8A8A",
                    marginBottom: "0.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  QUESTIONS OR INJURY HISTORY (OPTIONAL)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your background or previous training..."
                  style={{
                    width: "100%",
                    background: "#0A0A0A",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "2px",
                    padding: "0.85rem 1rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#EDEDED",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  marginTop: "0.5rem",
                  background: "#D62020",
                  border: "none",
                  borderRadius: "2px",
                  padding: "1rem",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.18em",
                  color: "#EDEDED",
                  cursor: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#FF2D2D")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#D62020")}
              >
                REQUEST PASS NOW <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

          {/* Right: Facility Details & Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Direct Info Card */}
            <div
              style={{
                background: "#141414",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "4px",
                padding: "2.5rem 2rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  letterSpacing: "0.05em",
                  color: "#EDEDED",
                  marginBottom: "1.5rem",
                }}
              >
                FACILITY DETAILS
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <MapPin size={18} color="#D62020" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", color: "#EDEDED", fontSize: "0.85rem" }}>
                      LOCATION
                    </strong>
                    <span style={{ color: "#8A8A8A", fontSize: "0.85rem" }}>{footer.address}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <Phone size={18} color="#D62020" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", color: "#EDEDED", fontSize: "0.85rem" }}>
                      PHONE / WHATSAPP
                    </strong>
                    <span style={{ color: "#8A8A8A", fontSize: "0.85rem" }}>{footer.phone}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <Mail size={18} color="#D62020" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", color: "#EDEDED", fontSize: "0.85rem" }}>
                      DIRECT EMAIL
                    </strong>
                    <span style={{ color: "#8A8A8A", fontSize: "0.85rem" }}>{footer.email}</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <Clock size={18} color="#D62020" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <strong style={{ display: "block", color: "#EDEDED", fontSize: "0.85rem" }}>
                      OPENING HOURS
                    </strong>
                    <ul style={{ listStyle: "none", color: "#8A8A8A", fontSize: "0.8rem", marginTop: "4px" }}>
                      {footer.hours.map((h) => (
                        <li key={h.day}>
                          <span style={{ color: "#CCCCCC" }}>{h.day}:</span> {h.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Dark SVG Map */}
            <div
              style={{
                background: "#141414",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "4px",
                height: "260px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Stylized vector map background */}
              <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#EDEDED" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <line x1="0" y1="120" x2="600" y2="150" stroke="#EDEDED" strokeWidth="3" />
                <line x1="180" y1="0" x2="220" y2="300" stroke="#EDEDED" strokeWidth="2.5" />
                <line x1="380" y1="0" x2="340" y2="300" stroke="#EDEDED" strokeWidth="2" />
              </svg>

              {/* Central Map Pin Marker with Radar Ripple */}
              <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#D62020",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 0.75rem",
                    boxShadow: "0 0 25px rgba(214, 32, 32, 0.8)",
                  }}
                >
                  <MapPin size={24} color="#EDEDED" />
                </div>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    letterSpacing: "0.06em",
                    color: "#EDEDED",
                    margin: 0,
                  }}
                >
                  IRON DISTRICT HEADQUARTERS
                </p>
                <p
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: "#D62020",
                    margin: 0,
                  }}
                >
                  DISTRICT 9 · NEW YORK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 1023px) {
          .contact-layout-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 639px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
