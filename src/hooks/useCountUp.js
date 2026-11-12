import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Count-up number animation triggered on scroll into view
 */
export function useCountUp(end, suffix = "", duration = 2) {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (hasRun.current) return;
        hasRun.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent =
              Math.round(obj.val).toLocaleString() + suffix;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [end, suffix, duration]);

  return ref;
}

export default useCountUp;

