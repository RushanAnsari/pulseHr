import EmployeeHeader from "../../components/employees/EmployeeHeader";
import EmployeeTable from "../../components/employees/EmployeeTable";
import DashboardLayout from "../../layouts/DashboardLayout";
import AddEmployeeModal from "../../components/employees/AddEmployeeModal";
import { useState } from "react";


function Employees() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <DashboardLayout>
        <EmployeeHeader 
            onAddEmployee={() => setIsModalOpen(true)}
            />
        <EmployeeTable/>
        <AddEmployeeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </DashboardLayout>
   );
}
export default Employees;