import React, { useState, useEffect } from 'react';
import loginWallpaper from '../../assets/login-wallpaper.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash, FaEnvelope } from 'react-icons/fa';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const remember = localStorage.getItem('rememberMe') === 'true';
    if (storedEmail && remember) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(remember);
    }
  }, []);

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,}$/;

  const authhandle = async () => {
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    if (!email || !password) {
      toast.error('Email and password are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signin', {
        email: email,
        password: password
      });

      console.log("user data: ", response.data.user);
      console.log("user first name: ", response.data.user.first_name);
      console.log("user last name: ", response.data.user.last_name);
      console.log("user contact: ", response.data.user.contact);
      console.log("user email: ", response.data.user.email);
      console.log("user password: ", response.data.user.password);
      console.log("user confirm password: ", response.data.user.confirm_password);

      if (response.data.message === "Login successful") {
        toast.success('Welcome ' + response.data.user.first_name);
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
          localStorage.setItem('rememberedPassword', password);
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberedEmail');
          localStorage.removeItem('rememberedPassword');
          localStorage.setItem('rememberMe', 'false');
        }

        setTimeout(() => navigate("/home"), 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error('Something went wrong.');
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginWallpaper} alt="" />
      </div>
      <div className='bg-cyan-200 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-cyan-300 p-8 px-8 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40'>
          <h2 className='text-3xl dark:text-black font-bold text-center'>Sign in with your Email & Password</h2>

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
              {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
            {errors.password && <p className="text-red-500 flex justify-between">{errors.password.message}</p>}
          </div>

          <div className='flex justify-between text-gray-600 py-2'>
            <label className='flex items-center'>
              <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
              Remember me
            </label>
            <a href="/registration"><p>Create New Account</p></a>
          </div>

          <div className='items-end text-gray-600 py-2'>
            <a href="/your-password-forgot"><p style={{ textAlign: "end" }}>Forgot Password</p></a>
          </div>

          <button className='w-full my-5 py-2 bg-cyan-200 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/40 text-black font-semibold rounded-lg' type="submit" onClick={handleSubmit(authhandle)}>
            Sign In
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;