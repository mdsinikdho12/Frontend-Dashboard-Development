export default function ProjectProgress({ progress = {} }) {
  const { percentage = 0, label = "" } = progress;

  const legend = [
    { label: "Completed", tw: "bg-[#1B4332]", stripe: false },
    { label: "In Progress", tw: "bg-emerald-300", stripe: false },
    { label: "Pending", tw: "", stripe: true },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-2">Project Progress</h3>

      <div className="flex flex-col items-center">
        {/* Gauge SVG */}
        <div className="relative">
          <svg width="190" height="110" viewBox="0 0 190 110">
            {/* Track */}
            <path
              d="M 18 100 A 77 77 0 0 1 172 100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="15"
              strokeLinecap="round"
            />
            {/* Completed — dark green */}
            <path
              d="M 18 100 A 77 77 0 0 1 172 100"
              fill="none"
              stroke="#1B4332"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="242"
              strokeDashoffset="145"
            />
            {/* In Progress — light green */}
            <path
              d="M 18 100 A 77 77 0 0 1 172 100"
              fill="none"
              stroke="#6EE7B7"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="70"
              strokeDashoffset="-90"
            />
            {/* Pending — dashed gray */}
            <path
              d="M 18 100 A 77 77 0 0 1 172 100"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="30 4"
              strokeDashoffset="-165"
            />
          </svg>

          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
            <p className="text-3xl font-black text-gray-900">{percentage}%</p>
            <p className="text-xs text-gray-400 mt-0.5">{label}</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-2 flex-wrap justify-center">
          {legend.map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <div
                className={`w-3 h-3 rounded-sm border border-gray-300 ${l.tw}`}
                style={
                  l.stripe
                    ? {
                        backgroundImage:
                          "repeating-linear-gradient(45deg,#bbb,#bbb 2px,#f3f4f6 2px,#f3f4f6 6px)",
                      }
                    : {}
                }
              />
              <span className="text-[11px] text-gray-500">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
