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
  const { user } = useAuth();

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  useEffect(() => {
    // Trigger login modal automatically if user is not logged in after intro
    if (introComplete && !user) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('open-login-modal'));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [introComplete, user]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <MatrixRain opacity={0.6} />
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
        className="fixed bottom-4 right-4 z-50 hidden sm:flex glass rounded-full p-3 hover:matrix-glow-soft transition-all text-muted-foreground hover:text-primary shadow-lg shadow-black"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Index;
