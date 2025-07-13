import React,{useState, useEffect} from 'react'
import HeroSection from '../component/Home/HeroSection';
import JobCategories from '../component/Home/JobCategories';
import Joblisting from '../component/Home/JobListings';
import PostJob from '../component/Home/PostJob';
import DownloadAppSection from '../component/Home/DownloadAppSection'
import TestimonialSection from '../component/Home/TestimonialSection'
import { useNavigate } from 'react-router-dom';
import Contact from '../component/Contact'
import Intershiplisting from '../component/Home/Internshiplisting.jsx';
import FAQ from '../component/Faqsection.jsx'
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { MapPin, Clock } from "react-feather";


const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [jobdata, setjobdata] = useState([]);
  const [error, setError] = useState(null);
  console.log('info job', jobdata)
  const navigate = useNavigate();

   
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
        setjobdata(data.data)
      } catch (err) {
        console.error(err);
        setError('Failed to fetch job listings. Please try again later.');
      }finally{
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);


  const handleclick = () => {
    navigate('/job'); 
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400); // 1000 ms = 1 second

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
   <>
   <HeroSection/>

    <section className="bg-white text-gray-900 -pt-16 mt-8 px-6 md:px-12 lg:px-20">
       <div className="flex flex-col text-center w-full items-center mb-12 p-4">
          <div
            className=" sticky top-0 bg-white mt-10 p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row shadow-lg gap-4 justify-between items-center max-w-5xl w-full border border-gray-200 z-10 overflow-y-hidden"
            style={{ boxShadow: "1px 1px 5px 0.5px gray" }}
          >
            <div className="flex items-center w-full sm:w-auto sm:border-r sm:border-r-gray-100 px-2 sm:px-3 ">
              <FaSearch className="text-[#4640DE] mr-2" />
              <input
                type="text"
                placeholder="Search for keywords"
                className="outline-none border-b border-gray-400 px-2.5 border-solid  p-2 w-full"
              />
            </div>

            <div className="flex items-center w-full sm:w-auto sm:border-r sm:border-r-gray-200 px-2 sm:px-3 ">
              <FaMapMarkerAlt className="text-[#4640DE] mr-2" />
              <input
                type="text"
                placeholder="Select Location"
                className="outline-none p-2 w-full border-b border-gray-400  border-solid"
              />
            </div>

            <div className="flex items-center w-full sm:w-auto px-2 sm:px-3 ">
              <FaBriefcase className="text-[#4640DE] mr-2" />
              <input
                type="text"
                placeholder="Select Category"
                className="outline-none p-2 w-full border-b border-gray-400  border-solid "
              />
            </div>

            <button className="bg-[#4640DE] text-white font-medium py-2 px-4 rounded-md w-full sm:w-auto mt-2 sm:mt-0">
              Search
            </button>
          </div>
          </div>
          <div  data-aos="fade-right" data-aos-duration="1500">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6"  >
        <div>
          <h2 className="text-4xl font-bold">New Job Offers</h2>
          <p className="text-gray-500">More Than +500 Job Offers Every Day</p>
        </div>
        <a onClick={handleclick} className="text-blue-600 flex items-center gap-2 hover:underline">
          Show all jobs <FaArrowRight />
        </a>
      </div>
      {loading ?(
         <div className="flex justify-center items-center h-[300px] w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
        </div>
      ):error ? (
          <div className="text-red-500 text-center mt-10">
            {error}
          </div>
      ): jobdata.length === 0 ? (
          <div className="text-gray-500 text-center mt-10">
            job offers  available at the moment.
          </div>
      ): (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[...jobdata].slice(0,6).map((job) => (
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
   
   <JobCategories/>
    <Intershiplisting/>

    
    {/* <PostJob/> */}
    <TestimonialSection/>
    <FAQ/>
    {/* <DownloadAppSection/> */}
    <Contact/>
    

   </>
  )
}

export default Homepage



