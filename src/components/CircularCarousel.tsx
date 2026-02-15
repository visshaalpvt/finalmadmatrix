import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { events, categoryLabels, categoryOrder } from '@/data/events';

const CircularCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    // Map category data to carousel items
    const items = categoryOrder.map((cat) => {
        const categoryEvents = events.filter((e) => e.category === cat);
        return {
            id: cat,
            title: categoryLabels[cat].split(' ').slice(1).join(' '),
            emoji: categoryLabels[cat].split(' ')[0],
            count: categoryEvents.length,
            fee: categoryEvents[0]?.fee || '—',
            category: cat,
        };
    });

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    // Track active drag for visual feedback and auto-play suspension
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        // Pause auto-play if hovered or dragging
        if (!isHovered && !isDragging) {
            const interval = setInterval(next, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovered, isDragging, next]);

    return (
        <section id="events" className="relative py-24 sm:py-32 overflow-hidden bg-black/20">
            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-24 space-y-4">
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl font-poster metallic-text tracking-tighter drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                        30+ EVENTS
                    </h2>
                    <div className="h-1 w-24 bg-matrix-red mx-auto rounded-full matrix-glow" />
                    <p className="text-white text-lg sm:text-xl font-matrix uppercase tracking-[0.3em] max-w-2xl mx-auto drop-shadow-lg font-medium">
                        Something for everyone — <span className="text-matrix-red font-bold">compete, create, and conquer.</span>
                    </p>
                </div>

                {/* Carousel Container */}
                <motion.div
                    className="relative h-[500px] sm:h-[550px] flex items-center justify-center perspective-1000 cursor-grab active:cursor-grabbing touch-pan-y"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragStart={() => setIsDragging(true)}
                    onDrag={(_, info) => {
                        setDragOffset(info.offset.x);
                    }}
                    onDragEnd={(_, info) => {
                        const threshold = 70;
                        if (info.offset.x < -threshold) {
                            next();
                        } else if (info.offset.x > threshold) {
                            prev();
                        }
                        setDragOffset(0);
                        // Delay resetting isDragging to prevent instant auto-move
                        setTimeout(() => setIsDragging(false), 500);
                    }}
                >
                    <AnimatePresence initial={false}>
                        {items.map((item, index) => {
                            const offset = (index - currentIndex + items.length) % items.length;

                            let position = 0;
                            if (offset === 0) position = 0;
                            else if (offset === 1) position = 1;
                            else if (offset === 2) position = 2;
                            else if (offset === items.length - 1) position = -1;
                            else if (offset === items.length - 2) position = -2;
                            else return null;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.8, x: position * 400, rotateY: position * -45 }}
                                    animate={{
                                        opacity: Math.abs(position) === 0 ? 1 : Math.abs(position) === 1 ? 0.6 : 0.2,
                                        scale: Math.abs(position) === 0 ? 1.1 : Math.abs(position) === 1 ? 0.85 : 0.6,
                                        x: position * (window.innerWidth < 640 ? 180 : 380) + dragOffset,
                                        z: Math.abs(position) === 0 ? 100 : Math.abs(position) === 1 ? -150 : -400,
                                        rotateY: position * -30 + (dragOffset * 0.05),
                                        zIndex: 50 - Math.abs(position) * 10,
                                    }}
                                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute w-[290px] sm:w-[420px] h-[450px] sm:aspect-[4/5] rounded-[2.5rem] pt-6 px-6 pb-6 sm:p-12 glass border-2 border-matrix-red/10 group hover:border-matrix-red/60 transition-all duration-700 overflow-hidden flex flex-col justify-between"
                                    style={{ backfaceVisibility: 'hidden', background: 'rgba(10, 0, 0, 0.8)' }}
                                >
                                    {/* Background Aura */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-matrix-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                    {/* Category Data Content */}
                                    <div className="relative z-10 flex flex-col items-center">
                                        <span className="text-6xl sm:text-9xl block mb-2 sm:mb-6 animate-float drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                                            {item.emoji}
                                        </span>
                                        <h3 className="text-2xl sm:text-5xl font-poster text-white group-hover:text-matrix-red transition-all duration-500 uppercase leading-none drop-shadow-md text-center">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-4 mt-3 sm:mt-6 text-[10px] font-matrix text-matrix-red uppercase tracking-[0.3em] font-black">
                                            <span className="bg-matrix-red/20 px-4 py-1.5 rounded-none border-x-2 border-matrix-red">
                                                {item.count} PROTOCOLS
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative z-10 space-y-3 sm:space-y-6 pt-4 sm:pt-8 border-t border-matrix-red/20">
                                        <div className="text-[9px] sm:text-[10px] font-matrix text-white/50 uppercase tracking-[0.4em] font-bold text-center">
                                            Entry Credentials: <span className="text-matrix-red font-black text-lg sm:text-xl ml-2 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">{item.fee}</span>
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/category/${item.category}`);
                                            }}
                                            className="w-full py-4 sm:py-5 rounded-none bg-matrix-red/10 border-2 border-matrix-red text-[10px] sm:text-xs font-matrix text-white font-black uppercase tracking-[0.4em] group/btn hover:bg-matrix-red hover:text-black transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]"
                                        >
                                            Initialize →
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute -bottom-16 sm:-bottom-24 flex items-center gap-10 z-[100]">
                        <button
                            onClick={prev}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-matrix-red hover:border-matrix-red hover:bg-matrix-red/5 transition-all duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div className="flex gap-3">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1.5 transition-all duration-700 rounded-full ${i === currentIndex ? 'w-16 bg-matrix-red matrix-glow' : 'w-4 bg-white/10 hover:bg-white/20'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-matrix-red hover:border-matrix-red hover:bg-matrix-red/5 transition-all duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default CircularCarousel;
