import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Zap, Target, Flame, Dumbbell, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import PageBanner from "../components/PageBanner";
import BackgroundDriftText from "../components/BackgroundDriftText";
import TiltCard from "../components/TiltCard";
import { aboutData, stats } from "../data/content";
import { images } from "../data/images";

gsap.registerPlugin(ScrollTrigger);

const valueIcons = [Target, Flame, Shield, Award, Zap, Dumbbell];

export default function About() {
  const lineRef = useRef(null);
  const timelineContainerRef = useRef(null);

  useEffect(() => {
    // Animate timeline line on scroll
    if (lineRef.current && timelineContainerRef.current) {
      const line = lineRef.current;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: timelineContainerRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 0.8,
            },
          }
        );
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <div style={{ position: "relative", background: "#0A0A0A" }}>
      <PageBanner
        title="ABOUT IRON DISTRICT"
        subtitle="THE CATHEDRAL FOR DISCIPLINE AND RELENTLESS PROGRESS"
        breadcrumb="ABOUT"
        driftWord="DISCIPLINE"
        bgImage={images.about.gymFloor}
      />

      {/* Story & Mission Section */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <BackgroundDriftText text="ORIGIN" opacity={0.03} top="15%" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "center",
          }}
          className="responsive-two-col"
        >
          {/* Left: Headline & Manifesto */}
          <div>
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
              OUR MANIFESTO
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
                lineHeight: 0.95,
                color: "#EDEDED",
                marginBottom: "1.75rem",
              }}
            >
              WE DON'T DO AVERAGE. <br />
              <span style={{ color: "#D62020" }}>FORGED BY OBSESSION.</span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#8A8A8A",
                marginBottom: "1.25rem",
              }}
            >
              {aboutData.storyP1}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#8A8A8A",
                marginBottom: "2.5rem",
              }}
            >
              {aboutData.storyP2}
            </p>

            <Link
              to="/training"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.82rem",
                letterSpacing: "0.18em",
                color: "#EDEDED",
                background: "#D62020",
                padding: "0.9rem 2rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FF2D2D")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#D62020")}
            >
              EXPLORE OUR TRAINING <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Right: Facility Photo with Red Frame Accent */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "-15px",
                right: "-15px",
                width: "100%",
                height: "100%",
                border: "2px solid #D62020",
                borderRadius: "4px",
                zIndex: 0,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8)",
              }}
            >
              <img
                src={images.about.gymFloor}
                alt="Iron District gym training floor"
                style={{
                  width: "100%",
                  height: "460px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10, 10, 10, 0.8) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    letterSpacing: "0.05em",
                    color: "#EDEDED",
                    margin: 0,
                  }}
                >
                  DISTRICT 9 TRAINING FACILITY
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
                  22,000 SQ FT OF PURE CALIBRATED IRON
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section
        style={{
          background: "#141414",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "3.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            textAlign: "center",
          }}
          className="stats-band-grid"
        >
          {stats.map((s) => (
            <div key={s.id}>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  color: "#EDEDED",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {s.value}
                <span style={{ color: "#D62020" }}>{s.suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "#8A8A8A",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
        }}
      >
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
            OUR CODE
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
            THE PILLARS OF <span style={{ color: "#D62020" }}>IRON DISTRICT</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="values-grid"
        >
          {aboutData.values.map((v, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <TiltCard
                key={v.title}
                style={{
                  background: "#141414",
                  padding: "2.5rem 2rem",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "#D62020",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#EDEDED",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    letterSpacing: "0.06em",
                    color: "#EDEDED",
                    marginBottom: "0.75rem",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    color: "#8A8A8A",
                  }}
                >
                  {v.desc}
                </p>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section
        style={{
          background: "#141414",
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
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
              OUR JOURNEY
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
              HOW THE IRON WAS <span style={{ color: "#D62020" }}>FORGED</span>
            </h2>
          </div>

          {/* Timeline List with Drawing Vertical Line */}
          <div
            ref={timelineContainerRef}
            style={{
              position: "relative",
              paddingLeft: "3rem",
            }}
          >
            {/* Animated Red Line */}
            <div
              ref={lineRef}
              style={{
                position: "absolute",
                top: "10px",
                bottom: "10px",
                left: "14px",
                width: "3px",
                background: "#D62020",
                boxShadow: "0 0 10px rgba(214, 32, 32, 0.6)",
              }}
              aria-hidden="true"
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
              {aboutData.timeline.map((item) => (
                <div key={item.year} style={{ position: "relative" }}>
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-3rem",
                      top: "4px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#0A0A0A",
                      border: "3px solid #D62020",
                      boxShadow: "0 0 10px rgba(214, 32, 32, 0.8)",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2rem",
                      color: "#D62020",
                      display: "block",
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.6rem",
                      letterSpacing: "0.05em",
                      color: "#EDEDED",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "#8A8A8A",
                      maxWidth: "680px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Features Checklist */}
      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            THE HARDWARE
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
            24/7 FACILITY <span style={{ color: "#D62020" }}>SPECS</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
          className="facility-grid"
        >
          {aboutData.facilityFeatures.map((f, i) => (
            <div
              key={i}
              style={{
                background: "#141414",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "1.25rem 1.5rem",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <CheckCircle2 size={20} color="#D62020" style={{ flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "#EDEDED",
                  lineHeight: 1.4,
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .responsive-two-col { grid-template-columns: 1fr !important; }
          .stats-band-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .facility-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
