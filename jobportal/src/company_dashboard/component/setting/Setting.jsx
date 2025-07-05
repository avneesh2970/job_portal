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
      const response = await fetch("http://localhost:4000/api/v1/socialMediaLinks", {
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

const TeamMembers = () => {
  const [addMemberModal, setAddMemberModal] = useState(false);
  const [isNewMemberOpen, setIsNewMemberOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    console.log("Updated members list:", members);
    getAllMembers();
  }, []); // Logs whenever members state updates

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    department: "",
    joinDate: "",
    instagram: "",
    linkedin: "",
    portfolio: ""
  });

  const { fullName, email, role, department, joinDate, instagram, linkedin, portfolio } = formData


  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);    

    try {
      // Add New Member (POST Request)
      const response = await fetch("http://localhost:4000/api/v1/teamMember", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save member");

      const data = await response.json();
      console.log("Member added successfully:", data);
      toast.success("Member added successfully!");

      setAddMemberModal(false);
      setIsNewMemberOpen(true)

      // Reset Form
      setFormData({
        fullName: "",
        email: "",
        role: "",
        department: "",
        joinDate: "",
        instagram: "",
        linkedin: "",
        portfolio: ""
      });

      // Fetch Updated Members List Immediately
      await getAllMembers();  // Ensure it's awaited to complete fetching
    } catch (error) {
      console.error("Failed to add member:", error);
      toast.error("Failed to add member");
    }
  };

  // Fetch All Members (Separate Function)
  const getAllMembers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/getAllMember", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to fetch members");

      const data = await response.json();
      console.log("Members retrieved successfully:", data);

      // Assuming you have a state to store members, update it
      setMembers(data.members);

      // toast.success("Members retrieved successfully");
    } catch (error) {
      console.error("Failed to fetch members:", error);
      toast.error("Failed to fetch members");
    }
  };

  // Calculate total pages
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(members.length / ITEMS_PER_PAGE);

  // Get data for the current page
  const paginatedMembers = members.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );


  return (
    <div className={`relative h-screen ${addMemberModal || isNewMemberOpen ? "" : ""}`}>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="text-lg font-semibold">Basic Information</p>
          <p className="text-sm text-gray-500">Add Team Members of your company</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm text-gray-700">Total Members: {members.length}</p>
          <button
            onClick={() => setAddMemberModal(!addMemberModal)}
            className="cursor-pointer flex items-center gap-2 border rounded-lg py-2 px-4 text-blue-600 bg-blue-100">
            <FaPlus />
            Add Members
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedMembers.map((member) => (
            <div key={member._id} className="flex flex-col items-center p-4 border rounded-lg text-center shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
                alt={member.fullName}
                className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-200"
              />
              <h3 className="mt-2 font-semibold">{member.fullName}</h3>
              <p className="text-gray-500">{member.role} - {member.department}</p>
              <div className="flex gap-4 mt-4">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <RiLinkedinBoxLine className="text-2xl text-blue-600 hover:text-blue-800 transition" />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl hover:text-pink-800 transition" />
                  </a>
                )}
                {member.portfolio && (
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                    <FaGlobeAfrica className="text-2xl hover:text-gray-900 transition" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
            disabled={currentPage === 1}
          >
            {"<"}
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>

      {addMemberModal && (
        <div className="absolute -top-32 left-[44%] transform -translate-x-1/2 w-[35%] max-w-lg bg-white 
        p-6 rounded-lg shadow-2xl">
          <div className="flex gap-2 items-center"></div>
          <h2 className="text-lg font-semibold mt-4">Personal Information</h2>
          <form className="space-y-4 mt-2" onSubmit={handleOnSubmit}>
            <input className="w-full border p-2 rounded" type="text" placeholder="Full Name*" name="fullName" value={fullName} onChange={handleOnChange} />
            <input className="w-full border p-2 rounded" type="email" placeholder="Email Address" name="email" value={email} onChange={handleOnChange} />
            <input className="w-full border p-2 rounded" type="text" placeholder="Role*" name="role" value={role} onChange={handleOnChange} />
            <input className="w-full border p-2 rounded" type="text" placeholder="Department*" name="department" value={department} onChange={handleOnChange} />
            <input className="w-full border p-2 rounded" type="date" placeholder="Join Date*" name="joinDate" value={joinDate} onChange={handleOnChange} />

            <h2 className="text-lg font-semibold mt-4">Links</h2>
            <input className="w-full border p-2 rounded" type="text" placeholder="LinkedIn URL*" name="linkedin" value={linkedin} onChange={handleOnChange} />
            <input className="w-full border p-2 rounded" type="text" placeholder="Instagram URL*" name="instagram" value={instagram} onChange={handleOnChange} />
            <input className="w-full border p-2 rounded" type="text" placeholder="Portfolio URL*" name="portfolio" value={portfolio} onChange={handleOnChange} />

            <div className="flex justify-between">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">Save Changes</button>
            </div>
            <button onClick={() => setAddMemberModal(false)} className="text-red-500 mt-2 w-full">Cancel</button>
          </form>
        </div>
      )}

      {/* Success Modal */}
      {isNewMemberOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <AiOutlineClose size={20} onClick={() => setIsNewMemberOpen(false)} />
            </button>
            <MdCheckCircle size={50} className="text-green-500 mx-auto" />
            <h2 className="text-xl font-semibold mt-3">New Member Added Successfully!</h2>
            <p className="text-gray-500 mt-2">Welcome aboard! Your account is now active.</p>
            <Link to="/">
              <button className="mt-4 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-100 transition">
                Back to Dashboard
              </button>
            </Link>
          </div>
        </div>
      )}
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
