import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { cta } from "../data/content";
import { images } from "../data/images";

gsap.registerPlugin(ScrollTrigger);

const AVATAR_COLORS = ["#D62020", "#8A8A8A", "#1A1A1A", "#D62020"];

export default function Cta() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const neonRef = useRef(null);
  const headline1Ref = useRef(null);
  const headline2Ref = useRef(null);
  const headline3Ref = useRef(null);
  const handwrittenRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const avatarsRef = useRef(null);
  const graffitiRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Headline scale reveal
      const lines = [
        headline1Ref.current,
        headline2Ref.current,
        headline3Ref.current,
      ].filter(Boolean);

      gsap.set(lines, { opacity: 0, y: 60, skewX: -5 });
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => {
          gsap.to(lines, {
            opacity: 1,
            y: 0,
            skewX: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
          });

          // Handwritten text
          if (handwrittenRef.current) {
            gsap.set(handwrittenRef.current, { opacity: 0, x: -30 });
            gsap.to(handwrittenRef.current, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.5,
            });
          }

          // CTA + avatars
          gsap.set([ctaBtnRef.current, avatarsRef.current], { opacity: 0, y: 20 });
          gsap.to([ctaBtnRef.current, avatarsRef.current], {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.7,
          });

          // Graffiti glow pulse
          if (graffitiRef.current) {
            gsap.set(graffitiRef.current, { opacity: 0 });
            gsap.to(graffitiRef.current, {
              opacity: 1,
              duration: 0.5,
              delay: 0.9,
            });
          }

          // Neon flicker
          if (neonRef.current) {
            const tl = gsap.timeline({ delay: 0.3 });
            tl.to(neonRef.current, { opacity: 0.3, duration: 0.08 })
              .to(neonRef.current, { opacity: 1, duration: 0.08 })
              .to(neonRef.current, { opacity: 0.5, duration: 0.1 })
              .to(neonRef.current, { opacity: 1, duration: 0.3 })
              .to(neonRef.current, {
                opacity: 0.9,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
              });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: "relative",
        minHeight: "90vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "clamp(6rem, 12vw, 10rem) 2rem",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-15%",
          backgroundImage: `url(${images.cta.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
        role="img"
        aria-label="Athlete in dark gym with neon light"
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.75) 55%, rgba(10,10,10,0.5) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Neon rectangle light outline at top */}
      <div
        ref={neonRef}
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(200px, 40%, 450px)",
          height: "clamp(60px, 10%, 100px)",
          border: "1.5px solid rgba(255,255,255,0.7)",
          borderRadius: "2px",
          boxShadow:
            "0 0 15px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.1), inset 0 0 15px rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "end",
        }}
        className="cta-grid"
      >
        {/* Left: headline */}
        <div>
          <h2
            id="cta-heading"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 11vw, 10rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            <span
              ref={headline1Ref}
              style={{ display: "block", color: "#EDEDED" }}
            >
              {cta.line1}
            </span>
            <span
              ref={headline2Ref}
              style={{ display: "block", color: "#D62020" }}
            >
              {cta.line2}
            </span>
            <span
              ref={headline3Ref}
              style={{ display: "block", color: "#EDEDED" }}
            >
              {cta.line3}
            </span>
          </h2>

          {/* Handwritten "Starts here." */}
          <div
            ref={handwrittenRef}
            style={{ marginTop: "1rem", position: "relative", display: "inline-block" }}
          >
            <span
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "#D62020",
                display: "block",
                lineHeight: 1.1,
              }}
            >
              {cta.handwritten}
            </span>
            {/* Brush underline SVG */}
            <svg
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", display: "block", marginTop: "-4px" }}
              aria-hidden="true"
            >
              <path
                d="M4 8 C40 4, 90 10, 150 6 C200 3, 250 9, 296 7"
                stroke="#D62020"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>

          {/* CTA Button */}
          <div style={{ marginTop: "2.5rem" }}>
            <a
              ref={ctaBtnRef}
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                color: "#EDEDED",
                background: "#D62020",
                padding: "1rem 2.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FF2D2D";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#D62020";
                e.currentTarget.style.transform = "";
              }}
            >
              {cta.cta}
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Avatars row */}
          <div
            ref={avatarsRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {/* Avatar stack */}
            <div style={{ display: "flex" }}>
              {AVATAR_COLORS.map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "2px solid #0A0A0A",
                    marginLeft: i === 0 ? 0 : "-10px",
                    background: color,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: "#EDEDED",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "#EDEDED",
                  lineHeight: 1.4,
                }}
              >
                {cta.memberText}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Graffiti text */}
        <div
          ref={graffitiRef}
          style={{ textAlign: "right" }}
          aria-hidden="true"
        >
          <div
            className="neon-text"
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.15,
              color: "#D62020",
              textShadow:
                "0 0 20px rgba(214,32,32,0.6), 0 0 40px rgba(214,32,32,0.3)",
              transform: "rotate(-3deg)",
              display: "inline-block",
            }}
          >
            BE
            <br />
            YOUR
            <br />
            OWN.
            <br />
            <span style={{ color: "#EDEDED", fontSize: "0.9em" }}>
              STANDARD.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

