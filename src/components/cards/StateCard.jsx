function StateCard({
    title, value, change, icon,
}) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all hover:shadow-xl
hover:shadow-emerald-500/10 hover:-translate-y-1"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-slate-400 text-sm">
                        {title}
                    </p>
                    <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
                    <p className="text-emerald-400 text-sm mt-2">
                        {change}
                    </p>
                </div>
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    {icon}
                </div>
            </div>
        </div>
    );
}
export default StateCard;