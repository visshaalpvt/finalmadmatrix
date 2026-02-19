import { useEffect, useRef, useState } from "react";

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
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    // ONLY CHINESE WORDS + MATRIX GLYPHS FOR MAXIMUM IMPACT
    const chars = "电脑网络编程代码算法智能虚拟现实宇宙空间时间逻辑模拟数字电子芯片机器人发展创新探索创造矩阵系统狂热科技未来幻觉中枢神经数据流动人工智慧二进制源代码MADMATRIXSANKALP20268H5MC:I€JLPIAVZ01X█▓▒░▖▗▘▙▚▛▜▝▞▟";
    const fontSize = window.innerWidth < 768 ? 20 : 18;
    const columns = Math.ceil(window.innerWidth / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -100);

    let animationId: number;
    let lastTime = 0;
    const fps = 45;
    const interval = 1000 / fps;

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);

      const delta = timestamp - lastTime;
      if (delta < interval) return;
      lastTime = timestamp - (delta % interval);

      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.font = `900 ${fontSize}px 'Share Tech Mono', sans-serif`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const brightness = Math.random();

        if (brightness > 0.92) {
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#ff0000";
        } else if (brightness > 0.6) {
          ctx.fillStyle = "#ff1a1a";
          ctx.shadowBlur = 4;
          ctx.shadowColor = "#cc0000";
        } else {
          ctx.fillStyle = "rgba(100, 10, 10, 0.6)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.45;
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
