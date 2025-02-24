import React, { useState } from "react";
import "../../styles/ContactFormStyles.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/contact", formData);
      setSuccessMessage(response.data.message);
      setError(null);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Message sent successfully!");
    } catch (error) {
      setError("Error sending message");
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      {error && <div className="error-message text-red-500">{error}</div>}
      {successMessage && <div className="success-message text-green-500 ">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default ContactForm;