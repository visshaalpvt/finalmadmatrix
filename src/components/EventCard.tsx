import { useNavigate } from "react-router-dom";
import { Clock, Users, ArrowRight } from "lucide-react";
import type { EventData } from "@/data/events";

const EventCard = ({ event }: { event: EventData }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/event/${event.id}`)}
      className="glass group relative rounded-3xl overflow-hidden transition-all duration-500 hover:matrix-glow border-border/40 hover:border-matrix-red/60 cursor-pointer p-6 sm:p-8 flex flex-col justify-between min-h-[220px]"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
        <span className="text-8xl">{event.emoji}</span>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl sm:text-5xl group-hover:scale-125 transition-transform duration-500 block">{event.emoji}</span>
          {event.fee && (
            <div className="bg-matrix-red/20 text-matrix-red px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter border border-matrix-red/30">
              {event.fee}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="font-poster text-xl sm:text-3xl text-foreground group-hover:text-matrix-red transition-colors leading-tight uppercase">
            {event.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-[10px] sm:text-xs text-muted-foreground font-matrix uppercase tracking-[0.1em]">
            <span className="flex items-center gap-1.5 bg-background/50 px-2 py-1 rounded-md"><Clock className="w-3.5 h-3.5" />{event.duration}</span>
            <span className="flex items-center gap-1.5 bg-background/50 px-2 py-1 rounded-md"><Users className="w-3.5 h-3.5" />{event.teamSize}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between relative z-10 pt-4 border-t border-border/20">
        <span className="text-[10px] font-matrix text-matrix-red/60 uppercase tracking-widest">Initialization Complete</span>
        <div className="text-matrix-red flex items-center gap-2 font-heading font-bold text-sm group-hover:translate-x-2 transition-transform">
          VIEW DATA <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
