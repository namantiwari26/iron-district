import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.9,
            ease: "power4.inOut",
            onComplete: () => {
              if (containerRef.current) {
                containerRef.current.style.display = "none";
              }
              onComplete();
            },
          });
        },
      });

      // Count up 0 → 100
      const obj = { val: 0 };
      tl.to(obj, {
        val: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate: () => {
          const v = Math.round(obj.val);
          if (counterRef.current) counterRef.current.textContent = v;
          if (progressRef.current)
            progressRef.current.style.width = v + "%";
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      id="preloader"
      style={{ clipPath: "inset(0 0 0% 0)" }}
      aria-label="Loading Iron District"
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-6">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* X mark */}
          <rect width="80" height="80" fill="#D62020" rx="4" />
          <line x1="18" y1="18" x2="62" y2="62" stroke="#EDEDED" strokeWidth="8" strokeLinecap="round" />
          <line x1="62" y1="18" x2="18" y2="62" stroke="#EDEDED" strokeWidth="8" strokeLinecap="round" />
          <line x1="40" y1="10" x2="40" y2="70" stroke="#EDEDED" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        </svg>

        <div className="text-center">
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2rem",
              letterSpacing: "0.15em",
              color: "#EDEDED",
            }}
          >
            IRON DISTRICT
          </p>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#8A8A8A",
              marginTop: "0.25rem",
            }}
          >
            LOADING YOUR SESSION
          </p>
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: "240px",
            height: "2px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "1px",
            overflow: "hidden",
          }}
        >
          <div
            ref={progressRef}
            style={{
              height: "100%",
              width: "0%",
              background: "#D62020",
              borderRadius: "1px",
              transition: "none",
            }}
          />
        </div>

        {/* Counter */}
        <span
          ref={counterRef}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "4rem",
            color: "#D62020",
            lineHeight: 1,
          }}
        >
          0
        </span>
      </div>
    </div>
  );
}

