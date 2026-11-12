import Hero from "../components/Hero";
import MarqueeStrip from "../components/Marquee";
import Programs from "../components/Programs";
import Pricing from "../components/Pricing";
import Coaches from "../components/Coaches";
import TestimonialSlider from "../components/TestimonialSlider";
import Cta from "../components/Cta";
import BackgroundDriftText from "../components/BackgroundDriftText";

export default function Home({ onWatchVideo }) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Hero onWatchVideo={onWatchVideo} />
      <MarqueeStrip />
      <Programs />
      <TestimonialSlider />
      <Pricing />
      <Coaches />
      <Cta />
    </div>
  );
}
