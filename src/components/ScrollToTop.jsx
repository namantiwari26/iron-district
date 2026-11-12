import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTop({ lenis }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to top
    window.scrollTo(0, 0);

    // If Lenis is active, reset its scroll position
    if (lenis?.scrollTo) {
      lenis.scrollTo(0, { immediate: true });
    }

    // Refresh ScrollTrigger calculations after DOM paint
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, lenis]);

  return null;
}
