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
import { motion } from "framer-motion";

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

    const handleRegister = (e: React.MouseEvent<HTMLButtonElement>, url: string, protocolName?: string) => {
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
        <div className="min-h-screen bg-black text-white font-sans selection:bg-matrix-red selection:text-black overflow-x-hidden">
            <MatrixRain opacity={0.5} />

            {/* Top Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black to-transparent pointer-events-none">
                <button
                    onClick={() => navigate('/')}
                    className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-black/80 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-matrix-red transition-all backdrop-blur-xl"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-mono text-[10px] uppercase tracking-widest">Base</span>
                </button>
            </div>

            {/* Continuous Vertical Content */}
            <div className="relative z-10 flex flex-col items-center w-full px-4 pt-24 pb-20">
                <div className="text-center mb-16 sm:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl sm:text-8xl font-poster text-matrix-red uppercase tracking-tighter drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]"
                    >
                        {events[0]?.category.replace('-', ' ')}
                    </motion.h2>
                    <div className="h-0.5 w-32 bg-matrix-red/40 mx-auto mt-6 shadow-[0_0_10px_red]" />
                    <p className="mt-4 text-[10px] font-matrix text-matrix-red/60 uppercase tracking-[0.5em]">Sector Verified // Access Granted</p>
                </div>

                <div className="w-full max-w-4xl space-y-12 sm:space-y-20">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-zinc-900/10 border border-white/5 rounded-3xl p-6 sm:p-12 backdrop-blur-sm relative overflow-hidden group hover:border-matrix-red/20 transition-all"
                        >
                            {/* Visual Identity */}
                            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                                <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                                    <div className="text-matrix-red font-matrix text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase">
                                        PROTOCOL::0x{event.id}
                                    </div>
                                    <h3 className="text-3xl sm:text-6xl font-poster font-black text-white uppercase tracking-tight leading-none group-hover:text-matrix-red transition-colors">
                                        {event.title}
                                    </h3>

                                    <div className="relative p-6 sm:p-8 border border-matrix-red/20 bg-black/40"
                                        style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
                                    >
                                        <IconRenderer iconName={event.iconName} className="w-16 h-16 sm:w-24 sm:h-24 text-matrix-red opacity-80" />
                                        <div className="absolute -bottom-1 -right-1 bg-matrix-red text-black px-3 py-1 text-[8px] font-black tracking-widest font-matrix">
                                            {event.fee}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-2/3 flex flex-col space-y-8 lg:border-l lg:border-white/5 lg:pl-16">
                                    {/* Briefing */}
                                    <div className="space-y-3">
                                        <h4 className="flex items-center gap-2 text-matrix-red font-matrix text-[10px] font-bold uppercase tracking-widest">
                                            <Info className="w-4 h-4" /> System Brief
                                        </h4>
                                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed italic border-l-2 border-matrix-red/20 pl-6 py-2">
                                            "{event.description}"
                                        </p>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 border border-white/5 rounded-xl">
                                            <div className="text-[8px] text-zinc-500 uppercase font-matrix mb-1">Squad Logic</div>
                                            <div className="flex items-center gap-3 text-sm font-mono font-bold">
                                                <Users className="w-4 h-4 text-matrix-red" /> {event.teamSize}
                                            </div>
                                        </div>
                                        <div className="bg-white/5 p-4 border border-white/5 rounded-xl">
                                            <div className="text-[8px] text-zinc-500 uppercase font-matrix mb-1">Window</div>
                                            <div className="flex items-center gap-3 text-sm font-mono font-bold">
                                                <Clock className="w-4 h-4 text-matrix-red" /> {event.duration}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rules Protocols */}
                                    <div className="space-y-4">
                                        <h4 className="flex items-center gap-2 text-matrix-red font-matrix text-[10px] font-bold uppercase tracking-widest">
                                            <Shield className="w-4 h-4" /> Local Protocols
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] sm:text-xs text-zinc-500 font-light">
                                            {event.rules.slice(0, 8).map((rule, idx) => (
                                                <li key={idx} className="flex gap-3">
                                                    <span className="text-matrix-red font-bold">»</span>
                                                    <span className="leading-tight">{rule}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Call to Action */}
                                    <div className="pt-6">
                                        <button
                                            onClick={(e) => handleRegister(e, registrationLinks[event.category], event.title)}
                                            className="w-full sm:w-auto px-12 py-5 bg-matrix-red text-black font-poster font-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_30px_rgba(255,0,0,0.2)] flex items-center justify-center gap-4 group/btn overflow-hidden relative"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                Initialize Protocol <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center py-10 opacity-20 font-matrix text-[8px] tracking-[1em] uppercase">
                Secure Connection // MadMatrix Central
            </div>
        </div>
    );
};

export default RadialCategoryLayout;
