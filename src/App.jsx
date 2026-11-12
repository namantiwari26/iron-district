import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/Marquee";
import Programs from "./components/Programs";
import Pricing from "./components/Pricing";
import Coaches from "./components/Coaches";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (!preloaderDone) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ticker
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [preloaderDone]);

  return (
    <>
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      <Cursor />
      <Navbar />

      <main id="home">
        <Hero onWatchVideo={() => setVideoOpen(true)} />
        <MarqueeStrip />
        <Programs />
        <Pricing />
        <Coaches />
        <Cta />
      </main>

      <Footer />

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
