import { X } from "lucide-react";
import { useState } from "react";

function MarkAttendanceModal({
  isOpen,
  onClose,
  onSave,
}) {
    const [formData, setFormData] = useState({ employee: "",
        department: "",
        date: "",
        status: "Present",
    });
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/60
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          overflow-hidden
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            p-6
            border-b
            border-slate-800
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Mark Attendance
          </h2>

          <button
            onClick={onClose}
            className="
              text-slate-400
              hover:text-white
            "
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div
          className="
            p-6
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          "
        >
          <input
            type="text"
            placeholder="Employee Name"
            className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
            "
            value={formData.employee}
            onChange={(e) => setFormData({
                ...formData, employee: e.target.value,
            })}
          />
          <input type="text"
            placeholder="Department"
            value={formData.department}
            onChange={(e) =>
                setFormData({
                    ...formData, department: e.target.value,
                })
            }
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />

          <input
            type="date"
            className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
            "
            value={formData.date}
            onChange={(e) => setFormData({
                ...formData, date: e.target.value,
            })}
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
            "
            value={formData.status}
            onChange={(e) => setFormData({
                ...formData,
                status: e.target.value,
            })}
          >
            <option>Present</option>
            <option>Absent</option>
            <option>Leave</option>
            <option>Half Day</option>
          </select>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            justify-end
            gap-4
            p-6
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
              text-white
            "
          >
            Cancel
          </button>

          <button
          onClick={() => {
            if(
                !formData.employee || !formData.department
            ) return;

            onSave(formData);
            setFormData({
                employee:"",
                department: "",
                date:"",
                status: "Present",
            });

            onclose();
          }}
            className="
              px-5
              py-3
              rounded-xl
              bg-emerald-500
              text-black
              font-semibold
            "
          >
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarkAttendanceModal;