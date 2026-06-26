import { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import ApplyLeaveModal from "../../components/leave/ApplyLeaveModal";
function Leave() {
  const leaveStats = [
    {
      title: "Total Requests",
      value: "42",
      change: "+5",
    },
    {
      title: "Approved",
      value: "28",
      change: "+3",
    },
    {
      title: "Pending",
      value: "9",
      change: "+1",
    },
    {
      title: "Rejected",
      value: "5",
      change: "-1",
    },
  ];
  const defaultLeaveRequests = [
    {
      id: 1,
      employee: "Amit Sharma",
      leaveType: "Sick Leave",
      fromDate: "20 Jun 2026",
      toDate: "22 Jun 2026",
      status: "Approved",
    },
    {
      id: 2,
      employee: "Priya Singh",
      leaveType: "Casual Leave",
      fromDate: "25 Jun 2026",
      toDate: "26 Jun 2026",
      status: "Pending",
    },
    {
      id: 3,
      employee: "Rahul Verma",
      leaveType: "Annual Leave",
      fromDate: "01 Jul 2026",
      toDate: "05 Jul 2026",
      status: "Rejected",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [leaveRequests, setLeaveRequests] = useState(() => {
    try {
      const saved = localStorage.getItem("leaveRequests");
      return saved ? JSON.parse(saved) : defaultLeaveRequests;
    } catch (error) {
      return defaultLeaveRequests;
    }
  });

  useEffect(() => {
    localStorage.setItem("leaveRequests", JSON.stringify(leaveRequests));
  }, [leaveRequests]);
  
  const filteredLeaveRequests = leaveRequests.filter((leave) => {
    const matchesSearch = leave.employee
      .toLowerCase()
      .includes(search.toLowerCase());

      const matchesStatus = statusFilter === "All Status" || leave.status === statusFilter;
      return matchesSearch && matchesStatus;
  });

  const addLeaveRequest = (leave) => {
    setLeaveRequests((prev) => [
      ...prev,
      {
        ...leave,
        id: Date.now(),
        formDate: leave.fromDate,
        status: "Pending",
      },
    ]);
  };

  const approveLeave = (id) => {
    setLeaveRequests((prev) =>
      prev.map((leave) =>
        leave.id === id
          ? {
              ...leave,
              status: "Approved",
            }
          : leave
      )
    );
  };

  const rejectLeave = (id) => {
    setLeaveRequests((prev) =>
      prev.map((leave) =>
        leave.id === id
          ? {
              ...leave,
              status: "Rejected",
            }
          : leave
      )
    );
  };
  return (
    <DashboardLayout>
      <h1 className="text-5xl font-bold text-white">Leave Management</h1>

      <p className="text-slate-400 mt-2">Manage employee leave requests.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {leaveStats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-900/80 border border-slate-900 rounded-3xl p-6"
          >
            <p className="text-slate-400 text-sm">{stat.title}</p>
            <h3 className="text-4xl font-bold text-white mt-3">{stat.value}</h3>

            <p
              className={`text-sm mt-2 ${
                stat.title === "Approved"
                  ? "text-emerald-400"
                  : stat.title === "Pending"
                    ? "text-amber-400"
                    : stat.title === "Rejected"
                      ? "text-red-400"
                      : "text-cyan-400"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search leave requests..."
          className="
      flex-1
      bg-slate-900
      border
      border-slate-800
      rounded-xl
      px-4
      py-3
      text-white
    "
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="
      bg-slate-900
      border
      border-slate-800
      rounded-xl
      px-4
      py-3
      text-white
    "
        >
          <option>All Status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>

        <button
          onClick={() => setIsModalOpen(true)}
          className="
      px-5
      py-3
      rounded-xl
      bg-emerald-500
      text-black
      font-semibold
    "
        >
          Apply Leave
        </button>
      </div>
      <div
        className="
    mt-8
    bg-slate-900/80
    border
    border-slate-800
    rounded-3xl
    p-6
  "
      >
        <h2 className="text-2xl font-semibold text-white mb-6">
          Leave Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 text-left">
                <th className="pb-4 text-slate-400">Employee</th>

                <th className="pb-4 text-slate-400">Leave Type</th>

                <th className="pb-4 text-slate-400">From Date</th>

                <th className="pb-4 text-slate-400">To Date</th>

                <th className="pb-4 text-slate-400">Status</th>

                <th className="pb-4 text-slate-400">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredLeaveRequests.map((leave) => (
                <tr
                  key={leave.id}
                  className="
              border-b
              border-slate-800/50
            "
                >
                  <td className="py-5 text-white">{leave.employee}</td>

                  <td className="text-slate-300">{leave.leaveType}</td>

                  <td className="text-slate-300">{leave.fromDate}</td>

                  <td className="text-slate-300">{leave.toDate}</td>

                  <td>
                    <span
                      className={`
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  font-medium

                  ${
                    leave.status === "Approved"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : leave.status === "Pending"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-red-500/20 text-red-400"
                  }
                `}
                    >
                      {leave.status}
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-2">
                      <button
                        onClick={() => approveLeave(leave.id)}
                        className="
                    px-3
                    py-1
                    rounded-lg
                    bg-emerald-500/20
                    text-emerald-400
                  "
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => rejectLeave(leave.id)}
                        className="
                    px-3
                    py-1
                    rounded-lg
                    bg-red-500/20
                    text-red-400
                  "
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ApplyLeaveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addLeaveRequest}
      />
    </DashboardLayout>
  );
}
export default Leave;
