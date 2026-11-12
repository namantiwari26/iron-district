import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundDriftText({
  text = "IRON DISTRICT",
  speed = 100,
  direction = -1,
  className = "",
  top = "50%",
  opacity = 0.04,
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: direction * 15,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [direction]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top,
        left: "-20%",
        width: "160%",
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
      className={className}
    >
      <span
        ref={textRef}
        style={{
          display: "inline-block",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(6rem, 18vw, 18rem)",
          lineHeight: 0.8,
          color: "transparent",
          WebkitTextStroke: `2px rgba(255, 255, 255, ${opacity})`,
          letterSpacing: "0.06em",
          willChange: "transform",
        }}
      >
        {text} &nbsp; {text}
      </span>
    </div>
  );
}
