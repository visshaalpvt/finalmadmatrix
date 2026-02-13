import { useEffect, useState } from "react";
import "../styles/glowing-logo.css";

const GlowingLogo = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Detect theme preference
    const darkMode = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkMode);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="glowing-logo-container">
      <div className={`glowing-letter ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <span className="letter-m">M</span>
      </div>
      <div className={`glowing-letter glow-secondary ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <span className="letter-x">X</span>
      </div>
    </div>
  );
};

export default GlowingLogo;
