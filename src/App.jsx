import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import CoachesPage from "./pages/CoachesPage";
import PricingPage from "./pages/PricingPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

gsap.registerPlugin(ScrollTrigger);

// Animated Route Wrapper with Red Wipe Transition
function AnimatedRoutes({ onWatchVideo }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ minHeight: "100vh" }}
      >
        {/* Red Page Wipe Overlay */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#D62020",
            zIndex: 99999,
            transformOrigin: "bottom center",
            pointerEvents: "none",
          }}
        />
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#0A0A0A",
            zIndex: 99998,
            transformOrigin: "top center",
            pointerEvents: "none",
          }}
        />

        <Routes location={location}>
          <Route path="/" element={<Home onWatchVideo={onWatchVideo} />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/coaches" element={<CoachesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home onWatchVideo={onWatchVideo} />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [lenisInstance, setLenisInstance] = useState(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (!preloaderDone) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    setLenisInstance(lenis);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      setLenisInstance(null);
    };
  }, [preloaderDone]);

  return (
    <Router>
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      <Cursor />
      <ScrollProgress />
      <ScrollToTop lenis={lenisInstance} />

      <Navbar />

      <main>
        <AnimatedRoutes onWatchVideo={() => setVideoOpen(true)} />
      </main>

      <Footer />

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </Router>
  );
}
