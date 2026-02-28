import { useState, useEffect } from "react";
import { Clock, Pause, Play, Square } from "lucide-react";

/**
 * Props:
 *  initialSeconds — starting value for the timer (default 0)
 */
export default function TimeTracker({ initialSeconds = 0 }) {
  const [sec, setSec] = useState(initialSeconds);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const fmt = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${ss}`;
  };

  return (
    <div className="bg-[#162722] rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center relative overflow-hidden gap-4">
      {/* Ambient glows */}
      <div className="absolute bottom-0 right-0 w-44 h-44 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />

      {/* Title */}
      <div className="relative z-10 flex items-center gap-2">
        <Clock size={15} className="text-emerald-400" />
        <span className="text-emerald-300 text-sm font-semibold">
          Time Tracker
        </span>
      </div>

      {/* Timer display */}
      <p className="relative z-10 text-4xl md:text-5xl font-black text-white tracking-widest tabular-nums">
        {fmt(sec)}
      </p>

      {/* Controls */}
      <div className="relative z-10 flex gap-3">
        <button
          onClick={() => setRunning((r) => !r)}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg active:scale-95"
        >
          {running ? (
            <Pause size={18} className="text-[#1B4332]" />
          ) : (
            <Play size={18} className="text-[#1B4332] fill-[#1B4332]" />
          )}
        </button>
        <button
          onClick={() => {
            setSec(0);
            setRunning(false);
          }}
          className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shadow-lg active:scale-95"
        >
          <Square size={18} className="text-white fill-white" />
        </button>
      </div>
    </div>
  );
}
