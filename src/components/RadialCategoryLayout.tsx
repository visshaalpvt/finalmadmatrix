import { useState, useRef, useEffect } from "react";
import { type EventData, registrationLinks } from "@/data/events";
import { ArrowRight, Clock, Users, Shield, Cpu, Zap } from "lucide-react";
import MatrixRain from "@/components/MatrixRain";

interface RadialCategoryLayoutProps {
    events: EventData[];
}

const RadialCategoryLayout = ({ events }: RadialCategoryLayoutProps) => {
    const [selectedEvent, setSelectedEvent] = useState<EventData>(events[0]);
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

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative selection:bg-matrix-red selection:text-black">
            <MatrixRain />

            {/* Cinematic Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-0" />

            {/* Grid Overlay for Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

            <div className="container mx-auto px-4 py-8 h-screen flex flex-col lg:flex-row gap-8 relative z-10">

                {/* LEFT COLUMN - Radial Navigation (Red/Black Tech) */}
                <div
                    className="lg:w-1/3 flex flex-col justify-center relative min-h-[600px] overflow-hidden"
                    onWheel={handleWheel}
                >

                    {/* The Rotating Wheel Container */}
                    <div className="absolute top-1/2 left-[-400px] w-[800px] h-[800px] rounded-full transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1)"
                        style={{
                            transform: `translate(0, -50%) rotate(${-events.findIndex(e => e.id === selectedEvent.id) * 30}deg)`
                        }}
                    >
                        {/* Wheel Background - Tech Track */}
                        <div className="absolute inset-0 rounded-full border border-matrix-red/20 bg-black/90 backdrop-blur-md shadow-[0_0_50px_rgba(255,0,0,0.1)]" />
                        <div className="absolute inset-[40%] rounded-full bg-black border border-matrix-red/10" /> {/* Center Hub */}
                        <div className="absolute inset-[42%] rounded-full border border-dashed border-matrix-red/30 animate-spin-slow opacity-30" />

                        {/* Items */}
                        {events.map((event, index) => {
                            const selectedIndex = events.findIndex(e => e.id === selectedEvent.id);
                            const isActive = index === selectedIndex;
                            const angle = index * 30; // Wider spacing (30 degrees)

                            // Calculate distance from active for opacity
                            const diff = Math.abs(index - selectedIndex);
                            const opacity = isActive ? 1 : Math.max(0.2, 1 - (diff * 0.3));

                            return (
                                <button
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className="absolute top-1/2 left-1/2 w-[400px] h-[80px] origin-left flex items-center group z-10 focus:outline-none"
                                    style={{
                                        transform: `translateY(-50%) rotate(${angle}deg)`,
                                    }}
                                >
                                    {/* Item Wrapper */}
                                    <div
                                        className={`relative flex items-center justify-end w-full pr-10 transition-all duration-500 ease-out ${isActive ? 'scale-100 translate-x-4' : 'scale-90 hover:scale-95'}`}
                                        style={{ opacity: opacity }}
                                    >

                                        {/* Activity Pill Background - Only for active */}
                                        {isActive && (
                                            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[320px] h-[70px] bg-matrix-red/10 border-r-4 border-matrix-red -z-10 animate-fade-in skew-x-[-12deg] shadow-[0_0_20px_rgba(255,0,0,0.2)]" />
                                        )}

                                        {/* Text Label - Improved Splitting */}
                                        <div className={`mr-6 font-poster text-xl uppercase tracking-wider transition-colors duration-300 flex flex-col items-end leading-none text-right ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]' : 'text-zinc-500'}`}>
                                            {event.title.length > 18 ? (
                                                <>
                                                    <span className="whitespace-nowrap text-lg">{event.title.split(' ').slice(0, Math.ceil(event.title.split(' ').length / 2)).join(' ')}</span>
                                                    <span className="text-lg opacity-80">{event.title.split(' ').slice(Math.ceil(event.title.split(' ').length / 2)).join(' ')}</span>
                                                </>
                                            ) : (
                                                <span className="whitespace-nowrap">{event.title}</span>
                                            )}
                                        </div>

                                        {/* Icon Bubble */}
                                        <div className={`w-14 h-14 flex items-center justify-center transition-all duration-500 border-2 rounded-xl rotate-45
                                            ${isActive ? 'bg-matrix-red border-white text-black scale-110 shadow-[0_0_20px_rgba(255,0,0,0.6)]' : 'bg-black border-zinc-800 text-zinc-700 group-hover:border-matrix-red/50 group-hover:text-white'}`}
                                        >
                                            <span className="text-2xl -rotate-45 block">{event.emoji}</span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Indicator Pointer */}
                    <div className="absolute top-1/2 left-[410px] -translate-y-1/2 flex items-center pointer-events-none z-50">
                        <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-matrix-red drop-shadow-[0_0_10px_rgba(255,0,0,1)]" />
                        <div className="w-24 h-[1px] bg-gradient-to-l from-matrix-red to-transparent opacity-60" />
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
                                href={registrationLinks[selectedEvent.category]}
                                target="_blank"
                                rel="noreferrer"
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
        </div>
    );
};

export default RadialCategoryLayout;
