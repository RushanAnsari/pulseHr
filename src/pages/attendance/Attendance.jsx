import DashboardLayout from "../../layouts/DashboardLayout";
import MarkAttendanceModal from "../../components/attendance/MarkAttendanceModal";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
function Attendance() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
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
const attendanceData = [
    {
      id: 1,
      employee: "Amit Sharma",
      department: "Engineering",
      date: "18 Jun 2026",
      status: "Present",
    },
    {
      id: 2,
      employee: "Priya Singh",
      department: "HR",
      date: "18 Jun 2026",
      status: "Absent",
    },
    {
      id: 3,
      employee: "Rahul Verma",
      department: "Finance",
      date: "18 Jun 2026",
      status: "Leave",
    },
    {
      id: 4,
      employee: "Neha Gupta",
      department: "Marketing",
      date: "18 Jun 2026",
      status: "Half Day",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const [departmentFilter, setDepartmentFilter] = useState("All Departments");

  const [statusFilter, setStatusFilter] = useState("All Status");

  const [attendanceRecords, setAttendanceRecords] = useState(() => {
    try{
    const saved = localStorage.getItem("attendanceRecords");
    return saved ? JSON.parse(saved) : attendanceData;
  } catch (error) {
    return attendanceData;
  }
  });

  useEffect(() => {
    localStorage.setItem(
      "attendanceRecords", JSON.stringify(attendanceRecords)
    );
  }, [attendanceRecords]);

  const addAttendance = (
    newAttendance
  ) => {
    setAttendanceRecords(
      (prev) => [...prev, {
        id: Date.now(),
        ...newAttendance,
      },]
    );
  };

  const deleteAttendance = (
    id
  ) => {
    setAttendanceRecords(
      (prev) => prev.filter((record) => record.id !== id)
    );
  };

  const filteredAttendance = attendanceRecords.filter((record) => {
    const matchesSearch = record.employee
    .toLowerCase()
    .includes(
      searchTerm.toLocaleLowerCase()
    );

    const matchesDepartment = departmentFilter === "All Departments" || record.department === departmentFilter;

    const matchesStatus = statusFilter === "All Status" || record.status === statusFilter;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );
  });
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

<div className="flex flex-col lg:flex-row gap-4 mt-8">
  {/* Search */}
  <input type="text"
  placeholder="Search employee..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(
    e.target.value
  )}
  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white"
  />

  {/* Departments */}
  <select value={departmentFilter} onChange={(e) => setDepartmentFilter(
    e.target.value
  )}
    className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white"
  >
    <option>All Departments</option>
    <option>Engineering</option>
    <option>HR</option>
    <option>Finance</option>
    <option>Marketing</option>
  </select>

  {/* Status */}
  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white">
    <option>All Status</option>
    <option>Present</option>
    <option>Absent</option>
    <option>Leave</option>
    <option>Half Day</option>
  </select>

</div>
{/* Attendance Table */}
<div className="mt-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl font-semibold text-white">
      Attendance Records
    </h2>
    <button onClick={() => setIsModalOpen(true)} className="px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold">Mark Attendance</button>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="text-left border-b border-slate-800">
          <th className="pb-4 text-slate-400">Employee</th>
          <th className="pb-4 text-slate-400">Department</th>
          <th className="pb-4 text-slate-400">Date</th>
          <th className="pb-4 text-slate-400">Status</th>
          <th className="pb-4 text-slate-400">Action</th>
        </tr>
      </thead>

      <tbody>
              {filteredAttendance.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b
                    border-slate-800/50
                  "
                >
                  <td className="py-5 text-white">
                    {item.employee}
                  </td>

                  <td className="text-slate-300">
                    {item.department}
                  </td>

                  <td className="text-slate-300">
                    {item.date}
                  </td>

                  <td>
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium

                        ${
                          item.status === "Present"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : item.status === "Absent"
                            ? "bg-red-500/20 text-red-400"
                            : item.status === "Leave"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-cyan-500/20 text-cyan-400"
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => deleteAttendance(item.id)}
                    className="text-red-300">
                      <Trash2 size={18}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
    </table>
  </div>
</div>
<MarkAttendanceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={addAttendance}/>
        </DashboardLayout>
    );
} 
export default Attendance;