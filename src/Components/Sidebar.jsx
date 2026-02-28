import { X, Smartphone } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar({ navItems = [], genItems = [], onClose }) {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleClick = (label) => {
    if (label === "Logout") {
      logout();
      navigate("/", { replace: true });
    }
  };

  return (
    <div
      className="flex flex-col h-full rounded-2xl w-[220px] px-4 py-6
      bg-white/20 backdrop-blur-xl border border-white/30
      shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500">
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
            className="ml-auto text-gray-400 hover:text-gray-600 transition-colors">
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
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer select-none transition-all group
              ${
                active
                  ? "bg-emerald-50 border-l-[3px] border-[#1B4332]"
                  : "border-l-[3px] border-transparent hover:bg-[#1A4D2E] hover:text-white"
              }`}>
            <Icon
              size={16}
              className={`transition-transform duration-500 group-hover:rotate-45 ${
                active
                  ? "text-[#1B4332]"
                  : "text-gray-400 group-hover:text-white"
              }`}
            />
            <span
              className={`text-sm flex-1 transition-colors ${
                active
                  ? "text-[#1B4332] font-bold"
                  : "text-gray-500 font-medium group-hover:text-white"
              }`}>
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

      <p className="text-[10px] text-gray-400 font-bold tracking-widest mt-6 mb-2 px-1">
        GENERAL
      </p>
      <nav className="flex flex-col gap-0.5">
        {genItems.map(({ icon: Icon, label }) => (
          <div
            key={label}
            onClick={() => handleClick(label)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-[#1A4D2E] hover:text-white transition-all group">
            <Icon
              size={16}
              className="text-gray-400 group-hover:text-white transition-transform duration-500 group-hover:rotate-45"
            />
            <span className="text-sm text-gray-500 font-medium group-hover:text-white">
              {label}
            </span>
          </div>
        ))}
      </nav>

      <div className="flex-1" />
    </div>
  );
}
