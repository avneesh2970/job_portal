
import React, { useState, useEffect } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SearchImage from "../photos/image12.png";
import axios from 'axios';
import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck } from 'lucide-react';
const Findjob = () => {

  const navigate = useNavigate();
  const [jobdata, setjobdata] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search inputs
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedCategory, setSelectedCategory] = useState("Select Category");

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(0);



  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  // console.log('currentJobs', currentJobs);


  const typeCounts = {
    'Full-time': 0,
    'Part-time': 0,
    'Remote': 0,
    'Internship': 0,
    'Sales': 0,
    'Design': 0,
    'Marketing': 0,
    'Bussiness': 0,
    'HumanResources': 0,
    'Technology': 0,
    'Engineering': 0

  };


  jobdata.forEach(job => {
    job.employmentType?.forEach(type => {
      if (typeCounts.hasOwnProperty(type)) {
        typeCounts[type]++;
      }
    });

    // Check categories
    job.categories?.forEach(category => {
      const normalizedCategory = category.replace(/\s+/g, '').toLowerCase(); // "Human Resources" => "humanresources"
      const matchedKey = Object.keys(typeCounts).find(key => key.toLowerCase() === normalizedCategory);
      if (matchedKey) {
        typeCounts[matchedKey]++;
      }
    });
  });





  const { ['Full-time']: fullTimeCount,
    ['Part-time']: partTimeCount,
    Remote: remoteCount,
    Internship: internshipCount,
    Design: designCount,
    Sales: salesCount,
    Marketing: marketingCount,
    Bussiness: businessCount,
    ['Human-Resources']: humanResourcesCount,
    Engineering: engineeringCount,
    Technology: technologyCount
  } = typeCounts;

  console.log('remoteCount', remoteCount);
  console.log('salesCount', salesCount);


  const salaryCounts = {
    below2k: 0,
    from2kTo4k: 0,
    from4kTo6k: 0,
    from6kTo8k: 0,
    from8kTo10k: 0,
    above10k: 0
  };
  console.log('below2k', salaryCounts.below2k);

  jobdata.forEach(job => {
    console.log('job.sallery', job.sallery);
    if (job.sallery) {
      const salary = job.sallery;

      if (salary < 2000) {
        salaryCounts.below2k++;
      } if (salary >= 2000 && salary <= 4000) {
        salaryCounts.from2kTo4k++;
      } if (salary >= 4000 && salary <= 6000) {
        salaryCounts.from4kTo6k++;
      } if (salary >= 6000 && salary <= 8000) {
        salaryCounts.from6kTo8k++;
      } if (salary >= 8000 && salary <= 10000) {
        salaryCounts.from8kTo10k++;
      } if (salary >= 10000) {
        salaryCounts.above10k++;
      }
    }
  });





  const filterConfigs = {
    jobTypes: [
      { id: "fullTime", label: "Full Time", count: fullTimeCount },
      { id: "partTime", label: "Part Time", count: partTimeCount },
      { id: "remote", label: "Remote", count: remoteCount || 0 },
      { id: "internship", label: "Internship", count: internshipCount }
    ],
    categories: [
      { id: "design", label: "Design", count: designCount || 0 },
      { id: "sales", label: "Sales", count: salesCount },
      { id: "marketing", label: "Marketing", count: marketingCount },
      { id: "bussiness", label: "Bussiness", count: businessCount },
      { id: "humanResources", label: "Human Resources", count: humanResourcesCount },
      { id: "engineering", label: "Engineering", count: engineeringCount },
      { id: "technology", label: "Technology", count: technologyCount }
    ],
    experience: [
      { id: "entry", label: "Entry Level" },
      { id: "year1", label: "1 Year" },
      { id: "year2", label: "2 Years" },
      { id: "year5", label: "5+ Years" },
      { id: "year10", label: "10+ Years" }
    ],
    salaryRange: [
      { id: "below2k", label: "0 - 2,000", count: salaryCounts.below2k },
      { id: "from2kTo4k", label: "2,000 - 4,000", count: salaryCounts.from2kTo4k },
      { id: "from4kTo6k", label: "4,000 - 6,000", count: salaryCounts.from4kTo6k },
      { id: "from6kTo8k", label: "6,000 - 8,000", count: salaryCounts.from6kTo8k },
      { id: "from8kTo10k", label: "8,000 - 10,000", count: salaryCounts.from8kTo10k },
      { id: "above10k", label: "10,000 and above", count: salaryCounts.above10k }
    ]
  };



  const [filters, setFilters] = useState({
    jobTypes: {},
    categories: {},
    experience: {},
    salaryRange: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
        console.log('data', data.data);
        setjobdata([...data.data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));

        // Apply filters immediately after fetching data
        applyFilters(data.data);
        setLoading(true)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Apply filters whenever filters state changes
  useEffect(() => {
    // applyFilters(jobdata);
    setCurrentPage(1);
  }, [filters]);

  const applyFilters = (jobs) => {
    // if (!jobs || !jobs.length) return;

    let filtered = [...jobs];
    console.log('filtered', filtered);

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(job =>
        job.jobTitle?.toLowerCase().includes(search) ||
        job.description?.toLowerCase().includes(search) ||
        job.company?.toLowerCase().includes(search) ||
        job.requiredSkills?.some(skill => skill.toLowerCase().includes(search))
      );
    }

    // Filter by location
    if (selectedLocation !== "Select Location") {
      filtered = filtered.filter(job =>
        job.location === selectedLocation ||
        (selectedLocation === "Remote" && job.location?.toLowerCase().includes("remote"))
      );
    }

    // Filter by category/department
    if (selectedCategory !== "Select Category") {
      filtered = filtered.filter(job =>
        job.department === selectedCategory ||
        job.technology === selectedCategory
      );
    }

    // Filter by job types
    const selectedJobTypes = Object.keys(filters.jobTypes).filter(key => filters.jobTypes[key]);
    if (selectedJobTypes.length > 0) {
      filtered = filtered.filter(job => {
        if (!job.employmentType) return false;

        // Map filter IDs to actual employment types
        const typeMap = {
          "fullTime": ["Full Time", "Full-Time"],
          "partTime": ["Part Time", "Part-Time"],
          "remote": ["Remote"],
          "internship": ["Internship", "Intern"]
        };

        return selectedJobTypes.some(typeId => {
          const matchTerms = typeMap[typeId] || [];
          return job.employmentType.some(type =>
            matchTerms.some(term => type.toLowerCase().includes(term.toLowerCase()))
          );
        });
      });
    }

    // Filter by categories
    const selectedCategories = Object.keys(filters.categories).filter(key => filters.categories[key]);
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(job => {
        // Map filter IDs to actual categories
        const categoryMap = {
          "design": ["Design", "UI/UX", "Graphics"],
          "sales": ["Sales"],
          "marketing": ["Marketing"],
          "bussiness": ["Bussiness", "Management"],
          "humanResources": ["Human Resources", "HR"],
          "engineering": ["Engineering"],
          "technology": ["Technology", "IT", "Software", "Development"]
        };

        return selectedCategories.some(catId => {
          const matchTerms = categoryMap[catId] || [];
          return matchTerms.some(term =>
            job.department?.toLowerCase().includes(term.toLowerCase()) ||
            job.category?.toLowerCase().includes(term.toLowerCase()) ||
            job.technology?.toLowerCase().includes(term.toLowerCase())
          );
        });
      });
    }

    // Filter by experience
    const selectedExperience = Object.keys(filters.experience).filter(key => filters.experience[key]);
    if (selectedExperience.length > 0) {
      filtered = filtered.filter(job => {
        if (!job.experienceLevel) return false;

        // Check if any of the selected experience levels match the job
        return selectedExperience.some(expId => {
          switch (expId) {
            case "entry":
              return job.experienceLevel.toLowerCase().includes("entry") ||
                job.experienceLevel.toLowerCase().includes("junior") ||
                job.experienceLevel === "0-1 years";
            case "year1":
              return job.experienceLevel.toLowerCase().includes("1 year") ||
                job.experienceLevel === "1-2 years";
            case "year2":
              return job.experienceLevel.toLowerCase().includes("2 year") ||
                job.experienceLevel === "2-5 years";
            case "year5":
              return job.experienceLevel.toLowerCase().includes("5 year") ||
                job.experienceLevel === "5-10 years";
            case "year10":
              return job.experienceLevel.toLowerCase().includes("10") ||
                job.experienceLevel === "10+ years";
            default:
              return false;
          }
        });
      });
    }

    // Filter by salary range
    const selectedSalary = Object.keys(filters.salaryRange).filter(key => filters.salaryRange[key]);
    if (selectedSalary.length > 0) {
      filtered = filtered.filter(job => {
        // Skip jobs without salary info
        if (!job.sallery) return false;

        const salary = job.sallery || 0;
        // const salaryMax = job.salaryMax || Infinity;

        return selectedSalary.some(salaryId => {
          switch (salaryId) {
            case "below2k":
              return salary < 2000;
            case "from2kTo4k":
              return (salary <= 4000 && salary >= 2000) ||
                (salary >= 2000 && salary <= 4000);
            case "from4kTo6k":
              return (salary <= 6000 && salary >= 4000) ||
                (salary >= 4000 && salary <= 6000);
            case "from6kTo8k":
              return (salary <= 8000 && salary >= 6000) ||
                (salary >= 6000 && salary <= 8000);
            case "from8kTo10k":
              return (salary <= 10000 && salary >= 8000) ||
                (salary >= 8000 && salary <= 10000);
            case "above10k":
              return salary >= 10000 || salary > 10000;
            default:
              return false;
          }
        });
      });
    }

    // Update filtered jobs and total pages
    setFilteredJobs(filtered);
    setTotalPages(Math.ceil(filtered.length / jobsPerPage));
  };
  // console.log('filteredJobs', filteredJobs.length);

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const isToday = date.toDateString() === today.toDateString();
    const isTomorrow = date.toDateString() === tomorrow.toDateString();

    if (isToday) {
      return "Today";
    } else if (isTomorrow) {
      return "Tomorrow";
    } else {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  };

  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const toggleFilter = (category, id) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [id]: !prev[category][id]
      }
    }));
  };

  const handleApplyNow = (job) => {
    // Navigate to job application page with job details
    navigate(`/job/${job._id}`);
    window.scrollTo(0, 0);
  };


  const handleSearchTermChange = (e) => {
    // const value = e.target.value;
    console.log('Search Term:', e.target.value);
    setSearchTerm(e.target.value);
    // console.log('Search Term:', value);
  }


  const selectedFilters = {
    jobTypes: Object.keys(filters.jobTypes).filter((key) => filters.jobTypes[key]),
    categories: Object.keys(filters.categories).filter((key) => filters.categories[key]),
    salaryRange: Object.keys(filters.salaryRange).filter((key) => filters.salaryRange[key])
  };


  const selectedTags = [
    ...selectedFilters.jobTypes,
    ...selectedFilters.categories,
    ...selectedFilters.salaryRange
  ];





  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const locations = ["Dehradun", "Delhi", "Mumbai", "Pune", "Bangalore", "Noida", "Gurgaon", "Chennai", "Hyderabad", "Kolkata"];

  const categories = ["Design", "Marketing", "Engineering", "Technology", "Sales", "Bussiness", "Human Resources", "IT"];



  //   const handleSearch = () => {
  //   const filtered = jobdata.filter((job) => {
  //     const matchesSearch = job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
  //     const matchesLocation = selectedLocation === "Select Location" || job.location === selectedLocation;
  //     const matchesCategory = selectedCategory === "Select Category" || job.category === selectedCategory;
  //     return matchesSearch && matchesLocation && matchesCategory;
  //   });

  //   setFilteredJobs(filtered);
  // };



  const handleSearch = () => {
    // This will trigger the useEffect that applies filters
    applyFilters(jobdata);
  };

  const clearFilters = () => {
    setFilters({
      jobTypes: {},
      categories: {},
      experience: {},
      salaryRange: {}
    });
    setSearchTerm(" ");
    setSelectedLocation("Select Location");
    setSelectedCategory("Select Category");
  };



  // Filter component
  const FilterSection = ({ title, items, category, collapsible = true }) => (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        {collapsible && (
          <button className="text-sm text-gray-500">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg> */}
          </button>
        )}
      </div>
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="flex items-center">
            <input
              type="checkbox"
              id={item.id}
              className="w-4 h-4 text-indigo-600 rounded"
              checked={filters[category][item.id] || false}
              onChange={() => toggleFilter(category, item.id)}
            />
            <label htmlFor={item.id} className="ml-2 text-sm text-gray-700">
              {item.label}{item.count ? ` (${item.count})` : ''}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const data = JSON.parse(localStorage.getItem("user"));
  const user_id = data?.id;
  console.log("User id:", user_id);



  // Job card component
  const JobCard = ({ job }) => {
    const hasApplied = (job.studentApplied || []).includes(user_id); // ✅ moved inside
    return (

      <motion.div
        className={`border-2 rounded-lg p-4 max-w-full w-full border-blue-300 hover:border-blue-600  shadow-sm cursor-pointer`}

        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-zinc-200 border rounded-full overflow-hidden">
            <img
              src={job.companyLogo || "ins"} // Fallback to default logo if companyLogo1 is not available
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex justify-between items-center">
            <div className="flex flex-col ">
              <div className="font-semibold text-sm">{job.jobTitle}</div>
              <div className="text-xs text-gray-500">{job.location}</div>
            </div>
            {/* <button onClick={toggleSave} className="text-blue-600 hover:text-blue-800">
                        {saved ? <BookmarkCheck className="text-red-600 text-sm  border-red-200 rounded hover:bg-red-50 transition" /> : <Bookmark className="w-6 h-6" />}
                        </button> */}
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-4 line-clamp-3" onClick={() => navigate(`/job/${job._id}`)}>
          {job.jobDescription}
          <span className="text-[#4f46e5] underline cursor-pointer"> <br /> see more...</span>
        </p>

        {/* Responsive Badge Section */}
        <div className="flex flex-wrap justify-start gap-2 text-xs mb-4" onClick={() => navigate(`/job/${job._id}`)}>

          {job.employmentType.map((type, index) => {
            return (
              <span key={index} className="text-blue-700 bg-blue-100 px-3 rounded-md min-w-[80px] py-1  text-center">
                {type}
              </span>
            );
          })}
        </div>

        {/* Responsive Button Section */}


        <div className="flex flex-row xs:justify-between  space-x-2">
          <button
            onClick={() => {
              if (!hasApplied) {
                navigate(`/job/${job._id}`);
              }
            }}

            disabled={hasApplied}
            className={`${hasApplied ? 'bg-gray-600 cursor-not-allowed' : '   bg-blue-500 hover:bg-blue-600'
              } md:w-[160px] sm:w-auto text-white px-2 py-1.5 rounded-md`}
          >
            {hasApplied ? 'Applied' : 'Apply Now'}
          </button>

          <button onClick={() => navigate(`/job/${job._id}`)} className="border text-[#4f46e5] md:w-[160px] sm:w-auto border-[#4f46e5]  px-2 py-1.5 rounded-md hover:bg-[#f1f5ff]">
            View Details
          </button>
        </div>
      </motion.div>
    )
  };

  const Pagination = () => {
    // Generate page numbers
    const pageNumbers = [];

    const renderPageNumbers = () => {
      const maxPagesToShow = 10;

      if (totalPages <= maxPagesToShow) {

        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 3; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push("...");
          pageNumbers.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          // Near the end
          pageNumbers.push(1);
          pageNumbers.push("...");
          for (let i = totalPages - 2; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else {
          // Middle
          pageNumbers.push(1);
          pageNumbers.push("...");
          pageNumbers.push(currentPage - 1);
          pageNumbers.push(currentPage);
          pageNumbers.push(currentPage + 1);
          pageNumbers.push("...");
          pageNumbers.push(totalPages);
        }
      }

      return pageNumbers.map((number, index) => {
        if (number === "...") {
          return (
            <span key={`ellipsis-${index}`} className="px-4 py-2 border-t border-b text-gray-400">
              ...
            </span>
          );
        }

        return (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 border-t border-b ${number === currentPage
              ? "bg-indigo-600 text-white"
              : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {number}
          </button>
        );
      });
    };

    return (
      <div className="mt-8 flex justify-center">
        <nav className="inline-flex items-center">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-2 py-2 rounded-l border ${currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-indigo-600 hover:bg-gray-100"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {renderPageNumbers()}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-2 py-2 rounded-r border ${currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-indigo-600 hover:bg-gray-100"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </nav>
      </div>
    );
  };

  useEffect(() => {
    applyFilters(jobdata);
  }, [searchTerm, selectedLocation, selectedCategory, filters]);


  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const removeFilter = (category, value) => {
  setFilters((prev) => ({
    ...prev,
    [category]: {
      ...prev[category],
      [value]: false
    }
  }));
};

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="text-white py-12 relative" style={{ backgroundImage: `url(${SearchImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Find your Dream Job</h1>

            <p className="text-lg mb-8">
              Find your next career at companies like HubSpot, Nike, and many more.
            </p>
          </div>
          <div className="sticky top-0 bg-white  rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
            <div className="  flex flex-col md:flex-row items-center gap-4">

              <div className="flex w-full items-center rounded-lg border border-gray-200 px-4 py-3 flex-1">
                <Search className="text-gray-400 h-5 w-5 mr-2" />
                <input

                  placeholder="Search for keywords"
                  className="bg-transparent w-full outline-none text-gray-700 text-sm"
                  value={searchTerm}
                  onChange={(e) => handleSearchTermChange(e)}
                />
              </div>

              <div className=" relative w-full flex items-center rounded-lg border border-gray-200 px-4 py-3 flex-1"
                onMouseEnter={() => setIsLocationDropdownOpen(true)}
                onMouseLeave={() => setIsLocationDropdownOpen(false)}>
                <MapPin className="text-gray-400 h-5 w-5 mr-2" />
                <div
                  className="flex justify-between items-center w-full cursor-pointer"
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}

                >
                  <span className="text-sm text-gray-700">{selectedLocation}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 text-gray-500 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {isLocationDropdownOpen && (

                  <div className="absolute left-0 right-0 top-full  bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                    onMouseEnter={() => setIsLocationDropdownOpen(true)}
                    onMouseLeave={() => setIsLocationDropdownOpen(false)}>

                    <div className="h-64 overflow-y-auto">
                      {locations.map((location, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => {
                            setSelectedLocation(location);
                            setIsLocationDropdownOpen(false);
                          }}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>
                )}




              </div>

              <div className="relative w-full flex items-center rounded-lg border border-gray-200 px-4 py-3 flex-1"
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}>
                <Briefcase className="text-gray-400 h-5 w-5 mr-2" />
                <div
                  className="flex justify-between items-center w-full cursor-pointer"
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}


                >
                  <span className="text-sm text-gray-700">{selectedCategory}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 text-gray-500 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>


                {isCategoryDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                    onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                    onMouseLeave={() => setIsCategoryDropdownOpen(false)}>
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer text-sm"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsCategoryDropdownOpen(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg font-medium text-sm"
                onClick={handleSearch}
              >
                Search {filteredJobs.length} jobs
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Filters for md and larger */}
          <div className="hidden md:block w-full md:w-64 lg:w-72 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                Clear All
              </button>
            </div>
            <FilterSection
              title="Type of Employment"
              items={filterConfigs.jobTypes}
              category="jobTypes"
              collapsible={false}
            />
            <FilterSection
              title="Categories"
              items={filterConfigs.categories}
              category="categories"
            />
            <FilterSection
              title="Salary Range"
              items={filterConfigs.salaryRange}
              category="salaryRange"
            />
          </div>

          {/* Mobile Filter Popup */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-md flex justify-center items-start pt-10 transition-all">
              <div className="bg-white w-11/12 max-h-[90vh] overflow-y-auto rounded-xl p-4 relative shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ✕
                  </button>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-indigo-600 hover:text-indigo-800 mb-4"
                >
                  Clear All
                </button>
                <FilterSection
                  title="Type of Employment"
                  items={filterConfigs.jobTypes}
                  category="jobTypes"
                  collapsible={false}
                />
                <FilterSection
                  title="Categories"
                  items={filterConfigs.categories}
                  category="categories"
                />
                <FilterSection
                  title="Salary Range"
                  items={filterConfigs.salaryRange}
                  category="salaryRange"
                />
              </div>
            </div>
          )}




          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg mb-6">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">All Jobs</h2>

                  {/* Show selected filters in mobile view */}
                 
                  <div className="hidden md:flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                    <select className="border rounded p-1 text-sm">
                      <option>default</option>
                      <option>newest</option>
                      <option>oldest</option>
                    </select>
                  </div>
               
                  <div className="md:hidden flex justify-end mb-4">
                    <button
                      onClick={() => setIsMobileFilterOpen(true)}
                      className="text-sm bg-indigo-600 text-white px-4 py-2 rounded"
                    >
                      Filters
                    </button>
                  </div>
                </div>
                   {/* Filter button for small devices */}
                {selectedFilters && (
  <div className="flex flex-wrap gap-2 mt-2 md:hidden">
    {Object.entries(selectedFilters).map(([category, values]) =>
      values.map((tag) => (
        <span
          key={`${category}-${tag}`}
          className="flex items-center bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full"
        >
          <span className="mr-1">{tag}</span>
          <button
            onClick={() => removeFilter(category, tag)}
            className="text-indigo-500 hover:text-indigo-800 ml-1"
          >
            ✕
          </button>
        </span>
      ))
    )}
  </div>
)}

                {/* Loading state */}
                {loading ? (
                  <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500"></div>
                  </div>
                ) : (
                  <>
                    {/* Job Cards */}
                    {currentJobs.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 mt-6">
                        {[...currentJobs]
                          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // newest first
                          .map(job => (
                            <JobCard key={job._id || job.id} job={job} />
                          ))}

                      </div>
                    ) : (
                      <div className="text-center py-10">
                        <p className="text-gray-500">No jobs found matching your criteria.</p>
                      </div>
                    )}

                    {/* Only show pagination if we have jobs */}
                    {filteredJobs.length > 0 && <Pagination />}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findjob;