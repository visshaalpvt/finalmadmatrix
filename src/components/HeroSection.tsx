import { ArrowRight, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const { user, setPendingLink } = useAuth();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      // If already identified, scroll to events
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not identified, open the identification modal
      setPendingLink("SCROLL_TO_EVENTS");
      toast.info("Identification Required", {
        description: "Please provide your details to access the Matrix protocols."
      });
      window.dispatchEvent(new Event('open-login-modal'));
    }
  };


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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-transparent">
      {/* 0. Cinematic Background Video & Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 1. Cinematic Vertical Scan Line */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-transparent via-matrix-red/5 to-transparent animate-[scan-line_4s_linear_infinite]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(0,0,0,1),rgba(0,0,0,0),rgba(0,0,0,1))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-60" />
      </div>

      {/* Subtle vignettes instead of heavy overlays */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 4. Floating Parallax Content */}
      <div
        className="relative z-30 text-center px-4 max-w-6xl mx-auto space-y-12 transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <div className="space-y-4 animate-fade-in-up">

          <div className="flex flex-col items-center relative py-10 group">
            <style>{`
              @keyframes scan-line {
                from {transform: translateY(-100%); }
                to {transform: translateY(1000%); }
              }
              @keyframes fade-in {
                from {opacity: 0; }
                to {opacity: 1; }
              }
              @keyframes fade-in-up {
                from {opacity: 0; transform: translateY(20px); }
                to {opacity: 1; transform: translateY(0); }
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
                0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.8)); transform: scale(1.1); }
                50% { filter: drop-shadow(0 0 25px rgba(255, 0, 0, 1)); transform: scale(1.15); }
              }
              .animate-fade-in-up {
                animation: fade-in-up 1s forwards;
                will-change: transform, opacity;
              }
              .glitch-flicker {
                animation: flicker 4s infinite step-end;
                will-change: opacity;
              }
              .light-sweep-container {
                position: relative;
                overflow: hidden;
              }
              .light-sweep-container::after {
                content: '';
                position: absolute;
                top: 0; left: 0; width: 30%; height: 100%;
                background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
                animation: light-sweep 1.5s infinite ease-in-out;
                pointer-events: none;
                will-change: transform;
              }
              .special-letter {
                color: #ff1a1a;
                display: inline-block;
                animation: cyber-pulse 2s ease-in-out infinite;
                margin: 0 4px;
                will-change: transform, filter;
                transform: translateZ(0); /* Force GPU */
              }
              .gpu-animate {
                transform: translateZ(0);
                backface-visibility: hidden;
                perspective: 1000;
                will-change: transform;
              }
            `}</style>

            <h1 className="flex flex-col items-center justify-center gap-4 sm:gap-6 animate-fade-in-up mt-8 gpu-animate">
              <div className="text-[2rem] sm:text-7xl md:text-9xl font-poster font-black tracking-[4px] sm:tracking-[15px] md:tracking-[25px] uppercase flex flex-col sm:flex-row items-center justify-center glitch-flicker light-sweep-container relative">
                <div className="flex items-center">
                  <span className="special-letter">M</span>
                  <span className="text-foreground relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">ADMATRI</span>
                  <span className="special-letter">X</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl sm:text-8xl md:text-[10rem] special-letter font-black tracking-[8px] sm:tracking-[30px] leading-none">
                  2026
                </span>
                <div className="w-full sm:w-3/4 h-[2px] bg-matrix-red/40 mt-3 sm:mt-6 blur-[1px] shadow-[0_0_10px_red]" />
              </div>
            </h1>



            <div className="mt-8 animate-[fade-in_1s_forwards_1.2s] opacity-0 group/label w-full flex justify-center">
              <div className="relative inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-10 py-3 sm:py-4 bg-matrix-red/5 border-2 border-matrix-red/40 backdrop-blur-3xl overflow-hidden group-hover/label:border-matrix-red transition-all scale-100 sm:scale-110 shadow-[0_0_40px_rgba(255,0,0,0.15)] max-w-[95vw]">
                {/* Background pulse */}
                <div className="absolute inset-0 bg-matrix-red/5 animate-pulse" />
                <span className="text-matrix-red text-sm sm:text-xl font-bold animate-pulse">▶</span>
                <span className="text-sm sm:text-xl md:text-2xl font-poster font-black tracking-[3px] sm:tracking-[8px] md:tracking-[12px] text-white uppercase drop-shadow-md">
                  National Level Symposium
                </span>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl sm:text-3xl text-white font-heading font-bold uppercase tracking-[0.4em] max-w-3xl border-y border-matrix-red/40 py-4 backdrop-blur-md bg-black/20">
            Where Talent Meets Opportunity
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm sm:text-lg font-matrix uppercase tracking-[0.2em] text-matrix-red font-bold">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default bg-black/30 px-4 py-2 rounded-sm border border-matrix-red/20 shadow-[0_0_10px_rgba(255,0,0,0.2)]">📅 MAR 13 & 14</span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default bg-black/30 px-4 py-2 rounded-sm border border-matrix-red/20 shadow-[0_0_10px_rgba(255,0,0,0.2)]">📍 SAVEETHA UNIVERSITY</span>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <CountdownTimer />
        </div>

        {/* 5. Cyber Red Outline CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={handleRegisterClick}
            className="group relative px-10 sm:px-16 py-4 sm:py-5 rounded-none font-matrix font-bold text-matrix-red border-2 border-matrix-red hover:bg-[#ff1a1a] hover:text-black transition-all overflow-hidden bg-black/40 backdrop-blur-sm cursor-pointer"
          >
            {/* Glow Expand Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-matrix-red blur-xl transition-all duration-500 -z-10 scale-50 group-hover:scale-150" />

            <span className="relative z-10 flex items-center gap-3 uppercase tracking-[0.3em] group-hover:text-black">
              Register Now <Zap className="w-5 h-5 group-hover:animate-pulse group-hover:text-black" />
            </span>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
