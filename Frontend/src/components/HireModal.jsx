import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../CSS/HireModal.css";

function HireModal({ open, onClose }) {
  const API = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
    jobRole: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {

       console.log("API:", API);
       console.log("Hire endpoint:", `${API}/api/hire`);

      await axios.post(`${API}/api/hire`, {
        name: form.name,
        email: form.email,
        position: form.position,
        salary: form.salary,
        jobRole: form.jobRole,
      });

      toast.success("Proposal sent successfully!");

      setForm({
        name: "",
        email: "",
        position: "",
        salary: "",
        jobRole: "",
      });

      onClose();
    } catch (error) {
      console.error(error);

      toast.error(error.response?.data?.message || "Unable to send proposal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="hire-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Hire Me</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="position"
            placeholder="Job Position"
            value={form.position}
            onChange={handleChange}
            required
          />

          <input
            name="salary"
            placeholder="Salary / Budget"
            value={form.salary}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="jobRole"
            placeholder="Job Details"
            value={form.jobRole}
            onChange={handleChange}
            required
          />

          <div className="modal-buttons">
            <button type="button" onClick={onClose} disabled={loading}>
              Cancel
            </button>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Proposal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HireModal;
