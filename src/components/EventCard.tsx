import { useNavigate } from "react-router-dom";
import {
  Clock, Users, ArrowRight, Music, Theater, Zap, Music2, Mic2, Video,
  Cpu, FileText, Terminal, Camera, Calculator, Keyboard, Smartphone, Activity, Brain,
  Target, Hand, Table, Circle, Flame, Sword, Shield, Trophy, Timer, FastForward, Users2, ArrowUpRight
} from "lucide-react";
import type { EventData } from "@/data/events";

const IconRenderer = ({ iconName, className }: { iconName: string, className?: string }) => {
  const icons: Record<string, any> = {
    Music, Users, Zap, Music2, Mic2, Theater, Video,
    Cpu, FileText, Terminal, Camera, Calculator, Keyboard, Smartphone, Activity, Brain,
    Target, Hand, Table, Circle, Flame, Sword, Shield, Trophy, Timer, FastForward, Users2, ArrowUpRight
  };
  const IconComponent = icons[iconName] || Trophy;
  return <IconComponent className={className} />;
};

const EventCard = ({ event }: { event: EventData }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/event/${event.id}`)}
      className="glass group relative rounded-none overflow-hidden transition-all duration-500 hover:matrix-glow border-2 border-matrix-red/20 hover:border-matrix-red/80 cursor-pointer p-0 flex flex-col justify-between min-h-[450px] bg-black/90 backdrop-blur-2xl"
    >
      {/* 1. Header: Icon & Fee */}
      <div className="p-6 pb-4 flex items-center justify-between relative z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="group-hover:scale-110 transition-transform duration-500 text-matrix-red">
          <IconRenderer iconName={event.iconName} className="w-8 h-8" />
        </div>
        {event.fee && (
          <div className="bg-matrix-red text-black px-4 py-1.5 font-matrix font-black text-[10px] tracking-widest shadow-[0_0_15px_rgba(255,0,0,0.3)]">
            {event.fee}
          </div>
        )}
      </div>

      {/* 2. Event Illustration Area */}
      <div className="relative h-48 overflow-hidden group-hover:h-56 transition-all duration-700 bg-black/40 border-y border-matrix-red/10">
        <div className="absolute inset-0 bg-matrix-red/5 group-hover:bg-transparent transition-colors z-10" />
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 brightness-75 group-hover:brightness-100"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-matrix-red/5 to-black">
            {/* Holographic Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:15px_15px]" />

            {/* Pulsing Glitch Circle */}
            <div className="absolute w-24 h-24 rounded-full border border-matrix-red/20 animate-pulse" />

            <div className="z-20 text-matrix-red/60 font-matrix text-[8px] tracking-[0.6em] mb-4 animate-pulse uppercase">
              Data_Link_Wait...
            </div>

            <div className="z-20 font-poster text-3xl text-white/40 uppercase tracking-tighter text-center px-6 leading-none group-hover:text-matrix-red/60 transition-colors duration-500 animate-[flicker_2s_infinite]">
              {event.title}
            </div>

            <div className="absolute bottom-3 right-4 text-[9px] font-matrix text-matrix-red/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-matrix-red animate-ping" />
              SEC_ID_{event.id.toString().padStart(4, '0')}
            </div>
          </div>
        )}
        {/* Cinematic Scanline on Image */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-matrix-red/40 shadow-[0_0_10px_rgba(255,0,0,0.5)] animate-[scan_1.5s_linear_infinite] opacity-0 group-hover:opacity-100 pointer-events-none z-20" />
      </div>

      {/* 3. Content: Title & Meta */}
      <div className="p-6 space-y-4 flex-grow flex flex-col justify-center">
        <h3 className="font-poster text-3xl sm:text-4xl text-white group-hover:text-matrix-red transition-all duration-500 leading-none uppercase tracking-tighter drop-shadow-lg">
          {event.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-[10px] text-white/60 font-matrix uppercase tracking-[0.2em] font-black">
          <span className="flex items-center gap-2 bg-black/40 px-3 py-1.5 border border-matrix-red/20 shadow-inner">
            <Clock className="w-3.5 h-3.5 text-matrix-red" />
            {event.duration}
          </span>
          <span className="flex items-center gap-2 bg-black/40 px-3 py-1.5 border border-matrix-red/20 shadow-inner">
            <Users className="w-3.5 h-3.5 text-matrix-red" />
            {event.teamSize}
          </span>
        </div>
      </div>

      {/* 4. Footer: Status & Action */}
      <div className="px-6 py-6 mt-2 relative z-10 border-t border-matrix-red/20 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[9px] font-matrix text-matrix-red font-black uppercase tracking-[0.3em] animate-pulse">SYSTEM_ACTIVE</span>
          <div className="text-white flex items-center gap-2 font-heading font-black text-xs group-hover:text-matrix-red transition-all scale-100 group-hover:scale-105 tracking-widest">
            ACCESS DATA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(192px); }
        }
        @keyframes flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 1px rgba(255,255,255,0.1));
          }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            opacity: 0.4;
            filter: drop-shadow(0 0 0 rgba(255,255,255,0));
          }
        }
      `}</style>
    </div>
  );
};

export default EventCard;
