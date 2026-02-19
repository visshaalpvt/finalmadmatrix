import { useState, useCallback, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
// Unused imports removed
import VerticalEventsReel from "@/components/VerticalEventsReel";
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
  const { user, setPendingLink, setPendingProtocol } = useAuth();

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    const regUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfSbTjg48TX8vmotgzKKtcDmHC52ptb6h2SQFS8NmHo4_Z_1w/viewform?usp=header";
    if (user) {
      window.open(regUrl, "_blank");
    } else {
      setPendingLink(regUrl);
      setPendingProtocol("General Registration");
      toast.info("Registration Required", {
        description: "Please provide your details to proceed."
      });
      window.dispatchEvent(new Event('open-login-modal'));
    }
  };


  useEffect(() => {
    // Trigger login modal automatically if user is not logged in after intro
    if (introComplete && !user) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('open-login-modal'));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [introComplete, user]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const opacity = Math.max(0, 1 - scrollPos / 400);
      setScrollOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Redirection handled globally in App.tsx
  }, [user]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <MatrixRain opacity={scrollOpacity} />
      {!introComplete && <MatrixIntro onComplete={handleIntroComplete} />}
      <Navbar />
      <HeroSection />

      <WhyMadmatrix />
      <VerticalEventsReel />
      <TimelineSection />
      <LocationSection />
      <TeamSection />

      <FooterSection />
      <ScrollProgress />

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
