import React, { useState } from 'react';
import RegisterWallpaper from '../../assets/registration-wallpaper.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaLock, FaUnlock, FaPhone } from 'react-icons/fa';

function Signup() {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      contact: "",
      email: "",
      password: "",
      confirm_password: ""
    }
  });
  const navigate = useNavigate();

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,}$/;
  const phoneRegex = /^(?:\+94|0)[7][0-9]{8}$/;

  const newAccountCreate = async () => {
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }
    if (!phoneRegex.test(contact)) {
      toast.error('Invalid contact format');
      return;
    }

    if (!first_name || !last_name || !contact || !email || !password || !confirm_password) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        first_name: first_name,
        last_name: last_name,
        contact: contact,
        email: email,
        password: password,
        confirm_password: confirm_password
      });

      if (response.data.message === "Signup successful") {
        toast.success('Your Registration Successful!');
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error('Something went wrong.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={RegisterWallpaper} alt="" />
      </div>
      <div className='bg-cyan-200 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-cyan-300 p-8 px-8 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40'>
          <h2 className='text-3xl dark:text-black font-bold text-center'>Please Enter Details</h2>

          <div className='flex flex-col text-gray-800 py-2 relative'>
            <label className='flex justify-between'>First Name</label>
            <FaUser className="absolute right-3 mt-14 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              className='rounded-lg bg-cyan-200 mt-2 p-2 focus:border-cyan-500 focus:bg-white focus:outline-none'
              type="text"
              placeholder="Enter your first name"
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={first_name}
            />
            {errors.first_name && <p className="text-red-500 flex justify-between">{errors.first_name.message}</p>}
          </div>

          <div className='flex flex-col text-gray-800 py-2 relative'>
            <label className='flex justify-between'>Last Name</label>
            <FaUser className="absolute right-3 mt-14 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              className='rounded-lg bg-cyan-200 mt-2 p-2 focus:border-cyan-500 focus:bg-white focus:outline-none'
              type="text"
              placeholder="Enter your last name"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={last_name}
            />
            {errors.last_name && <p className="text-red-500 flex justify-between">{errors.last_name.message}</p>}
          </div>

          <div className='flex flex-col text-gray-800 py-2 relative'>
            <label className='flex justify-between'>User Contact</label>
            <FaPhone className="absolute right-3 mt-14 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              className='rounded-lg bg-cyan-200 mt-2 p-2 focus:border-cyan-500 focus:bg-white focus:outline-none'
              {...register("contact", {
                pattern: {
                  value: phoneRegex,
                  message: 'Invalid contact format'
                },
                onBlur: () => trigger("contact"),
              })}
              type="text"
              placeholder="Enter your contact number"
              required
              onChange={(e) => setContact(e.target.value)}
              value={contact}
            />
            {errors.contact && <p className="text-red-500 flex justify-between">{errors.contact.message}</p>}
          </div>

          <div className='flex flex-col text-gray-800 py-2 relative'>
            <label className='flex justify-between'>User Email</label>
            <FaEnvelope className="absolute right-3 mt-14 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              className='rounded-lg bg-cyan-200 mt-2 p-2 focus:border-cyan-500 focus:bg-white focus:outline-none'
              {...register("email", {
                pattern: {
                  value: emailRegex,
                  message: 'Invalid email format'
                },
                onBlur: () => trigger("email"),
              })}
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && <p className="text-red-500 flex justify-between">{errors.email.message}</p>}
          </div>

          <div className='flex flex-col text-gray-800 py-2 relative'>
            <label className='flex justify-between'>Password</label>
            <input
              className='rounded-lg bg-cyan-200 mt-2 p-2 focus:border-cyan-500 focus:bg-white focus:outline-none'
              {...register("password", {
                minLength: { value: 8, message: "Password must be at least 8 characters" },
                pattern: {
                  value: passwordRegex,
                  message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                },
                onBlur: () => trigger("password"),
              })}
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div onClick={togglePasswordVisibility} className="absolute right-3 mt-14 transform -translate-y-1/2 cursor-pointer text-gray-500">
              {passwordVisible ? <FaUnlock size={20} /> : <FaLock size={20} />}
            </div>
            {errors.password && <p className="text-red-500 flex justify-between">{errors.password.message}</p>}
          </div>

          <div className='flex flex-col text-gray-800 py-2 relative'>
            <label className='flex justify-between'>Confirm Password</label>
            <input
              className='rounded-lg bg-cyan-200 mt-2 p-2 focus:border-cyan-500 focus:bg-white focus:outline-none'
              {...register("confirm_password", {
                minLength: { value: 8, message: "Password must be at least 8 characters" },
                pattern: {
                  value: passwordRegex,
                  message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                },
                onBlur: () => trigger("confirm_password"),
              })}
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm your password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirm_password}
            />
            <div onClick={toggleConfirmPasswordVisibility} className="absolute right-3 mt-14 transform -translate-y-1/2 cursor-pointer text-gray-500">
              {confirmPasswordVisible ? <FaUnlock size={20} /> : <FaLock size={20} />}
            </div>
            {errors.confirm_password && <p className="text-red-500 flex justify-between">{errors.confirm_password.message}</p>}
          </div>

          <button className='w-full my-5 py-2 bg-cyan-200 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40 text-black font-semibold rounded-lg' type="submit" onClick={handleSubmit(newAccountCreate)}>
            Register

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

export default Signup;