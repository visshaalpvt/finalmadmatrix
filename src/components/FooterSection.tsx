import { Mail, Phone, Instagram, Twitter, Youtube } from "lucide-react";

const FooterSection = () => (
  <footer className="relative z-10 border-t border-matrix-red/10 py-12 px-4 bg-black/60 backdrop-blur-md">
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-poster text-matrix-red uppercase tracking-widest">MADMATRIX 2026</h2>
        <p className="text-[10px] font-matrix text-matrix-red/40 uppercase tracking-[0.4em]">Where Talent Meets Opportunity</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-matrix uppercase tracking-widest text-muted-foreground">
        <a href="mailto:contact@madmatrix.org" className="flex items-center gap-2 hover:text-matrix-red transition-all">
          <Mail className="w-4 h-4" /> contact@madmatrix.org
        </a>
        <a href="tel:+918248372122" className="flex items-center gap-2 hover:text-matrix-red transition-all">
          <Phone className="w-4 h-4" /> +91 82483 72122
        </a>
      </div>

      <div className="flex justify-center gap-6">
        {[Instagram, Twitter, Youtube].map((Icon, i) => (
          <a key={i} href="#" className="w-10 h-10 rounded-full border border-matrix-red/20 flex items-center justify-center hover:bg-matrix-red/10 hover:border-matrix-red transition-all text-muted-foreground hover:text-matrix-red shadow-[0_0_15px_rgba(255,0,0,0.1)]">
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      <p className="text-[9px] text-muted-foreground/40 font-matrix uppercase tracking-[0.2em] pt-4">
        © 2026 MADMATRIX — SIMATS Engineering. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
