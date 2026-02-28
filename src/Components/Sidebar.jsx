import { X, Smartphone } from "lucide-react";

/**
 * Props:
 *  navItems  — array of { icon, label, active, badge }
 *  genItems  — array of { icon, label }
 *  onClose   — optional, shows X button when provided (mobile drawer)
 */
export default function Sidebar({ navItems = [], genItems = [], onClose }) {
  return (
    <div className="flex flex-col h-full rounded-2xl bg-[#F7F7F7] w-[220px] px-4 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-8">
        <div className="w-9 h-9 rounded-full border-2 border-[#1B4332] flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-[#1B4332] opacity-70" />
        </div>
        <span className="text-xl font-extrabold tracking-tight text-gray-900">
          Donezo
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Main nav */}
      <p className="text-[10px] text-gray-400 font-bold tracking-widest mb-2 px-1">
        MENU
      </p>
      <nav className="flex flex-col gap-0.5">
        {navItems.map(({ icon: Icon, label, active, badge }) => (
          <div
            key={label}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer select-none transition-all
              ${
                active
                  ? "bg-emerald-50 border-l-[3px] border-[#1B4332]"
                  : "border-l-[3px] border-transparent hover:bg-gray-50"
              }`}
          >
            <Icon
              size={16}
              className={active ? "text-[#1B4332]" : "text-gray-400"}
            />
            <span
              className={`text-sm flex-1 ${active ? "text-[#1B4332] font-bold" : "text-gray-500 font-medium"}`}
            >
              {label}
            </span>
            {badge && (
              <span className="bg-[#1B4332] text-white text-[10px] font-bold rounded-full px-2 py-0.5">
                {badge}
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* General nav */}
      <p className="text-[10px] text-gray-400 font-bold tracking-widest mt-6 mb-2 px-1">
        GENERAL
      </p>
      <nav className="flex flex-col gap-0.5">
        {genItems.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <Icon size={16} className="text-gray-400" />
            <span className="text-sm text-gray-500 font-medium">{label}</span>
          </div>
        ))}
      </nav>

      <div className="flex-1" />

      {/* Download card */}
      <div className="relative bg-[#1A2E22] rounded-2xl p-4 mt-6 overflow-hidden">
        <div className="absolute -right-5 -bottom-5 w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-white/5" />
        <Smartphone size={20} className="text-emerald-400 mb-2 relative z-10" />
        <p className="text-white text-sm font-bold leading-tight mb-1 relative z-10">
          Download our
          <br />
          Mobile App
        </p>
        <p className="text-emerald-800 text-xs mb-3 relative z-10">
          Get easy in another way
        </p>
        <button className="w-full bg-[#1B4332] hover:bg-[#14532d] text-white text-xs font-semibold py-2 rounded-full transition-colors relative z-10">
          Download
        </button>
      </div>
    </div>
  );
}
