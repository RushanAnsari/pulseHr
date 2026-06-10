import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import EmployeeHeader from "../../components/employees/EmployeeHeader";
import EmployeeTable from "../../components/employees/EmployeeTable";
import AddEmployeeModal from "../../components/employees/AddEmployeeModal";

function Employees() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [employees, setEmployees] = useState([
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
  ]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [
      ...prev,
      {
        ...employee,
        id: Date.now(),
      },
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) =>
      prev.filter((emp) => emp.id !== id)
    );
  };

  return (
    <DashboardLayout>
      <EmployeeHeader
        onAddEmployee={() => setIsModalOpen(true)}
      />

      <EmployeeTable
        employees={employees}
        onDelete={deleteEmployee}
      />

      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addEmployee}
      />
    </DashboardLayout>
  );
}

export default Employees;