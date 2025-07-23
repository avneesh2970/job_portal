import React, { useState, useEffect } from 'react';
import { Eye, ChevronDown, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import ApplicantView from './ApplicantView';
import axios from 'axios';
export default function CompanyJobListing() {
  const [jobListings, setJobListings] = useState([]);
  

  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState("Feb 19 - Mar 25");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortOption, setSortOption] = useState("Latest");
  const [selectedJob, setSelectedJob] = useState(null);
  const [job, setpost] = useState('')

  const sortOptions = ["Latest", "Oldest", "Most Applicants", "Fewest Applicants", "Alphabetical"];

  const getStatusStyle = (status) => {
    return status === "Open" 
      ? "text-green-500 border border-green-200 bg-green-50" 
      : "text-red-500 border border-red-200 bg-red-50";
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) return;
  
    const userInfo = JSON.parse(user);
    const user_email = userInfo.email;
    console.log("User Email:", user_email);
  
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`)
      .then((response) => {
        const jobs = response.data;
        // {
        //   jobs.map((job)=>{ (job.postedBy)})
        // }
        const filteredJobs = jobs.filter((job) => job.postedBy === user_email);
        console.log("Filtered Jobs:", filteredJobs);
        
        setJobListings(filteredJobs);
        

        
        
        
      })
      .catch((err) => console.error("❌ Error fetching jobs:", err));
  }, []);

  

  const getJobTypeStyle = (type) => {
    switch(type) {
      case "Fulltime":
        return "text-indigo-600 bg-indigo-100 border border-indigo-200";
      case "Freelancer":
        return "text-purple-600 bg-purple-100 border border-purple-200";
      case "Part Time":
        return "text-blue-600 bg-blue-100 border border-blue-200";
      default:
        return "text-gray-600 bg-gray-100 border border-gray-200";
    }
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowSortOptions(false);
    
    // Implement sort logic
    let sortedListings = [...jobListings];
    
    switch(option) {
      case "Latest":
        sortedListings.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
        break;
      case "Oldest":
        sortedListings.sort((a, b) => new Date(a.datePosted) - new Date(b.datePosted));
        break;
      case "Most Applicants":
        sortedListings.sort((a, b) => b.applicants - a.applicants);
        break;
      case "Fewest Applicants":
        sortedListings.sort((a, b) => a.applicants - b.applicants);
        break;
      case "Alphabetical":
        sortedListings.sort((a, b) => a.role.localeCompare(b.role));
        break;
      default:
        break;
    }
    
    setJobListings(sortedListings);
  };

  // Calendar functionality simulation
  const handleDateChange = (newRange) => {
    setDateRange(newRange);
    setShowDatePicker(false);
    // In a real implementation, you would filter jobs based on the date range
  };

  // View applicants for a job
  const handleViewApplicants = (job) => {
    setSelectedJob(job);
  };

  // Back to job listing
  const handleBackToListing = () => {
    setSelectedJob(null);
  };

  // If a job is selected, show the applicant view component
  if (selectedJob) {
    return <ApplicantView job={selectedJob} onBack={handleBackToListing} />;
  }

  return (
    <div className="w-full bg-white p-4">
      <div className="flex justify-between items-center py-4">
        <div className="pb-4">
          <h2 className="text-xl font-semibold text-gray-800">Job Listing</h2>
          <p className="text-sm text-gray-500">Here is your jobs listing status from {dateRange}.</p>
        </div>
        <div className="flex items-center space-x-2">
          {/* Sort By Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center space-x-2 px-4 py-2 border rounded-md bg-white text-sm"
              onClick={() => setShowSortOptions(!showSortOptions)}
            >
              <span>Sort by</span>
              <ChevronDown size={16} />
            </button>
            
            {showSortOptions && (
              <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 w-48">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    onClick={() => handleSortChange(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Date Range Picker */}
          <div className="relative">
            <button 
              className="flex items-center space-x-2 px-4 py-2 border rounded-md bg-white text-sm"
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              <Calendar size={16} />
              <span>{dateRange}</span>
            </button>
            
            {showDatePicker && (
              <div className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-lg z-10 p-4">
                <div className="flex flex-col space-y-2">
                  <button 
                    className="text-left hover:bg-gray-50 p-2 rounded"
                    onClick={() => handleDateChange("Jan 1 - Jan 31")}
                  >
                    Jan 1 - Jan 31
                  </button>
                  <button 
                    className="text-left hover:bg-gray-50 p-2 rounded"
                    onClick={() => handleDateChange("Feb 1 - Feb 28")}
                  >
                    Feb 1 - Feb 28
                  </button>
                  <button 
                    className="text-left hover:bg-gray-50 p-2 rounded"
                    onClick={() => handleDateChange("Feb 19 - Mar 25")}
                  >
                    Feb 19 - Mar 25
                  </button>
                  <button 
                    className="text-left hover:bg-gray-50 p-2 rounded"
                    onClick={() => handleDateChange("Mar 1 - Mar 31")}
                  >
                    Mar 1 - Mar 31
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Listings Table */}
      <div className="rounded-lg border hidden md:flex flex-col border-gray-200 overflow-hidden">
        <div className="grid grid-cols-7 gap-4 py-3 px-4 text-sm text-gray-500 border-b border-gray-200 bg-gray-50">
          <div className="col-span-1">Roles</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2">Date Posted</div>
         
          <div className="col-span-2">Job Type</div>
          <div className="col-span-1 text-center">Applicants</div>
         
        </div>

        {jobListings.map((job) => (
          <div key={job.id} className="grid grid-cols-7 gap-4 py-6 px-4 border-b border-gray-200 items-center text-sm hover:bg-gray-50">
            <div className="col-span-1 font-medium text-gray-800">{job.jobTitle}</div>
            <div className="col-span-1">
              <span className={`px-4 py-1 rounded-full text-xs ${getStatusStyle(job.status)}`}>
               Open
              </span>
            </div>
            <div className="col-span-2 text-gray-600">{job.createdAt}</div>
            
            <div className="col-span-2">
              {job.employmentType && job.employmentType.map((type, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                {type}
              </span>
))}
            </div>
            <div className="col-span-1 text-center">{job.applicants}</div>
           
          </div>
        ))}
      </div>


    <div className='flex md:hidden  rounded-sm'>
      <div className="flex  flex-wrap justify-center items-center gap-4 p-4">
        {jobListings.map((job) => (
          <div key={job.id} className="p-4 w-72 h-44 border border-blue-400 rounded-lg hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">{job.jobTitle}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(job.status)}`}>
                Open
              </span>
              <span className={`px-3 py-1 rounded-full text-xs ${getJobTypeStyle(job.employmentType[0])}`}>
                {job.employmentType[0]}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{job.createdAt}</p>
            <button 
              className="my-4 px-4  py-2 border border-solid border-blue-400  text-blue-400 rounded-md"
              onClick={() => handleViewApplicants(job)}
            >
              No of Applicants
            </button>
          </div>
        ))}
      </div>
    </div>

      {/* Pagination */}
      {/* <div className="flex justify-end items-center mt-8 space-x-1">
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
      </div> */}
    </div>
  );
}
