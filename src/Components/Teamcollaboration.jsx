import { UserPlus } from "lucide-react";

const STATUS_CLS = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-600",
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Pending: "bg-red-100 text-red-600",
};

export default function TeamCollaboration({ members = [] }) {
  return (
    <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/30">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-bold text-gray-900">Team Collaboration</h3>
        <button className="flex items-center gap-1 text-xs font-semibold text-gray-700 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
          <UserPlus size={12} /> Add Member
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {members.map((m) => (
          <div
            key={m.id || m.name}
            className="flex items-center gap-3 hover:bg-emerald-50/40 px-3 py-2 rounded-xl transition-all">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${
                m.bg || "bg-[#1B4332]"
              }`}>
              {m.av || m.name?.[0]}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-none mb-0.5">
                {m.name}
              </p>
              {m.email ? (
                <p className="text-[11px] text-gray-500 truncate">{m.email}</p>
              ) : (
                <p className="text-[11px] text-gray-400 truncate">
                  Working on{" "}
                  <span className="text-gray-600 font-medium">{m.task}</span>
                </p>
              )}
            </div>

            {m.status && (
              <span
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                  STATUS_CLS[m.status] || "bg-gray-100 text-gray-600"
                }`}>
                {m.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
