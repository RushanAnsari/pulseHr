import DashboardLayout from "../../layouts/DashboardLayout";

function Attendance() {
    const attendanceStats = [
  {
    title: "Present Today",
    value: "96",
    change: "+4",
  },
  {
    title: "Absent Today",
    value: "8",
    change: "-2",
  },
  {
    title: "On Leave",
    value: "12",
    change: "+1",
  },
  {
    title: "Attendance Rate",
    value: "92%",
    change: "+1.5%",
  },
];
    return (
        <DashboardLayout>
            <h1 className="text-5xl font-bold text-white">Attendance</h1>
            
            <p className="text-slate-400 mt-2">
                Manage employee attendance records.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

  {attendanceStats.map((stat, index) => (
    <div
      key={index}
      className="
        bg-slate-900/80
        border
        border-slate-800
        rounded-3xl
        p-6
        hover:border-emerald-500/40
        transition-all
      "
    >
      <p className="text-slate-400 text-sm">
        {stat.title}
      </p>

      <h3 className="text-4xl font-bold text-white mt-3">
        {stat.value}
      </h3>

      <p className="text-emerald-400 text-sm mt-2">
        {stat.change}
      </p>
    </div>
  ))}

</div>
        </DashboardLayout>
    );
} 
export default Attendance;