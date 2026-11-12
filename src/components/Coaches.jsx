import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { coaches } from "../data/content";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

export default function Coaches() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current.querySelector(".coaches-heading");
      gsap.set(heading, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(heading, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });

          const cards = sectionRef.current.querySelectorAll(".coach-card-wrap");
          gsap.set(cards, { opacity: 0, y: 50 });
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const homeCoaches = coaches.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      id="coaches"
      style={{
        background: "#0A0A0A",
        padding: "clamp(5rem, 10vw, 9rem) 2rem",
      }}
      aria-labelledby="coaches-heading"
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="coaches-heading"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                color: "#D62020",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              OUR COACHES
            </p>
            <h2
              id="coaches-heading"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                letterSpacing: "0.04em",
                color: "#EDEDED",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              ELITE MINDS, <span style={{ color: "#D62020" }}>ELITE RESULTS</span>
            </h2>
          </div>

          <Link
            to="/coaches"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
              color: "#EDEDED",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "0.8rem 1.8rem",
              borderRadius: "2px",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#D62020";
              e.currentTarget.style.background = "rgba(214, 32, 32, 0.1)";
              e.currentTarget.style.color = "#D62020";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#EDEDED";
            }}
          >
            VIEW ALL COACHES <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Coaches Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="coaches-grid"
        >
          {homeCoaches.map((coach) => (
            <div key={coach.id} className="coach-card-wrap">
              <TiltCard
                cursorLabel="COACH"
                style={{
                  background: "#141414",
                  borderRadius: "4px",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  to="/coaches"
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  {/* Photo */}
                  <div
                    style={{
                      height: "290px",
                      overflow: "hidden",
                      position: "relative",
                      background: "linear-gradient(135deg, #1A1A1A, #0A0A0A)",
                    }}
                  >
                    <img
                      src={coach.image}
                      alt={`${coach.name}, ${coach.role}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, #141414 0%, transparent 60%)",
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Info */}
                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "1.6rem",
                        letterSpacing: "0.06em",
                        color: "#EDEDED",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {coach.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        color: "#D62020",
                        marginBottom: "1rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {coach.role}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        color: "#8A8A8A",
                        lineHeight: 1.65,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {coach.bio}
                    </p>

                    {/* Specialties */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {coach.specialties.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: "0.62rem",
                            letterSpacing: "0.15em",
                            color: "#CCCCCC",
                            border: "1px solid rgba(255,255,255,0.1)",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "2px",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .coaches-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .coaches-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
