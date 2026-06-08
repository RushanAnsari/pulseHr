import { X } from "lucide-react";

function AddEmployeeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/70
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          overflow-hidden
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            px-6
            py-5
            border-b
            border-slate-800
          "
        >
          <h2 className="text-2xl font-bold text-white">
            Add Employee
          </h2>

          <button
            onClick={onClose}
            className="
              text-slate-400
              hover:text-white
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-emerald-500
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-emerald-500
              "
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-emerald-500
              "
            />

            <input
              type="text"
              placeholder="Role"
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-emerald-500
              "
            />

            <select
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
              "
            >
              <option>Engineering</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
            </select>

            <select
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
              "
            >
              <option>Active</option>
              <option>On Leave</option>
            </select>

          </div>
        </div>

        {/* Footer */}

        <div
          className="
            flex
            justify-end
            gap-3
            px-6
            py-5
            border-t
            border-slate-800
          "
        >
          <button
            onClick={onClose}
            className="
              px-5
              py-3
              rounded-xl
              border
              border-slate-700
              text-slate-300
            "
          >
            Cancel
          </button>

          <button
            className="
              px-5
              py-3
              rounded-xl
              bg-emerald-500
              text-slate-950
              font-semibold
              hover:bg-emerald-400
            "
          >
            Save Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeModal;