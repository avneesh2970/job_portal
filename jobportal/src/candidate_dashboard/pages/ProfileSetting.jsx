import React, { useState, useEffect } from "react";
import Profile from "./assets/ProfileImages/image.png"  ;
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast styling

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    date: '',
    gender: '',
    bio: '',
    profilePhoto: null,
    country: '',
    city: '',
    state: '',
    pincode: '',
    addressLine1: '',
    addressLine2: ''
  });

  const [previewImage, setPreviewImage] = useState(Profile);

  // Country and city options
  const countryCityOptions = {
    "India": ["New Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"],
    "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool"],
    "Canada": ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"]
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ...(name === 'country' ? { city: '' } : {})
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, profilePhoto: file }));
    setPreviewImage(URL.createObjectURL(file));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key === 'profilePhoto' && formData[key]) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/profile`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Profile updated:', response.data);
      // Show toast notification on success
      toast.success('Save Changes Successfully', {
        position: "top-right",
        autoClose: 2000, // Closes after 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Optionally reset form after success
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        date: '',
        gender: '',
        bio: '',
        profilePhoto: null,
        country: '',
        city: '',
        state: '',
        pincode: '',
        addressLine1: '',
        addressLine2: ''
      });
      setPreviewImage(Profile);
    } catch (error) {
      console.error('Error updating profile:', error);
      // Show error toast if submission fails
      toast.error('Failed to save changes', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 sm:p-8 bg-white shadow-md rounded-lg w-full">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Settings</h2>

        {/* Tabs */}
        <div className="flex flex-wrap border-b">
          <button className="py-2 px-2 sm:px-4 text-gray-500 text-blue-600 border-b-2 border-blue-600 font-medium text-sm sm:text-base">
            My Profile
          </button>
          <button className="py-2 px-2 sm:px-4 text-gray-500 text-sm sm:text-base">
            Resume
          </button>
          <button className="py-2 px-2 sm:px-4 text-sm sm:text-base">
            Login Details
          </button>
        </div>

        <h3 className="text-base sm:text-lg font-medium md:mt-10">Basic Information</h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-4">This information will be displayed publicly</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-10">
          <h3 className="text-base sm:text-lg font-medium mb-2 w-full md:mb-[10%]">Profile Photo</h3>
          <div className="flex flex-col sm:flex-row w-full sm:ml-[33%] gap-5 items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mt-4">
              <img src={previewImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="border-2 border-dashed border-purple-400 bg-purple-50 p-4 rounded-lg w-full sm:w-60 text-center">
              <label htmlFor="profilePhoto" className="text-blue-600 cursor-pointer">Click to replace</label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <p className="text-gray-400 text-xs">or drag and drop</p>
              <p className="text-gray-400 text-xs">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
            </div>
          </div>
        </div>
        <hr className="mt-6 sm:mt-10" />

        <div className="flex flex-col sm:flex-row mt-6 sm:mt-10">
          <h3 className="text-base sm:text-lg font-medium mb-2 md:w-[30%]">Personal Details</h3>
          <div className="w-full sm:ml-[20%] mt-4 sm:mt-0">
            <div>
              Full Name
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border p-2 sm:p-3 rounded w-full mt-1"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              <div>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="border p-2 sm:p-3 rounded w-full mt-1"
                />
              </div>
              <div>
                Phone Number
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your Phone Number"
                  className="border p-2 sm:p-3 rounded w-full mt-1"
                />
              </div>
              <div>
                Date
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border p-2 sm:p-3 rounded w-full mt-1"
                />
              </div>
              <div>
                Gender
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border p-2 sm:p-3 rounded w-full mt-1"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Write something about yourself..."
          className="border p-2 sm:p-3 rounded w-full md:w-[63%] sm:w-[67%] mt-4 sm:ml-[38%] h-24 sm:h-28"
        ></textarea>
        <div className="flex flex-col sm:flex-row sm:ml-[33%] gap-2 sm:gap-70 w-full sm:w-[67%] justify-between">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left w-full md:ml-10">minimum 250 characters</p>
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right ">{formData.bio.length}/500</p>
        </div>
        <hr className="mt-6" />

        <div className="flex flex-col sm:flex-row mt-6">
          <h3 className="text-base sm:text-lg font-medium mb-2 md:w-[40%]">Address Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:ml-25 mt-4 sm:mt-10">
            <div>
              Country
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border p-2 sm:p-3 rounded w-full mt-1"
              >
                <option value="">Select your country</option>
                {Object.keys(countryCityOptions).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              City/Town*
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border p-2 sm:p-3 rounded w-full mt-1"
                disabled={!formData.country}
              >
                <option value="">Select your city</option>
                {formData.country && countryCityOptions[formData.country]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              State
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className="border p-2 sm:p-3 rounded w-full mt-1"
              />
            </div>
            <div>
              Pincode
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter your pin code"
                className="border p-2 sm:p-3 rounded w-full mt-1"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 w-full md:w-[60%] md:ml-[40%] sm:w-[70%] sm:ml-[32%]">
          <div>
            Address Line 1
            <input
              type="text"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="Enter your Address line 1"
              className="border p-2 sm:p-3 rounded w-full mt-1"
            />
          </div>
          <div>
            Address Line 2
            <input
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Enter your Address line 2 (Optional)"
              className="border p-2 sm:p-3 rounded w-full mt-4 sm:mt-5"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
          <button type="button" className="border px-4 py-2 sm:px-6 sm:py-2 rounded-md text-gray-600 w-full sm:w-auto">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md w-full sm:w-auto">
            Save Changes
          </button>
        </div>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default ProfileSettings;