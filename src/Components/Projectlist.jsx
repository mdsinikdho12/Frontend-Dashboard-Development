import { Plus } from "lucide-react";

/**
 * Props:
 *  projects — array of { name, due, color }
 */
export default function ProjectList({ projects = [] }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm md:col-span-2 xl:col-span-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Project</h3>
        <button className="flex items-center gap-1 text-xs font-semibold text-gray-600 border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
          <Plus size={11} /> New
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {projects.map((p) => (
          <div key={p.name} className="flex items-center gap-3">
            {/* Color dot icon */}
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: p.color + "22" }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: p.color }}
              />
            </div>

            {/* Name + due */}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {p.name}
              </p>
              <p className="text-[11px] text-gray-400">Due date: {p.due}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
