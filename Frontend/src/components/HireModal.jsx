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
    budget: "",
    project: "",
    message: "",
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

    setLoading(true);

    try {
      await axios.post(`${API}/api/contact`, {
        name: form.name,
        email: form.email,
        subject: `Hire Me | ${form.project} | Budget: ${form.budget}`,
        message: form.message,
      });

      toast.success("Proposal sent successfully!");

      setForm({
        name: "",
        email: "",
        budget: "",
        project: "",
        message: "",
      });

      onClose();
    } catch {
      toast.error("Unable to send proposal");
    }

    setLoading(false);
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
            name="budget"
            placeholder="Budget"
            value={form.budget}
            onChange={handleChange}
          />

          <input
            name="project"
            placeholder="Project Type"
            value={form.project}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Project Details"
            value={form.message}
            onChange={handleChange}
            required
          />

          <div className="modal-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button type="submit">
              {loading ? "Sending..." : "Send Proposal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HireModal;
