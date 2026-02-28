import { UserPlus } from "lucide-react";

const STATUS_CLS = {
  Completed: "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  Pending: "bg-red-100 text-red-600",
};

/**
 * Props:
 *  members — array of { name, task, status, av, bg }
 *    av  — initials string e.g. "AD"
 *    bg  — tailwind bg class e.g. "bg-rose-300"
 *    status — "Completed" | "In Progress" | "Pending"
 */
export default function TeamCollaboration({ members = [] }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm md:col-span-2 xl:col-span-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Team Collaboration</h3>
        <button className="flex items-center gap-1 text-xs font-semibold text-gray-600 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
          <UserPlus size={12} /> Add Member
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {members.map((m) => (
          <div key={m.name} className="flex items-center gap-3">
            {/* Avatar */}
            <div
              className={`w-9 h-9 rounded-full ${m.bg} flex items-center justify-center text-white text-xs font-bold shrink-0`}
            >
              {m.av}
            </div>

            {/* Name + task */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 leading-none mb-0.5">
                {m.name}
              </p>
              <p className="text-[11px] text-gray-400 truncate">
                Working on{" "}
                <span className="text-gray-600 font-medium">{m.task}</span>
              </p>
            </div>

            {/* Status badge */}
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${STATUS_CLS[m.status]}`}
            >
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
