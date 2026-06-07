import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";


function DashboardLayout ({children}){
    return(
        <div className="flex bg-slate-950 ">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Navbar/>
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
export default DashboardLayout;