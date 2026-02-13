import { ArrowRight, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-black">
      {/* 1. Cinematic Vertical Scan Line */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-transparent via-matrix-red/10 to-transparent animate-[scan-line_8s_linear_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
      </div>

      {/* Dark radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-matrix-red/20 via-background to-background" />

      {/* 4. Floating Parallax Content */}
      <div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto space-y-12 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <div className="space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-2 text-xs sm:text-sm text-matrix-red font-matrix border border-matrix-red/30 uppercase tracking-[0.5em] backdrop-blur-md">
            <span className="animate-pulse">▶</span>
            NATIONAL LEVEL SYMPOSIUM
          </div>

          <div className="flex flex-col items-center relative py-10 group">
            <style>{`
              @keyframes scan-line {
                from { transform: translateY(-100%); }
                to { transform: translateY(1000%); }
              }
              @keyframes glitch-text {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
              }
              @keyframes flicker {
                0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
                20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
              }
              @keyframes light-sweep {
                0% { transform: translateX(-100%) skewX(-20deg); }
                20%, 100% { transform: translateX(200%) skewX(-20deg); }
              }
              @keyframes cyber-pulse {
                0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.8)); transform: scale(1.4); }
                50% { filter: drop-shadow(0 0 25px rgba(255, 0, 0, 1)); transform: scale(1.45); }
              }
              .glitch-flicker {
                animation: flicker 4s infinite step-end;
              }
              .light-sweep-container {
                position: relative;
                overflow: hidden;
              }
              .light-sweep-container::after {
                content: '';
                position: absolute;
                top: 0; left: 0; width: 30%; height: 100%;
                background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
                animation: light-sweep 3s infinite ease-in-out;
                pointer-events: none;
              }
              .special-letter {
                color: #ff1a1a;
                display: inline-block;
                animation: cyber-pulse 2s ease-in-out infinite;
                margin: 0 4px;
              }
            `}</style>

            <h1 className="text-4xl sm:text-7xl md:text-8xl font-poster font-black tracking-[8px] md:tracking-[15px] uppercase flex items-center justify-center glitch-flicker light-sweep-container relative">
              <span className="special-letter">M</span>
              <span className="text-foreground relative z-10">ADMATRI</span>
              <span className="special-letter">X</span>
            </h1>

            <div className="text-lg sm:text-2xl md:text-3xl text-matrix-red/60 font-matrix tracking-[0.8em] mt-4 opacity-0 animate-[fade-in_1s_forwards_1.2s] uppercase">
              2026
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl sm:text-3xl text-muted-foreground font-heading font-bold uppercase tracking-[0.4em] max-w-3xl border-y border-matrix-red/20 py-4 backdrop-blur-sm">
            Where Talent Meets Opportunity
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm sm:text-lg font-matrix uppercase tracking-widest text-matrix-red/80">
            <span className="flex items-center gap-2 hover:text-matrix-red transition-colors cursor-default">📅 MAR 13 & 14</span>
            <span className="flex items-center gap-2 hover:text-matrix-red transition-colors cursor-default">📍 SCAD AUDITORIUM</span>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <CountdownTimer />
        </div>

        {/* 5. Cyber Red Outline CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#events"
            className="group relative px-10 sm:px-16 py-4 sm:py-5 rounded-none font-matrix font-bold text-matrix-red border-2 border-matrix-red hover:bg-matrix-red hover:text-white transition-all overflow-hidden"
          >
            {/* Glow Expand Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-matrix-red blur-xl transition-all duration-500 -z-10 scale-50 group-hover:scale-150" />

            <span className="relative z-10 flex items-center gap-3 uppercase tracking-[0.3em]">
              Initialize Matrix <Zap className="w-5 h-5 group-hover:animate-pulse" />
            </span>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
