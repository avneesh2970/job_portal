import React from "react";
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { motion } from "framer-motion";
const DashJobCard = ({ companyLogo, jobTitle,jobDescription, companyName, location, employmentType }) => {
  return (
 <motion.div
            className={`flex flex-col justify-center border-2 rounded-lg p-4 mx-auto max-w-full w-full border-blue-300 hover:border-blue-600  shadow-sm cursor-pointer`}
             
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center space-x-3 mb-3">
                 <div className="w-10 h-10  border rounded-full overflow-hidden">
  <img
    src={companyLogo || "ins"} // Fallback to default logo if companyLogo1 is not available
    alt="Company Logo"
    className="w-full h-full object-cover"
  />
</div>
                <div className="flex-1 flex justify-between items-center">
                    <div className="flex flex-col ">
                        <div className="font-semibold text-sm">{jobTitle}</div>
                        <div className="text-xs text-gray-500">{location}</div>
                    </div>
                     {/* <button onClick={toggleSave} className="text-blue-600 hover:text-blue-800">
                        {saved ? <BookmarkCheck className="text-red-600 text-sm  border-red-200 rounded hover:bg-red-50 transition" /> : <Bookmark className="w-6 h-6" />}
                        </button> */}
                </div>
            </div>

            <p className="text-xs text-gray-600 mb-4 line-clamp-3">
                {jobDescription}
                <span className="text-[#4f46e5] underline cursor-pointer"> <br /> see more.</span>
            </p>

            {/* Responsive Badge Section */}
            <div className="flex flex-wrap justify-start gap-2 text-xs mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md min-w-[80px] text-center">Part-Time</span>
                {employmentType.map((type, index) => {
                    return (
                        <span key={index} className="text-blue-700 bg-blue-100 px-3 rounded-md min-w-[80px] py-1  text-center">
                            {type}
                        </span>
                    );
                })}
            </div>

            {/* Responsive Button Section */}


            <div className="flex flex-row xs:justify-between gap-2">
              {/* <button
 onClick={() => {
  if (!hasApplied) {
    navigate(`/candidate_dashboard/cand_job/${jobs._id}`);
  }
}}

  disabled={hasApplied}
  className={`${
    hasApplied ? 'bg-gray-600 cursor-not-allowed' : '   bg-blue-500 hover:bg-blue-600'
  } md:w-[160px] sm:w-auto text-white text-xs px-4 py-2 rounded-md`}
>
  {hasApplied ? 'Applied' : 'Apply Now'}
</button> */}

                {/* <button onClick={()=>navigate(`/candidate_dashboard/cand_job/${jobs._id}`)} className="border text-[#4f46e5] md:w-[140px] sm:w-auto border-[#4f46e5] text-xs px-4 py-2 rounded-md hover:bg-[#f1f5ff]">
                    View Details
                </button> */}
            </div>
        </motion.div>
  );
};

export default DashJobCard;
