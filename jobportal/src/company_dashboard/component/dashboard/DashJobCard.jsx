import React from "react";

const DashJobCard = ({ companyLogo, jobTitle, companyName, location, employmentType }) => {
  return (
 <div className="p-4 h-full bg-white shadow-md rounded-lg border border-blue-500 border-solid hover:shadow-lg transition-shadow duration-300">

     
      <div className=" h-6/12 flex justify-between items-center">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-10 h-10 object-contain"
        />
        <div className="">
         {employmentType.map((type, index) => {
  return (
    <div className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full m-0.5" key={index}>
      {type}
    </div>
  );
})}
        </div>
      </div>

    
      <h2 className="text-lg font-semibold mt-2">{jobTitle}</h2>
      <p className="text-gray-500 text-sm">{companyName} • {location}</p>

     
    

      
     
    </div>
  );
};

export default DashJobCard;
