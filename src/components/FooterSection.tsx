import { Mail, Phone, Instagram, Twitter, Youtube } from "lucide-react";

const FooterSection = () => (
  <footer className="relative z-10 border-t border-matrix-red/10 py-12 px-4 bg-black/60 backdrop-blur-md">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-poster text-matrix-red uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]">MADMATRIX 2026</h2>
        <p className="text-[11px] font-matrix text-matrix-red/80 uppercase tracking-[0.5em] font-bold">Where Talent Meets Opportunity</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm font-matrix uppercase tracking-widest text-white/70">
        <a href="mailto:madmatrix2026@gmail.com" className="flex items-center gap-3 hover:text-matrix-red transition-all border-b border-matrix-red/20 pb-1 px-4 hover:border-matrix-red group">
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" /> madmatrix2026@gmail.com
        </a>
        <a href="tel:+919025718226" className="flex items-center gap-3 hover:text-matrix-red transition-all border-b border-matrix-red/20 pb-1 px-4 hover:border-matrix-red group">
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" /> +91 90257 18226
        </a>
      </div>

      <div className="h-[1px] w-24 bg-matrix-red/20 mx-auto" />


      <p className="text-[10px] text-white/40 font-matrix uppercase tracking-[0.3em] pt-8 font-medium">
        © 2026 <span className="text-matrix-red">MADMATRIX</span> — SIMATS Engineering. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
