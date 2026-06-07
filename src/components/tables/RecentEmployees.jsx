function RecentEmployees() {
  const employees = [
    {
      id: 1,
      name: "Amit Sharma",
      department: "Engineering",
      position: "Frontend Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      department: "HR",
      position: "HR Executive",
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul Verma",
      department: "Finance",
      position: "Accountant",
      status: "On Leave",
    },
    {
      id: 4,
      name: "Neha Gupta",
      department: "Marketing",
      position: "Marketing Manager",
      status: "Active",
    },
    {
      id: 5,
      name: "Arjun Patel",
      department: "Engineering",
      position: "Backend Developer",
      status: "Active",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6 hover:border-emerald-500/20
transition-all
duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Recent Employees</h3>
        <button
          className="
                    px-4 py-2 bg-emerald-500 text-slate-950 rounded-lg font-medium hover:bg-emerald-400 transition
                "
        >
          View All
        </button>
      </div>
      <div
        className="overflow-x-auto "
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left py-4 text-slate-400">Employee</th>
              <th className="text-left py-4 text-slate-400">Department</th>
              <th className="text-left py-4 text-slate-400">Position</th>
              <th className="text-left py-4 text-slate-400">Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b border-slate-800 hover:bg-slate-800/30 transition"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                      {employee.name.charAt(0)}
                    </div>
                    <span className="text-white">{employee.name}</span>
                  </div>
                </td>
                <td className="text-slate-300">{employee.department}</td>
                <td className="text-slate-300">{employee.position}</td>

                <td>
                  <span
                    className={`
                            px-3 py-1 rounded-full text-xs font-medium ${
                              employee.status === "Active"
                                ? "bg-emerald-500/15 text-emerald-400"
                                : "bg-yellow-500/15 text-yellow-400"
                            }
                        `}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default RecentEmployees;
