import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotWallpaper from "../../assets/forgot-password-cover.jpg";
import { FaEnvelope } from 'react-icons/fa';

function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required.");
      toast.error("Email is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address.");
      toast.error("Invalid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Password reset email sent!");
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send email.");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={ForgotWallpaper} alt="" />
      </div>
      <div className="w-full h-full object-cover bg-cyan-200 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-cyan-300 p-10 px-10 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl dark:text-black font-bold text-center">
            Forgot Password
          </h2>
          <div className="flex flex-col text-gray-800 py-2">
            <label className='flex justify-between'>Enter Your Email</label>
            <FaEnvelope className="absolute right-60 mt-14 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              className="rounded-lg bg-cyan-200 mt-2 p-2 focus:border-green-500 focus:bg-white focus:outline-none"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {emailError && <p className="text-red-500 text-sm mt-1 flex justify-between">{emailError}</p>}
          </div>

          <button
            className="w-full my-5 py-2 bg-cyan-200 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40 text-black font-semibold rounded-lg"
            type="submit"
          >
            Send
          </button>

          <Link to="/">
            <button className="w-full my-1 py-2 bg-cyan-200 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40 text-black font-semibold rounded-lg">
              Back<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;