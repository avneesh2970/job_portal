import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaLinkedin, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('candidate');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    phoneno: ""
  });
  console.log('formData', formData)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    if (!termsAccepted) {
      setError("You must accept the Terms of Service and Privacy Policy");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // Using your specific backend endpoint
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
        {
          email: formData.email,
          password: formData.password,
          userType: activeTab, // 'candidate' or 'employee'
          firstname: formData.firstname,
          lastname: formData.lastname,
          phoneno: formData.phoneno
        }
      );
      console.log('response.data', response.data)
      // Store token in localStorage
      localStorage.setItem("token", response.data.token);

      // Store user info
      localStorage.setItem("user", JSON.stringify(response.data.user));


      // Redirect to appropriate dashboard
      navigate('/login');

    } catch (err) {
      setError(err.response?.data?.message || "Error creating account. Please try again.");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = (provider) => {
    // This would be implemented with OAuth providers
    alert(`${provider} authentication to be implemented`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">

        {/* Tabs for Candidate/Employee */}
        <div className="flex justify-center mt-4 mb-6">
          <div className="grid grid-cols-2 bg-gray-100 rounded-lg p-1 w-64">
            <button
              className={`py-2 px-4 rounded-lg transition-all ${activeTab === 'candidate' ? 'bg-white shadow-sm text-[#4640DE]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('candidate')}
            >
              Candidate
            </button>
            <button
              className={`py-2 px-4 rounded-lg transition-all ${activeTab === 'Recruiter' ? 'bg-white shadow-sm text-[#4640DE]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('Recruiter')}
            >
              Recruiter
            </button>
          </div>
        </div>

        {/* Form content */}
        <div className="px-6 pb-6">
          <h2 className="text-xl font-bold text-center mb-1">Create Your Account & Start Applying!</h2>
          <p className="text-gray-500 text-center mb-6">Create your account to continue and explore new jobs</p>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Social sign-up buttons */}
          <div className="space-y-3 mb-4">
            <button
              type="button"
              onClick={() => handleSocialSignup('Google')}
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FaGoogle className="text-red-500 mr-3" />
              <span className="text-gray-700">Sign Up with Google</span>
            </button>
            <button
              type="button"
              onClick={() => handleSocialSignup('LinkedIn')}
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FaLinkedin className="text-blue-600 mr-3" />
              <span className="text-gray-700">Sign Up with LinkedIn</span>
            </button>
            <button
              type="button"
              onClick={() => handleSocialSignup('Apple')}
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

          {/* Email/Password form */}
          <form onSubmit={handleSubmit}>

            <div className="flex gap-2.5 justify-between">
              <div className="flex flex-col">
                <label className="block text-gray-700 mb-2" >First Name</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} placeholder="Enter first name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]" required />

              </div>
              <div className="block text-gray-700 mb-2">
                <label className="block text-gray-700 mb-2" >last Name</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} placeholder="Enter last name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]" required />

              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">Phone no</label>
              <input type="text" name="phoneno" value={formData.phoneno} onChange={handleInputChange} placeholder="Enter phone number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                required
              />
            </div>


            <div className="mb-4">

              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                  required
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 bg-[#4640DE] text-white rounded-lg hover:bg-[#3530B3] transition duration-200 mb-4 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

            <div className="text-center mb-4">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/login" className="text-[#4640DE] hover:underline">Log In</Link>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                By clicking "Sign up", you acknowledge that you have read and accept the
                <a href="/terms" className="text-[#4640DE] hover:underline"> Terms of Services</a> and
                <a href="/privacy" className="text-[#4640DE] hover:underline"> Privacy Policy</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;