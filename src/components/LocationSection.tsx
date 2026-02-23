import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../styles/location.css";

const LocationSection = () => {
  const googleMapsUrl = "https://www.google.com/maps/dir//Saveetha+School+of+Engineering,+Saveetha+University,+Saveetha+Nagar,+Thandalam,+Chennai,+Tamil+Nadu+602105/@13.0270685,80.0163351,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a528e5743475d65:0x7d06634b3588960b!2m2!1d80.0163351!2d13.0270685?entry=ttu";

  return (
    <section id="location" className="relative z-10 py-16 px-4 border-t border-matrix-red/20 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-poster text-matrix-red mb-12 text-center uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
          Event Location
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div className="location-map-container glass rounded-2xl overflow-hidden border border-matrix-red/30 h-96 shadow-[0_0_30px_rgba(255,0,0,0.1)] w-full max-w-[500px] lg:max-w-none mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3712347905!2d80.01414647455845!3d13.027073613298687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528e5743475d65%3A0x7d06634b3588960b!2sSaveetha%20School%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708680000000"
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
          <div className="space-y-8 p-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <div className="space-y-4 w-full">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="p-3 bg-matrix-red/10 rounded-xl border border-matrix-red/30">
                  <MapPin className="w-8 h-8 text-matrix-red animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-poster uppercase tracking-tight text-matrix-red">SAVEETHA UNIVERSITY</h3>
                  <p className="text-matrix-red font-matrix text-sm leading-relaxed tracking-widest uppercase">
                    22G8+9HP, Kuthambakkam, Tamil Nadu 602105, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-matrix-red/20 font-matrix w-full">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-2 sm:gap-0 text-sm">
                <span className="text-white/60 uppercase tracking-widest text-[10px] sm:text-sm">Venue Protocol</span>
                <span className="text-matrix-red font-bold uppercase tracking-widest text-xs sm:text-sm">SAVEETHA UNIVERSITY</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-2 sm:gap-0 text-sm">
                <span className="text-white/60 uppercase tracking-widest text-[10px] sm:text-sm">Event Timeline</span>
                <span className="text-matrix-red font-bold uppercase tracking-widest text-xs sm:text-sm">MARCH 13 & 14, 2026</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-2 sm:gap-0 text-sm">
                <span className="text-white/60 uppercase tracking-widest text-[10px] sm:text-sm">Access Clearance</span>
                <span className="text-matrix-red font-bold uppercase tracking-widest text-xs sm:text-sm">Open to All</span>
              </div>
            </div>

            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="w-full pt-4">
              <Button className="w-full bg-[#ff1a1a] hover:bg-[#cc0000] text-black font-black uppercase tracking-[0.2em] py-6 text-base sm:text-lg transition-all rounded-none shadow-[0_0_20px_rgba(255,0,0,0.3)] min-h-[60px] flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-3 flex-shrink-0" />
                <span className="whitespace-nowrap">Initialize Navigation</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
