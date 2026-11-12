import { marqueeItems } from "../data/content";

export default function MarqueeStrip() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div
      style={{
        background: "#D62020",
        overflow: "hidden",
        padding: "0.9rem 0",
        position: "relative",
        zIndex: 10,
      }}
      aria-label="Marquee strip"
    >
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div
          className="marquee-track"
          aria-hidden="true"
          style={{ display: "flex", gap: "3rem", alignItems: "center" }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
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
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "rgba(10,10,10,0.5)",
                  marginLeft: "0",
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

