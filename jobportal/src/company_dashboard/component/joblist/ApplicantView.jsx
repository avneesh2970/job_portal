import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import JobDetails from './CompanyJobDetails';

export default function ApplicantView({ job, onBack }) {
  const [activeTab, setActiveTab] = useState('applicants');
  
  // Mock applicant data
  const [applicantsData, setApplicantsData] = useState([
    {
      id: 1,
      name: "Ally Wales",
      avatar: "/api/placeholder/40/40",
      stage: "Interview",
      appliedDate: "17 March, 2025"
    },
    {
      id: 2,
      name: "Ally Wales",
      avatar: "/api/placeholder/40/40",
      stage: "Interview",
      appliedDate: "17 March, 2025"
    },
    {
      id: 3,
      name: "Ally Wales", 
      avatar: "/api/placeholder/40/40",
      stage: "Interview",
      appliedDate: "17 March, 2025"
    },
    {
      id: 4,
      name: "Ally Wales",
      avatar: "/api/placeholder/40/40",
      stage: "Interview",
      appliedDate: "17 March, 2025"
    },
    {
      id: 5,
      name: "Ally Wales",
      avatar: "/api/placeholder/40/40",
      stage: "Interview",
      appliedDate: "17 March, 2025"
    }
  ]);

  const [applicantPage, setApplicantPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // In a real implementation, you would filter applicants based on the search query
  };

  // If job details tab is active, show the JobDetails component
  if (activeTab === 'jobDetails') {
    return <JobDetails job={job} onBack={() => setActiveTab('applicants')} />;
  }

  return (
    <div className="w-full bg-white m-4">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-blue-600"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span>Back</span>
        </button>
      </div>

      <div className="flex items-center mb-8">
        <div className="bg-emerald-100 p-3 rounded-lg mr-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="4" fill="#10B981" fillOpacity="0.2"/>
            <path d="M20 12L24 16H28V28H12V16H16L20 12Z" fill="#10B981" fillOpacity="0.6"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{job.role}</h1>
          <p className="text-gray-500">Design • {job.jobType === "Fulltime" ? "Full-Time" : job.jobType} • 0/{job.needs} Hired</p>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          <button 
            className={`px-4 py-2 ${activeTab === 'applicants' ? 'border-b-2 border-blue-500 text-blue-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('applicants')}
          >
            Applicants
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'jobDetails' ? 'border-b-2 border-blue-500 text-blue-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('jobDetails')}
          >
            Job Details
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-800">Total Applicants : {job.applicants}</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Applicants" 
            className="px-4 py-2 pl-10 border rounded-lg"
            value={searchQuery}
            onChange={handleSearch}
          />
          <svg 
            className="absolute left-3 top-3 text-gray-400" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 border-b border-gray-200">
          <div className="text-sm text-gray-500 font-medium">Full Name</div>
          <div className="text-sm text-gray-500 font-medium">Hiring Stage</div>
          <div className="text-sm text-gray-500 font-medium">Applied Date</div>
          <div className="text-sm text-gray-500 font-medium">Action</div>
        </div>

        {applicantsData.map((applicant) => (
          <div key={applicant.id} className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 items-center">
            <div className="flex items-center">
              <img 
                src={applicant.avatar} 
                alt={applicant.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="font-medium text-gray-800">{applicant.name}</span>
            </div>
            <div>
              <span className="px-4 py-1 rounded-full text-orange-500 bg-orange-50 border border-orange-200 text-xs">
                {applicant.stage}
              </span>
            </div>
            <div className="text-gray-600">{applicant.appliedDate}</div>
            <div>
              <button className="px-4 py-1 text-blue-600 bg-blue-50 rounded-md text-sm">
                See Application
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-2">
        <button className="p-1 rounded-md hover:bg-gray-100">
          <ChevronLeft size={20} />
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white">
          1
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
          2
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
          3
        </button>
        
        <span className="mx-1">...</span>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
          7
        </button>
        
        <button className="p-1 rounded-md hover:bg-gray-100">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}