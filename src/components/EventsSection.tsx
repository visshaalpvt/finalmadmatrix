import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { events, categoryLabels, categoryOrder } from "@/data/events";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import {
  Gamepad2,
  Mic2,
  Cpu,
  Trophy,
  Activity,
  Zap,
  ChevronRight,
  Terminal,
  ShieldAlert,
  Disc
} from "lucide-react";

// Map categories to futuristic Lucide icons
const categoryIcons: Record<string, any> = {
  "on-stage": Mic2,
  "off-stage": Cpu,
  "games": Gamepad2,
  "sports": Trophy,
  "track": Activity,
};

const EventsSection = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Data preparation
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat].replace(/[^a-zA-Z ]/g, ""), // Clean emojis
    items: events.filter((e) => e.category === cat),
    icon: categoryIcons[cat] || Zap
  }));

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [carouselRef]);

  const handleExplore = (category: string) => {
    navigate(`/category/${category}`);
  };

  return (
    <section id="events" className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,0,0,1),#000000)] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6 border-b border-matrix-red/20 pb-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-poster text-white uppercase tracking-tighter leading-none">
              Event <span className="text-matrix-red">Protocols</span>
            </h2>
            <div className="flex items-center gap-2 text-matrix-red/60 font-mono text-xs uppercase tracking-[0.3em]">
              <span className="w-2 h-2 bg-matrix-red rounded-full animate-pulse" />
              System Ready // Select Module
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <span>Scroll / Drag</span>
            <div className="w-16 h-[1px] bg-zinc-800" />
            <span className="text-matrix-red">Explore All</span>
          </div>
        </div>

        {/* Cinematic Carousel */}
        <motion.div
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8 py-10 pl-2"
          >
            {grouped.map((g, index) => {
              const Icon = g.icon;

              return (
                <motion.div
                  key={g.category}
                  className="group relative h-[450px] min-w-[320px] md:min-w-[380px] rounded-none bg-black/40 backdrop-blur-md border border-matrix-red/20 hover:border-matrix-red/60 transition-colors duration-500 overflow-hidden flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Hover Scanline Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matrix-red/5 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />

                  {/* Subtle Red Glow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-matrix-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Card Header: Icon & Tech Decorative Lines */}
                  <div className="p-8 pb-0 relative z-10 flex justify-between items-start">
                    <div className="w-14 h-14 border border-matrix-red/30 bg-black/50 flex items-center justify-center relative group-hover:border-matrix-red transition-colors duration-500">
                      {/* Decorative corners */}
                      <div className="absolute top-0 left-0 w-1 h-1 bg-matrix-red" />
                      <div className="absolute bottom-0 right-0 w-1 h-1 bg-matrix-red" />

                      <Icon className="w-6 h-6 text-matrix-red/80 group-hover:text-matrix-red transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]" strokeWidth={1.5} />
                    </div>
                    <div className="text-[10px] font-mono text-zinc-600 group-hover:text-matrix-red/60 flex flex-col items-end gap-1">
                      <span>SEC_0{index + 1}</span>
                      <span className="w-8 h-[1px] bg-current" />
                    </div>
                  </div>

                  {/* Card Body: Title & Info */}
                  <div className="p-8 flex-grow flex flex-col justify-end relative z-10 space-y-6">
                    <div>
                      <h3 className="text-3xl font-poster uppercase text-white tracking-wide mb-2 group-hover:text-matrix-red transition-colors duration-300 leading-none">
                        {g.label}
                      </h3>
                      <div className="w-full h-[1px] bg-zinc-800 group-hover:bg-matrix-red/40 transition-colors duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-matrix-red w-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase tracking-wider text-zinc-500">
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-700 group-hover:text-matrix-red/50">Count</span>
                        <span className="text-white">{g.items.length} Modules</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-700 group-hover:text-matrix-red/50">Access</span>
                        <span className="text-white">{g.items[0]?.fee || "N/A"}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleExplore(g.category)}
                      className="mt-4 w-full py-4 border border-zinc-800 group-hover:border-matrix-red/50 bg-transparent text-white/50 group-hover:text-white uppercase font-mono text-xs tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-300 hover:bg-matrix-red/10"
                    >
                      <span>Initialize</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Tech HUD Lines on Borders */}
                  <div className="absolute left-0 bottom-8 w-[2px] h-8 bg-matrix-red/20 group-hover:bg-matrix-red/80 transition-colors" />
                  <div className="absolute right-0 top-8 w-[2px] h-8 bg-matrix-red/20 group-hover:bg-matrix-red/80 transition-colors" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Pagination / Progress Indicators (Visual Only) */}
        <div className="mt-12 flex items-center gap-2 overflow-hidden mx-auto justify-center">
          {grouped.map((_, i) => (
            <div key={i} className="h-[2px] w-12 bg-zinc-900 overflow-hidden">
              <div className="h-full w-full bg-matrix-red/50 -translate-x-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
