import React, { useState, useRef } from 'react';
import { Instagram, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

interface ProfileCardProps {
    avatarUrl?: string;
    name?: string;
    title?: string;
    handle?: string;
    status?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
    phone?: string;
    enableTilt?: boolean;
    enableMobileTilt?: boolean;
    showUserInfo?: boolean;
    showBehindGlow?: boolean;
    behindGlowColor?: string;
    customInnerGradient?: string;
    scale?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    avatarUrl = "https://i.pravatar.cc/400",
    name = "Name",
    title = "Title",
    handle = "handle",
    status = "Available",
    instagram = "#",
    linkedin = "#",
    email = "",
    phone = "",
    enableTilt = true,
    enableMobileTilt = false,
    showUserInfo = true,
    showBehindGlow = true,
    behindGlowColor = "rgba(255, 0, 0, 0.45)",
    customInnerGradient = "linear-gradient(145deg, rgba(20, 0, 0, 0.9) 0%, rgba(60, 0, 0, 0.7) 100%)",
    scale = "1"
}) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!enableTilt || (window.innerWidth < 768 && !enableMobileTilt)) return;

        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 12;
        const rotateY = (x - centerX) / 12;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <div
            className="relative transition-all duration-300 ease-out"
            style={{
                perspective: '1000px',
                transform: `scale(${scale})`,
                zIndex: isHovered ? 20 : 1
            }}
        >
            {/* Behind Glow */}
            {showBehindGlow && (
                <div
                    className="absolute inset-0 blur-[80px] rounded-full transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: behindGlowColor,
                        opacity: isHovered ? 0.7 : 0.1,
                        transform: `translate(${rotate.y * 3}px, ${-rotate.x * 3}px)`
                    }}
                />
            )}

            {/* Card Body */}
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden rounded-[2rem] border transition-all duration-300 ease-out shadow-[0_0_30px_rgba(0,0,0,0.5)] group"
                style={{
                    background: customInnerGradient,
                    backdropFilter: 'blur(20px)',
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    width: '100%',
                    maxWidth: '320px',
                    minHeight: '450px',
                    borderColor: isHovered ? 'rgba(255, 26, 26, 0.6)' : 'rgba(255, 26, 26, 0.2)',
                    boxShadow: isHovered ? '0 0 40px rgba(255, 0, 0, 0.25)' : 'none'
                }}
            >
                {/* Animated Scanning Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-matrix-red/30 shadow-[0_0_10px_rgba(255,0,0,0.5)] animate-[scan_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* Content */}
                <div className="p-8 flex flex-col items-center justify-between h-full space-y-6">

                    <div className="w-full flex justify-between items-start">
                        <div className={`px-3 py-1 rounded-sm border border-matrix-red/30 bg-matrix-red/5 text-[9px] font-matrix tracking-[0.2em] transition-all duration-500 ${isHovered ? 'text-matrix-red border-matrix-red shadow-[0_0_10px_rgba(255,0,0,0.3)]' : 'text-matrix-red/60'}`}>
                            SEC_ID: {handle.toUpperCase()}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-matrix-red animate-pulse shadow-[0_0_5px_rgba(255,0,0,0.8)]"></div>
                            <span className="text-[10px] font-matrix text-matrix-red/80 uppercase tracking-widest">{status}</span>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Circular Glow */}
                        <div className={`absolute inset-0 rounded-full bg-matrix-red/20 blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                        <div className={`relative w-36 h-36 rounded-full border-2 transition-all duration-500 p-1 bg-background/50 ${isHovered ? 'border-matrix-red shadow-[0_0_25px_rgba(255,0,0,0.4)] scale-105' : 'border-matrix-red/30'}`}>
                            <img
                                src={avatarUrl}
                                alt={name}
                                className="w-full h-full object-cover rounded-full filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/bottts/svg?seed=${name}&backgroundColor=000000`;
                                }}
                            />
                        </div>
                    </div>

                    {showUserInfo && (
                        <div className="text-center space-y-2 z-10">
                            <h3 className="text-2xl font-poster text-foreground tracking-tight group-hover:text-matrix-red transition-colors duration-300">{name}</h3>
                            <p className="text-xs text-muted-foreground font-matrix uppercase tracking-[0.15em]">{title}</p>
                        </div>
                    )}

                    {/* Social Icons Row */}
                    <div className="w-full border-t border-white/5 pt-6 mt-2 flex justify-center items-center gap-5">
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-matrix-red transition-all duration-300 hover:scale-125">
                                <Instagram className="w-5 h-5" />
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-matrix-red transition-all duration-300 hover:scale-125">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className="text-muted-foreground hover:text-matrix-red transition-all duration-300 hover:scale-125">
                                <Mail className="w-5 h-5" />
                            </a>
                        )}
                        {phone && (
                            <a href={`tel:${phone}`} className="text-muted-foreground hover:text-matrix-red transition-all duration-300 hover:scale-125">
                                <Phone className="w-5 h-5" />
                            </a>
                        )}
                    </div>


                </div>
            </div>

            <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(450px); }
          100% { transform: translateY(0); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
};

export default ProfileCard;
