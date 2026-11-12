import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Play } from "lucide-react";
import { brand, stats } from "../data/content";
import { images } from "../data/images";
import Particles from "./Particles";
import StatItem from "./Stats";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onWatchVideo }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const headlineRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const underlineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Ken Burns parallax on background ──
      gsap.to(bgRef.current, {
        scale: 1.12,
        duration: 20,
        ease: "none",
        yoyo: true,
        repeat: -1,
      });

      // ── Scroll parallax ──
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ── Headline letter reveal ──
      const letters1 = line1Ref.current?.querySelectorAll(".hero-char");
      const letters2 = line2Ref.current?.querySelectorAll(".hero-char");

      if (letters1?.length) {
        gsap.set(letters1, { yPercent: 110, opacity: 0, skewX: -8 });
        gsap.to(letters1, {
          yPercent: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.9,
          stagger: 0.03,
          ease: "power4.out",
          delay: 0.1,
        });
      }

      if (letters2?.length) {
        gsap.set(letters2, { yPercent: 110, opacity: 0, skewX: -8 });
        gsap.to(letters2, {
          yPercent: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.9,
          stagger: 0.025,
          ease: "power4.out",
          delay: 0.3,
        });
      }

      // ── Red underline draw ──
      if (underlineRef.current) {
        const path = underlineRef.current;
        const len = path.getTotalLength ? path.getTotalLength() : 300;
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.8,
        });
      }

      // ── Subheadline + CTA fade in ──
      gsap.set([subRef.current, ctaRef.current], { opacity: 0, y: 24 });
      gsap.to([subRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1.0,
      });

      // ── Stats stagger ──
      const statEls = statsRef.current?.querySelectorAll(".stat-item");
      if (statEls?.length) {
        gsap.set(statEls, { opacity: 0, x: 20 });
        gsap.to(statEls, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          delay: 1.2,
        });
      }

      // ── Mouse parallax ──
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPct = (clientX / window.innerWidth - 0.5) * 2;
        const yPct = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(bgRef.current, {
          x: xPct * -20,
          y: yPct * -12,
          duration: 1.5,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(headlineRef.current, {
          x: xPct * 10,
          y: yPct * 6,
          duration: 1.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const section = sectionRef.current;
      section?.addEventListener("mousemove", handleMouseMove);
      return () => section?.removeEventListener("mousemove", handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split text into individual chars with overflow hidden spans
  const splitChars = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        style={{ display: "inline-block", overflow: "hidden", lineHeight: 0.95 }}
      >
        <span
          className="hero-char"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
      aria-label="Hero section"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage: `url(${images.hero.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          transformOrigin: "center center",
          willChange: "transform",
        }}
        role="img"
        aria-label="Dark gym atmosphere with athlete"
      />

      {/* Dark vignette gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.3) 75%, rgba(10,10,10,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to top, #0A0A0A, transparent)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Chalk dust particles */}
      <Particles />

      {/* Content grid */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 2rem",
          paddingTop: "72px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {/* Left: headline + CTA */}
        <div ref={headlineRef} style={{ maxWidth: "720px" }}>
          {/* BUILT DIFFERENT. */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(5rem, 12vw, 11rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#EDEDED",
              margin: 0,
            }}
          >
            <div
              ref={line1Ref}
              style={{ display: "block", overflow: "hidden" }}
              aria-label="BUILT"
            >
              {splitChars("BUILT")}
            </div>
            <div
              ref={line2Ref}
              style={{ display: "block", overflow: "hidden", position: "relative" }}
              aria-label="DIFFERENT."
            >
              {splitChars("DIFFERENT.")}
              {/* Red underline SVG */}
              <svg
                viewBox="0 0 700 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  left: 0,
                  width: "90%",
                  height: "auto",
                  overflow: "visible",
                }}
                aria-hidden="true"
              >
                <path
                  ref={underlineRef}
                  d="M4 12 C60 6, 150 14, 220 8 C310 2, 400 16, 500 10 C580 5, 650 13, 696 9"
                  stroke="#D62020"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </h1>

          {/* Subheadline */}
          <div ref={subRef} style={{ marginTop: "2.5rem" }}>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                letterSpacing: "0.15em",
                color: "#EDEDED",
                marginBottom: "0.3rem",
              }}
            >
              {brand.subTagline1}
            </p>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                letterSpacing: "0.15em",
                color: "#D62020",
                marginBottom: "0",
              }}
            >
              {brand.subTagline2}
            </p>
          </div>

          {/* CTA row */}
          <div
            ref={ctaRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {/* Primary CTA */}
            <a
              href="#training"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("training")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                color: "#EDEDED",
                background: "#D62020",
                padding: "0.9rem 2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background 0.3s, transform 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FF2D2D";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#D62020";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {brand.cta}
              <ArrowUpRight size={16} />
            </a>

            {/* Watch Video */}
            <button
              onClick={onWatchVideo}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "none",
                border: "none",
                color: "#EDEDED",
                cursor: "none",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                transition: "color 0.3s",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D62020")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#EDEDED")}
              aria-label="Watch promotional video"
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.3s",
                }}
              >
                <Play size={16} fill="#EDEDED" />
              </span>
              {brand.watchVideo}
            </button>
          </div>
        </div>

        {/* Right: Stats column */}
        <div
          ref={statsRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
          className="hero-stats"
        >
          {stats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-stats { display: none !important; }
        }
      `}</style>
    </section>
  );
}

