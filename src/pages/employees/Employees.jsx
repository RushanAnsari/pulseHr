import EmployeeHeader from "../../components/employees/EmployeeHeader";
import EmployeeTable from "../../components/employees/EmployeeTable";
import DashboardLayout from "../../layouts/DashboardLayout";

function Employees() {
    return (
        <DashboardLayout>
        <EmployeeHeader/>
        <EmployeeTable/>
        </DashboardLayout>
   );
}
export default Employees;