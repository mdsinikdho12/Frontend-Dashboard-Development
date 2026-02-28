import { Video } from "lucide-react";

/**
 * Props:
 *  reminder — { title, time }
 */
export default function Reminders({ reminder = {} }) {
  const { title = "", time = "" } = reminder;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col">
      <h3 className="font-bold text-gray-900 mb-3">Reminders</h3>
      <h4 className="text-[17px] font-extrabold text-gray-900 leading-snug mb-1">
        {title}
      </h4>
      <p className="text-xs text-gray-400 mb-auto pb-4">Time : {time}</p>
      <button className="w-full flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#14532d] text-white text-sm font-semibold py-3 rounded-full transition-colors">
        <Video size={15} /> Start Meeting
      </button>
    </div>
  );
}
