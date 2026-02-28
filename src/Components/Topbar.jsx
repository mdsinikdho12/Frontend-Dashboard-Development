import { Search, Mail, Bell, Menu } from "lucide-react";

/**
 * Props:
 *  user        — { name, email }
 *  onMenuClick — opens mobile sidebar drawer
 */
export default function Topbar({ user = {}, onMenuClick }) {
  return (
    <header className="bg-[#F7F7F7] border-b rounded-[15px] border-gray-100 px-4 md:px-6 py-3 mt-3 flex items-center gap-3 shrink-0">
      {/* Hamburger — mobile only */}
      <button className="md:hidden text-gray-500" onClick={onMenuClick}>
        <Menu size={22} />
      </button>

      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 w-full max-w-[280px]">
        <Search size={14} className="text-gray-400 shrink-0" />
        <input
          placeholder="Search task"
          className="bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 flex-1 min-w-0"
        />
        <kbd className="hidden sm:block text-[10px] text-gray-400 bg-gray-200 rounded px-1.5 py-0.5 font-mono shrink-0">
          ⌘F
        </kbd>
      </div>

      <div className="flex-1" />

      {/* Right icons */}
      <div className="flex items-center gap-2">
        <button className=" w-[40px] h-[40px] md:w-[50px]  md:h-[50px] shadow-md  bg-white rounded-full flex justify-center items-center cursor-pointer">
          <Mail size={18} className="text-gray-500" />
        </button>
        <button className=" w-[40px] h-[40px] md:w-[50px]  md:h-[50px] shadow-md  bg-white rounded-full flex justify-center items-center cursor-pointer">
          <Bell size={18} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* User avatar + info */}
        <div className="flex items-center gap-2 pl-1">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 shrink-0" />
          <div className="hidden sm:block leading-none">
            <p className="text-sm font-bold text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
