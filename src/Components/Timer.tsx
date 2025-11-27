import { useEffect, useState } from "react";

export default function Timer() {
  // ------------------------------
  // ⏱ TIMER STATE + INTERVAL
  // ------------------------------
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  // Convert seconds → mm:ss
  const formatTime = () => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };
  return (
    <div className="absolute top-5 right-5 z-50 rounded-xl bg-black/60 px-4 py-2 text-lg font-semibold text-yellow-300 shadow-lg backdrop-blur">
      {formatTime()}
    </div>
  );
}
