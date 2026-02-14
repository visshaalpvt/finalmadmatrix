import { useNavigate } from "react-router-dom";
import { events, categoryLabels, categoryOrder } from "@/data/events";

const EventsSection = () => {
  const navigate = useNavigate();

  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: events.filter((e) => e.category === cat),
  }));

  const handleExplore = (category: string) => {
    navigate(`/category/${category}`);
  };

  return (
    <section id="events" className="py-20 sm:py-32 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-poster tracking-tighter drop-shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            <span className="metallic-text">30+ EVENTS</span>
          </h2>
          <div className="h-1 w-24 bg-matrix-red mx-auto rounded-full matrix-glow" />
          <p className="text-white text-lg sm:text-xl font-matrix uppercase tracking-[0.3em] max-w-2xl mx-auto drop-shadow-lg">
            Something for everyone — <span className="text-matrix-red font-bold">compete, create, and conquer.</span>
          </p>
        </div>

        {/* Category Cards - Click navigates to separate page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {grouped.map((g) => (
            <div
              key={g.category}
              className="group relative glass rounded-3xl p-8 sm:p-10 text-left transition-all duration-500 border-2 border-border/40 hover:border-matrix-red hover:matrix-glow hover:-translate-y-2 overflow-hidden"
            >
              {/* Background emoji */}
              <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                <span className="text-[10rem] select-none">{g.label.split(" ")[0]}</span>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-matrix-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 space-y-6">
                {/* Emoji */}
                <span className="text-6xl sm:text-7xl block group-hover:scale-110 transition-transform duration-500">
                  {g.label.split(" ")[0]}
                </span>

                {/* Title */}
                <div>
                  <h3 className="font-poster text-2xl sm:text-3xl uppercase text-foreground group-hover:text-matrix-red transition-colors leading-tight">
                    {g.label.split(" ").slice(1).join(" ")}
                  </h3>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="h-[1px] w-6 bg-matrix-red group-hover:w-12 transition-all" />
                    <span className="text-xs text-white font-matrix uppercase tracking-[0.2em] font-bold">
                      {g.items.length} Protocols Loaded
                    </span>
                  </div>
                </div>

                {/* Fee info */}
                <div className="flex items-center justify-between pt-4 border-t border-matrix-red/20">
                  <span className="text-xs font-matrix text-white/80 uppercase tracking-widest">
                    Access Fee: <span className="text-matrix-red font-black">{g.items[0]?.fee || "—"}</span>
                  </span>
                  <button
                    onClick={() => handleExplore(g.category)}
                    className="text-white bg-matrix-red/20 px-4 py-2 rounded-sm border border-matrix-red/40 font-heading font-black text-[10px] group-hover:bg-matrix-red group-hover:text-black transition-all uppercase tracking-widest cursor-pointer"
                  >
                    Initialize →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
