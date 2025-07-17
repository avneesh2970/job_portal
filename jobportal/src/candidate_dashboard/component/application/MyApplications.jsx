import React, { use, useState, useEffect } from 'react';
import Arrow from "./../assets/ProfileImages/arrow-down-01-sharp.png";
import logo1 from "./../assets/companyLogo/CompanyLogo.png";

import horizontal from "./../assets/companyLogo/CompanyLogo.png"
import axios from 'axios';


const MyApplications = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [applications, setApplications] = useState()

  //sample data

  useEffect(() => {
  const fetchAppliedJobs = async () => {
    try {
      const data = JSON.parse(localStorage.getItem("user"));
      const user_id = data.id;
      console.log("User id:", user_id);
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/user/${user_id}/applied-jobs`);
      setApplications(response.data.user.applied);
      console.log("Applied jobs:", response.data.user.applied);
    } catch (err) {
      console.error("Error fetching applied jobs:", err);
    }
  };

  fetchAppliedJobs();
}, []);


  const tableMarginTop = isFilterOpen ? "mt-24" : "mt-3";

  return (

   <div className="ml-0 p-4 bg-zinc-100">
     <div className="flex flex-row items-center sm:items-center justify-between p-4 relative">
       <div>
         <h1 className="text-xl sm:text-2xl pl-4 sm:pl-0 font-semibold">My Application</h1>
         {/* <span className="text-[#A0A0A0] p-1">({applications.length})</span> */}
       </div>
       {/* <button
         className="flex gap-3 text-sm px-3 sm:px-4 py-2  sm:w-[96px] h-[38px] border border-[#C6C4F5] rounded-md text-[#4640DE] hover:bg-blue-100 mt-4 sm:mt-0"
         onClick={() => setIsFilterOpen(!isFilterOpen)}
       >
         Filter <img src={horizontal} alt="" />
       </button> */}

       {isFilterOpen && (
         <div className="absolute top-full left-0 w-full flex flex-wrap justify-between p-2 bg-white rounded-md mt-2">
           {['Job Type', 'Categories', 'Salary', 'Experience', 'Location', 'Location Range'].map((filter, index) => (
             <button
               key={index}
               className="w-full sm:w-[14%] sm:h-[6%] px-4 py-2 border text-nowrap rounded-full text-[#685bc7] border-[#c8bdf9] hover:bg-[#f0ebff] flex items-center justify-between my-2"
             >
               <span>{filter}</span>
               <img src={Arrow} alt="" className="ml-1 w-4 h-4" />
             </button>
           ))}
           <button className="px-4 py-2 border rounded-full text-gray-400 border-gray-300 cursor-not-allowed w-full sm:w-[14%] sm:h-[6%] my-2">
             Reset All
           </button>
         </div>
       )}
     </div>

     {/* Application table */}
     <div className={tableMarginTop}>
       <div className="hidden md:flex flex-col overflow-x-auto">
         <table className="w-full mt-4 min-w-[700px]">
           <thead className="text-[#A0A0A0]">
             <tr className="border-[#DEE0E4] border">
               <th className="text-left py-4 px-2">Company Name</th>
               <th className="text-left py-4">Location</th>
               <th className="text-left py-4">Applied Date</th>
               <th className="text-left py-4">Job Role</th>
               <th className="text-left py-4">Status</th>
               <th className="text-left py-4 pl-4">Action</th>
             </tr>
           </thead>
           <tbody>
            {Array.isArray(applications) &&
              applications.map((app, index) => (
               <tr key={index}>
                 <td className="py-3 flex items-center gap-1 ">
                   <img className="flex items-center justify-center object-contain w-8 h-10" src={app?.job?.companyLogo} alt="" />
                   <div>
                     <div className="font-semibold">{app?.job?.companyName}</div>
                     <div className="text-sm text-gray-500">{app?.type}</div>
                   </div>
                 </td>
                 <td className="py-3">{app.job?.location}</td>
                 <td className="py-3">{new Date(app.appliedAt).toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric"
})}</td>
                 <td className="py-3 ">{app?.job?.jobTitle}</td>
                <td className="font-medium text-sm   flex justify-start items-center my-auto m-auto">
  <span
   className={`px-3 -mt-14 py-2 flex justify-center items-center rounded-full text-sm font-semibold  transition-all duration-200
    ${
      app.status === "Submitted"
        ? "border border-amber-300 bg-amber-50 text-amber-600"
        : app.status === "Under Review"
        ? "border border-blue-300 bg-blue-50 text-blue-600"
        : app.status === "Interview"
        ? "border border-green-300 bg-green-50 text-green-600"
        : app.status === "Offered"
        ? "border border-green-400 bg-green-100 text-green-700"
        : app.status === "Rejected"
        ? "border border-red-300 bg-red-50 text-red-600"
        : "border border-gray-300 bg-gray-50 text-gray-600"
    }`}
  >
    {app?.status}
  </span>
</td>

                 {/* <td className="py-3">
                   <button className={`text-sm w-[95px] h-[34px] rounded-full ${app.statusColor}`}>
                     {app.status}
                   </button>
                 </td> */}
                 <td className="py-3">
                   <button className="text-sm px-4 py-2 border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50">
                     View Detail
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
       <div className='flex flex-col md:hidden'>
          {Array.isArray(applications) &&
            applications.map((app, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-md p-4 shadow hover:shadow-md mb-4">
                <div className="flex justify-around items-center gap-2">
                  <div className='flex items-center gap-2'>
                    <img className="w-12 h-12 object-contain" src={app?.job?.companyLogo} alt="" />
                     <div>
                  
                  
                    <h3 className="text-lg font-semibold">{app?.job?.companyName}</h3>
                    <p className="text-sm text-gray-500">{app?.job?.jobTitle}</p>
                    <p className="text-sm text-gray-500">{app?.type}</p>
                  </div>

                  </div>
                 
                  <div className='flex flex-col items-end'>
                  <div className="ml-auto">
                    <button className={`text-sm px-4 py-2 rounded-full ${app?.statusColor}`}>
                      {app?.status}
                    </button>
                    </div>
                  <div className="text-sm text-gray-500">
                    Applied: {new Date(app.appliedAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    })}
                    </div>
                    </div>
                </div>
                </div>))}
               
       </div>
     </div>
   </div>
 );
};

export default MyApplications;