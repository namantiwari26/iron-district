import { useState } from "react";
import { Link } from "react-router-dom";
import { Award, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import PageBanner from "../components/PageBanner";
import BackgroundDriftText from "../components/BackgroundDriftText";
import TiltCard from "../components/TiltCard";
import { coaches } from "../data/content";

export default function CoachesPage() {
  const [activeCoach, setActiveCoach] = useState(null);

  return (
    <div style={{ position: "relative", background: "#0A0A0A" }}>
      <PageBanner
        title="OUR COACHES"
        subtitle="ELITE PEDIGREE. TECHNICAL MASTERY. UNYIELDING DEMANDS."
        breadcrumb="COACHES"
        driftWord="MASTERY"
        bgImage="/images/coaches/coach-1.jpg"
      />

      {/* Grid of Coaches */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <BackgroundDriftText text="LEADERSHIP" opacity={0.03} top="15%" />

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#D62020",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            THE CADRE
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "0.04em",
              color: "#EDEDED",
              lineHeight: 0.95,
            }}
          >
            MEET YOUR <span style={{ color: "#D62020" }}>MENTORS</span>
          </h2>
        </div>

        {/* 6 Coaches Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.75rem",
          }}
          className="coaches-full-grid"
        >
          {coaches.map((c) => (
            <TiltCard
              key={c.id}
              style={{
                background: "#141414",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Photo */}
                <div
                  style={{
                    position: "relative",
                    height: "320px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, #141414 0%, rgba(10, 10, 10, 0.4) 60%, transparent 100%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Experience Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(214, 32, 32, 0.85)",
                      backdropFilter: "blur(4px)",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "2px",
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      color: "#EDEDED",
                    }}
                  >
                    {c.experience} EXPERIENCE
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem" }}>
                  <p
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.2em",
                      color: "#D62020",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {c.role}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.8rem",
                      letterSpacing: "0.05em",
                      color: "#EDEDED",
                      marginBottom: "1rem",
                    }}
                  >
                    {c.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.65,
                      color: "#8A8A8A",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {c.bio}
                  </p>

                  {/* Quote */}
                  <div
                    style={{
                      background: "#0A0A0A",
                      borderLeft: "2px solid #D62020",
                      padding: "0.75rem 1rem",
                      borderRadius: "0 2px 2px 0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8rem",
                        fontStyle: "italic",
                        color: "#CCCCCC",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      "{c.quote}"
                    </p>
                  </div>

                  {/* Certifications */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        color: "#8A8A8A",
                        marginBottom: "0.5rem",
                        textTransform: "uppercase",
                      }}
                    >
                      CERTIFICATIONS
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {c.certifications.map((cert) => (
                        <span
                          key={cert}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.72rem",
                            background: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            padding: "0.2rem 0.55rem",
                            borderRadius: "2px",
                            color: "#EDEDED",
                          }}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Book with Coach CTA */}
              <div
                style={{
                  padding: "1rem 1.75rem 1.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "2px",
                    padding: "0.75rem",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    color: "#EDEDED",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#D62020";
                    e.currentTarget.style.borderColor = "#D62020";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  }}
                >
                  TRAIN WITH {c.name.split(" ")[0]} <ArrowUpRight size={14} />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Coaching Philosophy Section */}
      <section
        style={{
          background: "#141414",
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Quote
            size={70}
            color="#D62020"
            style={{ opacity: 0.2, margin: "0 auto 1.5rem" }}
          />
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.03em",
              color: "#EDEDED",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            "A MEDIOCRE COACH GIVES ORDERS. A GREAT COACH REVEALS WHAT YOU WERE ALWAYS CAPABLE OF CONQUERING."
          </h2>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              color: "#D62020",
              textTransform: "uppercase",
            }}
          >
            — IRON DISTRICT COACHING COUNCIL
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .coaches-full-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .coaches-full-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
