import React,{useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Bookmark, BookmarkCheck } from 'lucide-react'; // Lucide icons for bookmark
import axios from "axios";
function JobCard({jobs, selected }) {
    const navigate = useNavigate();
      const [saved, setSaved] = useState(false);
    
    console.log('hey',jobs._id)
    const data = JSON.parse(localStorage.getItem("user"));
    const user_id = data.id;
    console.log("User id:", user_id);
    const hasApplied = jobs.studentApplied.includes(user_id);
   const toggleSave = async () => {
  try {
   

    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user_id}/saved-jobs/${jobs._id}`);
     setSaved(prev => !prev); // Optimistically toggle
    // Optional: Show success toast or UI feedback here
  } catch (error) {
    console.error('Error saving job:', error);
    setSaved(prev => !prev); // Revert UI on failure

    // Optional: Show error toast
  }
};

  useEffect(() => {
  const fetchSavedJobs = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${user_id}`);
      const savedJobs = res.data.savedJobs || [];
      console.log("Saved Jobs:", savedJobs);

      // Check if current job is in saved list
      const isSaved = savedJobs.includes(jobs._id);
      setSaved(isSaved);
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
    }
  };

  fetchSavedJobs();
}, [jobs._id, user_id]);


    return (
        <motion.div
            className={`border rounded-lg p-4 max-w-full w-full ${selected ? "border-[#4f46e5]" : "border-gray-200"} shadow-sm `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center space-x-3 mb-3">
                <div className="bg-pink-500 rounded-full p-2">
                    <img src={jobs.companyLogo} className="w-10 h-10" />
                </div>
                <div className="flex-1 flex justify-between items-center">
                    <div className="flex flex-col ">
                        <div className="font-semibold text-sm">{jobs.jobTitle}</div>
                        <div className="text-xs text-gray-500">{jobs.location}</div>
                    </div>
                     <button onClick={toggleSave} className="text-blue-600 hover:text-blue-800">
                        {saved ? <BookmarkCheck className="w-6 h-6" /> : <Bookmark className="w-6 h-6" />}
                        </button>
                </div>
            </div>

            <p className="text-xs text-gray-600 mb-4 line-clamp-3">
                {jobs.aboutCompany}
                <span className="text-[#4f46e5] underline cursor-pointer"> <br /> see more.</span>
            </p>

            {/* Responsive Badge Section */}
            <div className="flex flex-wrap justify-start gap-2 text-xs mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md min-w-[80px] text-center">Part-Time</span>
                {jobs.employmentType.map((type, index) => {
                    return (
                        <span key={index} className="text-blue-700 bg-blue-100 px-3 rounded-md min-w-[80px] py-1  text-center">
                            {type}
                        </span>
                    );
                })}
            </div>

            {/* Responsive Button Section */}


            <div className="flex flex-row xs:justify-between gap-2">
              <button
 onClick={() => {
  if (!hasApplied) {
    navigate(`/candidate_dashboard/cand_job/${jobs._id}`);
  }
}}

  disabled={hasApplied}
  className={`${
    hasApplied ? 'bg-gray-600 cursor-not-allowed' : '   bg-violet-500 hover:bg-[#4338ca]'
  } md:w-[160px] sm:w-auto text-white text-xs px-4 py-2 rounded-md`}
>
  {hasApplied ? 'Applied' : 'Apply Now'}
</button>

                <button onClick={()=>navigate(`/job/detail/${jobs._id}`)} className="border text-[#4f46e5] md:w-[160px] sm:w-auto border-[#4f46e5] text-xs px-4 py-2 rounded-md hover:bg-[#f1f5ff]">
                    View Details
                </button>
            </div>
        </motion.div>
    );
}

export default JobCard;
