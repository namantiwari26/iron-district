import { useEffect, useRef } from "react";
import { marqueeItems } from "../data/content";

export default function MarqueeStrip() {
  const trackRef = useRef(null);
  const doubled = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  const lastScrollY = useRef(0);
  const directionRef = useRef(1); // 1 = normal, -1 = reverse

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (delta > 0 && directionRef.current !== 1) {
        directionRef.current = 1;
        if (trackRef.current) {
          trackRef.current.style.animationDirection = "normal";
        }
      } else if (delta < 0 && directionRef.current !== -1) {
        directionRef.current = -1;
        if (trackRef.current) {
          trackRef.current.style.animationDirection = "reverse";
        }
      }

      // Temporarily speed up animation on rapid scrolling
      const speed = Math.min(Math.abs(delta) * 0.1 + 1, 3);
      if (trackRef.current) {
        trackRef.current.style.animationDuration = `${25 / speed}s`;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        background: "#D62020",
        overflow: "hidden",
        padding: "0.9rem 0",
        position: "relative",
        zIndex: 10,
        boxShadow: "0 0 30px rgba(214, 32, 32, 0.4)",
      }}
      aria-label="Marquee strip"
    >
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div
          ref={trackRef}
          className="marquee-track"
          aria-hidden="true"
          style={{ display: "flex", gap: "3rem", alignItems: "center" }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                letterSpacing: "0.15em",
                color: "#0A0A0A",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "3rem",
              }}
            >
              {item}
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(10,10,10,0.5)",
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
