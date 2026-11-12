import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * canvas.width;
        this.y = initial
          ? Math.random() * canvas.height
          : canvas.height + 10;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.2);
        this.opacity = Math.random() * 0.5 + 0.1;
        this.decay = Math.random() * 0.003 + 0.001;
        this.hue = Math.random() > 0.85 ? "255,80,80" : "237,237,237";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.decay;
        this.size *= 0.998;
        if (this.opacity <= 0 || this.y < -10) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `rgb(${this.hue})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(${this.hue}, 0.5)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: 80 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
      aria-hidden="true"
    />
  );
}

