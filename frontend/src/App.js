import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Passwordforgot from "./routes/Passwodforgot";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/your-password-forgot" element={<Passwordforgot />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}