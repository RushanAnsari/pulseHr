import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">
      {/* Search */}

      <div className="relative w-[350px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search employees..."
          className="
            w-full
            bg-slate-800
            text-white
            rounded-xl
            py-3
            pl-11
            pr-4
            outline-none
            border
            border-slate-700
            focus:border-emerald-500
          "
        />
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} className="text-slate-300" />

          <span
            className="
              absolute
              -top-1
              -right-1
              w-2
              h-2
              rounded-full
              bg-emerald-500
            "
          />
        </button>

        <div className="flex items-center gap-3">
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-emerald-500
              flex
              items-center
              justify-center
              font-bold
              text-slate-950
            "
          >
            R
          </div>

          <div>
            <p className="text-white font-medium">
              Rushan Ansari
            </p>

            <p className="text-xs text-slate-400">
              HR Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;