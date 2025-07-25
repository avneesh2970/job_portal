
import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaLinkedin, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";


const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('candidate');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    localStorage.setItem("password", formData.password);
    try {
      // First, make the login request
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,  
          password: formData.password
        }),
        credentials: "include"
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Check if the user type matches the active tab
      if (data.user.userType !== activeTab) {
        throw new Error(`This account is registered as a ${data.user.userType}. Please use the ${data.user.userType} tab to login.`);
      }

      // If everything is good, store token and redirect
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userType", data.user.userType);
        localStorage.setItem('user', JSON.stringify(data.user));
       
       
        setUser(data.user);
        
      }
      
      // Redirect based on user type
      if (data.user.userType === 'candidate') {
        navigate("/");
      } else {
        navigate("/");
      }
      
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 border border-dashed border-blue-200">
        {/* Close button in top-right */}
        <div className="flex justify-end">
          <button className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Tabs for Candidate/Employee */}
        {/* <div className="flex justify-center mb-6">
          <div className="grid grid-cols-2 border border-dashed border-blue-300 rounded-lg p-1 w-full">
            <button 
              className={`py-2 px-4 rounded-lg transition-all ${activeTab === 'candidate' ? 'bg-indigo-100 text-[#4640DE]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('candidate')}
            >
              Candidate
            </button>
            <button 
              className={`py-2 px-4 rounded-lg transition-all ${activeTab === 'Recruiter' ? 'bg-indigo-100 text-[#4640DE]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Recruiter')}
            >
              Recruiter
            </button>
          </div>
        </div> */}
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {activeTab === 'candidate' 
              ? "Welcome Back! Find Your Next Opportunity." 
              : "Welcome Back! Manage Your Recruitment Process."}
          </h2>
          <p className="text-gray-500 text-sm">
            {activeTab === 'candidate'
              ? "Log in to explore job opportunities and stay informed."
              : "Log in to manage applications and recruitment tasks."}
          </p>
        </div>
        
        {/* Social login buttons */}
        <div className="space-y-3 mb-6">
          <button 
            type="button"
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <FaGoogle className="text-red-500 mr-3" />
            <span className="text-gray-700">Sign Up with Google</span>
          </button>
          <button 
            type="button"
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <FaLinkedin className="text-blue-600 mr-3" />
            <span className="text-gray-700">Sign Up with LinkedIn</span>
          </button>
          <button 
            type="button"
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <FaApple className="text-black mr-3" />
            <span className="text-gray-700">Sign Up with Apple</span>
          </button>
        </div>
        
        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        
        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {/* Login form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
              required
            />
          </div>
          
          <div className="mb-1">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                required
              />
              <button 
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          
          <div className="flex justify-end mb-5">
            <a href="forget-password" className="text-red-500 text-sm hover:underline">
              Forgot your password?
            </a>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-3 bg-[#4640DE] text-white rounded-lg hover:bg-[#3530B3] transition duration-200 mb-4 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        
        <div className="text-center mb-4">
          <p className="text-gray-600 text-sm">
            Don't have an account? <Link to="/signup" className="text-[#4640DE] hover:underline">Create an account</Link>
          </p>
        </div>
        
        {/* Terms of service */}
        <div className="text-xs text-gray-500 text-center">
          By clicking "Log in", you acknowledge that you have read and accept the 
          <a href="#" className="text-[#4640DE] hover:underline"> Terms of Services</a> and 
          <a href="#" className="text-[#4640DE] hover:underline"> Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;