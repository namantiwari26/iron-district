import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { cta } from "../data/content";
import { images } from "../data/images";

gsap.registerPlugin(ScrollTrigger);

const avatarList = [
  images.avatars.a1,
  images.avatars.a2,
  images.avatars.a3,
  images.avatars.a4,
];

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
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Headline scale reveal
      const lines = [
        headline1Ref.current,
        headline2Ref.current,
        headline3Ref.current,
      ].filter(Boolean);

      gsap.set(lines, { opacity: 0, y: 50, skewX: -6 });
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
              delay: 0.45,
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
            delay: 0.65,
          });

          // Graffiti text fade in
          if (graffitiRef.current) {
            gsap.set(graffitiRef.current, { opacity: 0, scale: 0.95 });
            gsap.to(graffitiRef.current, {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
              delay: 0.85,
            });
          }

          // Neon flicker-on sequence
          if (neonRef.current) {
            const tl = gsap.timeline({ delay: 0.2 });
            tl.to(neonRef.current, { opacity: 0.2, duration: 0.06 })
              .to(neonRef.current, { opacity: 0.9, duration: 0.08 })
              .to(neonRef.current, { opacity: 0.3, duration: 0.08 })
              .to(neonRef.current, { opacity: 1, duration: 0.2 })
              .to(neonRef.current, {
                opacity: 0.85,
                duration: 2.2,
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
      {/* Background Image: Athlete walking away holding gym bag */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-12%",
          backgroundImage: `url(${images.cta.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          willChange: "transform",
        }}
        role="img"
        aria-label="Muscular athlete walking away holding a gym bag with overhead neon light rectangle"
      />

      {/* Dark Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.85) 45%, rgba(10,10,10,0.4) 75%, rgba(10,10,10,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top Ceiling Neon Rectangle Light Outline from Screenshot */}
      <div
        ref={neonRef}
        style={{
          position: "absolute",
          top: "6%",
          left: "58%",
          transform: "translateX(-50%)",
          width: "clamp(220px, 35vw, 480px)",
          height: "clamp(55px, 8vw, 95px)",
          border: "2px solid rgba(255, 255, 255, 0.85)",
          borderRadius: "2px",
          boxShadow:
            "0 0 15px rgba(255,255,255,0.6), 0 0 35px rgba(255,255,255,0.25), inset 0 0 15px rgba(255,255,255,0.15)",
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
          gridTemplateColumns: "1.2fr 1fr",
          gap: "4rem",
          alignItems: "end",
        }}
        className="cta-grid"
      >
        {/* Left: Stacked Headline + CTA */}
        <div>
          <h2
            id="cta-heading"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4.2rem, 11vw, 10.5rem)",
              lineHeight: 0.88,
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

          {/* Handwritten "Starts here." with brush underline */}
          <div
            ref={handwrittenRef}
            style={{
              marginTop: "1rem",
              position: "relative",
              display: "inline-block",
            }}
          >
            <span
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: "clamp(1.9rem, 4vw, 3.2rem)",
                color: "#D62020",
                display: "block",
                lineHeight: 1.1,
              }}
            >
              {cta.handwritten}
            </span>
            {/* Brush Underline SVG */}
            <svg
              viewBox="0 0 320 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", display: "block", marginTop: "-4px" }}
              aria-hidden="true"
            >
              <path
                d="M4 9 C50 4, 110 11, 170 6 C230 2, 280 10, 316 7"
                stroke="#D62020"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* CTA Button */}
          <div style={{ marginTop: "2.75rem" }}>
            <Link
              ref={ctaBtnRef}
              to="/contact"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                color: "#EDEDED",
                background: "#D62020",
                padding: "1rem 2.6rem",
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
            </Link>
          </div>

          {/* Avatars Stack */}
          <div
            ref={avatarsRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              marginTop: "2.2rem",
            }}
          >
            {/* Overlapping Avatars */}
            <div style={{ display: "flex" }}>
              {avatarList.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Member ${i + 1}`}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "2px solid #0A0A0A",
                    marginLeft: i === 0 ? 0 : "-10px",
                    objectFit: "cover",
                    flexShrink: 0,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
                  }}
                />
              ))}
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "#EDEDED",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {cta.memberText}
            </p>
          </div>
        </div>

        {/* Right: "BE YOUR OWN STANDARD." Graffiti Text */}
        <div
          ref={graffitiRef}
          style={{ textAlign: "right", paddingBottom: "1.5rem" }}
          aria-hidden="true"
        >
          <div
            className="neon-text"
            style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)",
              lineHeight: 1.1,
              color: "#D62020",
              textShadow:
                "0 0 15px rgba(214,32,32,0.8), 0 0 35px rgba(214,32,32,0.4), 0 0 60px rgba(214,32,32,0.2)",
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
        @media (max-width: 859px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
