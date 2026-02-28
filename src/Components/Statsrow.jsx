import { ArrowUpRight, TrendingUp } from "lucide-react";

export default function StatsRow({ stats = [] }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
      {stats.map(({ label, value, note, dark }) => (
        <div
          key={label}
          className={`rounded-2xl p-4 md:p-5 shadow-sm ${dark ? "bg-[#1B4332]" : "bg-white"}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <span
              className={`text-xs font-semibold ${dark ? "text-emerald-300" : "text-gray-400"}`}
            >
              {label}
            </span>
            <button
              className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors
              ${dark ? "border-emerald-700 hover:border-emerald-500" : "border-gray-200 hover:border-gray-300"}`}
            >
              <ArrowUpRight
                size={12}
                className={dark ? "text-emerald-300" : "text-gray-500"}
              />
            </button>
          </div>

          {/* Value */}
          <p
            className={`text-4xl font-black leading-none mb-2.5 ${dark ? "text-white" : "text-gray-900"}`}
          >
            {value}
          </p>

          {/* Note */}
          <div className="flex items-center gap-1">
            <TrendingUp
              size={11}
              className={dark ? "text-emerald-400" : "text-green-500"}
            />
            <span
              className={`text-[11px] ${dark ? "text-emerald-400" : "text-gray-500"}`}
            >
              {note}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
