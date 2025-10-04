import React, { useRef, useEffect } from "react";

const PARTICLE_COUNT = 40; // fewer particles for a lighter effect
const COLORS = [
  "rgba(160,132,255,0.18)",
  "rgba(108,99,255,0.16)",
  "rgba(185,147,255,0.14)",
  "rgba(127,83,172,0.13)",
  "rgba(195,163,255,0.12)",
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const AnimatedParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    window.addEventListener("resize", resize);

    // Initialize particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: random(0, width),
      y: random(0, height),
      r: random(2, 6), // much smaller particles
      dx: random(-0.25, 0.25),
      dy: random(-0.25, 0.25),
      color: COLORS[Math.floor(random(0, COLORS.length))],
      alpha: random(0.2, 0.35),
      blur: random(4, 12), // lighter glow
    }));

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles.current) {
        ctx!.save();
        ctx!.globalAlpha = p.alpha;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.shadowColor = p.color;
        ctx!.shadowBlur = p.blur;
        ctx!.fill();
        ctx!.restore();

        // Move
        p.x += p.dx;
        p.y += p.dy;

        // Wrap around screen edges
        if (p.x < -p.r) p.x = width + p.r;
        if (p.x > width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = height + p.r;
        if (p.y > height + p.r) p.y = -p.r;
      }
      requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(0.8px)", // softer final touch
        background: "transparent",
      }}
    />
  );
};

export default AnimatedParticles;
