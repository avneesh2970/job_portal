import React, { useState } from 'react';
import Arrow from "../../assets/ProfileImages/arrow-down-01-sharp.png";
import logo1 from "../../assets/companyLogo/CompanyLogo.png";
import logo2 from "../../assets/companyLogo/CompanyLogo.png";
import logo3 from "../../assets/companyLogo/CompanyLogo.png";
import logo4 from "../../assets/companyLogo/CompanyLogo.png";
import logo5 from "../../assets/companyLogo/CompanyLogo.png";
import logo6 from "../../assets/companyLogo/CompanyLogo.png";
import logo7 from "../../assets/companyLogo/CompanyLogo.png";
import logo8 from "../../assets/companyLogo/CompanyLogo.png";
import horizontal from "../../assets/companyLogo/CompanyLogo.png"


const MyApplications = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  //sample data
  const applications = [
    {
      company: 'Stripe',
      logo: logo1, 
      type: 'Hybrid | Full-time',
      location: 'Nagpur, India',
      appliedDate: '12 March, 2025',
      jobRole: 'UI/UX Designer',
      status: 'Applied',
      statusColor: 'border-blue-600 border text-blue-600',
    },
    {
      company: 'Square',
      logo: logo2,
      type: 'Hybrid Full-time',
      location: 'Nagpur, India',
      appliedDate: '12 March, 2025',
      jobRole: 'UI/UX Designer',
      status: 'Interview',
      statusColor: 'border border-orange-600 text-orange-600',
    },
    {
      company: 'Maze',
      logo: logo3,
      type: 'Hybrid Full-time',
      location: 'Nagpur, India',
      appliedDate: '12 March, 2025',
      jobRole: 'UI/UX Designer',
      status: 'Interview',
      statusColor: 'border border-orange-600 text-orange-600',
    },
    {
      company: 'Canva',
      logo: logo4,
      type: 'Hybrid Full-time',
      location: 'Nagpur, India',
      appliedDate: '12 March, 2025',
      jobRole: 'UI/UX Designer',
      status: 'Declined',
      statusColor: 'border-red-600 border  text-red-600',
    },
    {
      company: 'Coinbase',
      logo: logo5, 
      type: 'Hybrid Full-time',
      location: 'Nagpur, India',
      appliedDate: '12 March, 2025',
      jobRole: 'UI/UX Designer',
      status: 'Interview',
      statusColor: 'border border-orange-600 text-orange-600',
    },
    {
      company: 'Udacity',
      logo: logo6,
      type: 'Hybrid Full-time',
      location: 'Nagpur, India',
      appliedDate: '12 March, 2025',
      jobRole: 'UI/UX Designer',
      status: 'Interview',
      statusColor: 'border border-orange-600 text-orange-600',
    },
    {
      company: 'Nubank',
      logo: logo7, 
      type: 'Hybrid Full-time',
      location: 'Nagpur, India',
      appliedDate: '12 March, 2025',
      jobRole: 'UI/UX Designer',
      status: 'Interview',
      statusColor: 'border border-orange-600 text-orange-600',
    },
    {
      company: 'Numbrs',
      logo: logo8, 
      type: 'Hybrid Full-time',
      location: 'Nagpur, India',
      appliedDate: '12 March, 2025',
      jobRole: 'UI/UX Designer',
      status: 'Interview',
      statusColor: 'border border-orange-600 text-orange-600',
    },
   
  ];

  const tableMarginTop = isFilterOpen ? "mt-24" : "mt-3";

  return (

   <div className="ml-0 p-4 bg-zinc-100">
     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 relative">
       <div>
         <h1 className="text-xl sm:text-2xl pl-4 sm:pl-0 font-semibold">My Application</h1>
         <span className="text-[#A0A0A0] p-1">({applications.length})</span>
       </div>
       <button
         className="flex gap-3 text-sm px-3 sm:px-4 py-2 w-full sm:w-[96px] h-[38px] border border-[#C6C4F5] rounded-md text-[#4640DE] hover:bg-blue-100 mt-4 sm:mt-0"
         onClick={() => setIsFilterOpen(!isFilterOpen)}
       >
         Filter <img src={horizontal} alt="" />
       </button>

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
       <div className="overflow-x-auto">
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
             {applications.map((app, index) => (
               <tr key={index}>
                 <td className="py-3 flex items-center gap-2 pl-3">
                   <img className="flex items-center justify-center object-contain w-10 h-10" src={app.logo} alt="" />
                   <div>
                     <div className="font-semibold">{app.company}</div>
                     <div className="text-sm text-gray-500">{app.type}</div>
                   </div>
                 </td>
                 <td className="py-3">{app.location}</td>
                 <td className="py-3">{app.appliedDate}</td>
                 <td className="py-3">{app.jobRole}</td>
                 <td className="py-3">
                   <button className={`text-sm w-[95px] h-[34px] rounded-full ${app.statusColor}`}>
                     {app.status}
                   </button>
                 </td>
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
     </div>
   </div>
 );
};

export default MyApplications;
