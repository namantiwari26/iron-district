import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import PageBanner from "../components/PageBanner";
import BackgroundDriftText from "../components/BackgroundDriftText";
import { images } from "../data/images";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ["All", "Strength", "Conditioning", "Facility", "Atmosphere"];

  const filteredItems =
    selectedCategory === "All"
      ? images.gallery
      : images.gallery.filter((g) => g.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex(
          (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div style={{ position: "relative", background: "#0A0A0A" }}>
      <PageBanner
        title="FACILITY & ACTION GALLERY"
        subtitle="RAW STEEL. DUST IN THE AIR. UNAPOLOGETIC POWER."
        breadcrumb="GALLERY"
        driftWord="VISUALS"
        bgImage="/images/gallery/g2.jpg"
      />

      <section
        style={{
          padding: "clamp(5rem, 8vw, 8rem) 2rem",
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <BackgroundDriftText text="ATMOSPHERE" opacity={0.03} top="20%" />

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                color: selectedCategory === cat ? "#EDEDED" : "#8A8A8A",
                background: selectedCategory === cat ? "#D62020" : "#141414",
                border:
                  selectedCategory === cat
                    ? "1px solid #D62020"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                padding: "0.6rem 1.4rem",
                borderRadius: "2px",
                cursor: "none",
                transition: "all 0.25s ease",
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
          }}
          className="gallery-grid"
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              data-cursor="VIEW"
              onClick={() => setLightboxIndex(idx)}
              style={{
                position: "relative",
                height: idx % 3 === 0 ? "380px" : "300px",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                cursor: "none",
                background: "#141414",
              }}
              className="gallery-card"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  display: "block",
                }}
              />

              {/* Gradient & title overlay on hover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.3) 50%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.5rem",
                  transition: "opacity 0.3s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "#D62020",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.category}
                </span>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.4rem",
                    letterSpacing: "0.05em",
                    color: "#EDEDED",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(12px)",
            zIndex: 100000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "#D62020",
              border: "none",
              borderRadius: "2px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#EDEDED",
              cursor: "none",
              zIndex: 10,
            }}
          >
            <X size={20} />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
              );
            }}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "2rem",
              background: "#141414",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "2px",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#EDEDED",
              cursor: "none",
              zIndex: 10,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#D62020")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#141414")}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image & Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "1100px",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={filteredItems[lightboxIndex]?.src}
              alt={filteredItems[lightboxIndex]?.title}
              style={{
                maxWidth: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                borderRadius: "4px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)",
              }}
            />
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.8rem",
                  letterSpacing: "0.06em",
                  color: "#EDEDED",
                  margin: 0,
                }}
              >
                {filteredItems[lightboxIndex]?.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "#D62020",
                  marginTop: "4px",
                }}
              >
                {filteredItems[lightboxIndex]?.category} · {lightboxIndex + 1} OF{" "}
                {filteredItems.length}
              </p>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
            }}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "2rem",
              background: "#141414",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "2px",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#EDEDED",
              cursor: "none",
              zIndex: 10,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#D62020")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#141414")}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      <style>{`
        .gallery-card:hover img {
          transform: scale(1.08);
        }
        @media (max-width: 1199px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
