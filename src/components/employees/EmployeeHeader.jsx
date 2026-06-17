import { Search, Plus } from "lucide-react";

function EmployeeHeader({onAddEmployee, searchTerm, setSearchTerm, departmentFilter, setDepartmentFilter, statusFilter, setStatusFilter, }){
    return (
        <>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white">
                    Employee Management
                </h1>

                <p className="text-slate-400 mt-2">
                    Manage employees, departments and workforce.
                </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-4 justify-between mb-6">
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          {/* Search */}

          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                py-3
                pl-11
                pr-4
                text-white
                outline-none
                focus:border-emerald-500
              "
            />
          </div>
          {/* Department */}

          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(
              e.target.value
            )}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              px-4
              text-white
              outline-none
            "
          >
            <option>All Departments</option>
            <option>Engineering</option>
            <option>HR</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>

          {/* Status */}

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-xl
              px-4
              text-white
              outline-none
            "
          >
            <option>All Status</option>
            <option>Active</option>
            <option>On Leave</option>
          </select>
        </div>
        <button
          onClick={onAddEmployee}
          className="
            flex
            items-center
            gap-2
            bg-emerald-500
            text-slate-950
            px-5
            py-3
            rounded-xl
            font-semibold
            hover:bg-emerald-400
            transition
          "
        >
          <Plus size={18} />
          Add Employee
        </button>
      </div>
        </>
    );
}
export default EmployeeHeader;