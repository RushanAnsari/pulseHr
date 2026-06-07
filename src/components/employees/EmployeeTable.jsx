function EmployeeTable() {
  const employees = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit@gmail.com",
      department: "Engineering",
      role: "Frontend Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      department: "HR",
      role: "HR Executive",
      status: "Active",
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      department: "Finance",
      role: "Accountant",
      status: "On Leave",
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      department: "Marketing",
      role: "Marketing Manager",
      status: "Active",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left py-4 text-slate-400">
                Employee
              </th>

              <th className="text-left py-4 text-slate-400">
                Department
              </th>

              <th className="text-left py-4 text-slate-400">
                Role
              </th>

              <th className="text-left py-4 text-slate-400">
                Status
              </th>

              <th className="text-left py-4 text-slate-400">
                Email
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="
                  border-b
                  border-slate-800
                  hover:bg-slate-800/30
                "
              >
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-emerald-500
                        flex
                        items-center
                        justify-center
                        text-slate-950
                        font-bold
                      "
                    >
                      {employee.name.charAt(0)}
                    </div>

                    <span className="text-white">
                      {employee.name}
                    </span>
                  </div>
                </td>

                <td className="text-slate-300">
                  {employee.department}
                </td>

                <td className="text-slate-300">
                  {employee.role}
                </td>

                <td>
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${
                        employee.status === "Active"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-yellow-500/15 text-yellow-400"
                      }
                    `}
                  >
                    {employee.status}
                  </span>
                </td>

                <td className="text-slate-300">
                  {employee.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;