import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";
import JobCard from "./Jobcard";
import Pagination from "./Pagination";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Bell } from "lucide-react";
import axios from "axios";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

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
    const [isLoading, setIsLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(jobs);
    const [selectedFilters, setSelectedFilters] = useState({
        'Job Type': [],
        'Categories': [],
        'Salary': [],
        'Experience': [],
        'Location': []
    });


    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
                setJobs(response.data); // Adjust based on your API response shape
                setFilteredJobs(response.data); // set initially
                setIsLoading(false);


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
                job.companyName.toLowerCase().includes(keyword)
                // ||
                // job.aboutCompany.toLowerCase().includes(keyword)
            );
            setFilteredJobs(filtered);
        }
    }, [searchKeyword, jobs]);


    const filterOptions = {
        'Job Type': ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
        'Categories': ['Technology', 'Marketing', 'Sales', 'Design', 'Finance'],
        'Salary': ['$0-$1k', '$1k-$5k', '$5k-$10k', '$10k+'],
        'Experience': ['Entry Level', '1-3 years', '3-5 years', '5+ years'],
        'Location': ['Remote', 'New York', 'San Francisco', 'London', 'Berlin']
    };

    // Handle filter dropdown toggle
    const handleFilterClick = (filter, index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    // Handle option selection
    const handleOptionSelect = (option, filterType) => {
        setSelectedFilters(prev => {
            const currentSelections = prev[filterType] || [];
            const isSelected = currentSelections.includes(option);

            return {
                ...prev,
                [filterType]: isSelected
                    ? currentSelections.filter(item => item !== option)
                    : [...currentSelections, option]
            };
        });

        // Close dropdown after selection
        setActiveDropdown(null);
    };


    // Remove individual filter
    const removeFilter = (filterType, option) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterType]: prev[filterType].filter(item => item !== option)
        }));
    };

    // Clear all filters
    const clearAllFilters = () => {
        setSelectedFilters({
            'Job Type': [],
            'Categories': [],
            'Salary': [],
            'Experience': [],
            'Location': []
        });
    };

    /// Close dropdown when clicking outside

    const handleClickOutside = (event) => {
        if (!event.target.closest('.dropdown-container')) {
            setActiveDropdown(null);
        }
    };


    // Filter jobs based on selected filters
    useEffect(() => {
        let filtered = jobs;

        // Apply Job Type filter
        if (selectedFilters['Job Type'].length > 0) {
            filtered = filtered.filter(job =>
                job.employmentType.some(type =>
                    selectedFilters['Job Type'].includes(type)
                )
            );
        }

        // Apply Categories filter
        if (selectedFilters['Categories'].length > 0) {
            filtered = filtered.filter(job =>
                job.categories.some(category =>
                    selectedFilters['Categories'].includes(category)
                )
            );
        }

        // Apply Location filter
        if (selectedFilters['Location'].length > 0) {
            filtered = filtered.filter(job =>
                selectedFilters['Location'].includes(job.location)
            );
        }

        // Apply Salary filter (you'll need to adjust this based on your salary structure)
        if (selectedFilters['Salary'].length > 0) {
            filtered = filtered.filter(job => {
                const salary = job.sallery || job.salary || 0;
                return selectedFilters['Salary'].some(range => {
                    switch (range) {
                        case '$0-$1k': return salary >= 0 && salary <= 1000;
                        case '$1k-$5k': return salary > 1000 && salary <= 5000;
                        case '$5k-$10k': return salary > 5000 && salary <= 10000;
                        case '$10k+': return salary > 10000;
                        default: return true;
                    }
                });
            });
        }

        // Apply Experience filter (you might need to add experience field to your job data)
        if (selectedFilters['Experience'].length > 0) {
            // This is a placeholder - you'll need to add experience data to your jobs
            // For now, it won't filter anything
        }

        setFilteredJobs(filtered);
    }, [selectedFilters, jobs]);


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

                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className=" text-blue-400 border px-4 py-1.5 text-lg mr-2.5 rounded-lg transition-colors duration-200"
                        >
                            {isFilterOpen ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>


                </div>
                {/* Filter Section */}
                {isFilterOpen && (
                    <div className="mt-4">
                        {/* Filter Dropdowns */}
                        <div className="flex flex-wrap gap-4">
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
                                                        onClick={() => handleOptionSelect(option, filter)}
                                                        className={`w-full text-left px-3 py-2 text-sm rounded transition-colors duration-150 flex items-center justify-between ${selectedFilters[filter].includes(option)
                                                                ? 'bg-[#f0ebff] text-[#685bc7] font-medium'
                                                                : 'text-gray-700 hover:bg-[#f0ebff] hover:text-[#685bc7]'
                                                            }`}
                                                    >
                                                        {option}
                                                        {selectedFilters[filter].includes(option) && (
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Active Filters Display */}
                        {Object.values(selectedFilters).some(filters => filters.length > 0) && (
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-sm font-medium text-gray-700">Active Filters:</h3>
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-sm text-red-600 hover:text-red-800 transition-colors duration-200"
                                    >
                                        Clear All
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {Object.entries(selectedFilters).map(([filterType, options]) =>
                                        options.map(option => (
                                            <span
                                                key={`${filterType}-${option}`}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                                            >
                                                {option}
                                                <button
                                                    onClick={() => removeFilter(filterType, option)}
                                                    className="ml-2 text-blue-600 hover:text-blue-800"
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </span>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Results Count */}
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">
                                Showing {filteredJobs.length} of {jobs.length} jobs
                            </p>
                        </div>
                    </div>
                )}

                {/* Job Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {filteredJobs.map((items, index) => (
                        <JobCard key={items._id} jobs={items} />
                    ))}
                </div>

                {/* No Results Message */}
                {isLoading ? (
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <p className="text-gray-400 text-3xl font-light animate-pulse">
                                Loading jobs...
                            </p>
                            <div className="mt-6 flex justify-center space-x-2">
                                <div className="w-3 h-3 bg-violet-400 rounded-full animate-bounce"></div>
                                <div className="w-3 h-3 bg-violet-400/80 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-3 h-3 bg-violet-400/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        </div>
                    </div>
                ) : filteredJobs.length === 0 ? (
                    <div className="flex items-center justify-center h-64">
                        <p className="text-gray-500">Currently No Jobs Available</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6 mt-6">
                        {filteredJobs.map((items, index) => (
                            <JobCard key={items.id} jobs={items} />
                        ))}
                    </div>
                )}

                {/* Job Grid */}


                {/* Pagination */}
                <div className="mt-8  flex justify-end">
                    <Pagination totalJobs={totalJobs} jobsPerPage={jobsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            </main>
        </div>
    );
}

export default FindJob;
