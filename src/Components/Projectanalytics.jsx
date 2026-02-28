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

// props: data = analytics array
export default function AnalyticsChart({ data }) {
  // format date to short label if you want
  const chartData = data.map((item) => ({
    date: item.date.slice(5), // MM-DD
    views: item.views,
    clicks: item.clicks,
    conversions: item.conversions,
  }));

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-gray-700 font-bold mb-2">Analytics Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="views" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          <Bar dataKey="clicks" fill="#10B981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="conversions" fill="#F59E0B" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
