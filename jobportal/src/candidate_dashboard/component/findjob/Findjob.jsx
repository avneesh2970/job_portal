import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
import JobCard from "./Jobcard";
import Pagination from "./Pagination";
import { RiArrowDropDownLine } from 'react-icons/ri'; 
import { Bell } from "lucide-react";
import axios from "axios";


function FindJob() {
    const jobsPerPage = 9;
    const totalJobs = 205;
    const jobList = new Array(totalJobs).fill(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);
    const [jobs, setJobs] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const user_id = user?.id;
    // console.log('User ID:', user_id);
 
    // console.log('userInfo', userInfo);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);


      const [activeDropdown, setActiveDropdown] = useState(null);
    
    useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
        setJobs(response.data); // Adjust based on your API response shape
        setFilteredJobs(response.data); // set initially

      
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
  if (searchKeyword.trim() === '') {
    setFilteredJobs(jobs); // If no keyword, show all jobs
  } else {
    const keyword = searchKeyword.toLowerCase();
    const filtered = jobs.filter(job =>
      job.jobTitle.toLowerCase().includes(keyword) ||
      job.companyName.toLowerCase().includes(keyword) ||
      job.aboutCompany.toLowerCase().includes(keyword)
    );
    setFilteredJobs(filtered);
  }
}, [searchKeyword, jobs]);


const filterOptions = {
    'Job Type': ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
    'Categories': ['Technology', 'Marketing', 'Sales', 'Design', 'Finance'],
    'Salary': ['$0-$50k', '$50k-$100k', '$100k-$150k', '$150k+'],
    'Experience': ['Entry Level', '1-3 years', '3-5 years', '5+ years'],
    'Location': ['Remote', 'New York', 'San Francisco', 'London', 'Berlin']
  };

  const handleFilterClick = (filter, index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close if already open
    } else {
      setActiveDropdown(index); // Open the clicked dropdown
    }
  };

  const handleOptionSelect = (option) => {
    console.log('Selected:', option);
    setActiveDropdown(null); // Close dropdown after selection
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-container')) {
      setActiveDropdown(null);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

 const filters = ['Job Type', 'Categories', 'Salary', 'Experience', 'Location'];


    return (
        <div className="flex min-h-screen font-sans text-[#333] bg-[#fafbfc] overflow-hidden">
            {/* Sidebar */}
            <main className="flex-1 p-4 w-full max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                     <div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1e1e1e]">All Jobs</h1>
                        <p className="text-sm text-gray-500">Showing {filteredJobs.length} results</p>
                    </div>
                {/* Top Bar */}
                <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
                    <div className="hidden sm:flex relative  w-[700px] ml-20%]">
                        <input 
                        type="text" 
                        placeholder="Search keyword ..."
                         value={searchKeyword}
                         onChange={(e) => setSearchKeyword(e.target.value)} 
                      className="w-full pl-4 pr-4 py-2 rounded-lg outline-none border-2 border-gray-300 focus:outline-none"

                       />
                        <button
                        // optional search handler
                        className="absolute right-0 px-3.5 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-3 rounded-md text-sm hover:bg-blue-600 transition"
                    >
                        Search out of {jobs.length} jobs
                    </button>
                       
                    </div>
                   
                </div>
                  {/* Job Listings */}
                <div className="flex justify-between items-center flex-wrap  gap-4">
                   
                    <div className="flex gap-2 sm:gap-3">
                        <button
                            className="text-sm px-3 sm:px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            Filter
                        </button>
                        <button
                            className="sm:hidden text-sm px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
               
              
                </div>
                 {
                    isFilterOpen && (
                         <div className="flex flex-wrap gap-4 mt-4">
                     {filters.map((filter, index) => (
          <div key={index} className="dropdown-container relative">
            <button
              onClick={() => handleFilterClick(filter, index)}
              className="w-auto min-w-[120px] px-4 py-2 border rounded-full text-[#685bc7] border-[#c8bdf9] hover:bg-[#f0ebff] flex items-center justify-between bg-white transition-colors duration-200"
            >
              <span className="mr-2">{filter}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Modal Dropdown */}
            {activeDropdown === index && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                <div className="p-2">
                  <div className="text-sm font-medium text-gray-700 px-3 py-2 border-b">
                    Select {filter}
                  </div>
                  {filterOptions[filter]?.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleOptionSelect(option)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-[#f0ebff] hover:text-[#685bc7] rounded transition-colors duration-150"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
            </div>
            ))}
            </div>
                    )
                }
            
                

              
                {/* Job Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 mt-6">
                    {filteredJobs.map((items , index) => (
                        <JobCard key={items.id}  jobs={items} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8  flex justify-end">
                    <Pagination totalJobs={totalJobs} jobsPerPage={jobsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            </main>
        </div>
    );
}

export default FindJob;
