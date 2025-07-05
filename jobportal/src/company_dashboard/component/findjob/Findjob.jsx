import React, { useState } from "react";

import JobCard from "./Jobcard";

import Arrow from '../../assets/ProfileImages/arrow-down-01-sharp.png'

import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Findjob() {
    
    const jobsPerPage = 9;
    const totalJobs = 205;
    const jobList = new Array(totalJobs).fill(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);
  return (
    <>
         {/* Job Listings */}
         <div className="flex justify-between items-center flex-wrap mb-6 gap-4">
                    <div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1e1e1e]">All Jobs</h1>
                        <p className="text-sm text-gray-500">(Showing {totalJobs} results)</p>
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
                                <img src={Arrow} alt="" className="ml-1 w-4 h-4" />
                            </button>
                        ))}
                        <button className="px-4 py-2 border rounded-full text-gray-400 border-gray-300 cursor-not-allowed w-[13%] h-[8%]">
                            Reset All
                        </button>
                    </div>
                )}
                {/* Job Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {currentJobs.map((_, index) => (
                        <JobCard key={index} selected={index === 0} />
                    ))}
                </div>
    </>
  )
}

export default Findjob