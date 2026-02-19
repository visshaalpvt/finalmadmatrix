import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Music, Users, Zap, Music2, Mic2, Theater, Video,
    Cpu, FileText, Terminal, Camera, Calculator, Keyboard, Smartphone, Activity, Brain,
    Target, Hand, Table, Circle, Flame, Sword, Shield, Trophy, Timer, FastForward, Users2, ArrowUpRight,
    Gamepad, Sparkles, ArrowRight
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
        <section id="events" className="relative min-h-screen py-20 bg-transparent">
            {/* Header */}
            <div className="w-full z-40 px-6 sm:px-8 mb-12 sm:mb-20 text-center">
                <h2 className="text-4xl sm:text-7xl font-poster text-white metallic-text tracking-tighter drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                    EVENT PROTOCOLS
                </h2>
                <p className="text-matrix-red font-matrix text-[10px] uppercase tracking-[0.4em] opacity-80 mt-2">
                    Continuous Stream // System Active
                </p>
            </div>

            {/* Continuous List - NO SNAPPING */}
            <div className="flex flex-col gap-6 sm:gap-12 px-4 max-w-6xl mx-auto w-full">
                {categories.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="group relative w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:border-matrix-red/30 transition-all duration-500"
                    >
                        {/* Background Effect */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-20 p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
                            {/* Hex Icon */}
                            <div className="relative shrink-0">
                                <div className="absolute inset-0 bg-matrix-red blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                                <div className="relative w-20 h-20 sm:w-28 sm:h-28 border border-matrix-red/20 bg-black/60 flex items-center justify-center"
                                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                                >
                                    <IconRenderer iconName={item.iconName} className="w-8 h-8 sm:w-12 sm:h-12 text-matrix-red" />
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="flex-1 text-center sm:text-left space-y-3">
                                <div className="font-matrix text-matrix-red text-[9px] sm:text-[10px] tracking-[0.4em] font-black opacity-60 uppercase">
                                    PROTOCOL_0{index + 1}
                                </div>
                                <h3 className="text-2xl sm:text-5xl font-poster text-white uppercase tracking-tight group-hover:text-matrix-red transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex flex-wrap justify-center sm:justify-start gap-4 font-matrix uppercase tracking-widest text-[8px] sm:text-[10px] text-white/40">
                                    <span className="flex items-center gap-2">
                                        <Zap className="w-3 h-3 text-matrix-red" />
                                        {item.count} Tasks
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Sparkles className="w-3 h-3 text-matrix-red" />
                                        Entry: {item.fee}
                                    </span>
                                </div>
                                <p className="text-zinc-500 font-light text-[10px] sm:text-sm leading-relaxed italic max-w-xl">
                                    "{item.description}"
                                </p>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => navigate(`/category/${item.category}`)}
                                className="shrink-0 px-8 py-3 bg-matrix-red/10 border border-matrix-red/30 text-matrix-red font-poster text-xs sm:text-sm uppercase tracking-widest hover:bg-matrix-red hover:text-black transition-all group-hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]"
                            >
                                <span className="flex items-center gap-2">
                                    Initialize <ArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default VerticalEventsReel;
