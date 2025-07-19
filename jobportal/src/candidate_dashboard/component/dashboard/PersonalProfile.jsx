import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
export default function PersnolProfile({ user }) {
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState("");
  console.log("User:", userinfo);
  console.log('hey :..',`${import.meta.env.VITE_BACKEND_URL}${user.image}`);


  console.log("User Info:", userinfo.name);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const userId = userInfo?.id;
    const fetchUserData = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${userId}`);
            const userData = response.data;
            // console.log("User Data:", userData);
            setUserinfo(userData);
        }catch(err){
          console.error("Error fetching user data:", err);
        }
    }
    fetchUserData();
  },[])
  return (
    <div>
      {userinfo   ? (
        
           <div className="w-80 flex flex-col bg-white shadow-lg rounded-xl p-6">
    
      <div className="text-center ">
        <img
  src={`${import.meta.env.VITE_BACKEND_URL}${userinfo.image}`}
  alt="Profile"
  className="w-20 h-20 mx-auto rounded-full object-cover bg-zinc-200"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://imgs.search.brave.com/n24eamZZyFy2YdTSYarsWPVTDFMgxdJj-gUWTIGoYqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzkzLzI3/LzM2MF9GXzU4OTkz/Mjc4Ml92UUFFQVpo/SG5xMVFDR3U1aWt3/cllhUUQwTW11cm0w/Ti5qcGc";
  }}
/>

        <h2 className="text-lg font-semibold mt-2">{userinfo.firstname} {userinfo.lastname}</h2>
        <p className="text-gray-500">{userinfo.profile}</p>
      </div>

        {/* Skills */}
        <div className=" ">
  <h3 className="text-gray-700 font-medium">Skill</h3>
  <div className="overflow-hidden mt-2 mb-6" style={{ maxHeight: '4.5rem' }}>
    <div className="flex flex-wrap gap-2">
      {userinfo.skills?.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm whitespace-nowrap"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>



    
      <div className=''></div>
      {/* work experience */}
      <div className="relative  ">
        <h3 className="text-gray-700 font-medium">Work Experience</h3>
        <div className="mt-2 space-y-2">
         {userinfo.workExperience.map((exp, index) => (
  <div
    key={index}
    className="w-full md:w-full bg-white shadow-md border border-gray-500 rounded-xl p-5 mb-4 transition hover:shadow-lg"
  >
    <div className="flex items-center justify-between mb-3">
      <div>
        <h3 className="text-lg font-semibold text-[#4640DE]">{exp.jobTitle}</h3>
        <p className="text-sm text-gray-600">{exp.company}</p>
      </div>
      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
        {exp.employmentType}
      </div>
    </div>

    <div className="text-sm text-gray-700 space-y-1">
      <p><span className="font-medium">Industry:</span> {exp.industry}</p>
      <p><span className="font-medium">Location:</span> {exp.location}</p>
      {/* <p>
        <span className="font-medium">Duration:</span>{' '}
        {exp.StartDate} to {exp.EndDate}
      </p> */}
      {/* <p><span className="font-medium">Salary:</span> ₹{exp.salary}</p> */}
    </div>
  </div>
))}

        </div>
      </div>

     
    
      
      <button className="w-full  bg-blue-600 text-white py-2 rounded-lg font-medium" onClick={()=>navigate('/candidate_dashboard/cand_settings')}>
        Edit Profile
      </button>
    </div>
       
      ): (
        <div className="w-80 bg-white shadow-lg rounded-xl p-6">
          <p className="text-center text-gray-500">No user data available</p>
          <p></p>
        </div>
      )}
    </div>
  )
}
