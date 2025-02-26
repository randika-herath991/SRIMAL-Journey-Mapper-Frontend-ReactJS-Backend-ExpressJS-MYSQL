import React, { useState } from "react";
import "../../styles/TravelPlanFormStyles.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TravelPlanForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    nic: '',
    mobileNumber: '',
    email: '',
    travelDate: '',
    venue: '',
    members: '',
    paymentMethod: '',
    specialRequest: false,
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, nic, mobileNumber, email, travelDate, venue, members, paymentMethod, specialRequest } = formData;

    if (!fullName || !nic || !mobileNumber || !travelDate || !email || !venue || !members || !paymentMethod) {
      setError("All fields are required except Special Request");
      return;
    }

    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/travelplan", formData);
      setSuccessMessage(response.data.message);
      setError(null);
      setFormData({
        fullName: '',
        nic: '',
        mobileNumber: '',
        email: '',
        travelDate: '',
        venue: '',
        members: '',
        paymentMethod: '',
        specialRequest: false,
      });
      toast.success("Travel plan sent successfully!");
    } catch (error) {
      setError("Error sending travel plan submission");
      toast.error("Failed travel plan submission.");
    }
  };

  return (
    <div className="form-container">
      <h1>Enjoy with the Travel Plan!</h1>
      {error && <div className="error-message text-red-500">{error}</div>}
      {successMessage && <div className="success-message text-green-500 ">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nic"
          placeholder="NIC or Passport Number"
          value={formData.nic}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobileNumber"
          placeholder="Contact Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
        />
        <textarea
          name="members"
          placeholder="Members"
          rows="4"
          value={formData.members}
          onChange={handleChange}
        ></textarea>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="" disabled>Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="specialRequest"
            checked={formData.specialRequest}
            onChange={handleChange}
            id="specialRequest"
          />
          <label htmlFor="specialRequest">Yes, I need a tour guide</label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default TravelPlanForm;