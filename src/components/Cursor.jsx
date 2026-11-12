import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
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
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.14);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.14);
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    const handlePointerOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, select, textarea, [data-cursor]");
      if (target) {
        const cursorData = target.closest("[data-cursor]")?.getAttribute("data-cursor");
        if (cursorData) {
          setLabel(cursorData);
          ringEl.style.width = "64px";
          ringEl.style.height = "64px";
          ringEl.style.marginLeft = "-32px";
          ringEl.style.marginTop = "-32px";
          ringEl.style.borderColor = "#D62020";
          ringEl.style.background = "rgba(214, 32, 32, 0.15)";
        } else {
          setLabel("");
          ringEl.style.width = "50px";
          ringEl.style.height = "50px";
          ringEl.style.marginLeft = "-25px";
          ringEl.style.marginTop = "-25px";
          ringEl.style.borderColor = "#D62020";
          ringEl.style.background = "rgba(214, 32, 32, 0.08)";
        }
      } else {
        setLabel("");
        ringEl.style.width = "36px";
        ringEl.style.height = "36px";
        ringEl.style.marginLeft = "-18px";
        ringEl.style.marginTop = "-18px";
        ringEl.style.borderColor = "rgba(214, 32, 32, 0.6)";
        ringEl.style.background = "transparent";
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", handlePointerOver);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", handlePointerOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Central Red Dot */}
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
          zIndex: 100000,
          transform: "translate(-100px, -100px)",
        }}
      />
      {/* Outer Magnetic Ring with Dynamic Context Text */}
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
          border: "1.5px solid rgba(214, 32, 32, 0.6)",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-100px, -100px)",
          transition: "width 0.25s ease-out, height 0.25s ease-out, margin 0.25s ease-out, border-color 0.25s, background 0.25s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: label ? "blur(2px)" : "none",
        }}
      >
        {label && (
          <span
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "#EDEDED",
              fontWeight: 600,
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
