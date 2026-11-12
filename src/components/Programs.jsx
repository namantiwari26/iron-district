import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Dumbbell, Heart, User } from "lucide-react";
import { programs } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const iconMap = { dumbbell: Dumbbell, heart: Heart, user: User };

function ProgramCard({ program, index }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Enter animation
    gsap.set(card, { opacity: 0, y: 60, rotation: 2 });
    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.15,
        });
      },
    });

    // Hover effects
    const onEnter = () => {
      gsap.to(imgRef.current, { scale: 1.08, duration: 0.6, ease: "power2.out" });
      gsap.to(arrowRef.current, { x: 4, y: -4, duration: 0.3 });
      card.style.boxShadow = "0 0 0 1px #D62020, 0 20px 60px rgba(214,32,32,0.15)";
      card.style.transform = "translateY(-8px)";
      card.style.transition = "box-shadow 0.4s, transform 0.4s";
    };

    const onLeave = () => {
      gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: "power2.out" });
      gsap.to(arrowRef.current, { x: 0, y: 0, duration: 0.3 });
      card.style.boxShadow = "none";
      card.style.transform = "";
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [index]);

  const Icon = iconMap[program.icon] || Dumbbell;

  return (
    <div
      ref={cardRef}
      className="program-card"
      data-cursor="VIEW"
      style={{
        background: "#141414",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "4px",
        overflow: "hidden",
        cursor: "none",
        position: "relative",
        willChange: "transform",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          height: "280px",
          overflow: "hidden",
        }}
      >
        <img
          ref={imgRef}
          src={program.image}
          alt={program.title + " program"}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            willChange: "transform",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.style.background =
              `linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)`;
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        {/* Red icon square */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            width: "36px",
            height: "36px",
            background: "#D62020",
            borderRadius: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-hidden="true"
        >
          <Icon size={18} color="#EDEDED" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 1.8rem)",
            letterSpacing: "0.06em",
            color: "#EDEDED",
            marginBottom: "0.5rem",
          }}
        >
          {program.title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            color: "#8A8A8A",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
          }}
        >
          {program.subtitle}
        </p>

        {/* Arrow */}
        <div
          ref={arrowRef}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#D62020",
              borderRadius: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowUpRight size={16} color="#EDEDED" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([labelRef.current, headingRef.current, textRef.current, btnRef.current], {
        opacity: 0,
        y: 40,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(
            [labelRef.current, headingRef.current, textRef.current, btnRef.current],
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="training"
      style={{
        background: "#0A0A0A",
        padding: "clamp(5rem, 10vw, 9rem) 2rem",
      }}
      aria-labelledby="training-heading"
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "start",
          }}
          className="programs-grid"
        >
          {/* Left column */}
          <div>
            <p
              ref={labelRef}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                color: "#D62020",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              TRAINING
            </p>

            <h2
              ref={headingRef}
              id="training-heading"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "#EDEDED",
                marginBottom: "1.5rem",
              }}
            >
              STRONGER{" "}
              <span style={{ display: "block" }}>
                EVERYDAY<span style={{ color: "#D62020" }}>.</span>
              </span>
            </h2>

            <p
              ref={textRef}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "#8A8A8A",
                marginBottom: "2.5rem",
                maxWidth: "320px",
              }}
            >
              {/* from brand */}
              World-class equipment, elite coaching and a community that pushes
              you to be your best.
            </p>

            <a
              ref={btnRef}
              href="#training"
              onClick={(e) => e.preventDefault()}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                color: "#EDEDED",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "0.85rem 1.8rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "border-color 0.3s, color 0.3s, background 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#D62020";
                e.currentTarget.style.color = "#D62020";
                e.currentTarget.style.background = "rgba(214,32,32,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                e.currentTarget.style.color = "#EDEDED";
                e.currentTarget.style.background = "transparent";
              }}
            >
              EXPLORE PROGRAMS
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Right column: cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="cards-grid"
          >
            {programs.map((prog, i) => (
              <ProgramCard key={prog.id} program={prog} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .programs-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

