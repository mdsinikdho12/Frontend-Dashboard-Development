import { ArrowUpRight, TrendingUp } from "lucide-react";

export default function StatsRow({ stats = [] }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {stats.map(({ label, value, note, dark }) => (
        <div
          key={label}
          className={`
            relative rounded-2xl p-5 md:p-6
            backdrop-blur-xl transition-all duration-500 ease-out
            shadow-[0_8px_32px_rgba(0,0,0,0.08)]
            border border-white/30
            hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
           
          `}>
          <div className="flex items-start justify-between mb-4">
            <span
              className={`text-xs font-semibold tracking-wide uppercase ${
                dark
                  ? "text-emerald-200 group-hover:text-white"
                  : "text-gray-600 group-hover:text-white/80"
              } transition-colors`}>
              {label}
            </span>
            <button
              className={`
                w-8 h-8 rounded-full border flex  items-center justify-center
                backdrop-blur-sm transition-all duration-500 transform group-hover:rotate-45
                ${dark ? "border-emerald-600 hover:border-emerald-400" : "border-black hover:border-white/60"}
                ${dark ? "bg-white/10" : "bg-white/20"}
              `}>
              <ArrowUpRight
                size={14}
                className={
                  dark
                    ? "text-emerald-200 group-hover:text-white"
                    : "text-gray-700 group-hover:text-white "
                }
              />
            </button>
          </div>

          {/* Value */}
          <p
            className={`text-4xl font-bold leading-none mb-3 transition-colors ${
              dark
                ? "text-white group-hover:text-emerald-100"
                : "text-gray-900 group-hover:text-white"
            }`}>
            {value}
          </p>

          {/* Note */}
          <div className="flex items-center gap-1.5">
            <TrendingUp
              size={12}
              className={
                dark
                  ? "text-emerald-300 group-hover:text-white"
                  : "text-green-500 group-hover:text-white"
              }
            />
            <span
              className={`text-[12px] transition-colors ${
                dark
                  ? "text-emerald-200 group-hover:text-white/80"
                  : "text-gray-600 group-hover:text-white/70"
              }`}>
              {note}
            </span>
          </div>

          {/* Glassy overlay ring */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 pointer-events-none" />
        </div>
      ))}
    </div>
  );
}
