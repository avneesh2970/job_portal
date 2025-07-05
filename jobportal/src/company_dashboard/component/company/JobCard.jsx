import React from "react";

const JobCard = ({ jobTitle, company, location, description, logo, timeAgo, jobType }) => {
  return (
    <div className=" bg-white shadow-lg rounded-2xl p-5 border border-gray-200">
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">{jobType}</span>
        <span>{timeAgo}</span>
      </div>

      
      <div className="flex items-center gap-3 mt-4">
        <img src={logo} alt={company} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">{jobTitle}</h3>
          <p className="text-gray-500 text-sm">{company}, {location}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mt-3">{description}</p>

    
      <div className="flex gap-4 mt-4">
        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer">
          Apply Now
        </button>
        <button className="flex-1 border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
