import { useParams, useNavigate } from "react-router-dom";
import { events, categoryLabels, categoryOrder, type EventData } from "@/data/events";
import { ArrowLeft } from "lucide-react";
import EventCard from "@/components/EventCard";
import MatrixRain from "@/components/MatrixRain";
import MadmatrixLogo from "@/components/MadmatrixLogo";

const CategoryPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();

    const category = categoryId as EventData["category"];
    const isValid = categoryOrder.includes(category);

    if (!isValid) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <MatrixRain />
                <h1 className="text-4xl font-poster text-matrix-red mb-4 uppercase">Category Not Found</h1>
                <button
                    onClick={() => navigate("/")}
                    className="px-8 py-3 glass rounded-full text-foreground hover:matrix-glow transition-all font-matrix uppercase tracking-widest"
                >
                    Return Home
                </button>
            </div>
        );
    }

    const label = categoryLabels[category];
    const categoryEvents = events.filter((e) => e.category === category);

    // Get registration fee for this category
    const fee = categoryEvents[0]?.fee || "—";

    return (
        <div className="min-h-screen bg-background relative pb-32">
            <MatrixRain />

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Back Button */}
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 text-muted-foreground hover:text-matrix-red transition-all mb-12 group"
                >
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:matrix-glow">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="font-matrix uppercase tracking-[0.3em] text-sm">Return to Archive</span>
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-16">
                    <MadmatrixLogo size="medium" />
                </div>                <div className="max-w-6xl mx-auto">
                    {/* Category Header */}
                    <div className="glass-strong p-10 sm:p-16 rounded-[3rem] mb-12 relative overflow-hidden border-matrix-red/20 shadow-2xl">
                        <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
                            <span className="text-[20rem] font-poster select-none">{label.split(" ")[0]}</span>
                        </div>

                        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                            <div className="space-y-4 text-center sm:text-left">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-matrix-red/10 border border-matrix-red/30 text-matrix-red text-xs uppercase tracking-[0.4em] font-matrix">
                                    {categoryEvents.length} Events Available
                                </div>
                                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-poster leading-none metallic-text uppercase tracking-tighter">
                                    {label.split(" ").slice(1).join(" ")}
                                </h1>
                                <p className="text-lg text-muted-foreground font-matrix uppercase tracking-widest">
                                    Registration Fee: <span className="text-matrix-red font-bold">{fee}</span>
                                </p>
                            </div>
                            <div className="text-center">
                                <span className="text-[8rem] sm:text-[10rem] block">{label.split(" ")[0]}</span>
                            </div>
                        </div>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categoryEvents.map((ev) => (
                            <EventCard key={ev.id} event={ev} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
