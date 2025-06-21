
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Define the API base URL - adjust this to match your backend server
const API_BASE_URL = 'http://localhost:5000'; // Change this to your backend URL

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Updated endpoint to match your backend route
      const response = await axios.post(`${API_BASE_URL}/api/auth/forgot-password`, { email });
      
      if (response.data.success) {
        setIsSubmitted(true);
      } else {
        setError("Failed to send reset link. Please try again.");
      }
    } catch (error) {
      console.error("Reset password request error:", error);
      // Don't expose if email doesn't exist for security reasons
      // Still show success message to prevent email enumeration attacks
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {!isSubmitted ? (
        <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
          {/* Close button in top-right */}
          <div className="flex justify-end">
            <Link to="/login" className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          </div>
          
          {/* Header */}
          <div className="mb-6 mt-2">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Forget your password</h2>
            <p className="text-gray-500 text-sm">Enter email address to receive password reset link.</p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            {error && (
              <div className="mb-4 text-red-500 text-sm">
                {error}
              </div>
            )}
            
            <button 
              type="submit" 
              className="w-full py-3 bg-[#4640DE] text-white rounded-lg hover:bg-[#3530B3] transition duration-200 mb-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </form>
          
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Remember your password? <Link to="/login" className="text-[#4640DE] hover:underline">Back to login</Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 text-center">
          {/* Close button in top-right */}
          <div className="flex justify-end">
            <Link to="/login" className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          </div>
          
          {/* Success icon */}
          <div className="flex justify-center mb-6 mt-4">
            <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          {/* Success message */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">Check your email</h2>
          
          <p className="text-gray-500 mb-6">
            If an account exists for {email}, you'll get an email with instructions to reset your password.
          </p>
          
          <div className="mt-6">
            <Link 
              to="/login" 
              className="text-[#4640DE] hover:underline"
            >
              Back to login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;