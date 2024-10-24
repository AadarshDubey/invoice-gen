import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    console.log("Registration successful:", { name, email, password });

    setName("");
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
        <Link to="/login" className="mr-16 bg-LimeGreen px-4 py-2 rounded text-gray-900">
          Login
        </Link>
      </nav>

      <div className="flex flex-1 items-center justify-center mr-5 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full p-6">
          <div className="hidden md:block relative z-10">
            <img src="/img/lev.png" alt="Office Environment" className="rounded-lg p-4" />
          </div>

          <div className="mr-28 py-14 mt-14">
            <h2 className="text-[40px] font-bold mb-2">Sign up to begin your journey</h2>
            <p className="text-[20px] mb-8 text-gray-400">
              This is a basic signup page used for Levitation <br /> assignment purposes.
            </p>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="text-[16px] block text-sm mb-2">Enter your name</label>
                <div className="flex items-center bg-InnerBlack p-2 rounded py-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent text-white flex-auto border-none outline-none text-[14px]"
                    required
                  />
                </div>
                <p className="text-[14px] text-secondarycol mt-1">
                  This name will be displayed with your inquiry.
                </p>
              </div>

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
                <label className="text-[16px] block text-sm mb-2">Password</label>
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
                <p className="text-[14px] text-secondarycol mt-1">
                  Any further updates will be forwarded to this Email ID.
                </p>
              </div>

              <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="relative group px-6 py-2 bg-BlackLG rounded text-LimeGreen font-bold overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Register</span>
                <span className="absolute inset-0 bg-RichBlack transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
              </button>
              <p className="text-secondarycol">
                Already have an account?
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

export default Register;
