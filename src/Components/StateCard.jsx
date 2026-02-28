import React from "react";
import { ArrowUpRight } from "lucide-react";

const StatCard = ({
  title,
  value,
  trendValue,
  trendText,
  isPrimary = false,
  statusText = "",
}) => {
  return (
    <div
      className={`
        relative p-7 rounded-[28px] flex flex-col justify-between h-52
        transition-all duration-500 ease-out cursor-pointer group

        bg-white/20 backdrop-blur-xl border border-white/30
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]

        hover:bg-white/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
        hover:-translate-y-2
      `}>
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-semibold tracking-wide uppercase opacity-70 group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        <div className="p-2.5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 text-[#1A4D2E] group-hover:bg-[#2D6A4F]/80 group-hover:text-white transition-all duration-300">
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </div>
      </div>

      {/* Value */}
      <div className="mt-4">
        <span className="text-5xl font-semibold tracking-tight text-[#1A1D1F] group-hover:text-white transition-colors">
          {value}
        </span>
      </div>

      {/* Trend / Status */}
      <div className="mt-6 flex items-center gap-3">
        {trendValue ? (
          <>
            <div className="px-2.5 py-1 rounded-full bg-white/30 backdrop-blur-sm text-[#2D7A4D] text-[11px] font-bold flex items-center gap-1 group-hover:bg-white/20 group-hover:text-white transition-colors">
              {trendValue}
              <span className="text-[10px]">▲</span>
            </div>
            <span className="text-xs font-medium text-[#12dc00] group-hover:text-white/70 transition-colors">
              {trendText}
            </span>
          </>
        ) : (
          <span className="text-xs font-medium text-gray-400 group-hover:text-white/60 transition-colors">
            {statusText}
          </span>
        )}
      </div>

      {/* Glassy Overlay */}
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/40 group-hover:ring-white/20 pointer-events-none" />
    </div>
  );
};

export default StatCard;
