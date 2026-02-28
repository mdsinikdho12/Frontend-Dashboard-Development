import {
  LayoutDashboard, CheckSquare, Calendar, BarChart2,
  Users, Settings, HelpCircle, LogOut,
} from "lucide-react";

export const NAV = [
  { icon: LayoutDashboard, label: "Dashboard", active: true,  badge: null  },
  { icon: CheckSquare,     label: "Tasks",     active: false, badge: "12+" },
  { icon: Calendar,        label: "Calendar",  active: false, badge: null  },
  { icon: BarChart2,       label: "Analytics", active: false, badge: null  },
  { icon: Users,           label: "Team",      active: false, badge: null  },
];

export const GEN = [
  { icon: Settings,   label: "Settings" },
  { icon: HelpCircle, label: "Help"     },
  { icon: LogOut,     label: "Logout"   },
];

export const STATS = [
  { label: "Total Projects",   value: "24", note: "Increased from last month", dark: true  },
  { label: "Ended Projects",   value: "10", note: "Increased from last month", dark: false },
  { label: "Running Projects", value: "12", note: "Increased from last month", dark: false },
  { label: "Pending Project",  value: "2",  note: "On Discuss",                dark: false },
];

export const BARS = [
  { day: "S", pct: 42, type: "stripe" },
  { day: "M", pct: 65, type: "stripe" },
  { day: "T", pct: 80, type: "light", label: "74%" },
  { day: "W", pct: 90, type: "dark"   },
  { day: "T", pct: 52, type: "stripe" },
  { day: "F", pct: 38, type: "stripe" },
  { day: "S", pct: 48, type: "stripe" },
];

export const PROJECTS = [
  { name: "Develop API Endpoints",  due: "Nov 26, 2024", color: "#4F86F7" },
  { name: "Onboarding Flow",        due: "Nov 28, 2024", color: "#38C6A0" },
  { name: "Build Dashboard",        due: "Nov 30, 2024", color: "#F7C35E" },
  { name: "Optimize Page Load",     due: "Dec 5, 2024",  color: "#F4A261" },
  { name: "Cross-Browser Testing",  due: "Dec 6, 2024",  color: "#9B59B6" },
];

export const TEAM = [
  { name: "Alexandra Deff",       task: "Github Project Repository",               status: "Completed",   av: "AD", bg: "bg-rose-300"    },
  { name: "Edwin Adenike",        task: "Integrate User Authentication System",    status: "In Progress", av: "EA", bg: "bg-emerald-400" },
  { name: "Isaac Oluwatemilorun", task: "Develop Search and Filter Functionality", status: "Pending",     av: "IO", bg: "bg-violet-300"  },
  { name: "David Oshodi",         task: "Responsive Layout for Homepage",          status: "In Progress", av: "DO", bg: "bg-amber-400"   },
];

export const STATUS_CLS = {
  "Completed":   "bg-green-100 text-green-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "Pending":     "bg-red-100 text-red-600",
};