import { useEffect, useRef } from "react";

/**
 * Magnetic button effect — element follows cursor within a radius
 */
export function useMagnetic(strength = 0.4) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = Math.max(rect.width, rect.height) * 1.5;

      if (dist < radius) {
        const tx = dx * strength;
        const ty = dy * strength;
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = "translate(0, 0)";
      el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}

export default useMagnetic;

