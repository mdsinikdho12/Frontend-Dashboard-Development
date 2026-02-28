import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function AnalyticsChart({ data }) {
  const chartData = data.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    views: item.views,
    clicks: item.clicks,
    conversions: item.conversions,
  }));

  return (
    <div
      className="relative p-6 rounded-2xl 
        bg-white/20 backdrop-blur-xl border border-white/30 
        shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500">
      <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-tight">
        Analytics Overview
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="date"
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.3)",
              fontSize: "12px",
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: "12px", color: "#374151" }}
            iconType="circle"
          />

          <Bar dataKey="views" fill="#1B4332" radius={[8, 8, 0, 0]} />
          <Bar dataKey="clicks" fill="#10B981" radius={[8, 8, 0, 0]} />
          <Bar dataKey="conversions" fill="#F59E0B" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 pointer-events-none" />
    </div>
  );
}
