import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Heart, MapPin, Calendar, Briefcase, Building, Clock, DollarSign, Paperclip, Mail, Phone, User, Clock3, MapPinned, Instagram, Facebook, Linkedin } from "lucide-react";
import SearchImage from "../photos/image12.png";
import JobListings from "../Home/JobListings.jsx";
import JobApplicationModal from "./JobApplicationModal.jsx";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import axios from 'axios'
import { button } from 'framer-motion/client';
const Jobdetail = () => {
  const [jobdata, setjobdata] = useState([]);
  console.log((jobdata));

  const [loading, setLoading] = useState(true);
  const [alljobdata, setAlljobdata] = useState([]);
  const [error, setError] = useState(null);
  console.log('info job', jobdata)


  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const getJobDetail = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
      const job = data;
      // console.log(job)
      // console.log('id from URL:', id);
      // console.log('all job ids:', job.map(j => j._id));
      const job_detail = job.find((job) => job._id == id);
      console.log('jpb', job_detail);
      setjobdata(job_detail);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobDetail();


  }, [id]);


  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get job details from location state or fallback to default
  const jobFromState = location.state?.job;

  // Default job details if no data passed via state
  const defaultJobDetails = {
    id: id || 1,
    title: "Brand Designer",
    company: "Zend",
    logo: "ZP",
    location: "Paris, France",
    type: "Full-Time",
    hoursPerWeek: "40h / week",
    postedDate: "Posted 1 hour ago",
    expirationDate: "April 06, 2023",
    salary: "$35k - $45k",
    industry: "IT Services and IT Consulting",
    companySize: "50-200",
    founded: "March, 2018",
    contactEmail: "info@zend.com",
    contactPhone: "+33 701 716 6769",
    website: "www.zend.com",
    categories: ["Design", "Marketing"],
    skills: ["Time Management", "Typography", "Creativity", "Design Principles", "Brand Identity"],
    color: "bg-purple-600"
  };

  // Use job details from state if available, otherwise use default
  const jobDetails = jobFromState || defaultJobDetails;

  // Ensure categories is always an array even if it's undefined in the data
  const categories = jobDetails?.categories || [];
  const skills = jobDetails?.skills || [];

  const handleGoBack = () => {
    navigate(-1);
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // default duration (optional)
      once: true,     // whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
        console.log(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`)
        console.log('data', data.data);
        setAlljobdata(data.data)
      } catch (err) {
        console.error(err);
        setError('Failed to fetch job listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleApplyNow = () => {
  const userInfo = localStorage.getItem('user');

  if (!userInfo) {
    toast.error('Please login first to apply.');
    return;
  }

  if (jobdata.externalApplyUrl) {
    window.open(jobdata.externalApplyUrl, '_blank');
    return;
  }else{
    setIsModalOpen(true);
  }

 
  
};


  const handleViewCompanyProfile = () => {
    // Navigate to company profile page
    alert(`Viewing ${jobDetails.company} profile`);
  };


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
  const user = JSON.parse(localStorage.getItem('user'));
  const hasApplied = jobdata?.studentApplied?.includes(user?.id);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with back button */}


      {/* Hero Section with Job Banner */}
      <div className="relative h-80 bg-gray-800">
        <img
          src={`${SearchImage}`}
          alt="Office space"
          className="w-full h-full object- opacity-50"
        />
        <div className="absolute top-0 bg-transparent text-white  py-4">
          <div className="cursor-pointer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleGoBack}
              className="flex items-center cursor-pointer hover:text-gray-300 transition duration-200"
            >
              <ArrowLeft className="h-4 items-center my-auto w-4 mr-1" />
              <span className="text-sm font-medium">Back to jobs</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-24 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="bg-white rounded-lg shadow-md p-3 flex items-start">
            <div className={`md:h-16 md:w-16 h-10 w-10 rounded-md flex items-center justify-center ${jobDetails.color} text-white text-xl font-bold mr-4`}>
              <img src={jobdata.companyLogo} alt={`${jobdata.company} logo`} className="w-full h-full object-cover bg-zinc-200 border border-zinc-200 rounded-sm" />
            </div>
            <div className="flex-1">
              <h1 className=" sm:text-base md:text-xl font-bold text-gray-900">{jobdata.jobTitle || "Job Title"}</h1>
              <p className="text-sm text-gray-500">{jobdata.companyName || "Company"} • {jobdata.location || "Location"} </p>
            </div>
            <div className="flex space-x-2 items-center my-auto">
              <button className="p-2 hidden md:flex rounded-full hover:bg-gray-100">
                <Share2 className="h-5 w-5 hidden md:flex text-gray-500" />
              </button>
              <button className="p-2  hidden md:flex rounded-full hover:bg-gray-100">
                <Heart className="h-5 w-5 text-gray-500" />
              </button>
              <button
                onClick={handleApplyNow}


                disabled={hasApplied}
                className={`${hasApplied ? 'bg-gray-600 cursor-not-allowed' : '   bg-blue-500 hover:bg-blue-600'
                  } md:w-[160px] sm:w-auto text-white text-sm md:text-base px-2 md:px-4 py-1.5 md:py-3 rounded-md`}
              >
                {hasApplied ? 'Applied' : 'Apply Now'}
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Job Description</h2>
              <p className="text-gray-600 mb-4">
                {jobdata.jobDescription}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Key Responsibilities</h2>
              <ul className="space-y-4">
                {jobdata.responsibilities}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Skill & Experience</h2>
              <ul className="space-y-4">
                {jobdata.skillsAndExperience}
              </ul>
            </div>
          </div>

          {/* Right Column - Job Overview */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Job Overview</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Date Posted</div>
                    <div className="font-medium">{formatDate(jobdata.createdAt)}</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <Clock3 className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Expiration Date</div>
                    <div className="font-medium">{jobDetails.expirationDate}</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <MapPinned className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">{jobdata.location}</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <Briefcase className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Job Title</div>
                    <div className="font-medium">{jobdata.jobTitle}</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <Clock className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Hours</div>
                    <div className="font-medium">{jobDetails.hoursPerWeek}</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <DollarSign className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Salary</div>
                    <div className="font-medium">{jobdata.sallery}</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <span key={index} className={`${index === 0 ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'} text-xs px-3 py-1 rounded-full`}>
                    {category}
                  </span>
                ))}
              </div>
            </div> */}

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {jobdata.requiredSkills && jobdata.requiredSkills.map((skill, index) => (
                  <span key={index} className={`${index === 2 ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'} text-xs px-3 py-1 rounded-full`}>
                    {skill}
                  </span>
                ))}


              </div>
            </div>

            {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className={`h-10 w-10 rounded-md flex items-center justify-center ${jobDetails.color} text-white text-lg font-bold mr-3`}>
                  ZP
                </div>
                <h3 className="text-lg font-bold">{jobDetails.company}</h3>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-gray-500 w-32">Primary Industry:</span>
                  <span className="text-gray-700">{jobDetails.industry}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-32">Company size:</span>
                  <span className="text-gray-700">{jobDetails.companySize}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-32">Founded in:</span>
                  <span className="text-gray-700">{jobDetails.founded}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-32">Contact us:</span>
                  <span className="text-gray-700">{jobDetails.contactPhone}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-32">Email:</span>
                  <span className="text-gray-700">{jobDetails.contactEmail}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-32">Location:</span>
                  <span className="text-gray-700">{jobDetails.location}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-32">Social media:</span>
                  <span className="flex gap-2">
                    <Facebook className="h-4 w-4 text-gray-500" />
                    <Instagram className="h-4 w-4 text-gray-500" />
                    <Linkedin className="h-4 w-4 text-gray-500" />
                  </span>
                </li>
              </ul>
              
              <button 
                className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={handleViewCompanyProfile}
              >
                View Company Profile
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div>
        <section className="bg-white text-gray-900 -pt-16 mt-8 px-6 md:px-12 lg:px-20">

          <div data-aos="fade-right" data-aos-duration="1500">

            {loading ? (
              <div className="flex justify-center items-center h-[300px] w-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 text-center mt-10">
                {error}
              </div>
            ) : alljobdata.length === 0 ? (
              <div className="text-gray-500 text-center mt-10">
                job offers  available at the moment.
              </div>
            ) : (
              <div className="grid gap-8 mb-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[...alljobdata].slice(0, 6).map((job) => (
                  <div

                    key={job._id}
                    onClick={() => {
                      navigate(`/job/${job._id}`);
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }); // 2000 ms = 2 seconds
                    }}


                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer "
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {job.employmentType.map((type, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-600 px-3 py-1 text-sm rounded"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">{job.daysAgo}</span>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                      <img src={job.companyLogo} alt={job.company} className="w-14 h-14 rounded-full" />
                      <div>
                        <h3 className="text-xl font-bold whitespace-nowrap overflow-hidden">{job.jobTitle}</h3>
                        <p className="text-sm text-gray-500">{job.companyName}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mt-4">
                      <MapPin size={18} className="mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>

                    <div className="flex items-center text-gray-600 mt-2">
                      <Clock size={18} className="mr-2" />
                      <span className="text-sm">{formatDate(job.createdAt)}</span>
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
                ))}
              </div>

            )}
          </div>
        </section>
      </div>

      {/* Job Application Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobDetails={jobdata}
      />
    </div>
  );
};

export default Jobdetail;
