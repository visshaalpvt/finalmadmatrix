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
                        <div className={`px-4 py-1.5 rounded-none border border-matrix-red/50 bg-black/60 text-[10px] font-matrix tracking-[0.2em] transition-all duration-500 font-bold ${isHovered ? 'text-matrix-red border-matrix-red shadow-[0_0_15px_rgba(255,0,0,0.4)]' : 'text-matrix-red/80'}`}>
                            SEC_ID: {handle.toUpperCase()}
                        </div>
                        <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-matrix-red/20 shadow-inner">
                            <div className="w-1.5 h-1.5 rounded-full bg-matrix-red animate-pulse shadow-[0_0_8px_rgba(255,0,0,1)]"></div>
                            <span className="text-[10px] font-matrix text-white font-bold uppercase tracking-widest">{status}</span>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Circular Glow */}
                        <div className={`absolute inset-0 rounded-full bg-matrix-red/30 blur-3xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                        <div className={`relative w-40 h-40 rounded-full border-2 transition-all duration-500 p-1.5 bg-black/80 ${isHovered ? 'border-matrix-red shadow-[0_0_35px_rgba(255,0,0,0.6)] scale-110' : 'border-matrix-red/40'}`}>
                            <img
                                src={avatarUrl}
                                alt={name}
                                className="w-full h-full object-cover rounded-full filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 brightness-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/bottts/svg?seed=${name}&backgroundColor=000000`;
                                }}
                            />
                        </div>
                    </div>

                    {showUserInfo && (
                        <div className="text-center space-y-3 z-10 p-2 rounded-xl backdrop-blur-sm bg-black/20">
                            <h3 className="text-3xl font-poster text-white tracking-tight group-hover:text-matrix-red transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] decoration-matrix-red/30 underline-offset-4 decoration-2">
                                {name}
                            </h3>
                            <p className="text-[11px] text-white/80 font-matrix font-black uppercase tracking-[0.25em] bg-matrix-red/10 px-4 py-1 border-x border-matrix-red/30">
                                {title}
                            </p>
                        </div>
                    )}

                    {/* Social Icons Row */}
                    <div className="w-full border-t border-white/5 pt-6 mt-2 flex justify-center items-center gap-5">
                        {instagram && (
                            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-matrix-red transition-all duration-300 hover:scale-125">
                                <Instagram className="w-6 h-6" />
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-matrix-red transition-all duration-300 hover:scale-125">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className="text-muted-foreground hover:text-matrix-red transition-all duration-300 hover:scale-125">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {phone && (
                            <a href={`tel:${phone}`} className="text-muted-foreground hover:text-matrix-red transition-all duration-300 hover:scale-125">
                                <Phone className="w-6 h-6" />
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
