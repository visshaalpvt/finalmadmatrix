import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { type EventData, registrationLinks } from "@/data/events";
import {
    ArrowRight, ArrowLeft, Clock, Users, Shield, Cpu, Zap, Trophy,
    Music, Theater, Zap as ZapIcon, Music2, Mic2, Video, FileText, Terminal, Camera, Calculator, Keyboard,
    Smartphone, Activity, Brain, Target, Hand, Table, Circle, Flame, Sword, FastForward, Users2, ArrowUpRight
} from "lucide-react";
import MatrixRain from "@/components/MatrixRain";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

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
    const { user } = useAuth();
    const [selectedEvent, setSelectedEvent] = useState<EventData>(events[0]);
    const [mobileSelectedEvent, setMobileSelectedEvent] = useState<EventData | null>(null);
    const [pendingLink, setPendingLink] = useState<string | null>(null);
    const lastScrollTime = useRef(0);
    const scrollValues = useRef(0); // Accumulate scroll delta for smoother feel

    const handleWheel = (e: React.WheelEvent) => {
        const now = Date.now();
        // 50ms throttle to prevent crazy rapid spinning
        if (now - lastScrollTime.current < 50) return;

        // Accumulate delta
        scrollValues.current += e.deltaY;

        // Threshold for a "tick"
        if (Math.abs(scrollValues.current) < 50) return;

        const direction = scrollValues.current > 0 ? 1 : -1;

        // Reset accumulator after action
        scrollValues.current = 0;
        lastScrollTime.current = now;

        const currentIndex = events.findIndex(ev => ev.id === selectedEvent.id);
        let nextIndex = currentIndex + direction;

        // Loop navigation
        if (nextIndex < 0) nextIndex = events.length - 1;
        if (nextIndex >= events.length) nextIndex = 0;

        setSelectedEvent(events[nextIndex]);
    };

    useEffect(() => {
        if (user && pendingLink) {
            window.open(pendingLink, "_blank", "noopener,noreferrer");
            setPendingLink(null);
        }
    }, [user, pendingLink]);

    const handleRegister = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        e.preventDefault();
        if (user) {
            window.open(url, '_blank');
        } else {
            setPendingLink(url);
            toast.error("Authentication Required", {
                description: "Please login to register for this event Protocol."
            });
            window.dispatchEvent(new Event('open-login-modal'));
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative selection:bg-matrix-red selection:text-black">
            <MatrixRain />

            {/* Global Back Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-matrix-red transition-all backdrop-blur-md group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-xs uppercase tracking-widest hidden sm:inline">Back</span>
            </button>

            {/* Cinematic Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-0" />

            {/* Grid Overlay for Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

            {/* DESKTOP VIEW - Radial Navigation */}
            <div className="hidden lg:flex container mx-auto px-4 py-8 h-screen flex-col lg:flex-row gap-8 relative z-10">

                {/* LEFT COLUMN - Cyberpunk Radar Control Panel */}
                <div
                    className="lg:w-1/3 flex flex-col justify-center relative min-h-[600px] overflow-visible perspective-1000"
                    onWheel={handleWheel}
                >
                    {/* Radar Container - Rotates based on selection */}
                    <div className="absolute top-1/2 left-[-400px] w-[800px] h-[800px] rounded-full transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) border border-matrix-red/10 bg-black shadow-[0_0_100px_rgba(20,0,0,0.8)]"
                        style={{
                            transform: `translate(0, -50%) rotate(${-events.findIndex(e => e.id === selectedEvent.id) * 30}deg)`
                        }}
                    >
                        {/* 1. Radar Background & Texture */}
                        <div className="absolute inset-0 rounded-full bg-black overflow-hidden opacity-90">
                            {/* Inner Grid Texture */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(50,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,0,0,0.2),transparent_70%)]" />
                        </div>

                        {/* 2. Rotating Scanning Rings */}
                        {/* Outer Ring - Static with Glow */}
                        <div className="absolute inset-[2%] rounded-full border border-matrix-red/20 shadow-[0_0_20px_rgba(255,0,0,0.1)]" />

                        {/* Ring 2 - Slow rotate clockwise */}
                        <div className="absolute inset-[12%] rounded-full border border-dashed border-matrix-red/20 opacity-40 animate-[spin_60s_linear_infinite]" />

                        {/* Ring 3 - Counter rotate */}
                        <div className="absolute inset-[24%] rounded-full border border-double border-matrix-red/10 opacity-60 animate-[spin_40s_linear_infinite_reverse]" />

                        {/* 3. The Radar Sweep Beam (Fixed relative to wheel, but visually sweeping) */}
                        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_280deg,rgba(255,0,0,0.1)_360deg)] animate-[spin_4s_linear_infinite] pointer-events-none mix-blend-screen" />

                        {/* 4. Center Hub (Visual Anchor) */}
                        <div className="absolute inset-[40%] rounded-full bg-black border border-matrix-red/20 flex items-center justify-center shadow-[inset_0_0_30px_rgba(20,0,0,1)]">
                            <div className="w-1/2 h-1/2 rounded-full border border-matrix-red/30 bg-matrix-red/5 animate-pulse" />
                        </div>

                        {/* 5. Items (Holographic Buttons) */}
                        {events.map((event, index) => {
                            const selectedIndex = events.findIndex(e => e.id === selectedEvent.id);
                            const isActive = index === selectedIndex;
                            const angle = index * 30;

                            // Calculate proximity for opacity/scale
                            const diff = Math.abs(index - selectedIndex);
                            const opacity = isActive ? 1 : Math.max(0.3, 1 - (diff * 0.2));
                            const scale = isActive ? 1 : Math.max(0.8, 1 - (diff * 0.05));

                            return (
                                <button
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className="absolute top-1/2 left-1/2 w-[420px] h-[60px] origin-left flex items-center group z-20 focus:outline-none transition-all duration-500"
                                    style={{
                                        transform: `translateY(-50%) rotate(${angle}deg) scale(${scale})`,
                                        opacity: opacity
                                    }}
                                >
                                    {/* Connection Line */}
                                    <div className={`absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-matrix-red/20 to-transparent transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                                    {/* The Button Content */}
                                    <div
                                        className={`relative flex items-center justify-between w-full pl-[50%] pr-4 transition-all duration-300`}
                                    >
                                        {/* Label Text */}
                                        <div className={`text-right flex-1 mr-4 font-matrix uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? 'text-matrix-red drop-shadow-[0_0_5px_rgba(255,0,0,0.8)] translate-x-2' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                                            <span className="text-sm font-bold block">{event.title}</span>
                                            {isActive && <span className="text-[10px] opacity-70 tracking-widest block">SEC_0{index + 1}</span>}
                                        </div>

                                        {/* Hexagon/Icon Button */}
                                        <div className={`relative w-12 h-12 flex items-center justify-center transition-all duration-500
                                            ${isActive
                                                ? 'bg-black border border-matrix-red shadow-[0_0_20px_rgba(255,0,0,0.4)] scale-110'
                                                : 'bg-black/80 border border-zinc-800 group-hover:border-matrix-red/40 opacity-70'}`}
                                            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                                        >
                                            <div className={`transition-all duration-300 ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-50'}`} style={{ transform: `rotate(${-angle + (events.findIndex(e => e.id === selectedEvent.id) * 30)}deg)` }}>
                                                <IconRenderer iconName={event.iconName} className="w-5 h-5" />
                                            </div>

                                            {/* Glitch Overlay on Active */}
                                            {isActive && <div className="absolute inset-0 bg-matrix-red/10 animate-pulse pointer-events-none" />}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Static HUD Overlay (Fixed Markers) */}
                    <div className="absolute top-1/2 left-[420px] -translate-y-1/2 pointer-events-none z-50 flex items-center">
                        <div className="w-3 h-3 bg-matrix-red rounded-full shadow-[0_0_10px_#ff0000] animate-ping absolute" />
                        <div className="w-3 h-3 bg-matrix-red rounded-full shadow-[0_0_10px_#ff0000] relative z-10" />
                        <div className="h-[2px] w-16 bg-gradient-to-r from-matrix-red to-transparent ml-2" />
                        <div className="absolute -left-4 -top-12 h-24 w-[1px] bg-gradient-to-b from-transparent via-matrix-red/50 to-transparent" />
                    </div>

                    {/* HUD Decorative Elements */}
                    <div className="absolute top-[10%] right-0 w-[1px] h-[80%] bg-zinc-900 overflow-hidden">
                        <div className="w-full h-20 bg-gradient-to-b from-transparent via-matrix-red/50 to-transparent animate-[scan_5s_linear_infinite]" />
                    </div>

                </div>

                {/* RIGHT COLUMN - Event Details (Cinematic/Futuristic) */}
                <div className="lg:w-2/3 flex flex-col h-full lg:overflow-y-auto custom-scrollbar pt-0 pb-20 relative bg-black/40 backdrop-blur-sm border-l border-white/5">

                    {/* Hero Banner Section */}
                    <div className="relative w-full h-[380px] mb-8 group overflow-hidden border-b border-matrix-red/50 shrink-0 select-none shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 bg-black/10 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-20" />

                        {selectedEvent.imageUrl && (
                            <img
                                src={selectedEvent.imageUrl}
                                alt={selectedEvent.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-out scale-100 group-hover:scale-105"
                            />
                        )}

                        {/* Scanline/Grid Texture Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-20 mixed-blend-overlay" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-matrix-red/10 border border-matrix-red/30 text-matrix-red text-xs font-mono font-bold tracking-widest mb-4 uppercase animate-pulse">
                                <Zap className="w-3 h-3" /> Protocol: Active
                            </div>

                            <h1 className="text-6xl md:text-8xl font-poster font-black text-white mb-3 tracking-tighter uppercase leading-none drop-shadow-[0_0_25px_rgba(255,0,0,0.6)]">
                                {selectedEvent.title}
                                <span className="text-matrix-red inline-block animate-bounce">.</span>
                            </h1>

                            <div className="w-32 h-1 bg-gradient-to-r from-matrix-red to-transparent mb-6 shadow-[0_0_15px_#ff0000]" />

                            <p className="text-xl text-zinc-300 max-w-2xl font-light italic tracking-wide pl-4 border-l-4 border-matrix-red/50 bg-gradient-to-r from-black/80 to-transparent py-3 backdrop-blur-md">
                                "{selectedEvent.description}"
                            </p>
                        </div>
                    </div>

                    {/* Scrollable Content Wrapper */}
                    <div className="px-6 flex flex-col gap-8 pb-20">

                        {/* Info Cards Grid - Tech Style */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {/* Time */}
                            <div className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-matrix-red/50 transition-colors group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-2 h-2 bg-matrix-red/20 group-hover:bg-matrix-red transition-colors" />
                                <div className="flex items-center gap-3 mb-2 text-matrix-red">
                                    <Clock className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Duration</span>
                                </div>
                                <div className="text-xl font-bold text-white font-mono">
                                    {selectedEvent.duration}
                                </div>
                            </div>

                            {/* Team */}
                            <div className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-matrix-red/50 transition-colors group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-2 h-2 bg-matrix-red/20 group-hover:bg-matrix-red transition-colors" />
                                <div className="flex items-center gap-3 mb-2 text-matrix-red">
                                    <Users className="w-5 h-5" />
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Squad</span>
                                </div>
                                <div className="text-xl font-bold text-white font-mono">
                                    {selectedEvent.teamSize}
                                </div>
                            </div>

                            {/* Fee */}
                            <div className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-matrix-red/50 transition-colors group md:col-span-1 col-span-2 relative overflow-hidden">
                                <div className="absolute inset-0 bg-matrix-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center gap-3 mb-2 text-matrix-red">
                                    <span className="text-lg font-bold">₹</span>
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Access Fee</span>
                                </div>
                                <div className="text-3xl font-black text-white font-poster tracking-wide">
                                    {selectedEvent.fee}
                                </div>
                            </div>
                        </div>

                        {/* Content Split: Organizers & Rules */}
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Organizers */}
                            <div className="border-t border-zinc-800 pt-6">
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest font-poster">
                                    <Cpu className="w-5 h-5 text-matrix-red" />
                                    Organizers
                                </h3>
                                <div className="space-y-3">
                                    {selectedEvent.organizers?.map((org, i) => (
                                        <div key={i} className="flex items-center gap-4 p-3 bg-zinc-900/40 border-l-2 border-zinc-700 hover:border-matrix-red transition-all group">
                                            <div className="w-8 h-8 bg-black border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-500 group-hover:text-matrix-red group-hover:border-matrix-red transition-colors">
                                                {org.charAt(0)}
                                            </div>
                                            <span className="font-bold text-zinc-300 font-mono text-sm uppercase">{org}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Rules */}
                            <div className="border-t border-zinc-800 pt-6">
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-widest font-poster">
                                    <Shield className="w-5 h-5 text-matrix-red" />
                                    Protocols
                                </h3>
                                <ul className="space-y-4">
                                    {selectedEvent.rules.map((rule, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 group">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-zinc-700 group-hover:bg-matrix-red transition-colors rounded-sm shrink-0" />
                                            <span className="group-hover:text-zinc-200 transition-colors">{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="flex justify-end pt-6 border-t border-zinc-800">
                            <a
                                href="#"
                                onClick={(e) => handleRegister(e, registrationLinks[selectedEvent.category])}
                                className="group relative inline-flex items-center gap-4 px-10 py-4 bg-matrix-red text-black font-poster font-bold text-xl uppercase tracking-widest hover:bg-white transition-colors cursor-pointer clip-path-slant"
                                style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                            >
                                <span className="relative z-10">Register Now</span>
                                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* MOBILE VIEW - Vertical List (No Design Freakiness) */}
            <div className="lg:hidden container mx-auto px-4 py-20 flex flex-col gap-8 relative z-10">
                {!mobileSelectedEvent ? (
                    // LIST VIEW
                    <>
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-3xl font-poster text-matrix-red tracking-wider">PROTOCOLS</h2>
                            <span className="text-xs font-mono text-zinc-500">{events.length} FOUND</span>
                        </div>

                        {events.map((event) => (
                            <div
                                key={event.id}
                                onClick={() => setMobileSelectedEvent(event)}
                                className="bg-zinc-900/60 border border-zinc-800/60 p-6 rounded-xl relative overflow-hidden backdrop-blur-md shadow-lg cursor-pointer active:scale-95 transition-all"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-poster text-white uppercase leading-tight mb-2">{event.title}</h3>
                                        <p className="text-sm text-zinc-400 line-clamp-2">{event.description}</p>
                                    </div>
                                    <div className="text-3xl ml-4 bg-black/30 p-2 rounded-lg text-matrix-red">
                                        <IconRenderer iconName={event.iconName} className="w-8 h-8" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="bg-black/40 p-2 rounded border border-zinc-800/50 flex flex-col">
                                        <span className="text-[10px] uppercase text-zinc-500 font-bold">Duration</span>
                                        <span className="text-white font-mono text-sm">{event.duration}</span>
                                    </div>
                                    <div className="bg-black/40 p-2 rounded border border-zinc-800/50 flex flex-col">
                                        <span className="text-[10px] uppercase text-zinc-500 font-bold">Team</span>
                                        <span className="text-white font-mono text-sm">{event.teamSize}</span>
                                    </div>
                                </div>

                                <div className="w-full flex items-center justify-center gap-2 py-3 bg-matrix-red/20 border border-matrix-red text-matrix-red font-bold uppercase tracking-wider rounded-lg pointer-events-none">
                                    View Details <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    // DETAIL VIEW
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <button
                            onClick={() => setMobileSelectedEvent(null)}
                            className="flex items-center gap-2 text-zinc-400 hover:text-white mb-6 bg-black/50 px-4 py-2 rounded-full border border-zinc-800"
                        >
                            <ArrowLeft className="w-4 h-4" /> <span className="text-xs font-mono uppercase tracking-widest">Back to List</span>
                        </button>

                        <div className="space-y-6 pb-24">
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-lg group">
                                {mobileSelectedEvent.imageUrl ? (
                                    <img
                                        src={mobileSelectedEvent.imageUrl}
                                        alt={mobileSelectedEvent.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-matrix-red/20 to-black" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-matrix-red/20 border border-matrix-red/30 text-matrix-red text-[10px] font-mono font-bold tracking-widest mb-2 uppercase rounded">
                                        <Zap className="w-3 h-3" /> Protocol: Active
                                    </div>
                                    <h2 className="text-3xl font-poster text-white uppercase leading-none drop-shadow-md">{mobileSelectedEvent.title}</h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                                    <span className="text-matrix-red text-[10px] font-bold uppercase mb-1 tracking-widest">Access Fee</span>
                                    <span className="text-xl font-poster text-white">₹{mobileSelectedEvent.fee}</span>
                                </div>
                                <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                                    <span className="text-matrix-red text-[10px] font-bold uppercase mb-1 tracking-widest">Squad Size</span>
                                    <span className="text-xl font-poster text-white">{mobileSelectedEvent.teamSize}</span>
                                </div>
                            </div>

                            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-xl">
                                <h3 className="text-md font-poster text-matrix-red mb-4 uppercase tracking-wider border-b border-matrix-red/20 pb-2">Description</h3>
                                <p className="text-zinc-300 text-sm leading-relaxed font-light">{mobileSelectedEvent.description}</p>
                            </div>

                            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-xl">
                                <h3 className="text-md font-poster text-matrix-red mb-4 uppercase tracking-wider border-b border-matrix-red/20 pb-2">Protocols</h3>
                                <ul className="space-y-3">
                                    {mobileSelectedEvent.rules.map((rule, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-matrix-red rounded-full shrink-0 shadow-[0_0_5px_red]" />
                                            <span>{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-xl">
                                <h3 className="text-md font-poster text-matrix-red mb-4 uppercase tracking-wider border-b border-matrix-red/20 pb-2">Command</h3>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {mobileSelectedEvent.organizers?.map((org, i) => (
                                        <div key={i} className="px-3 py-2 bg-black border border-zinc-800 rounded text-xs text-zinc-300 uppercase font-mono flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-matrix-red rounded-full"></div>
                                            {org}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sticky Register Button */}
                            <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-xl border-t border-zinc-800 z-50">
                                <a
                                    href="#"
                                    onClick={(e) => handleRegister(e, registrationLinks[mobileSelectedEvent.category])}
                                    className="w-full flex items-center justify-center gap-3 py-4 bg-matrix-red text-black font-poster font-bold text-lg uppercase tracking-[0.2em] rounded max-w-md mx-auto hover:bg-white transition-all shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                                >
                                    Initialize <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RadialCategoryLayout;
