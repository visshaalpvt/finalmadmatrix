import { useEffect, useState } from "react";

const MatrixIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"loading" | "exit">("loading");

  useEffect(() => {
    // Stage 1: Loading Duration (2500ms)
    const timer = setTimeout(() => {
      setPhase("exit");
    }, 2500);

    // Stage 2: Exit Animation Completion
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200); // 2500ms (main) + 700ms (exit animation)

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-700 select-none
        ${phase === "exit" ? "opacity-0 scale-110 blur-xl skew-x-12" : "opacity-100 scale-100"}
      `}
    >
      {/* Glitch Overlay Effect (Global) */}
      {phase === "exit" && (
        <div className="absolute inset-0 bg-matrix-red/5 mix-blend-overlay animate-[glitch_0.2s_infinite]" />
      )}

      {/* Cinematic Pulse Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.05)_0%,transparent_70%)] animate-pulse" />

      {/* Centered Logo Box */}
      <div className="relative group perspective-1000">
        <style>{`
          @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.2), inset 0 0 10px rgba(255, 0, 0, 0.1); }
            50% { box-shadow: 0 0 40px rgba(255, 0, 0, 0.4), inset 0 0 20px rgba(255, 0, 0, 0.2); }
          }
          @keyframes light-sweep {
            0% { transform: translateX(-150%) skewX(-20deg); }
            20%, 100% { transform: translateX(250%) skewX(-20deg); }
          }
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-5px, 5px); }
            40% { transform: translate(5px, -5px); }
            60% { transform: translate(-5px, -5px); }
            80% { transform: translate(5px, 5px); }
            100% { transform: translate(0); }
          }
          .logo-box {
            background: linear-gradient(135deg, rgba(20, 0, 0, 0.95) 0%, rgba(40, 0, 0, 0.85) 100%);
            animation: glow-pulse 2s infinite ease-in-out;
          }
          .sweep-line {
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
            animation: light-sweep 3s infinite ease-in-out;
          }
        `}</style>

        {/* The Animated Box */}
        <div className="logo-box border border-matrix-red/20 rounded-[12px] px-8 py-5 sm:px-12 sm:py-6 relative overflow-hidden flex flex-col items-center gap-2 backdrop-blur-md">
          {/* Light Sweep Line */}
          <div className="sweep-line absolute inset-0 w-1/2 pointer-events-none" />

          {/* Text Content */}
          <h2 className="text-3xl sm:text-5xl font-poster font-black tracking-[0.2em] text-foreground flex items-center">
            <span className="text-matrix-red">M</span>
            <span>ADMATRI</span>
            <span className="text-matrix-red">X</span>
          </h2>

          <div className="flex items-center gap-3 w-full">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-matrix-red/40 to-transparent" />
            <span className="text-[10px] sm:text-xs font-matrix text-matrix-red sm:tracking-[0.8em] tracking-[0.4em] uppercase">
              2026
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-matrix-red/40 via-matrix-red/40 to-transparent" />
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-matrix-red animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-1 h-1 rounded-full bg-matrix-red animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-1 rounded-full bg-matrix-red animate-bounce" style={{ animationDelay: '0.4s' }} />
          <span className="text-[8px] font-matrix text-matrix-red/50 uppercase tracking-widest ml-2">developed by DexLora</span>
        </div>
      </div>
    </div>
  );
};

export default MatrixIntro;
