import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "@/components/LoginModal";
import Index from "./pages/Index";
import EventDetail from "./pages/EventDetail";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

import { AuthProvider, useAuth } from "./hooks/useAuth";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, pendingLink, setPendingLink } = useAuth();

  useEffect(() => {
    const handleOpenLogin = () => setIsLoginOpen(true);
    window.addEventListener("open-login-modal", handleOpenLogin);
    return () => window.removeEventListener("open-login-modal", handleOpenLogin);
  }, []);

  useEffect(() => {
    if (user && pendingLink) {
      if (pendingLink === "SCROLL_TO_EVENTS") {
        const eventsSection = document.getElementById('events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.open(pendingLink, "_blank");
      }
      setPendingLink(null);
    }
  }, [user, pendingLink, setPendingLink]);


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
