import { useEffect, useRef, useState } from "react";

interface Stream {
  chars: string[];    // fixed characters at each position in the trail
  headY: number;      // current head position (in grid units)
  speed: number;      // fall speed
  col: number;        // column index
}

const MatrixRain = ({ opacity = 0.7 }: { opacity?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollOpacity, setScrollOpacity] = useState(opacity);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const newOpacity = Math.max(0.3, opacity - scrollPos / 800);
      setScrollOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    // Binary characters - the characters to display
    const binaryChars = "01";

    const isMobile = w < 768;
    const fontSize = isMobile ? 26 : 22;
    const trailLength = Math.floor(h / fontSize) + 5; // enough to fill the screen
    const colSpacing = fontSize + 2;
    const numCols = Math.ceil(w / colSpacing) + 1;

    const getRandomChar = () => binaryChars[Math.floor(Math.random() * binaryChars.length)];

    // Create streams - each column has one stream
    const createStream = (col: number, startY?: number): Stream => {
      const chars: string[] = [];
      for (let i = 0; i < trailLength; i++) {
        chars.push(getRandomChar());
      }
      return {
        chars,
        headY: startY ?? -(Math.random() * trailLength),
        speed: 0.08 + Math.random() * 0.06, // very slow readable speed
        col,
      };
    };

    const streams: Stream[] = [];
    for (let i = 0; i < numCols; i++) {
      streams.push(createStream(i));
    }

    let animationId: number;
    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);

      const delta = timestamp - lastTime;
      if (delta < interval) return;
      lastTime = timestamp - (delta % interval);

      // CLEAR the entire canvas each frame - no smearing!
      ctx.clearRect(0, 0, w, h);
      // Dark background
      ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `bold ${fontSize}px 'Noto Sans Tamil', sans-serif`;
      ctx.textBaseline = "top";

      for (let s = 0; s < streams.length; s++) {
        const stream = streams[s];
        const x = stream.col * colSpacing;
        const headRow = Math.floor(stream.headY);

        // Draw each character in the trail
        for (let t = 0; t < trailLength; t++) {
          const row = headRow - t;
          const y = row * fontSize;

          // Skip if off screen
          if (y < -fontSize || y > h) continue;

          const charIndex = t % stream.chars.length;
          const char = stream.chars[charIndex];

          // Brightness based on distance from head
          if (t === 0) {
            // HEAD - bright red with red glow
            ctx.fillStyle = "#ff0000";
            ctx.shadowBlur = 14;
            ctx.shadowColor = "#ff2200";
          } else if (t <= 3) {
            // Near head - very bright red
            ctx.fillStyle = "#ff3333";
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#ff0000";
          } else if (t <= 8) {
            // Mid trail - solid red, clearly readable
            const alpha = 1.0 - (t - 3) * 0.08;
            ctx.fillStyle = `rgba(220, 30, 30, ${alpha})`;
            ctx.shadowBlur = 3;
            ctx.shadowColor = "#cc0000";
          } else if (t <= 16) {
            // Fading trail - darker red
            const alpha = 0.6 - (t - 8) * 0.05;
            ctx.fillStyle = `rgba(150, 15, 15, ${Math.max(0.1, alpha)})`;
            ctx.shadowBlur = 0;
          } else {
            // Far trail - very dim
            const alpha = 0.2 - (t - 16) * 0.01;
            if (alpha <= 0.02) continue; // skip nearly invisible
            ctx.fillStyle = `rgba(100, 10, 10, ${Math.max(0.02, alpha)})`;
            ctx.shadowBlur = 0;
          }

          ctx.fillText(char, x, y);
        }

        // Reset shadow between streams
        ctx.shadowBlur = 0;

        // Move the stream down
        stream.headY += stream.speed;

        // Reset stream when entire trail has gone off screen
        if ((stream.headY - trailLength) * fontSize > h) {
          stream.headY = -(Math.random() * 15);
          stream.speed = 0.08 + Math.random() * 0.06;
          // Assign new fixed characters for next pass
          for (let i = 0; i < stream.chars.length; i++) {
            stream.chars[i] = getRandomChar();
          }
        }
      }
    };

    animationId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 will-change-transform"
      style={{ opacity: scrollOpacity, imageRendering: 'auto' }}
    />
  );
};

export default MatrixRain;
