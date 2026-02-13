const MadmatrixLogo = ({ size = "medium" }: { size?: "small" | "medium" | "large" }) => {
  const sizeMap = {
    small: { width: 200, height: 100 },
    medium: { width: 400, height: 200 },
    large: { width: 600, height: 300 },
  };

  const dimensions = sizeMap[size];

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 900 320"
        width={dimensions.width}
        height={dimensions.height}
        className="drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.8))" }}
      >
        <defs>
          {/* Metallic gradient */}
          <linearGradient id="metallic" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5f5f5" />
            <stop offset="30%" stopColor="#d0d0d0" />
            <stop offset="50%" stopColor="#909090" />
            <stop offset="70%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="#606060" />
          </linearGradient>

          <pattern id="diagonal" patternUnits="userSpaceOnUse" width="4" height="4">
            <line x1="0" y1="0" x2="4" y2="4" stroke="#666" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Background fill for text */}
        <rect width="900" height="320" fill="none" />

        {/* Shadow text layer (black) */}
        <text
          x="450"
          y="155"
          fontSize="130"
          fontWeight="bold"
          fontFamily="Arial Black, sans-serif"
          textAnchor="middle"
          fill="#000000"
          opacity="0.8"
          letterSpacing="2"
        >
          MADMATRIX
        </text>

        {/* Metallic text layer */}
        <text
          x="450"
          y="150"
          fontSize="130"
          fontWeight="bold"
          fontFamily="Arial Black, sans-serif"
          textAnchor="middle"
          fill="url(#metallic)"
          stroke="#2a2a2a"
          strokeWidth="1"
          letterSpacing="2"
        >
          MADMATRIX
        </text>

        {/* Pattern overlay for texture */}
        <text
          x="450"
          y="150"
          fontSize="130"
          fontWeight="bold"
          fontFamily="Arial Black, sans-serif"
          textAnchor="middle"
          fill="url(#diagonal)"
          opacity="0.3"
          letterSpacing="2"
        >
          MADMATRIX
        </text>

        {/* Highlight layer */}
        <text
          x="450"
          y="145"
          fontSize="130"
          fontWeight="bold"
          fontFamily="Arial Black, sans-serif"
          textAnchor="middle"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.6"
          letterSpacing="2"
        >
          MADMATRIX
        </text>

        {/* Red banner at bottom */}
        <rect x="120" y="220" width="660" height="55" fill="#cc0000" rx="10" />
        <rect x="120" y="220" width="660" height="55" fill="none" stroke="#ff6b35" strokeWidth="3" rx="10" />

        {/* Corner accents - left */}
        <polygon points="100,170 140,145 115,225" fill="#ff6b35" />
        {/* Corner accents - right */}
        <polygon points="800,170 760,145 785,225" fill="#ff6b35" />
      </svg>

      {/* Subtitle */}
      <div className="px-4 py-1.5 bg-matrix-red/10 border border-matrix-red/30 rounded-lg">
        <p className="text-xs sm:text-sm font-matrix uppercase tracking-[0.3em] text-matrix-red font-bold">
          National Level Symposium
        </p>
      </div>
    </div>
  );
};

export default MadmatrixLogo;
