import React, { useState, useEffect } from 'react';
import { Meta, useSearchParams } from 'react-router-dom';
import Setting from './Setting';
import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import CompanyDetail from './CompanyDetail';


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
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/teamMember`, {
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
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/getAllMember`, {
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
        
  <div className="fixed  inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-2xl">
      <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
      <form className="space-y-4" onSubmit={handleOnSubmit}>
        <div className='flex w-full gap-3'>
          <input className="w-6/12 border p-2 rounded" type="text" placeholder="Full Name*" name="fullName" value={fullName} onChange={handleOnChange} />
          <input className="w-6/12 border p-2 rounded" type="email" placeholder="Email Address" name="email" value={email} onChange={handleOnChange} />
        </div>
       <div className='flex w-full gap-3'>
         <input className="w-6/12 border p-2 rounded" type="text" placeholder="Role*" name="role" value={role} onChange={handleOnChange} />
        <input className="w-6/12 border p-2 rounded" type="text" placeholder="Department*" name="department" value={department} onChange={handleOnChange} />
       </div>
        <input className="w-full border p-2 rounded" type="date" placeholder="Join Date*" name="joinDate" value={joinDate} onChange={handleOnChange} />

      

        <div className="flex justify-between gap-4">
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">Save Changes</button>
          <button type="button" onClick={() => setAddMemberModal(false)} className="text-red-500 border border-red-500 py-2 px-4 rounded-lg w-full">Cancel</button>
        </div>
      </form>
    </div>
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

function CompanyProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'Company_profile';
  const [activeTab, setActiveTab] = useState(tabFromUrl);
  const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem('token');
//       console.log('Token:', token);
//       const user = JSON.parse(localStorage.getItem('user'));
//       const userId = user.id
//       console.log('User ID:', userId);
//       try{
//          const userData = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${userId}`);
//        console.log('User data fetched:', userData.data);
//        setUserData(userData.data);


//       }catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     } 
   
//     fetchData();
//   },[])

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <section className='p-8'>
      <h1 className='font-semibold text-[24px] text-[#1C2638] pb-6'>Setting</h1>
      <div className='flex gap-4 p-4 border-b-1 border-[#DEE0E4]'>
        {["profile Detail",'Company_profile', 'team_members', 'login', ].map((tab) => (
          <p
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`cursor-pointer font-semibold text-[16px] ${
              activeTab === tab
                ? 'border-[#4640DE] text-[#4640DE] border-b-2'
                : 'border-b-0 text-[#A0A0A0]'
            }`}
          >
            {tab === 'Company_profile' && ' Company_profile'}
            {tab === 'team_members' && 'team_members'}
            {/* {tab === 'login' && 'Login Details'} */}
            {/* {tab === 'Company Profile' && 'Profile Details'} */}
          </p>
        ))}
      </div>
          { activeTab === 'Company_profile' && <CompanyDetail data={userData} />}
        {activeTab === 'team_members' && <TeamMembers path="team_members" />}
      {/* {activeTab === 'login' && <Login />} */}
      {/* {activeTab === 'resume' && <Resume data={userData} />} */}
      {/* {activeTab === 'login' && <Login />} */}
    
    </section>
  );
}

export default CompanyProfile;












