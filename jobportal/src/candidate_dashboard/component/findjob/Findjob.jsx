import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
import JobCard from "./Jobcard";
import Pagination from "./Pagination";
// import Arrow from "./assets/ProfileImages/arrow-down-01-sharp.png";
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

    useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
        setJobs(response.data); // Adjust based on your API response shape
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

    return (
        <div className="flex min-h-screen font-sans text-[#333] bg-[#fafbfc] overflow-hidden">
            {/* Sidebar */}
            <main className="flex-1 p-4 w-full max-w-7xl mx-auto">
                {/* Top Bar */}
                <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-md">
                    <div className="hidden sm:flex relative  w-64 ml-[60%]">
                        <input type="text" placeholder="Search here..." className="w-full pl-4 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Bell className="text-gray-500 w-6 h-6 cursor-pointer" />
                        <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full" />
                        <div className="hidden sm:block">
                            <p className="text-sm font-medium">Natashia Bunny</p>
                            <p className="text-xs text-gray-500">UI/UX Designer</p>
                        </div>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="flex justify-between items-center flex-wrap mb-6 gap-4">
                    <div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1e1e1e]">All Jobs</h1>
                        <p className="text-sm text-gray-500">Showing {jobs.length} results</p>
                    </div>
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

                {isFilterOpen && (
                    <div className="flex flex-wrap justify-between p-4 bg-white rounded-md mb-6">
                        {['Job Type', 'Categories', 'Salary', 'Experience', 'Location', 'Location Range'].map((filter, index) => (
                            <button
                                key={index}
                                className="w-[14%] h-[5%] px-4 py-2 border rounded-full text-[#685bc7] border-[#c8bdf9] hover:bg-[#f0ebff] flex items-center justify-between"
                            >
                                <span>{filter}</span>
                                {/* <img src={Arrow} alt="" className="ml-1 w-4 h-4" /> */}
                            </button>
                        ))}
                        <button className="px-4 py-2 border rounded-full text-gray-400 border-gray-300 cursor-not-allowed w-[13%] h-[8%]">
                            Reset All
                        </button>
                    </div>
                )}
                {/* Job Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 mt-6">
                    {jobs.map((items , index) => (
                        <JobCard key={items.id} selected={index === 0} jobs={items} />
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
