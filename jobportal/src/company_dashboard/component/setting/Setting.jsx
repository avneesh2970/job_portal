import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaInstagram, FaGlobeAfrica } from "react-icons/fa";

const SocialLinks = () => {
  const [formData, setFormData] = useState({
    instagram: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: ""
  });

  const { instagram, twitter, facebook, linkedin, youtube } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/socialMediaLinks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save links");

      const data = await response.json();
      console.log("Links added successfully:", data);
      toast.success('Link Add Successfully ')


      setFormData({
        instagram: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: ""
      });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-6">
      <div className="w-full md:w-1/3">
        <h3 className="text-lg font-medium">Basic Information</h3>
        <p className="text-sm text-gray-500">
          Add elsewhere links to your company profile. You can add only usernames without full https links.
        </p>
      </div>

      <form className="w-full md:w-2/3 space-y-4" onSubmit={handleOnSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Instagram Link</label>
          <input
            type="text"
            placeholder="Enter your URL"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-purple-300"
            name="instagram"
            value={instagram}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Twitter</label>
          <input
            type="text"
            placeholder="Enter your URL"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-purple-300"
            name="twitter"
            value={twitter}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Facebook</label>
          <input
            type="text"
            placeholder="Enter your URL"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-purple-300"
            name="facebook"
            value={facebook}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
          <input
            type="text"
            placeholder="Enter your URL"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-purple-300"
            name="linkedin"
            value={linkedin}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">YouTube</label>
          <input
            type="text"
            placeholder="Enter your URL"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-purple-300"
            name="youtube"
            value={youtube}
            onChange={handleOnChange}
          />
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
          Save Changes
        </button>
      </form>
    </div>

  );
};




const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("socialLinks");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xls mx-auto bg-white p-6">
        <div className="flex items-center mb-6">
          <Link to='/'>
            <button className="mr-4 text-gray-500">
              <FaArrowLeft />
            </button>
          </Link>
          <h2 className="text-xl font-semibold">Settings</h2>
        </div>

        <div className="border-b flex space-x-8 mb-6">
          <button
            className={`cursor-pointer pb-2 font-medium ${activeTab === "socialLinks" ? "border-b-2 border-purple-500 text-purple-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("socialLinks")}
          >
            Social Links
          </button>
          <button
            className={`cursor-pointer pb-2 font-medium ${activeTab === "teamMembers" ? "border-b-2 border-purple-500 text-purple-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("teamMembers")}
          >
            Our Team Members
          </button>
        </div>

        {activeTab === "socialLinks" ? <SocialLinks /> : <TeamMembers />}
      </div>
    </div>
  );
};
export default SettingsPage;
