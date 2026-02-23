import React from 'react';

const MatrixSticker = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* The Sticker Container - Even smaller and more refined vertical footprint */}
            <div className="relative w-[180px] h-[230px] sm:w-[220px] sm:h-[280px] transform transition-all duration-700 hover:scale-110 select-none pointer-events-none">

                <svg viewBox="0 0 240 300" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                    <defs>
                        {/* Gold Gradient for text */}
                        <linearGradient id="goldGradFinal" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFF2AD" />
                            <stop offset="20%" stopColor="#E6B325" />
                            <stop offset="50%" stopColor="#805d00" />
                            <stop offset="80%" stopColor="#E6B325" />
                            <stop offset="100%" stopColor="#FFF2AD" />
                        </linearGradient>

                        {/* Shield Background */}
                        <linearGradient id="shieldBgFinal" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#300000" />
                            <stop offset="100%" stopColor="#0a0000" />
                        </linearGradient>

                        {/* Red/Gold Border */}
                        <linearGradient id="borderGradFinal" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="50%" stopColor="#FF0000" />
                            <stop offset="100%" stopColor="#7a0000" />
                        </linearGradient>

                        <filter id="shadow">
                            <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="1" />
                        </filter>
                    </defs>

                    {/* 1. Outer White "Sticker" Edge */}
                    <path
                        d="M20,40 L40,20 L200,20 L220,40 L220,230 L120,285 L20,230 Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="10"
                        strokeLinejoin="round"
                    />

                    {/* 2. Inner Decorative Border */}
                    <path
                        d="M28,48 L48,28 L192,28 L212,48 L212,222 L120,274 L28,222 Z"
                        fill="none"
                        stroke="url(#borderGradFinal)"
                        strokeWidth="5"
                    />

                    {/* 3. Main Shield Body */}
                    <path
                        d="M32,52 L52,32 L188,32 L208,52 L208,218 L120,268 L32,218 Z"
                        fill="url(#shieldBgFinal)"
                    />

                    {/* 5. Header: MADMATRIX - Smaller to fit well within borders */}
                    <g transform="translate(120, 75)">
                        <text
                            textAnchor="middle"
                            fontFamily="Arial Black, sans-serif"
                            fontSize="26"
                            fontWeight="900"
                            fontStyle="italic"
                            fill="white"
                            stroke="#000"
                            strokeWidth="1.2"
                            letterSpacing="-1"
                            style={{ filter: 'drop-shadow(0 3px 0px #880000)' }}
                        >
                            MADMATRIX
                        </text>
                    </g>

                    {/* 6. Red Banner */}
                    <rect x="75" y="85" width="90" height="10" fill="#AA0000" rx="2" />
                    <text
                        x="120"
                        y="93"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontSize="5"
                        fontWeight="bold"
                        fill="white"
                        letterSpacing="0.4"
                    >
                        NATIONAL LEVEL SYMPOSIUM
                    </text>

                    {/* 7. Date Section */}
                    <text
                        x="120"
                        y="125"
                        textAnchor="middle"
                        fontFamily="serif"
                        fontSize="14"
                        fontWeight="bold"
                        fill="#E6B325"
                        filter="url(#shadow)"
                    >
                        MARCH 13 & 14,
                    </text>

                    {/* 8. Year: 2026 */}
                    <text
                        x="120"
                        y="175"
                        textAnchor="middle"
                        fontFamily="Arial Black, sans-serif"
                        fontSize="54"
                        fontWeight="900"
                        fill="url(#goldGradFinal)"
                        filter="url(#shadow)"
                    >
                        2026
                    </text>

                    {/* 9. Slogan: Get into the */}
                    <text
                        x="120"
                        y="205"
                        textAnchor="middle"
                        fontFamily="serif"
                        fontSize="10"
                        fontStyle="italic"
                        fill="#E6B325"
                    >
                        Get into the
                    </text>

                    {/* 10. Bottom Footer: MATRIX - Reduced size and narrow letterSpacing to keep it inside */}
                    <text
                        x="120"
                        y="240"
                        textAnchor="middle"
                        fontFamily="Arial Black, sans-serif"
                        fontSize="32"
                        fontWeight="900"
                        fill="url(#goldGradFinal)"
                        letterSpacing="-1"
                        filter="url(#shadow)"
                    >
                        MATRIX
                    </text>
                </svg>

                {/* Subtle Shine */}
                <div className="absolute top-[15%] left-[10%] w-[80%] h-px bg-white/20 rotate-[-15deg] blur-sm pointer-events-none" />
            </div>

            {/* Pulsing Backglow */}
            <div className="absolute inset-x-0 bottom-1/2 translate-y-1/2 bg-matrix-red/5 blur-[50px] rounded-full -z-10 animate-pulse" />
        </div>
    );
};

export default MatrixSticker;
