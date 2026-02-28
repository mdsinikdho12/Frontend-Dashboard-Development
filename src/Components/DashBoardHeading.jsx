import { Plus } from "lucide-react";

function DashBoardHeading() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
      <div>
        <h1 className="text-2xl md:text-[28px] font-medium font-lato text-gray-900 tracking-tight leading-none">
          Dashboard
        </h1>
        <p className="text-sm text-gray-400 mt-1.5">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-1.5 bg-[#1B4332] hover:bg-[#14532d] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm">
          <Plus size={15} /> Add Project
        </button>
        <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-800 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
          Import Data
        </button>
      </div>
    </div>
  );
}

export default DashBoardHeading;
