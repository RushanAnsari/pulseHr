import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CalendarDays,
  Wallet,
  Briefcase,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Employees" },
  { icon: CalendarCheck, label: "Attendance" },
  { icon: CalendarDays, label: "Leave" },
  { icon: Wallet, label: "Payroll" },
  { icon: Briefcase, label: "Recruitment" },
  { icon: Settings, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-[280px] bg-slate-900 border-r border-slate-800 h-screen flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-emerald-500">
          PulseHR
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <button
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    text-slate-300
                    hover:bg-slate-800
                    hover:text-white
                    transition
                  "
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;