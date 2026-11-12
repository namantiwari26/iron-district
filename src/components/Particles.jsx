import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -9999, y: -9999, isHovering: false });

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
        this.y = initial ? Math.random() * canvas.height : canvas.height + 15;
        this.size = Math.random() * 3.5 + 1;
        this.baseSpeedX = (Math.random() - 0.5) * 0.6;
        this.baseSpeedY = -(Math.random() * 0.5 + 0.25);
        this.vx = this.baseSpeedX;
        this.vy = this.baseSpeedY;
        this.opacity = Math.random() * 0.6 + 0.15;
        this.decay = Math.random() * 0.002 + 0.0008;
        // 85% white chalk dust, 15% crimson ambient reflection
        this.isRed = Math.random() > 0.85;
      }

      update() {
        // Interactive mouse burst: particles disperse away if cursor is near
        const dx = this.x - mousePos.current.x;
        const dy = this.y - mousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 3.5;
          this.vx += (dx / dist) * force;
          this.vy += (dy / dist) * force;
        }

        // Apply friction back to base speed
        this.vx += (this.baseSpeedX - this.vx) * 0.04;
        this.vy += (this.baseSpeedY - this.vy) * 0.04;

        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= this.decay;
        this.size *= 0.998;

        if (this.opacity <= 0 || this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        if (this.isRed) {
          ctx.fillStyle = "#FF3333";
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(214, 32, 32, 0.6)";
        } else {
          ctx.fillStyle = "#F5F5F5";
          ctx.shadowBlur = 3;
          ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: 95 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isHovering: true,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -9999, y: -9999, isHovering: false };
    };

    const parent = canvas.parentElement;
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(animId);
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
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
        zIndex: 3,
      }}
      aria-hidden="true"
    />
  );
}
