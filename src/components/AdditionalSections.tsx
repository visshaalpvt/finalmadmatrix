import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const InfoStrip = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full bg-black border-y border-matrix-red/20 overflow-hidden py-3 relative z-20">
            <div className="absolute inset-0 bg-matrix-red/5 pointer-events-none" />
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: isMobile ? 8 : 15 }}
            >
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-8 px-4">
                        <span className="text-xs md:text-sm font-mono text-matrix-red/80 uppercase tracking-[0.2em] flex items-center gap-8">
                            <span>MADMATRIX 2026</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>NATIONAL LEVEL SYMPOSIUM</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>ORGANIZED BY THE DEPARTMENT OF PURE AND APPLIED MATHEMATICS</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>SIMATS ENGINEERING</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>APPROVED BY AICTE</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>IET-UK ACCREDITED</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>CERTIFICATION PROVIDED</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>CASH PRIZES</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>SKILL DEVELOPMENT</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                            <span>INNOVATION PLATFORM</span>
                            <span className="w-1.5 h-1.5 bg-matrix-red rounded-full" />
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const WhyMadmatrix = () => {
    const reasons = [
        {
            title: "Recognized Certification",
            desc: "Participation and merit certificates for eligible participants.",
            icon: "📜"
        },
        {
            title: "Executive Prizes",
            desc: "Win Medals, Trophies, and exciting Prizes for top rankers.",
            icon: "🏆"
        },
        {
            title: "National Level Exposure",
            desc: "Opportunity to engage with participants across institutions.",
            icon: "🌐"
        },
        {
            title: "Networking Hub",
            desc: "Interaction with peers and faculty experts in the tech circuit.",
            icon: "🤝"
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-poster text-white uppercase tracking-tighter">
                        Why <span className="text-matrix-red">MadMatrix?</span>
                    </h2>
                    <div className="h-1 w-24 bg-matrix-red/50 mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((item, index) => (
                        <div key={index} className="group relative p-8 bg-zinc-900/30 border border-zinc-800 hover:border-matrix-red/50 transition-all duration-300 backdrop-blur-sm rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-matrix-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</div>

                            <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3 group-hover:text-matrix-red transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                {item.desc}
                            </p>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-matrix-red/30 group-hover:border-matrix-red transition-colors" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-matrix-red/30 group-hover:border-matrix-red transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const schedule = [
        {
            title: "Grand Opening",
            desc: "Participant welcome, registrations, and a powerful inauguration to launch the symposium.",
            icon: "🚀"
        },
        {
            title: "On-Stage Technical Events",
            desc: "Paper presentations, project showcases, and competitive events held live on the main stage.",
            icon: "🎭"
        },
        {
            title: "Off-Stage Tech Events",
            desc: "Tech Events, gaming zones, fun activities, and interactive events across multiple venues.",
            icon: "🕹️"
        },
        {
            title: "Final Rounds & Spotlight Moments",
            desc: "Top participants compete in high-stakes finals with live audience excitement.",
            icon: "⭐"
        },
        {
            title: "Entertainment & Celebration",
            desc: "DJ experience, dance performances, singing, and vibrant cultural energy.",
            icon: "🎹"
        },
        {
            title: "Celebrity Guests & Special Highlights",
            desc: "Guest appearances, interactive moments, and unforgettable stage highlights.",
            icon: "🎬"
        },
        {
            title: "Mega Sports Day (Day 2)",
            desc: "Inter-college sports fest featuring cricket, football, volleyball, kabaddi, kho-kho, and more.",
            icon: "🏆"
        },
        {
            title: "Prize Distribution & Grand Finale",
            desc: "Winners from both technical and sports events are honored, closing Mad Matrix with pride.",
            icon: "🏁"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-20" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-poster text-white uppercase tracking-tighter">
                        Event <span className="text-matrix-red">Timeline</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] h-full bg-zinc-800">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-matrix-red shadow-[0_0_15px_#ff0000]"
                        />
                    </div>

                    <div className="space-y-12 sm:space-y-24">
                        {schedule.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`flex items-center justify-between flex-row sm:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Content Card */}
                                <div className={`w-full ml-12 sm:ml-0 sm:w-[45%] ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                                    <div className="group relative p-6 sm:p-8 bg-zinc-900/80 border border-matrix-red/20 rounded-none backdrop-blur-md hover:border-matrix-red/50 transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.05)] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-matrix-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'sm:flex-row-reverse sm:justify-start' : 'sm:flex-row sm:justify-start'} justify-start`}>
                                            <span className="text-xl sm:text-2xl">{item.icon}</span>
                                            <h3 className="text-lg sm:text-xl font-poster text-white tracking-wider uppercase">{item.title}</h3>
                                        </div>
                                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-matrix-red/30 -translate-y-full group-hover:translate-y-[200px] transition-transform duration-[1.5s] ease-linear" />
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10 w-4 h-4 sm:w-5 sm:h-5 bg-black border-2 border-matrix-red rounded-none shadow-[0_0_10px_#ff0000]">
                                    <div className="absolute inset-0 bg-matrix-red/50 rounded-none animate-ping" />
                                </div>

                                {/* Placeholder for spacing on desktop */}
                                <div className="hidden sm:block sm:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

const OrganizedBySection = () => {
    return (
        <section className="py-24 bg-black border-t border-zinc-900 relative overflow-hidden">
            {/* Ambient Red Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-matrix-red to-transparent opacity-50" />

            <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-matrix-red font-mono text-sm uppercase tracking-[0.4em] font-bold mb-6 block drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]">
                            Event Organized By
                        </span>
                        <h3 className="text-3xl md:text-5xl font-poster text-white mb-2 uppercase tracking-tight leading-tight">
                            Department of <span className="text-matrix-red">Pure and Applied</span> Mathematics
                        </h3>
                        <h4 className="text-2xl md:text-3xl text-zinc-300 font-bold tracking-wide mt-4 uppercase">
                            SIMATS Engineering
                        </h4>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        {[
                            "Approved by AICTE",
                            "IET-UK Accredited",
                            "NBA Tier 1"
                        ].map((tag, idx) => (
                            <div key={idx} className="px-6 py-3 bg-black border border-matrix-red/40 backdrop-blur-sm rounded-none text-xs md:text-sm font-mono text-white uppercase tracking-[0.2em] font-bold relative group overflow-hidden">
                                <div className="absolute inset-0 bg-matrix-red/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                <span className="relative z-10">{tag}</span>
                                {/* Corner marks */}
                                <div className="absolute top-0 left-0 w-1 h-1 bg-matrix-red" />
                                <div className="absolute bottom-0 right-0 w-1 h-1 bg-matrix-red" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div className="fixed right-0 top-0 bottom-0 w-1 bg-transparent z-50 flex flex-col justify-center pointer-events-none hidden md:flex">
            <div className="h-1/2 w-full relative bg-zinc-900/20">
                <motion.div
                    style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                    className="w-full h-full bg-matrix-red shadow-[0_0_10px_#ff0000]"
                />
            </div>
        </div>
    );
};

export { InfoStrip, WhyMadmatrix, TimelineSection, OrganizedBySection, ScrollProgress };
