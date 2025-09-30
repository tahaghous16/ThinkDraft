
import React, { useState } from "react";
import { useContextData } from "../../context/ContextApi";
import toast from "react-hot-toast";

const Login = () => {
  const { axios, setToken } = useContextData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-8 border border-gray-200 shadow-lg rounded-xl bg-white">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Admin{" "}
            <span className="bg-gray-900 text-white rounded px-2">Login</span>
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            Enter your credentials to access the admin panel
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="p-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="p-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gray-900 text-white rounded hover:bg-gray-700 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
