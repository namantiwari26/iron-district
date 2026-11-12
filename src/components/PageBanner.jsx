import { Link } from "react-router-dom";
import BackgroundDriftText from "./BackgroundDriftText";

export default function PageBanner({
  title,
  subtitle,
  breadcrumb = "PAGE",
  driftWord = "IRON DISTRICT",
  bgImage = "/images/about/gym-floor.jpg",
}) {
  return (
    <section
      style={{
        position: "relative",
        height: "50vh",
        minHeight: "380px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        paddingTop: "72px",
      }}
      aria-label={`${title} banner`}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35) contrast(1.1)",
        }}
        aria-hidden="true"
      />

      {/* Dark Vignette & Red Light Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10, 10, 10, 0.6) 0%, rgba(10, 10, 10, 0.85) 70%, #0A0A0A 100%), radial-gradient(circle at 80% 20%, rgba(214, 32, 32, 0.25), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Large Drifting Background Word */}
      <BackgroundDriftText text={driftWord} opacity={0.06} top="25%" />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          padding: "0 2rem",
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
          }}
        >
          <Link
            to="/"
            style={{ color: "#8A8A8A", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D62020")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
          >
            HOME
          </Link>
          <span style={{ color: "#D62020" }}>/</span>
          <span style={{ color: "#EDEDED" }}>{breadcrumb}</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#EDEDED",
            margin: "0 0 1rem 0",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
              letterSpacing: "0.15em",
              color: "#D62020",
              textTransform: "uppercase",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
