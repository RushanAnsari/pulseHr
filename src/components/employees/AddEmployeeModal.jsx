import { useState } from "react";
import { X } from "lucide-react";

function AddEmployeeModal({
  isOpen,
  onClose,
  onSave,
}) {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      role: "",
      department: "Engineering",
      status: "Active",
    });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim()
    )
      return;

    onSave(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      department: "Engineering",
      status: "Active",
    });

    onClose();
  };

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

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
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
              name="role"
              value={formData.role}
              onChange={handleChange}
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
              name="department"
              value={formData.department}
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
              <option>Engineering</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
            </select>

            <select
              name="status"
              value={formData.status}
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
              <option>Active</option>
              <option>On Leave</option>
            </select>
          </div>
        </div>

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
            onClick={handleSave}
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