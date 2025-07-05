import React,{ useState } from "react";
import Greenflag from "./assets/ProfileImages/image.png"; // Assuming this is the success image";
import axios from 'axios';

const Settings = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [forgetPasswordData, setForgetPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForgetPasswordChange = (e) => {
    setForgetPasswordData({ ...forgetPasswordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/update-credentials', formData);
      console.log(response.data);
      alert('Credentials updated successfully!'); // Replace with toast if desired
    } catch (error) {
      console.error('Error updating credentials:', error.response?.data || error.message);
      alert('Failed to update credentials');
    }
  };

  const handleSaveChanges = async () => {
    if (forgetPasswordData.newPassword !== forgetPasswordData.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/logindetails/update-password', {
        email: formData.email, // Assuming email is used to identify the user
        oldPassword: forgetPasswordData.oldPassword,
        newPassword: forgetPasswordData.newPassword,
      });
      console.log(response.data);
      setModalOpen(false);
      setSuccessModalOpen(true); // Show success modal
      setForgetPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      console.error('Error updating password:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Failed to update password');
    }
  };

  const handleCancel = () => {
    setModalOpen(false);
    setForgetPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleBackToDashboard = () => {
    setSuccessModalOpen(false);
    // For actual navigation, use: navigate('/dashboard') if using react-router-dom
    alert("Navigated back to Dashboard!");
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-white shadow-sm">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Settings</h2>

      {/* Tabs */}
      <div className="flex flex-wrap border-b">
        <button className="py-2 px-2 sm:px-4 text-gray-500 text-sm sm:text-base">
          My Profile
        </button>
        <button className="py-2 px-2 sm:px-4 text-gray-500 text-sm sm:text-base">
          Resume
        </button>
        <button className="py-2 px-2 sm:px-4 text-blue-600 border-b-2 border-blue-600 font-medium text-sm sm:text-base">
          Login Details
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row">
        <h3 className="text-lg font-medium mb-4 md:w-[30%]">Login Credentials</h3>
        <div className="grid grid-cols-1 gap-4 w-full md:w-[70%] md:ml-[30%]">
          <div>
            <label className="block text-gray-600 text-sm sm:text-base">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm sm:text-base">User Name</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your user name"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm sm:text-base">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-600 text-sm sm:text-base">Current Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </form>

      {/* Forget Password Button */}
      <div className="mt-4 flex justify-end">
        <button
          className="p-3 border border-gray-200 rounded-md text-red-500 text-sm sm:text-base hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setModalOpen(true)}
        >
          Forget Password?
        </button>
      </div>

      {/* Forget Password Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Forget Password</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCancel}
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 text-sm sm:text-base">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Enter your current password"
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={forgetPasswordData.oldPassword}
                  onChange={handleForgetPasswordChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm sm:text-base">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter your new password"
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={forgetPasswordData.newPassword}
                  onChange={handleForgetPasswordChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm sm:text-base">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter new password"
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={forgetPasswordData.confirmPassword}
                  onChange={handleForgetPasswordChange}
                  required
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button
                className="px-4 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {successModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
            <div className="mb-4">
              <img src={Greenflag} alt="Success" className="mx-auto w-12 h-12" />
              <h3 className="text-lg font-medium mt-2">Password Updated Successfully!</h3>
              <p className="text-gray-600 mt-2">You can now use your new password to log in securely.</p>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleBackToDashboard}
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;