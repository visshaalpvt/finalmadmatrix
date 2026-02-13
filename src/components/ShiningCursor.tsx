import { useEffect, useRef } from "react";
import "../styles/shining-cursor.css";

const ShiningCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Create trail effect
      if (trailRef.current && Math.random() > 0.8) {
        const trail = document.createElement("div");
        trail.className = "cursor-trail";
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        trailRef.current.appendChild(trail);

        setTimeout(() => trail.remove(), 800);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail-container" />
      <div ref={cursorRef} className="shining-cursor">
        <div className="cursor-glow" />
        <div className="cursor-dot" />
        <div className="cursor-ring" />
      </div>
    </>
  );
};

export default ShiningCursor;
