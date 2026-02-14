import React from 'react';

const SimatsLogo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* 3D Block Logo - Themed Red/Black */}
            <svg width="40" height="40" viewBox="0 0 100 100" className="drop-shadow-md">
                {/* Border hex */}
                <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="none" stroke="#ff1a1a" strokeWidth="2" />
                {/* Top section - Deep Red */}
                <path d="M50 10 L85 30 L50 50 L15 30 Z" fill="#cc0000" />
                {/* Right section - Matrix Red */}
                <path d="M50 50 L85 30 L85 70 L50 90 Z" fill="#ff1a1a" />
                {/* Left section - Black/Dark */}
                <path d="M50 50 L15 30 L15 70 L50 90 Z" fill="#1a0000" />
                {/* Letter S */}
                <text x="50" y="55" fontSize="20" fill="white" fontWeight="bold" textAnchor="middle" style={{ fontFamily: 'Orbitron, sans-serif' }}>S</text>
            </svg>

            <div className="flex flex-col leading-tight">
                <span className="text-[#ff1a1a] font-bold text-xl tracking-tight font-poster">SIMATS</span>
                <span className="text-[#ff1a1a] text-[10px] font-semibold tracking-[0.2em] -mt-1 font-matrix">ENGINEERING</span>
            </div>
        </div>
    );
};

export default SimatsLogo;
