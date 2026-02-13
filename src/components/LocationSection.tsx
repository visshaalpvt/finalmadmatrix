import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../styles/location.css";

const LocationSection = () => {
  const googleMapsUrl =
    "https://www.google.com/maps?s=web&lqi=ChJzaW1hdHMgZW5naW5lZXJpbmdI7K_lyt6tgIAIWiQQABABGAAYASISc2ltYXRzIGVuZ2luZWVyaW5nKgYIAhAAEAGSAQdjb2xsZWdl&vet=12ahUKEwjrgISrgNaSAxUFX2wGHVbxAQYQ1YkKegQIVRAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kbuj5Rqsi1I6Ma9tnoNOe2rh&daddr=22G8%2B9HP,+Kuthambakkam,+Tamil+Nadu+602105";

  return (
    <section className="relative z-10 py-16 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-12 text-center">Event Location</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map Embed */}
          <div className="location-map-container glass rounded-xl overflow-hidden border border-matrix-red/20 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9752893916327!2d80.20261807455654!3d12.94058358682893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f9c0e7a2d5cd%3A0x1f9a5e8c6c7c8e9f!2sSimats%20Engineering%20College!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-matrix-red animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">SIMATS Engineering College</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    22G8+9HP, Kuthambakkam, Tamil Nadu 602105, India
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Event Venue:</span> SCAD Auditorium
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Date:</span> March 13 & 14, 2026
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Parking:</span> Available on campus
              </p>
            </div>

            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gradient-to-r from-matrix-red to-matrix-maroon hover:matrix-glow text-white font-bold uppercase tracking-wider py-6 text-base transition-all">
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
