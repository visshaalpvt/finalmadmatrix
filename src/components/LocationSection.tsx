import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../styles/location.css";

const LocationSection = () => {
  const googleMapsUrl =
    "https://www.google.com/maps?s=web&lqi=ChJzaW1hdHMgZW5naW5lZXJpbmdI7K_lyt6tgIAIWiQQABABGAAYASISc2ltYXRzIGVuZ2luZWVyaW5nKgYIAhAAEAGSAQdjb2xsZWdl&vet=12ahUKEwjrgISrgNaSAxUFX2wGHVbxAQYQ1YkKegQIVRAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kbuj5Rqsi1I6Ma9tnoNOe2rh&daddr=22G8%2B9HP,+Kuthambakkam,+Tamil+Nadu+602105";

  return (
    <section id="location" className="relative z-10 py-16 px-4 border-t border-matrix-red/20 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-poster text-matrix-red mb-12 text-center uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
          Event Location
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div className="location-map-container glass rounded-2xl overflow-hidden border border-matrix-red/30 h-96 shadow-[0_0_30px_rgba(255,0,0,0.1)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9752893916327!2d80.20261807455654!3d12.94058358682893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f9c0e7a2d5cd%3A0x1f9a5e8c6c7c8e9f!2sSimats%20Engineering%20College!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Location Details */}
          <div className="space-y-8 p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-6">
                <div className="mt-1 p-3 bg-matrix-red/10 rounded-xl border border-matrix-red/30">
                  <MapPin className="w-8 h-8 text-matrix-red animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-poster uppercase tracking-tight">SIMATS Engineering College</h3>
                  <p className="text-matrix-red font-matrix text-sm leading-relaxed tracking-widest uppercase">
                    22G8+9HP, Kuthambakkam, Tamil Nadu 602105, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-matrix-red/20 font-matrix">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60 uppercase tracking-widest">Venue Protocol</span>
                <span className="text-matrix-red font-bold uppercase tracking-widest">SIMATS CAMPUS</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60 uppercase tracking-widest">Event Timeline</span>
                <span className="text-matrix-red font-bold uppercase tracking-widest">MARCH 13 & 14, 2026</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/60 uppercase tracking-widest">Access Clearance</span>
                <span className="text-matrix-red font-bold uppercase tracking-widest">Open to All</span>
              </div>
            </div>

            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block pt-4">
              <Button className="w-full bg-[#ff1a1a] hover:bg-[#cc0000] text-black font-black uppercase tracking-[0.2em] py-8 text-lg transition-all rounded-none shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                <MapPin className="w-6 h-6 mr-3" />
                Initialize Navigation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
