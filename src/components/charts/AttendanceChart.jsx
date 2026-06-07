import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
const data = [
    {month: "Jan", attendance: 92},
    {month: "Feb", attendance: 94},
    {month: "Mar", attendance: 96},
    {month: "Apr", attendance: 95},
    {month: "May", attendance: 97},
    {month: "Jun", attendance: 98},
];

function AttendanceChart(){
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[350px] hover:border-emerald-500/20
transition-all
duration-300">
            <h3 className="text-white text-lg font-semibold mb-6">
                Attendance Trend
            </h3>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data}>
                    <CartesianGrid 
                        strokeDasharray="3 3"
                        stroke="#334155"
                        />
                        <XAxis 
                            dataKey="month"
                            stroke="#94A3B8"/>
                        <YAxis 
                            stroke="#94A3B8"/>
                            <Tooltip/>
                            <Line 
                                type="monotone"
                                dataKey="attendance"
                                stroke="#10B981"
                                strokeWidth={3}
                                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default AttendanceChart;