



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


const JobListings = () => {
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
    <section className="bg-white text-gray-900 -pt-16 px-6 md:px-12 lg:px-20" data-aos="fade-right" data-aos-duration="1500">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
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
              {jobdata.map((job) => (
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
                      <h3 className="text-xl font-bold">{job.jobTitle}</h3>
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
     
    </section>
  );
};

export default JobListings;

