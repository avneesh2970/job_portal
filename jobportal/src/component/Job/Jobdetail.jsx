import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Heart, MapPin, Calendar, Briefcase, Building, Clock, DollarSign, Paperclip, Mail, Phone, User, Clock3, MapPinned, Instagram, Facebook, Linkedin } from "lucide-react";
import SearchImage from "../photos/image12.png";  
import JobListings from "../Home/JobListings.jsx";
import JobApplicationModal from "./JobApplicationModal.jsx"; 
import { useEffect } from "react";


import axios from 'axios'
const Jobdetail = () => {
  const [jobdata, setjobdata] = useState('');
console.log((jobdata));

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
      console.log('jpb',job_detail);
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

  const handleApplyNow = () => {
    console.log('Clicked Apply Now');
    const userInfo = localStorage.getItem('user');
    
    if (!userInfo) {
      toast.error('Please login first to apply.');
    } else {
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

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with back button */}
      <div className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleGoBack}
            className="flex items-center text-gray-600 hover:text-indigo-600"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Back to jobs</span>
          </button>
        </div>
      </div>

      {/* Hero Section with Job Banner */}
      <div className="relative h-60 bg-gray-800">
        <img 
          src={`${SearchImage}`} 
          alt="Office space" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-t-lg shadow-md p-6 flex items-start">
            <div className={`h-16 w-16 rounded-md flex items-center justify-center ${jobDetails.color} text-white text-xl font-bold mr-4`}>
            <img src={jobdata.companyLogo} alt={`${jobdata.company} logo`} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">{jobdata.jobTitle || "Job Title"}</h1>
              <p className="text-sm text-gray-500">{jobdata.companyName || "Company"} • {jobdata.location || "Location"} </p>
            </div>
            <div className="flex space-x-2 items-center my-auto">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share2 className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Heart className="h-5 w-5 text-gray-500" />
              </button>
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={handleApplyNow}
              >
                Apply Now
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
        <JobListings/>
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
