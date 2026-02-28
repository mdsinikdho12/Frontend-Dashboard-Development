import { useState, useContext } from "react";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);
      login(data);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6] flex items-center justify-center p-6 font-sans">
      <div className=" bg-[#eaeff0] p-10 rounded shadow-sm border border-gray-100 w-full max-w-md">
        <h2 className="text-3xl text-center font-bold text-[#1A1D1F] mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Plan, prioritize, and accomplish with ease.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#1A1D1F] mb-2 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@mail.com"
              className="w-full px-5 py-4 bg-[#F4F7F6] border-none rounded text-sm focus:ring-1 focus:ring-[#1A4D2E] outline-none transition-all placeholder:text-gray-400"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1A1D1F] mb-2 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-[#F4F7F6] border-none rounded text-sm focus:ring-1 focus:ring-[#1A4D2E] outline-none transition-all placeholder:text-gray-400"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A4D2E] text-white font-bold py-4 rounded-2xl hover:bg-[#143a22] transition-colors shadow-lg shadow-green-900/10 mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
