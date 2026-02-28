import { useState, useEffect } from "react";
import api from "../services/api";
import {
  Plus,
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import StatsRow from "../Components/Statsrow";
import AnalyticsChart from "../Components/Projectanalytics";
import ProductCardGrid from "../Components/Products";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, badge: null },
  { icon: CheckSquare, label: "Tasks", active: false, badge: "12+" },
  { icon: Calendar, label: "Calendar", active: false, badge: null },
  { icon: BarChart2, label: "Analytics", active: false, badge: null },
  { icon: Users, label: "Team", active: false, badge: null },
];

const GEN_ITEMS = [
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help" },
  { icon: LogOut, label: "Logout" },
];

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState({});
  const [stats, setStats] = useState([]);
  const [products, setProducts] = useState([]);
  const [team, setTeam] = useState([]);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [reminder, setReminder] = useState({});
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // overview
        const overviewRes = await api.get("/api/overview");

        const overview = overviewRes.data?.data || overviewRes.data || {};
        const statsArray = [
          {
            label: "Total Users",
            value: overview.totalUsers?.toLocaleString(),
            note: "All registered users",
            dark: false,
          },
          {
            label: "Active Users",
            value: overview.activeUsers?.toLocaleString(),
            note: "Currently active",
            dark: false,
          },
          {
            label: "Revenue",
            value: `$${overview.revenue?.toLocaleString()}`,
            note: "Total revenue",
            dark: false,
          },
          {
            label: "Growth",
            value: `${overview.growth}%`,
            note: "Growth rate",
            dark: false,
          },
        ];

        setStats(statsArray);

        // Projects
        const ProductsRes = await api.get("/api/products");
        const projectsData = ProductsRes.data?.data || ProductsRes.data || [];
        setProducts(projectsData);

        // // Analytics
        const analyticsRes = await api.get("/api/analytics");

        const analytics = analyticsRes.data?.data || analyticsRes.data || [];
        console.log(analytics);

        setAnalyticsData(analytics);

        // // Current User
        const userRes = await api.get("/api/users");
        const userData = userRes.data?.data || userRes.data || {};
        console.log("user Res", userRes);

        setUser(userData);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      }
    };

    fetchDashboardData();
  }, []);

  console.log("state", stats);
  console.log("project data ", products);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 99px; }
      `}</style>

      <div
        className="flex h-screen overflow-hidden bg-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <div className="hidden md:block border-r border-gray-100 shrink-0 overflow-y-auto">
          <Sidebar navItems={NAV_ITEMS} genItems={GEN_ITEMS} />
        </div>

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setDrawerOpen(false)}
            />
            <div className="relative z-10 shadow-2xl overflow-y-auto">
              <Sidebar
                navItems={NAV_ITEMS}
                genItems={GEN_ITEMS}
                onClose={() => setDrawerOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Main */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0 px-3 font-lato ">
          <Topbar user={user} onMenuClick={() => setDrawerOpen(true)} />

          <div className="flex-1 bg-[#F7F7F7] rounded-2xl mt-3 overflow-y-auto px-4 md:px-6 py-5">
            {/* Page heading */}
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

            <StatsRow stats={stats} />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-4">
              <AnalyticsChart data={analyticsData} />
              <ProductCardGrid products={products} />
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <TeamCollaboration members={team} />
              <ProjectProgress progress={progress} />
              <TimeTracker initialSeconds={5048} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
