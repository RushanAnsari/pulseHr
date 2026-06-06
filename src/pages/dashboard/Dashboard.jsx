import DashboardLayout from "../../layouts/DashboardLayout";
function Dashboard(){
    return (
        <DashboardLayout>
            <h1 className="text-4xl font-bold text-white">
                Dashboard
            </h1>
            <p className="text-slate-400 mt-2">
                Welcome back, Rushan 👋
            </p>
        </DashboardLayout>
    );
}
export default Dashboard;