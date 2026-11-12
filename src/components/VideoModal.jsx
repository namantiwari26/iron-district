import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { brand } from "../data/content";

export default function VideoModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10001,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "16 / 9",
              background: "#0A0A0A",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                zIndex: 1,
                background: "#D62020",
                border: "none",
                borderRadius: "2px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "none",
                color: "#EDEDED",
              }}
              aria-label="Close video"
            >
              <X size={18} />
            </button>

            {/* Placeholder video embed */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)",
                gap: "1.5rem",
              }}
            >
              {/* Fake play button */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#D62020">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.5rem",
                  letterSpacing: "0.1em",
                  color: "#EDEDED",
                }}
              >
                IRON DISTRICT — TRAINING FILM
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "#8A8A8A",
                  textAlign: "center",
                  maxWidth: "400px",
                  lineHeight: 1.6,
                }}
              >
                Replace this placeholder with your actual training video embed.
                Update <code style={{ color: "#D62020" }}>brand.videoUrl</code> in{" "}
                <code style={{ color: "#D62020" }}>src/data/content.js</code>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

