import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isDrag, setIsDrag] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            setIsDrag(document.body.classList.contains('cursor-drag'));

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") !== null ||
                target.closest("a") !== null
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <style>
                {`
          body {
            cursor: none;
          }
          a, button, [role="button"] {
            cursor: none;
          }
        `}
            </style>
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
                }}
            >
                <div className="relative">
                    {/* Core dot */}
                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_#fff,0_0_20px_#ff0000]" />

                    {/* DRAG Label */}
                    {isDrag && (
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-matrix-red px-2 py-0.5 rounded text-[8px] font-matrix text-white tracking-[0.2em] animate-in fade-in zoom-in duration-300">
                            DRAG
                        </div>
                    )}

                    {/* Outer glow ring */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-matrix-red/50 rounded-full animate-pulse-glow transition-all duration-300 ${isDrag ? 'scale-150 border-matrix-red' : ''}`} />

                    {/* Crosshair lines for "operating" feel */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[1px] bg-matrix-red/30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[40px] bg-matrix-red/30" />
                </div>
            </div>
        </>
    );
};

export default CustomCursor;
