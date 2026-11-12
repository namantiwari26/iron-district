import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dumbbell, Flame, Crown, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  dumbbell: Dumbbell,
  flame: Flame,
  crown: Crown,
  zap: Zap,
};

export default function StatItem({ stat, isLast }) {
  const numRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => {
        if (hasRun.current) return;
        hasRun.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            if (el) {
              el.textContent =
                Math.round(obj.val).toLocaleString() + stat.suffix;
            }
          },
        });
      },
    });

    return () => trigger.kill();
  }, [stat]);

  const Icon = iconMap[stat.icon] || Dumbbell;

  return (
    <div
      className="stat-item"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "1.5rem 0",
        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.08)",
        gap: "0.3rem",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D62020",
        }}
      >
        <Icon size={18} />
      </div>

      {/* Number */}
      <div
        ref={numRef}
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          color: "#EDEDED",
          lineHeight: 1,
        }}
        aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
      >
        0
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          color: "#8A8A8A",
          textAlign: "right",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

