import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Music, Users, Zap, Music2, Mic2, Theater, Video,
    Cpu, FileText, Terminal, Camera, Calculator, Keyboard, Smartphone, Activity, Brain,
    Target, Hand, Table, Circle, Flame, Sword, Shield, Trophy, Timer, FastForward, Users2, ArrowUpRight,
    Gamepad, ChevronDown, Sparkles
} from 'lucide-react';
import { events, categoryLabels, categoryOrder } from '@/data/events';

// Icon mapping helper
const IconRenderer = ({ iconName, className }: { iconName: string, className?: string }) => {
    const icons: Record<string, any> = {
        Music, Users, Zap, Music2, Mic2, Theater, Video,
        Cpu, FileText, Terminal, Camera, Calculator, Keyboard, Smartphone, Activity, Brain,
        Target, Hand, Table, Circle, Flame, Sword, Shield, Trophy, Timer, FastForward, Users2, ArrowUpRight,
        Gamepad
    };
    const IconComponent = icons[iconName] || Trophy;
    return <IconComponent className={className} />;
};

const VerticalEventsReel = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    const categories = categoryOrder.map((cat) => {
        const categoryEvents = events.filter((e) => e.category === cat);
        const representativeEvent = categoryEvents[0];
        return {
            id: cat,
            title: categoryLabels[cat],
            iconName: representativeEvent?.iconName || 'Trophy',
            count: categoryEvents.length,
            fee: representativeEvent?.fee || '—',
            category: cat,
            description: representativeEvent?.description || "Access the next level of competition.",
            imageUrl: representativeEvent?.imageUrl || "/assets/events/default.jpg"
        };
    });

    return (
        <section id="events" className="relative h-screen bg-black overflow-hidden flex flex-col">
            {/* Header Overlay */}
            <div className="absolute top-8 left-0 w-full z-40 px-8 flex justify-between items-end pointer-events-none">
                <div className="space-y-1">
                    <h2 className="text-4xl sm:text-6xl font-poster text-white metallic-text tracking-tighter drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                        EVENT PROTOCOLS
                    </h2>
                    <p className="text-matrix-red font-matrix text-[10px] uppercase tracking-[0.4em] opacity-80">
                        Scroll to explore modules // System Active
                    </p>
                </div>
                <div className="hidden md:block text-right">
                    <div className="text-white/20 font-matrix text-[9px] uppercase tracking-[0.5em] mb-2">Navigation Status</div>
                    <div className="h-[2px] w-32 bg-zinc-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-matrix-red w-1/3 animate-[scan_3s_linear_infinite]" />
                    </div>
                </div>
            </div>

            {/* Vertical Snap Container */}
            <div
                ref={containerRef}
                className="flex-1 overflow-y-auto snap-y snap-mandatory no-scrollbar scroll-smooth h-screen"
                style={{ scrollSnapType: 'y mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
                {categories.map((item, index) => (
                    <div
                        key={item.id}
                        className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden border-b border-white/5"
                    >
                        {/* Background Image / Video Effect */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 z-10" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-10" />
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-[10s] animate-pulse-slow"
                            />
                            {/* Matrix Rain Overlay Specific to Card */}
                            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-10" />
                        </div>


                        {/* Content Card */}
                        <div className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex flex-col items-center text-center space-y-8"
                            >
                                {/* Category Index */}
                                <div className="font-matrix text-matrix-red text-sm tracking-[0.8em] font-black opacity-60">
                                    PROTOCOL_0{index + 1}
                                </div>

                                {/* Icon with Glow */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-matrix-red blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                    <div className="relative w-32 h-32 sm:w-48 sm:h-48 border-2 border-matrix-red/30 bg-black/40 backdrop-blur-xl flex items-center justify-center' shadow-[0_0_50px_rgba(255,0,0,0.1)] transition-all duration-700 hover:border-matrix-red hover:shadow-[0_0_80px_rgba(255,0,0,0.35)]"
                                        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                                    >
                                        <IconRenderer iconName={item.iconName} className="w-16 h-16 sm:w-24 sm:h-24 text-matrix-red group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>

                                {/* Title & Counters */}
                                <div className="space-y-4">
                                    <h3 className="text-4xl sm:text-8xl md:text-9xl font-poster text-white uppercase tracking-[-0.02em] sm:tracking-tighter drop-shadow-[0_0_30px_rgba(255,0,0,0.4)] leading-[0.9] sm:leading-none max-w-[90vw] sm:max-w-none">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap justify-center gap-3 sm:gap-8 font-matrix uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-xs">
                                        <span className="flex items-center gap-2 text-white/60">
                                            <Zap className="w-3 h-3 text-matrix-red" />
                                            {item.count} Active Tasks
                                        </span>
                                        <span className="flex items-center gap-2 text-white/60">
                                            <Sparkles className="w-3 h-3 text-matrix-red" />
                                            Credentials: {item.fee}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="max-w-xl text-zinc-400 font-light text-xs sm:text-lg leading-relaxed italic tracking-wide px-4">
                                    "{item.description}"
                                </p>

                                {/* Action Button - Reels Style (Large & Center) */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate(`/category/${item.category}`)}
                                    className="px-8 py-4 sm:px-20 sm:py-6 bg-matrix-red text-black font-poster font-black text-lg sm:text-2xl uppercase tracking-[0.1em] sm:tracking-[0.2em] shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:shadow-[0_0_60px_rgba(255,0,0,0.5)] transition-all relative overflow-hidden group/btn"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        Initialize <span className="hidden sm:inline">Protocol</span> <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-2 transition-all duration-300" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                                </motion.button>


                                {/* Scroll Hint */}
                                <div className="pt-4 flex flex-col items-center gap-2 opacity-40">
                                    <span className="text-[9px] font-matrix uppercase tracking-widest text-zinc-500">Next Protocol</span>
                                    <ChevronDown className="w-5 h-5 animate-bounce text-matrix-red" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Vertical Progress Indicator (Reels Style) */}
            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
                {categories.map((cat, i) => (
                    <div
                        key={cat.id}
                        className="group relative flex items-center justify-end"
                        onClick={() => {
                            const container = containerRef.current;
                            if (container) {
                                container.scrollTo({
                                    top: i * window.innerHeight,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        <span className="absolute right-8 text-[10px] font-matrix text-matrix-red opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest whitespace-nowrap">
                            {cat.title}
                        </span>
                        <div className="w-1 h-8 bg-zinc-800 rounded-full overflow-hidden cursor-pointer hover:h-12 transition-all duration-300">
                            {/* Fill state could be handled by scroll tracking if needed */}
                            <div className="w-full h-full bg-matrix-red opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export default VerticalEventsReel;
