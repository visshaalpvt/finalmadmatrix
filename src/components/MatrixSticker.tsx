import React from 'react';

const MatrixSticker = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* The Sticker Container - Scaled for better mobile/desktop fit */}
            <div className="relative w-[160px] h-[210px] sm:w-[220px] sm:h-[280px] transform transition-all duration-700 hover:scale-105 select-none pointer-events-none">

                <svg viewBox="0 0 240 300" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                    <defs>
                        <linearGradient id="goldGradShield" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFF2AD" />
                            <stop offset="20%" stopColor="#E6B325" />
                            <stop offset="50%" stopColor="#7a5500" />
                            <stop offset="80%" stopColor="#E6B325" />
                            <stop offset="100%" stopColor="#FFF2AD" />
                        </linearGradient>

                        <linearGradient id="shieldBgDark" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#2a0000" />
                            <stop offset="100%" stopColor="#050000" />
                        </linearGradient>

                        <linearGradient id="borderGradShield" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="50%" stopColor="#FF0000" />
                            <stop offset="100%" stopColor="#660000" />
                        </linearGradient>

                        <filter id="stickerShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feOffset dx="0" dy="2" result="offsetBlur" />
                            <feComponentTransfer in="offsetBlur" result="shadowOpacity">
                                <feFuncA type="linear" slope="0.8" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode in="shadowOpacity" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* 1. Outer White "Sticker" Edge */}
                    <path
                        d="M25,45 L45,25 L195,25 L215,45 L215,225 L120,280 L25,225 Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="10"
                        strokeLinejoin="round"
                    />

                    {/* 2. Inner Decorative Border */}
                    <path
                        d="M32,52 L52,32 L188,32 L208,52 L208,218 L120,270 L32,218 Z"
                        fill="none"
                        stroke="url(#borderGradShield)"
                        strokeWidth="5"
                    />

                    {/* 3. Main Shield Body */}
                    <path
                        d="M36,56 L56,36 L184,36 L204,56 L204,214 L120,265 L36,214 Z"
                        fill="url(#shieldBgDark)"
                    />

                    {/* Content Group with better centering */}
                    <g filter="url(#stickerShadow)">
                        {/* Header: MADMATRIX */}
                        <text
                            x="120"
                            y="75"
                            textAnchor="middle"
                            fontFamily="Arial Black, sans-serif"
                            fontSize="24"
                            fontWeight="900"
                            fontStyle="italic"
                            fill="white"
                            stroke="#000"
                            strokeWidth="1"
                            letterSpacing="-0.5"
                            style={{ filter: 'drop-shadow(0 2px 0px #700000)' }}
                        >
                            MADMATRIX
                        </text>

                        {/* Red Banner */}
                        <rect x="75" y="85" width="90" height="10" fill="#990000" rx="2" />
                        <text
                            x="120"
                            y="93"
                            textAnchor="middle"
                            fontFamily="monospace"
                            fontSize="5.5"
                            fontWeight="bold"
                            fill="white"
                            letterSpacing="0.4"
                        >
                            NATIONAL LEVEL SYMPOSIUM
                        </text>

                        {/* Date Section */}
                        <text
                            x="120"
                            y="125"
                            textAnchor="middle"
                            fontFamily="serif"
                            fontSize="13"
                            fontWeight="bold"
                            fill="#E6B325"
                        >
                            MARCH 13 & 14,
                        </text>

                        {/* Year: 2026 */}
                        <text
                            x="120"
                            y="175"
                            textAnchor="middle"
                            fontFamily="Arial Black, sans-serif"
                            fontSize="52"
                            fontWeight="900"
                            fill="url(#goldGradShield)"
                        >
                            2026
                        </text>

                        {/* Slogan: Get into the */}
                        <text
                            x="120"
                            y="202"
                            textAnchor="middle"
                            fontFamily="serif"
                            fontSize="9"
                            fontStyle="italic"
                            fill="#E6B325"
                        >
                            Get into the
                        </text>

                        {/* Bottom Footer: MATRIX - Now tighter and centered */}
                        <text
                            x="120"
                            y="238"
                            textAnchor="middle"
                            fontFamily="Arial Black, sans-serif"
                            fontSize="32"
                            fontWeight="900"
                            fill="url(#goldGradShield)"
                            letterSpacing="-1.5"
                        >
                            MATRIX
                        </text>
                    </g>
                </svg>

                {/* Shine Lines */}
                <div className="absolute top-[15%] left-[10%] w-[80%] h-px bg-white/20 rotate-[-15deg] blur-sm pointer-events-none" />
                <div className="absolute top-[20%] left-[15%] w-[70%] h-px bg-white/10 rotate-[-15deg] blur-sm pointer-events-none" />
            </div>

            {/* Backdrop Blur/Glow */}
            <div className="absolute inset-0 bg-matrix-red/5 blur-[40px] rounded-full -z-10 animate-pulse" />
        </div>
    );
};

export default MatrixSticker;
