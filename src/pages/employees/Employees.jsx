import { useState, useEffect } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import EmployeeHeader from "../../components/employees/EmployeeHeader";
import EmployeeTable from "../../components/employees/EmployeeTable";
import AddEmployeeModal from "../../components/employees/AddEmployeeModal";

function Employees() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);
  const defaultEmployees = [
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
  ];
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("pulsehr-employees");

    return savedEmployees ? JSON.parse(savedEmployees) : defaultEmployees;
  });

  useEffect(() => {
    localStorage.setItem("pulsehr-employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [
      ...prev,
      {
        ...employee,
        id: Date.now(),
      },
    ]);
  };

  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp,
      ),
    );
  };
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      departmentFilter === "All Departments" ||
      employee.department === departmentFilter;

    const matchesStatus =
      statusFilter === "All Status" || employee.status === statusFilter;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <DashboardLayout>
      <EmployeeHeader
        onAddEmployee={() => setIsModalOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        departmentFilter={departmentFilter}
        setDepartmentFilter={setDepartmentFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <EmployeeTable employees={filteredEmployees} onDelete={deleteEmployee}
      onEdit={setEditingEmployee} />

      <AddEmployeeModal
        isOpen={isModalOpen || editingEmployee !== null}
        onClose={() => {
          setIsModalOpen(false);
          setEditingEmployee(null);
        }}
        onSave={
          editingEmployee ? updateEmployee : addEmployee
        }
        editingEmployee={editingEmployee}
      />
    </DashboardLayout>
  );
}

export default Employees;
