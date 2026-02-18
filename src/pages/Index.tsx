import { useState, useCallback, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import CircularCarousel from "@/components/CircularCarousel";
import LocationSection from "@/components/LocationSection";
import TeamSection from "@/components/TeamSection";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import MatrixRain from "@/components/MatrixRain";
import MatrixIntro from "@/components/MatrixIntro";
import { ArrowUp } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { InfoStrip, WhyMadmatrix, TimelineSection, OrganizedBySection, ScrollProgress } from "@/components/AdditionalSections";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0.7);
  const { user } = useAuth();
  const [pendingLink, setPendingLink] = useState<string | null>(null);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const handleRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (user) {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSfSbTjg48TX8vmotgzKKtcDmHC52ptb6h2SQFS8NmHo4_Z_1w/viewform?usp=header", "_blank");
    } else {
      setPendingLink("https://docs.google.com/forms/d/e/1FAIpQLSfSbTjg48TX8vmotgzKKtcDmHC52ptb6h2SQFS8NmHo4_Z_1w/viewform?usp=header");
      toast.error("Authentication Required", {
        description: "Please login to register."
      });
      window.dispatchEvent(new Event('open-login-modal'));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      // Fade in MatrixRain: 0 at top, 0.7 after scrolling 600px
      const newOpacity = Math.min(0.7, (scrollPos / 600) * 0.7);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (user && pendingLink) {
      window.open(pendingLink, "_blank", "noopener,noreferrer");
      setPendingLink(null);
    }
  }, [user, pendingLink]);

  return (
    <div className="min-h-screen bg-background relative">
      {!introComplete && <MatrixIntro onComplete={handleIntroComplete} />}
      <MatrixRain opacity={scrollOpacity} />

      <Navbar />
      <HeroSection />
      <InfoStrip />
      <WhyMadmatrix />
      <CircularCarousel />
      <TimelineSection />
      <LocationSection />
      <TeamSection />
      <OrganizedBySection />
      <FooterSection />
      <ScrollProgress />

      {/* Sticky mobile register button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
        <a
          href="#events"
          className="block w-full py-3 text-center font-semibold text-primary-foreground rounded-full bg-gradient-to-r from-matrix-red to-matrix-maroon matrix-glow text-sm"
        >
          Register Now
        </a>
      </div>

      {/* Back to top */}
      <a
        href="#"
        className="fixed bottom-4 right-4 z-50 hidden sm:flex glass rounded-full p-3 hover:matrix-glow-soft transition-all text-muted-foreground hover:text-primary"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Index;
