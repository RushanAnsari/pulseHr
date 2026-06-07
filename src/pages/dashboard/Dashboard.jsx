import DashboardLayout from "../../layouts/DashboardLayout";
import StateCard from "../../components/cards/StateCard";
import AttendanceChart from "../../components/charts/AttendanceChart";
import DepartmentChart from "../../components/charts/DepartmentChart";
import { Users, CalendarCheck, Wallet, UserPlus } from "lucide-react";
function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      <p className="text-slate-400 mt-2">Welcome back, Rushan 👋</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StateCard
          title="Total Employees"
          value="1,250"
          change="+12 this month"
          icon={<Users size={26} />}
        />
        <StateCard
          title="Attendance"
          value="96%"
          change="+2.4%"
          icon={<CalendarCheck size={26} />}
        />
        <StateCard
          title="Payroll"
          value="₹12.4l"
          change="Processed"
          icon={<Wallet size={26} />}
        />
        <StateCard
          title="New Hires"
          value="18"
          change="+5 this week"
          icon={<UserPlus size={26} />}
        />
      </div>

      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-12 xl:col-span-8">
            <AttendanceChart/>
        </div>
        <div className="col-span-12 xl:col-span-4">
            <DepartmentChart/>
        </div>
      </div>
    </DashboardLayout>
  );
}
export default Dashboard;
