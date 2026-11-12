import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  const headlineRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const underlineRef = useRef(null);
  const statsRef = useRef(null);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns slow breathe
      gsap.to(bgRef.current, {
        scale: 1.08,
        duration: 18,
        ease: "none",
        yoyo: true,
        repeat: -1,
      });

      // Scroll parallax
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Character split reveal
      const letters1 = line1Ref.current?.querySelectorAll(".hero-char");
      const letters2 = line2Ref.current?.querySelectorAll(".hero-char");

      if (letters1?.length) {
        gsap.set(letters1, { yPercent: 110, opacity: 0, skewX: -10 });
        gsap.to(letters1, {
          yPercent: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.9,
          stagger: 0.035,
          ease: "power4.out",
          delay: 0.15,
        });
      }

      if (letters2?.length) {
        gsap.set(letters2, { yPercent: 110, opacity: 0, skewX: -10 });
        gsap.to(letters2, {
          yPercent: 0,
          opacity: 1,
          skewX: 0,
          duration: 0.9,
          stagger: 0.03,
          ease: "power4.out",
          delay: 0.35,
        });
      }

      // Red brush underline drawing
      if (underlineRef.current) {
        const path = underlineRef.current;
        const len = path.getTotalLength ? path.getTotalLength() : 400;
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.85,
        });
      }

      // Subheadline + CTA buttons
      gsap.set([subRef.current, ctaRef.current], { opacity: 0, y: 25 });
      gsap.to([subRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1.05,
      });

      // Stats stagger
      const statEls = statsRef.current?.querySelectorAll(".stat-item");
      if (statEls?.length) {
        gsap.set(statEls, { opacity: 0, x: 25 });
        gsap.to(statEls, {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          delay: 1.25,
        });
      }

      // 3D Depth Mouse Parallax: background, headline, and foreground move at 3 distinct planes
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPct = (clientX / window.innerWidth - 0.5) * 2;
        const yPct = (clientY / window.innerHeight - 0.5) * 2;

        // Background plane (depth -25px)
        gsap.to(bgRef.current, {
          x: xPct * -25,
          y: yPct * -15,
          duration: 1.4,
          ease: "power2.out",
          overwrite: "auto",
        });

        // Headline plane (depth +15px)
        gsap.to(headlineRef.current, {
          x: xPct * 15,
          y: yPct * 8,
          duration: 1.1,
          ease: "power2.out",
          overwrite: "auto",
        });

        // Stats plane (depth +20px)
        gsap.to(statsRef.current, {
          x: xPct * 10,
          y: yPct * 5,
          duration: 1.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      // Device Gyro Tilt on Mobile
      const handleOrientation = (e) => {
        if (!e.gamma || !e.beta) return;
        const xTilt = Math.min(Math.max(e.gamma, -30), 30) / 30;
        const yTilt = Math.min(Math.max(e.beta - 45, -30), 30) / 30;

        gsap.to(bgRef.current, {
          x: xTilt * -15,
          y: yTilt * -10,
          duration: 1.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const section = sectionRef.current;
      section?.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("deviceorientation", handleOrientation);

      return () => {
        section?.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("deviceorientation", handleOrientation);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitChars = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        style={{ display: "inline-block", overflow: "hidden", lineHeight: 0.95 }}
      >
        <span className="hero-char" style={{ display: "inline-block" }}>
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
        minHeight: "720px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
      aria-label="Hero section"
    >
      {/* Layer 1: Background image with athlete & chalk explosion on right */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-8%",
          backgroundImage: `url(${images.hero.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
          transformOrigin: "center center",
          willChange: "transform",
        }}
        role="img"
        aria-label="Dark gym atmosphere with athlete clapping chalk dust"
      />

      {/* Layer 2: Vignette Gradients (Dark left for high text readability) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 35%, rgba(10,10,10,0.4) 65%, rgba(10,10,10,0.65) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade into black */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "28%",
          background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Layer 3: Interactive Chalk dust particles canvas */}
      <Particles />

      {/* Layer 4: Main Content Grid (Headline + Vertical Stats) */}
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
        {/* Left: BUILT DIFFERENT. Headline & CTA */}
        <div ref={headlineRef} style={{ maxWidth: "750px" }}>
          {/* Main Giant Headline with glitch on hover */}
          <h1
            onMouseEnter={() => setGlitch(true)}
            onMouseLeave={() => setGlitch(false)}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(5.2rem, 12.5vw, 11.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#EDEDED",
              margin: 0,
              cursor: "none",
              textShadow: glitch
                ? "2px 0 #D62020, -2px 0 rgba(255,255,255,0.8)"
                : "none",
              transition: "text-shadow 0.15s ease",
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
              style={{
                display: "block",
                overflow: "hidden",
                position: "relative",
              }}
              aria-label="DIFFERENT."
            >
              {splitChars("DIFFERENT.")}
              {/* Dynamic Animated Brush Underline SVG */}
              <svg
                viewBox="0 0 700 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "92%",
                  height: "auto",
                  overflow: "visible",
                }}
                aria-hidden="true"
              >
                <path
                  ref={underlineRef}
                  d="M4 12 C70 5, 160 15, 240 8 C340 1, 440 17, 540 9 C620 4, 660 14, 696 10"
                  stroke="#D62020"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </h1>

          {/* Subheadline from screenshot */}
          <div ref={subRef} style={{ marginTop: "2.5rem" }}>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
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
                fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
                letterSpacing: "0.15em",
                color: "#D62020",
                marginBottom: "0",
              }}
            >
              {brand.subTagline2}
            </p>
          </div>

          {/* CTA Row */}
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
            <Link
              to="/training"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                color: "#EDEDED",
                background: "#D62020",
                padding: "0.95rem 2.2rem",
                display: "flex",
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
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {brand.cta}
              <ArrowUpRight size={16} />
            </Link>

            {/* Watch Video Modal Trigger */}
            <button
              onClick={onWatchVideo}
              data-cursor="PLAY"
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
              aria-label="Watch promotional training video"
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

        {/* Right: Vertical Stats Column */}
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
        @media (max-width: 899px) {
          .hero-stats { display: none !important; }
        }
      `}</style>
    </section>
  );
}
