import { X } from "lucide-react";
import { useState } from "react";

function ApplyLeaveModal({ isOpen, onClose, onSave }) {
  const initialFormData = {
    employee: "",
    leaveType: "Sick Leave",
    fromDate: "",
    toDate: "",
    reason: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.employee.trim() ||
      !formData.fromDate || 
      !formData.toDate
    
    ) {
        alert("Please fill all required fields.");
      return;
    }
    if (
      new Date(formData.toDate) <
      new Date(formData.fromDate)
    ) {
      alert("To Date cannot be earlier than From Date.");
      return;
    }

    onSave(formData);
    resetForm();
    onClose();
  };

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
            Apply Leave
          </h2>

          <button
            onClick={handleClose}
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
            name="employee"
            value={formData.employee}
            onChange={handleChange}
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
          />

          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
            "
          >
            <option>Sick Leave</option>

            <option>Casual Leave</option>

            <option>Annual Leave</option>

            <option>Emergency Leave</option>
          </select>

          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
            "
          />

          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
            "
          />

          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason"
            rows="4"
            className="
              md:col-span-2
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
              resize-none
            "
          />
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
            onClick={handleClose}
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
            onClick={handleSubmit}
            className="
              px-5
              py-3
              rounded-xl
              bg-emerald-500
              text-black
              font-semibold
            "
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplyLeaveModal;