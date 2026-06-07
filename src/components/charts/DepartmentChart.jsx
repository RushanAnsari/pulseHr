import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";

const data = [
    {name: "Engineering", value: 45},
    {name: "HR", value: 15},
    {name: "Finance", value: 20},
    {name: "Marketing", value: 20},
];

const COLORS = [
    "#10B981",
    "#14B8A6",
    "#22C55E",
    "#34D399",
];

function DepartmentChart() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[350px]">
            <h3 className="text-white text-lg font-semibold mb-6">
                Departments
            </h3>
            <ResponsiveContainer width="100%" height="85%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={90}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                 key={index}
                                 fill={COLORS[index]}
                                 />
                            ))}
                        </Pie>
                        <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
export default DepartmentChart;