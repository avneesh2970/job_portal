import React from 'react';
import { MapPin, Clock } from 'react-feather'; // Assuming you're using react-feather for icons

const JobCard = ({ job }) => {
  return (
    <div
      key={job.id}
      className="bg-white rounded-2xl max-w-[400px] min-h-[360px] shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="bg-blue-50 text-blue-600 px-3 py-1 text-sm rounded">{job.type}</span>
        <span className="text-gray-400 text-sm">{job.daysAgo}</span>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <img src={job.logo} alt={job.company} className="w-14 h-14 rounded-full" />
        <div>
          <h3 className="text-xl font-bold">{job.position}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>

      <div className="flex items-center text-gray-600 mt-4">
        <MapPin size={18} className="mr-2" />
        <span className="text-sm">{job.location}</span>
      </div>

      <div className="flex items-center text-gray-600 mt-2">
        <Clock size={18} className="mr-2" />
        <span className="text-sm">{job.experience}</span>
      </div>

      <p className="text-sm text-gray-500 mt-4">{job.description}</p>

      <div className="flex gap-4 mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full">
          Apply Now
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition w-full">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;