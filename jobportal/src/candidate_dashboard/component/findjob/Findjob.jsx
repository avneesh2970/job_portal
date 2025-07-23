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
                <div>
                      {isFilterOpen && (
                    <div className="flex flex-wrap justify-between p-4 bg-white rounded-md mb-6">
                        {['Job Type', 'Categories', 'Salary', 'Experience', 'Location',].map((filter, index) => (
                            <button
                                key={index}
                                className="w-[14%] h-[5%] px-4 py-2 border rounded-full text-[#685bc7] border-[#c8bdf9] hover:bg-[#f0ebff] flex items-center justify-between"
                            >
                                <span>{filter}</span>
                                <RiArrowDropDownLine className="w-7 h-7 text-xl" />
                            </button>
                        ))}
                        <button className="px-4 py-2 border rounded-full text-gray-400 border-gray-300 cursor-not-allowed w-[13%] h-[8%]">
                            Reset All
                        </button>
                    </div>
                )}
                </div>

                

              
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
