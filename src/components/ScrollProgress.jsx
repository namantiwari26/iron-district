import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const current = (window.scrollY / total) * 100;
        setProgress(Math.min(100, Math.max(0, current)));
      }
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Red Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "transparent",
          zIndex: 10002,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #D62020, #FF3D3D)",
            boxShadow: "0 0 10px rgba(214, 32, 32, 0.8)",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "44px",
          height: "44px",
          borderRadius: "2px",
          background: "#141414",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#EDEDED",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9990,
          cursor: "none",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(15px)",
          pointerEvents: showTop ? "auto" : "none",
          transition: "opacity 0.3s, transform 0.3s, background 0.3s, border-color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#D62020";
          e.currentTarget.style.borderColor = "#D62020";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#141414";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
        }}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
