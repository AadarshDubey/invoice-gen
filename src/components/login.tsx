import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }

    console.log("Login successful:", { email, password });

    setEmail("");
    setPassword("");

    navigate("/product");
  };

  return (
    <div className="min-h-screen bg-customBlack text-white flex flex-col overflow-hidden">
      <nav className="relative bg-RichBlack flex justify-between items-center p-[8px] pr-[80px] pb-[8px] pl-[80px] h-[64px] z-10">
        <div className="flex items-center">
          <img src="/img/icon.png" alt="Levitation Logo" className="h-[71px] w-[71px] mr-2" />
          <div className="leading-tight">
            <span className="font-bold text-[20px] font-sans">levitation</span> <br />
            <span className="font-bold text-[10px] font-sans">infotech</span>
          </div>
        </div>
        <button className="bg-RichBlack border-2 border-LimeGreen px-4 py-2 rounded text-LimeGreen">
  Connect People with Technology
</button>
      </nav>

      <div className="flex flex-1 items-center justify-center mr-5 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full p-6">
          <div className="hidden md:block relative z-10">
            <img src="/img/lev.png" alt="Office Environment" className="rounded-lg p-4" />
          </div>

          <div className="mr-28 py-14 mt-14">
            <h2 className="text-[40px] font-bold mb-2">Let the Journey Begin!</h2>
            <p className="text-[20px] mb-8 text-secondarycol">
              This is a basic login page used for Levitation <br /> assignment purpose.
            </p>
            <form onSubmit={handleLogin}>
            <div className="mb-4">
                <label className="text-[16px] block text-sm mb-2">Email Address</label>
                <div className="flex items-center bg-InnerBlack p-2 rounded py-4">
                  <input
                    type="email"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-InnerBlack text-white flex-1 border-none outline-none text-[14px]"
                    required
                  />
                </div>
                <p className="text-[14px] text-secondarycol mt-1">
                  This email will be displayed with your inquiry.
                </p>
              </div>

              <div className="mb-6">
                <label className="text-[16px] block text-sm mb-2">Current Password</label>
                <div className="flex items-center bg-InnerBlack p-2 py-4 rounded">
                  <input
                    type="password"
                    placeholder="Enter the Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent text-white flex-1 border-none outline-none text-[14px]"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="relative group px-6 py-2 bg-BlackLG rounded text-LimeGreen font-bold overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-RichBlack transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
              </button>
              <p className="text-gray-400">
                <Link to="/forgot-password" className="text">Forgot Password?</Link>
              </p>
            </div>

            </form>
          </div>
        </div>

        <img src="/img/Ellipse7.png" alt="Ellipse Gradient" className="absolute top-0 -right-5 w-1/4" />
        <img src="/img/Ellipse5.png" alt="Ellipse Gradient" className="absolute bottom-0 left-0 w-2/5 z-0 -mb-10 -ml-10" />
      </div>
    </div>
  );
};

export default Login;
