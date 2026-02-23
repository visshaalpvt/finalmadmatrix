import { useEffect, useRef, useState } from "react";

interface Stream {
  chars: string[];    // characters in the trail
  headY: number;      // current head position
  speed: number;      // fall speed
  col: number;        // column index
  opacity: number;    // depth/base opacity
  charShimmer: number[]; // indices of chars that should change
}

const MatrixRain = ({ opacity: baseOpacity = 0.5 }: { opacity?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollOpacity, setScrollOpacity] = useState(baseOpacity);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const newOpacity = Math.max(0.2, baseOpacity - scrollPos / 1000);
      setScrollOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [baseOpacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // performance optimization
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

    // Classic Matrix Set: Katakana + Numbers
    const characters = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789";
    const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];

    const fontSize = w < 768 ? 12 : 14;
    const colSpacing = fontSize * 0.95; // Tighter spacing for texture
    const numCols = Math.ceil(w / colSpacing);
    const trailLength = Math.floor(h / fontSize) + 10;

    const createStream = (col: number): Stream => {
      const chars: string[] = [];
      const charShimmer: number[] = [];
      for (let i = 0; i < trailLength; i++) {
        chars.push(getRandomChar());
        if (Math.random() > 0.95) charShimmer.push(i);
      }
      return {
        chars,
        headY: -(Math.random() * h / fontSize),
        speed: 0.15 + Math.random() * 0.35, // Faster, more dynamic movement
        col,
        opacity: 0.1 + Math.random() * 0.9, // Depth: some are in back, some front
        charShimmer
      };
    };

    // Create 1.5x more streams than columns for overlapping texture
    const streams: Stream[] = [];
    for (let i = 0; i < numCols * 1.5; i++) {
      streams.push(createStream(Math.random() * numCols));
    }

    let animationId: number;

    const draw = () => {
      // Background with slight alpha for trail "memory"
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textBaseline = "top";

      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        const x = stream.col * colSpacing;

        // Randomly update shimmering characters
        if (Math.random() > 0.9) {
          const idx = Math.floor(Math.random() * trailLength);
          stream.chars[idx] = getRandomChar();
        }

        for (let j = 0; j < trailLength; j++) {
          const y = (Math.floor(stream.headY) - j) * fontSize;

          if (y < -fontSize || y > h) continue;

          // Calculate color and opacity
          let alpha = 0;
          let color = "";

          if (j === 0) {
            // Head - Brightest Red
            alpha = stream.opacity;
            color = "#ff3333";
            ctx.shadowBlur = 8;
            ctx.shadowColor = "#ff0000";
          } else {
            // Trail - Fading out
            alpha = (1 - j / trailLength) * stream.opacity;
            const intensity = Math.floor(255 * (1 - j / trailLength));
            color = `rgba(${intensity}, 0, 0, ${alpha})`;
            ctx.shadowBlur = 0;
          }

          ctx.fillStyle = color;
          ctx.fillText(stream.chars[j % stream.chars.length], x, y);
        }

        // Reset shadow for next stream
        ctx.shadowBlur = 0;

        // Move head
        stream.headY += stream.speed;

        // Respawn when off screen
        if ((stream.headY - trailLength) * fontSize > h) {
          const newStream = createStream(Math.random() * numCols);
          streams[i] = newStream;
        }
      }

      animationId = requestAnimationFrame(draw);
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
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000"
      style={{ opacity: scrollOpacity }}
    />
  );
};

export default MatrixRain;
