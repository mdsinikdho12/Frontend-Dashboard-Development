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
      relative p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col justify-between h-48 transition-all hover:shadow-md
      ${isPrimary ? "bg-[#1A4D2E] text-white" : "bg-white text-[#1A1D1F]"}
    `}
    >
      <div className="flex justify-between items-start">
        <h3
          className={`text-lg font-medium opacity-90 ${isPrimary ? "text-white" : "text-gray-600"}`}
        >
          {title}
        </h3>
        <div
          className={`p-2 rounded-full border ${isPrimary ? "bg-white text-[#1A4D2E] border-transparent" : "bg-white text-gray-800 border-gray-200"}`}
        >
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </div>
      </div>

      <div className="mt-2">
        <span className="text-5xl font-bold tracking-tight leading-none">
          {value}
        </span>
      </div>

      <div className="mt-auto flex items-center gap-2">
        {trendValue ? (
          <div className="flex items-center gap-2">
            <span
              className={`
              text-[10px] px-2 py-0.5 rounded-lg font-bold flex items-center gap-0.5
              ${isPrimary ? "bg-white/20 text-white" : "bg-[#F1F8F4] text-[#2D7A4D] border border-[#E3F2E9]"}
            `}
            >
              {trendValue} <span className="text-[8px]">▲</span>
            </span>
            <span
              className={`text-xs font-medium opacity-80 ${isPrimary ? "text-white" : "text-gray-500"}`}
            >
              {trendText}
            </span>
          </div>
        ) : (
          <span className="text-xs font-medium text-gray-400">
            {statusText}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
