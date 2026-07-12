import React, { useState } from "react";
import "../CSS/Contact.css";
import axios from "axios";
import toast from "react-hot-toast";


import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;
const [form, setForm] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

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
    const { data } = await axios.post(`${API}/api/contact`, form);

    toast.success(data.message);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (err) {
   console.table(err.response.data.errors);
  }
   finally {
    setLoading(false);
  }
};
  return (
    <>
      <section className="contact-section" id="Contact">
        <div className="contact-header">
          <span>GET IN TOUCH</span>
          <h1>Contact Me</h1>
          <div className="contact-line"></div>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Let's Work Together</h2>

            <p>
              Have a project in mind or want to discuss an opportunity? I'd love
              to hear from you.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <h5>jtushar3568@gmail.com</h5>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <span>Phone</span>
                <h5>+91 9079675171</h5>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <h5>India</h5>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-box">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-box">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-box">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <label>Message</label>
              <textarea
                rows="7"
                placeholder="Hi Tushar, I'd love to discuss a project..."
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn" disabled={loading}>
              <FaPaperPlane />
              <span>
                {loading ? (
                  <div>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
