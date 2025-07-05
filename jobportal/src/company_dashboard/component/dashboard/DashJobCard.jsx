import React from "react";

const DashJobCard = ({ companyLogo, jobTitle, companyName, location, employmentType }) => {
  return (
 <div className="p-4 bg-white shadow-md rounded-lg border border-blue-500 border-solid hover:shadow-lg transition-shadow duration-300">

     
      <div className="flex justify-between items-center">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
         {employmentType.map((type, index) => {
  return (
    <div className="space-x-2" key={index}>
      {type}
    </div>
  );
})}
        </span>
      </div>

    
      <h2 className="text-lg font-semibold mt-2">{jobTitle}</h2>
      <p className="text-gray-500 text-sm">{companyName} • {location}</p>

     
    

      
     
    </div>
  );
};

export default DashJobCard;
