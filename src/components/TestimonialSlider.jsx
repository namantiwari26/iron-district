import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "../data/content";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  const t = testimonials[current];

  return (
    <section
      style={{
        background: "#0A0A0A",
        padding: "clamp(5rem, 8vw, 8rem) 2rem",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        overflow: "hidden",
      }}
      aria-label="Member transformations and reviews"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Section title */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              color: "#D62020",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            REAL TRANSFORMATIONS
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "0.04em",
              color: "#EDEDED",
              lineHeight: 0.95,
            }}
          >
            PROOF IN THE <span style={{ color: "#D62020" }}>PUDDLE OF SWEAT</span>
          </h2>
        </div>

        {/* Testimonial Card Display */}
        <div
          data-cursor="DRAG"
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            background: "#141414",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "4px",
            padding: "clamp(2rem, 5vw, 4rem)",
            position: "relative",
            minHeight: "340px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Quote icon background */}
          <div
            style={{
              position: "absolute",
              top: "2rem",
              right: "2.5rem",
              opacity: 0.08,
              color: "#D62020",
              pointerEvents: "none",
            }}
          >
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.3rem", marginBottom: "1.5rem" }}>
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#D62020" color="#D62020" />
                ))}
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  lineHeight: 1.6,
                  color: "#EDEDED",
                  fontStyle: "italic",
                  marginBottom: "2rem",
                }}
              >
                "{t.text}"
              </p>

              {/* Author & Metric */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #D62020",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "1.3rem",
                        letterSpacing: "0.06em",
                        color: "#EDEDED",
                        lineHeight: 1,
                      }}
                    >
                      {t.name}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        color: "#8A8A8A",
                        marginTop: "3px",
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(214, 32, 32, 0.12)",
                    border: "1px solid rgba(214, 32, 32, 0.3)",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "2px",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    color: "#FF4D4D",
                  }}
                >
                  ⚡ {t.metric}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "2.5rem",
              paddingTop: "1rem",
            }}
          >
            {/* Dots */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === current ? "#D62020" : "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    cursor: "none",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "2px",
                  background: "#0A0A0A",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#EDEDED",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "none",
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#D62020";
                  e.currentTarget.style.background = "#D62020";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.background = "#0A0A0A";
                }}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                aria-label="Next testimonial"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "2px",
                  background: "#0A0A0A",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#EDEDED",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "none",
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#D62020";
                  e.currentTarget.style.background = "#D62020";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.background = "#0A0A0A";
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
