import { useRef, useState } from "react";

export default function TiltCard({
  children,
  className = "",
  style = {},
  maxTilt = 8,
  glowColor = "rgba(214, 32, 32, 0.25)",
  cursorLabel = "VIEW",
  ...props
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    const rotX = -yPct * maxTilt;
    const rotY = xPct * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px)`);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      data-cursor={cursorLabel}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered ? "transform 0.1s ease-out, box-shadow 0.3s" : "transform 0.5s ease-out, box-shadow 0.5s",
        boxShadow: isHovered
          ? `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px ${glowColor}, 0 0 0 1px #D62020`
          : "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        transformStyle: "preserve-3d",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      {...props}
    >
      {/* Glare overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.12), transparent 80%)`,
          opacity: glarePos.opacity,
          transition: "opacity 0.3s ease",
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
}
