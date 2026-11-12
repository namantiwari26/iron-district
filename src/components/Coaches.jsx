import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { coaches } from "../data/content";
import { images } from "../data/images";


gsap.registerPlugin(ScrollTrigger);

const avatarImages = [images.avatars.a1, images.avatars.a2, images.avatars.a3];

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

          const cards = sectionRef.current.querySelectorAll(".coach-card");
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
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
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
            }}
          >
            ELITE MINDS,{" "}
            <span style={{ color: "#D62020" }}>ELITE RESULTS</span>
          </h2>
        </div>

        {/* Coaches grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="coaches-grid"
        >
          {coaches.map((coach, i) => (
            <div
              key={coach.id}
              className="coach-card"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                overflow: "hidden",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D62020";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "";
              }}
            >
              {/* Photo */}
              <div
                style={{
                  height: "280px",
                  overflow: "hidden",
                  position: "relative",
                  background: "linear-gradient(135deg, #1A1A1A, #0A0A0A)",
                }}
              >
                <img
                  src={avatarImages[i]}
                  alt={`${coach.name}, ${coach.role}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Info */}
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
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
                    fontSize: "0.82rem",
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
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        color: "#8A8A8A",
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
