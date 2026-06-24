import DashboardLayout from "../../layouts/DashboardLayout";
function Leave(){
    return (
        <DashboardLayout>
            <h1 className="text-5xl font-bold text-white">
                Leave Management
            </h1>
            <p className="text-slate-400 mt-2">
                Manage employee leave requests.
            </p>
        </DashboardLayout>
    );
}
export default Leave;