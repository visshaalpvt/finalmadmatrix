import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { type EventData, registrationLinks } from "@/data/events";
import {
    ArrowRight, ArrowLeft, Clock, Users, Shield, Cpu, Zap, Trophy,
    Music, Theater, Zap as ZapIcon, Music2, Mic2, Video, FileText, Terminal, Camera, Calculator, Keyboard,
    Smartphone, Activity, Brain, Target, Hand, Table, Circle, Flame, Sword, FastForward, Users2, ArrowUpRight,
    ChevronDown, Timer, Info
} from "lucide-react";
import MatrixRain from "@/components/MatrixRain";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const IconRenderer = ({ iconName, className }: { iconName: string, className?: string }) => {
    const icons: Record<string, any> = {
        Music, Users, Zap: ZapIcon, Music2, Mic2, Theater, Video,
        Cpu, FileText, Terminal, Camera, Calculator, Keyboard, Smartphone, Activity, Brain,
        Target, Hand, Table, Circle, Flame, Sword, Shield, Trophy, Timer: Clock, FastForward, Users2, ArrowUpRight
    };
    const IconComponent = icons[iconName] || Trophy;
    return <IconComponent className={className} />;
};

interface RadialCategoryLayoutProps {
    events: EventData[];
}

const RadialCategoryLayout = ({ events }: RadialCategoryLayoutProps) => {
    const navigate = useNavigate();
    const { user, setPendingLink, setPendingProtocol } = useAuth();
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Track scroll for progress indicator
    const handleScroll = () => {
        if (containerRef.current) {
            const index = Math.round(containerRef.current.scrollTop / window.innerHeight);
            if (index !== activeIndex) {
                setActiveIndex(index);
            }
        }
    };

    const handleRegister = (e: React.MouseEvent<HTMLAnchorElement>, url: string, protocolName?: string) => {
        e.preventDefault();
        if (user) {
            window.open(url, '_blank');
        } else {
            setPendingLink(url);
            setPendingProtocol(protocolName || events[0]?.category || "Unknown Protocol");
            toast.error("Authentication Required", {
                description: "Please login to register for this event Protocol."
            });
            window.dispatchEvent(new Event('open-login-modal'));
        }
    };


    return (
        <div className="h-screen bg-black text-white font-sans overflow-hidden relative selection:bg-matrix-red selection:text-black">
            <MatrixRain opacity={0.3} />

            {/* Back Button Overlay */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/60 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-matrix-red transition-all backdrop-blur-md group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-[10px] uppercase tracking-widest">Return to Base</span>
            </button>

            {/* Category Title Overlay */}
            <div className="absolute top-6 right-8 z-40 text-right pointer-events-none">
                <h2 className="text-2xl sm:text-4xl font-poster text-matrix-red uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                    {events[0]?.category.replace('-', ' ')} Protocols
                </h2>
                <div className="text-[9px] font-matrix text-white/30 uppercase tracking-[0.4em]">
                    Unit Loading: {activeIndex + 1} / {events.length}
                </div>
            </div>

            {/* PROGRESS BAR - Vertical Right */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
                {events.map((_, i) => (
                    <div
                        key={i}
                        className={`w-[2px] h-10 rounded-full transition-all duration-500 cursor-pointer ${i === activeIndex ? 'bg-matrix-red h-16 shadow-[0_0_15px_red]' : 'bg-zinc-800 hover:bg-zinc-600'}`}
                        onClick={() => {
                            containerRef.current?.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' });
                        }}
                    />
                ))}
            </div>

            {/* REELS VIEWPORT */}
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar"
                style={{ scrollSnapType: 'y mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {events.map((event, index) => (
                    <div
                        key={event.id}
                        className="h-screen w-full snap-start relative flex flex-col items-center justify-center px-4"
                    >
                        {/* Dynamic Background */}
                        <div className="absolute inset-0 z-0 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
                            {event.imageUrl && (
                                <img
                                    src={event.imageUrl}
                                    className="w-full h-full object-cover opacity-20 grayscale scale-110 active-zoom"
                                    alt=""
                                />
                            )}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)] z-10" />
                        </div>

                        {/* Event Content Wrapper */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-20 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                        >

                            {/* Left Side: Visual & Identity (lg: 5 cols) */}
                            <div className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6">
                                <div className="space-y-2">
                                    <div className="text-matrix-red font-matrix text-xs font-bold tracking-[0.5em] opacity-60">
                                        PROTOCOLID::0x{event.id}
                                    </div>
                                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-poster font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                                        {event.title}
                                    </h1>
                                </div>

                                <div className="relative group">
                                    <div className="w-40 h-40 sm:w-56 sm:h-56 border border-matrix-red/20 bg-black/40 backdrop-blur-xl flex items-center justify-center p-8 transition-all hover:border-matrix-red/60"
                                        style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}>
                                        <IconRenderer iconName={event.iconName} className="w-full h-full text-matrix-red animate-pulse" />
                                    </div>
                                    <div className="absolute -bottom-4 right-0 bg-matrix-red text-black px-4 py-1 text-[10px] font-matrix font-black tracking-widest animate-bounce">
                                        {event.fee} ACCESS
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Data & Intelligence (lg: 7 cols) */}
                            <div className="lg:col-span-7 flex flex-col space-y-10 border-l border-white/5 pl-0 lg:pl-12">

                                {/* Status Chips */}
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <div className="bg-zinc-900/60 border border-zinc-800 px-4 py-2 flex items-center gap-3">
                                        <Clock className="w-4 h-4 text-matrix-red" />
                                        <div className="flex flex-col">
                                            <span className="text-[8px] text-zinc-500 uppercase font-matrix">Duration</span>
                                            <span className="text-xs font-mono font-bold">{event.duration}</span>
                                        </div>
                                    </div>
                                    <div className="bg-zinc-900/60 border border-zinc-800 px-4 py-2 flex items-center gap-3">
                                        <Users className="w-4 h-4 text-matrix-red" />
                                        <div className="flex flex-col">
                                            <span className="text-[8px] text-zinc-500 uppercase font-matrix">Squad</span>
                                            <span className="text-xs font-mono font-bold">{event.teamSize}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mission briefing */}
                                <div className="space-y-4">
                                    <h3 className="flex items-center gap-2 text-matrix-red font-matrix text-[10px] font-bold uppercase tracking-[0.4em]">
                                        <Info className="w-4 h-4" /> Mission Briefing
                                    </h3>
                                    <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed font-light italic border-l-2 border-matrix-red/30 pl-6 bg-gradient-to-r from-matrix-red/5 to-transparent py-4 backdrop-blur-sm">
                                        "{event.description}"
                                    </p>
                                </div>

                                {/* Rules / Protocols */}
                                <div className="space-y-4 overflow-hidden">
                                    <h3 className="flex items-center gap-2 text-matrix-red font-matrix text-[10px] font-bold uppercase tracking-[0.4em]">
                                        <Shield className="w-4 h-4" /> System Protocols
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                        {event.rules.slice(0, 6).map((rule, ri) => (
                                            <div key={ri} className="flex items-start gap-3 group">
                                                <span className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-matrix-red transition-all mt-1.5 rounded-full shrink-0 shadow-[0_0_5px_rgba(255,0,0,0)] group-hover:shadow-[0_0_5px_rgba(255,0,0,0.8)]" />
                                                <span className="text-[11px] text-zinc-500 group-hover:text-zinc-200 transition-colors">{rule}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ACTION */}
                                <div className="pt-6 flex flex-col sm:flex-row items-center gap-6">
                                    <a
                                        href="#"
                                        onClick={(e) => handleRegister(e, registrationLinks[event.category], event.title)}
                                        className="group relative w-full sm:w-auto px-10 py-5 bg-matrix-red text-black font-poster font-black text-xl uppercase tracking-widest hover:bg-white transition-all overflow-hidden flex items-center justify-center gap-3"
                                    >

                                        <span className="relative z-10">Initialize Now</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    </a>
                                    <div className="text-[9px] font-matrix text-zinc-500 uppercase tracking-widest max-w-[150px] text-center sm:text-left leading-relaxed">
                                        Encryption Level: <b>OMEGA-9</b><br />
                                        Status: <b>Ready For Entry</b>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Scroll Hint */}
                        {index < events.length - 1 && (
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
                                <span className="text-[8px] font-matrix uppercase tracking-[0.5em]">Next Module</span>
                                <ChevronDown className="w-4 h-4 text-matrix-red" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .active-zoom { animation: subtle-zoom 20s infinite alternate linear; }
                @keyframes subtle-zoom {
                    from { transform: scale(1.1); }
                    to { transform: scale(1.2); }
                }
            `}</style>
        </div>
    );
};

export default RadialCategoryLayout;
