import { useState, useEffect } from "react";

const TARGET_DATE = new Date("March 13, 2026 08:00:00 GMT+0530").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeLeft();
      setTimeLeft(remaining);

      // If countdown reaches zero, clear the interval as per requirements
      if (remaining.days === 0 && remaining.hours === 0 && remaining.minutes === 0 && remaining.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <div key={u.label} className="glass rounded-lg px-3 py-2 sm:px-5 sm:py-3 text-center matrix-glow-soft min-w-[60px]">
          <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1 font-matrix">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
