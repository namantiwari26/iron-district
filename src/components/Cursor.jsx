import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check pointer device
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    // Interactive elements
    const addHover = (el) => {
      el.addEventListener("mouseenter", () => {
        ringEl.style.width = "60px";
        ringEl.style.height = "60px";
        ringEl.style.borderColor = "#D62020";
        ringEl.style.marginLeft = "-30px";
        ringEl.style.marginTop = "-30px";
        const viewLabel = el.closest("[data-cursor]")?.dataset.cursor;
        if (viewLabel) setLabel(viewLabel);
      });
      el.addEventListener("mouseleave", () => {
        ringEl.style.width = "36px";
        ringEl.style.height = "36px";
        ringEl.style.borderColor = "rgba(214,32,32,0.6)";
        ringEl.style.marginLeft = "-18px";
        ringEl.style.marginTop = "-18px";
        setLabel("");
      });
    };

    const interactiveEls = document.querySelectorAll("a, button, [role='button'], .program-card");
    interactiveEls.forEach(addHover);

    // Observe DOM for new elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [role='button'], .program-card").forEach(addHover);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMove);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          marginLeft: "-3px",
          marginTop: "-3px",
          borderRadius: "50%",
          background: "#D62020",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-100px, -100px)",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          marginLeft: "-18px",
          marginTop: "-18px",
          borderRadius: "50%",
          border: "1.5px solid rgba(214,32,32,0.6)",
          pointerEvents: "none",
          zIndex: 99997,
          transform: "translate(-100px, -100px)",
          transition: "width 0.3s, height 0.3s, margin 0.3s, border-color 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {label && (
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "8px",
              letterSpacing: "0.1em",
              color: "#D62020",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        )}
      </div>
    </>
  );
}

