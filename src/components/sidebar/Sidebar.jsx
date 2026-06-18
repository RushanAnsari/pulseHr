
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CalendarDays,
  Wallet,
  Briefcase,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: Users,
    label: "Employees",
    path: "/employees",
  },
  {
    icon: CalendarCheck,
    label: "Attendance",
    path: "/attendance",
  },
  {
    icon: CalendarDays,
    label: "Leave",
    path: "/leave",
  },
  {
    icon: Wallet,
    label: "Payroll",
    path: "/payroll",
  },
  {
    icon: Briefcase,
    label: "Recruitment",
    path: "/recruitment",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-[280px] bg-slate-900 border-r border-slate-800 min-h-screen flex flex-col sticky top-0">
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
                <NavLink
  to={item.path}
  className={({ isActive }) =>
    `
    w-full
    flex
    items-center
    gap-3
    px-4
    py-3
    rounded-xl
    transition

    ${
      isActive
        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }
    `
  }
>
  <Icon size={20} />
  <span>{item.label}</span>
</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;