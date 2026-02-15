import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events, registrationLinks } from "@/data/events";
import { ArrowLeft, Clock, Users, Trophy, BookOpen, Users2 } from "lucide-react";
import MatrixRain from "@/components/MatrixRain";
import MadmatrixLogo from "@/components/MadmatrixLogo";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const EventDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [pendingLink, setPendingLink] = useState<string | null>(null);
    const eventId = parseInt(id || "0");
    const event = events.find((e) => e.id === eventId);

    if (!event) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <MatrixRain />
                <h1 className="text-4xl font-poster text-matrix-red mb-4 uppercase">Data Corrupted</h1>
                <button
                    onClick={() => navigate("/")}
                    className="px-8 py-3 glass rounded-full text-foreground hover:matrix-glow transition-all font-matrix uppercase tracking-widest"
                >
                    Return Home
                </button>
            </div>
        );
    }

    useEffect(() => {
        if (user && pendingLink) {
            window.open(pendingLink, "_blank", "noopener,noreferrer");
            setPendingLink(null);
        }
    }, [user, pendingLink]);

    return (
        <div className="min-h-screen bg-background relative pb-32">
            <MatrixRain />

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Navigation */}
                <button
                    onClick={() => navigate(`/category/${event.category}`)}
                    className="flex items-center gap-3 text-muted-foreground hover:text-matrix-red transition-all mb-12 group"
                >
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:matrix-glow">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="font-matrix uppercase tracking-[0.3em] text-sm">Back to {event.category.replace('-', ' ')}</span>
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-16">
                    <MadmatrixLogo size="small" />
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Main Content Card */}
                    <div className="glass-strong p-8 sm:p-16 rounded-[3rem] mb-12 relative overflow-hidden border-matrix-red/20 shadow-2xl">
                        <div className="absolute -top-20 -right-20 opacity-5 pointer-events-none">
                            <span className="text-[25rem]">{event.emoji}</span>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-8 space-y-8">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-matrix-red/10 border border-matrix-red/30 text-matrix-red text-xs uppercase tracking-[0.4em] font-matrix">
                                    {event.category.replace('-', ' ')}
                                </div>

                                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-poster leading-tight metallic-text uppercase tracking-tighter break-words">
                                    {event.title}
                                </h1>

                                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-matrix-red/30 pl-8 font-light">
                                    "{event.description}"
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                    <div className="flex items-center gap-6 glass p-6 rounded-2xl border-border/40">
                                        <div className="w-16 h-16 rounded-2xl bg-matrix-red/10 flex items-center justify-center text-matrix-red shadow-inner shadow-matrix-red/20">
                                            <Clock className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase text-muted-foreground font-matrix tracking-widest mb-1">Time Frame</div>
                                            <div className="text-2xl font-heading font-bold uppercase text-foreground">{event.duration}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 glass p-6 rounded-2xl border-border/40">
                                        <div className="w-16 h-16 rounded-2xl bg-matrix-ember/10 flex items-center justify-center text-matrix-ember shadow-inner shadow-matrix-ember/20">
                                            <Users className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase text-muted-foreground font-matrix tracking-widest mb-1">Squad Size</div>
                                            <div className="text-2xl font-heading font-bold uppercase text-foreground">{event.teamSize}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-4 space-y-6">
                                <div className="glass-strong p-8 rounded-3xl border-matrix-red/30 text-center space-y-4">
                                    <div className="text-sm font-matrix uppercase tracking-widest text-muted-foreground">Registration Access</div>
                                    <div className="text-6xl font-poster text-matrix-red drop-shadow-lg">
                                        {event.fee || "₹99"}
                                    </div>
                                    <div className="h-1 w-12 bg-matrix-red/30 mx-auto rounded-full" />
                                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                                        Universal access granted for this protocol.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        const link = registrationLinks[event.category];
                                        if (link) {
                                            if (user) {
                                                window.open(link, "_blank", "noopener,noreferrer");
                                            } else {
                                                setPendingLink(link);
                                                toast.error("Authentication Required", {
                                                    description: "Please login to register for this event Protocol."
                                                });
                                                window.dispatchEvent(new Event('open-login-modal'));
                                            }
                                        }
                                    }}
                                    className="w-full py-6 rounded-2xl bg-gradient-to-r from-matrix-red to-matrix-maroon text-primary-foreground font-black shadow-xl shadow-matrix-red/20 hover:matrix-glow transition-all uppercase tracking-[0.2em] text-sm animate-pulse-glow cursor-pointer"
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Details Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Rules */}
                        <div className="glass p-10 sm:p-14 rounded-[2.5rem] border-border/40 hover:border-matrix-red/30 transition-colors">
                            <div className="flex items-center gap-4 mb-10">
                                <BookOpen className="w-8 h-8 text-matrix-red" />
                                <h2 className="text-3xl font-poster uppercase tracking-tight">Rules & Protocol</h2>
                            </div>
                            <ul className="space-y-6">
                                {event.rules.map((rule, idx) => (
                                    <li key={idx} className="flex gap-6 items-start text-muted-foreground leading-relaxed group">
                                        <span className="text-matrix-red font-matrix text-lg group-hover:scale-125 transition-transform">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                                        <span className="text-lg italic group-hover:text-foreground transition-colors">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Judging / Extra */}
                        <div className="space-y-12">
                            {event.judgingCriteria && (
                                <div className="glass p-10 sm:p-14 rounded-[2.5rem] border-border/40 hover:border-matrix-ember/30 transition-colors">
                                    <div className="flex items-center gap-4 mb-10">
                                        <Trophy className="w-8 h-8 text-matrix-ember" />
                                        <h2 className="text-3xl font-poster uppercase tracking-tight">Judging Matrix</h2>
                                    </div>
                                    <ul className="space-y-6">
                                        {event.judgingCriteria.map((criterion, idx) => (
                                            <li key={idx} className="flex gap-6 items-start text-muted-foreground leading-relaxed group">
                                                <span className="text-matrix-ember text-xl group-hover:rotate-12 transition-transform">★</span>
                                                <span className="text-lg italic group-hover:text-foreground transition-colors">{criterion}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {event.organizers && event.organizers.length > 0 && (
                                <div className="glass p-10 sm:p-14 rounded-[2.5rem] border-border/40 hover:border-matrix-red/30 transition-colors">
                                    <div className="flex items-center gap-4 mb-10">
                                        <Users2 className="w-8 h-8 text-matrix-red" />
                                        <h2 className="text-3xl font-poster uppercase tracking-tight">Event Organizers</h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {event.organizers.map((organizer, idx) => (
                                            <li key={idx} className="flex items-center gap-4 text-muted-foreground group">
                                                <span className="w-8 h-8 rounded-full bg-matrix-red/20 flex items-center justify-center text-matrix-red text-xs font-matrix group-hover:bg-matrix-red group-hover:text-background transition-colors">
                                                    ✓
                                                </span>
                                                <span className="text-lg font-light group-hover:text-foreground transition-colors">{organizer}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="mt-12 glass p-12 rounded-[2.5rem] border-matrix-red/20 bg-gradient-to-br from-matrix-red/5 to-transparent flex flex-col items-center text-center space-y-6">
                        <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-matrix-red animate-float">
                            <span className="text-3xl font-poster">?</span>
                        </div>
                        <h3 className="text-2xl font-poster uppercase">Technical Support</h3>
                        <p className="text-muted-foreground font-light max-w-xs">
                            Having trouble with the registration protocol? Contact the main server administrators.
                        </p>
                        <div className="text-matrix-red font-matrix tracking-widest text-sm uppercase">
                            madmatrix2026@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
