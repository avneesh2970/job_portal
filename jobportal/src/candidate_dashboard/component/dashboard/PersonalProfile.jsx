import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
export default function PersnolProfile({ user }) {
  const [userinfo, setUserinfo] = useState("");
  console.log("User:", userinfo);
  console.log('hey :..',`${import.meta.env.VITE_BACKEND_URL}${user.image}`);

  console.log("User Info:", userinfo.name);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const userId = userInfo.id;
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
        
           <div className="w-80 bg-white shadow-lg rounded-xl p-6">
    
      <div className="text-center">
        <img  src={`${import.meta.env.VITE_BACKEND_URL}${userinfo.image}`} alt="Profile" className="w-20 h-20 mx-auto rounded-full" />
        <h2 className="text-lg font-semibold mt-2">{userinfo.name}</h2>
        <p className="text-gray-500">{userinfo.profile}</p>
      </div>

    
      <div className="mt-4">
        <h3 className="text-gray-700 font-medium">Personal Details</h3>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {user.personalDetails.map((detail, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-lg text-center text-sm">
              <p className="text-gray-500">{detail.label}</p>
              <p className="font-medium">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="mt-4">
        <h3 className="text-gray-700 font-medium">Work Experience</h3>
        <div className="mt-2 space-y-2">
          {user.experience.map((exp, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={exp.logo} alt="Company Logo" className="w-6 h-6" />
              <div>
                <p className="font-medium">{exp.role}</p>
                <p className="text-gray-500 text-sm">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="mt-4">
        <h3 className="text-gray-700 font-medium">Skill</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {user.skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium">
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
