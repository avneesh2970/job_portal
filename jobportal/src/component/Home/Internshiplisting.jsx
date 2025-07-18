import React,{useEffect, useState} from "react";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../photos/logo.png";
import { MapPin, Clock } from "react-feather";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FileJsonIcon } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const jobs = [
  {
    id: 1,
    company: "NovaNecter Services PVT. LTD.",
    position: "B.D.E (Business Development Executive)",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 2,
    company: "NovaNecter Services PVT. LTD.",
    position: "I.T Sales",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 3,
    company: "NovaNecter Services PVT. LTD.",
    position: "UI/UX Designer",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 4,
    position: "Graphic Designer",
    company: "NovaNecter Services PVT. LTD.",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 5,
    position: "Social Media Executive",
    company: "NovaNecter Services PVT. LTD.",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
  {
    id: 6,
    company: "NovaNecter Services PVT. LTD.",
    position: "Video Editor",
    description: "It is a long established fact that a reader of a page when looking at its layout.",
    type: "Full Time",
    daysAgo: "2 Day ago",
    location: "Dehradun",
    experience: "Fresher or 1 Year Experience",
    logo: image1,
  },
];


const Intershiplisting = () => {
  
  const [jobdata, setjobdata] = useState([]);
  console.log('info job', jobdata)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const fetchData = async () => {
      try {
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
        console.log(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`)
        console.log('data', data.data);
        
       const formattedData = data.data.filter(job =>
        job.employmentType?.includes('Internship')
      );
        setjobdata(formattedData)
      } catch (err) {
        console.error(err);
        setError('Failed to fetch Internship data. Please try again later.');
      }finally{
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

   useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // animate only once
      offset: 100,  // offset from the top of the viewport
    });
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
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h2 className="text-4xl font-bold">New Internship Offers</h2>
          <p className="text-gray-500">More Than +500 Internship Offers Every Day</p>
        </div>
        <a onClick={handleclick} className="text-blue-600 flex items-center gap-2 hover:underline">
          Show all Internships <FaArrowRight />
        </a>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[300px] w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-solid"></div>
        </div>
      ): error ?(
         <div className="text-red-500 text-center mt-10">
            {error}
          </div>
      ): jobdata.length === 0 ? (
          <div className="text-gray-500 text-center mt-10">
              No Internship Offers Available
            </div>
      ) : (
         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {jobdata.slice(0, 6).map((job, index) => (
        <div
          key={job._id}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          onClick={() => {
            navigate(`/job/${job._id}`);
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          }}
          style={{ willChange: 'transform, box-shadow' }}
          
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-6 hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
            {/* Employment Types */}
          <div className="flex justify-between items-start">
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

          {/* Company Info */}
          <div className="flex items-center gap-4 mt-6">
            <img
              src={job.companyLogo}
              alt={job.company}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold line-clamp-1">{job.jobTitle}</h3>
              <p className="text-sm text-gray-500">{job.companyName}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-600 mt-4">
            <MapPin size={18} className="mr-2" />
            <span className="text-sm">{job.location}</span>
          </div>

          {/* Posted Date */}
          <div className="flex items-center text-gray-600 mt-2">
            <Clock size={18} className="mr-2" />
            <span className="text-sm">{formatDate(job.createdAt)}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500 mt-4 line-clamp-3">
            {job.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white text-[12px]  sm:text-sm lg:text-base px-2 lg:px-4 py-1 lg:py-2 rounded-lg hover:bg-blue-700 transition w-full">
              Apply Now
            </button>
            <button className="border border-blue-600 text-blue-600 text-[12px]  sm:text-sm lg:text-base px-2 lg:px-4 py-1 lg:py-2 rounded-lg hover:bg-blue-50 transition w-full">
              View Details
            </button>
          </div>
          </div>
        </div>
      ))}
    </div>
      )
      }
     
    </section>
  );
};

export default Intershiplisting;

