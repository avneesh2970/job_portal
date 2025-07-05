import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function JobCard({ selected }) {
    const navigate = useNavigate()
    return (
        <motion.div
            className={`border rounded-lg p-4 max-w-full w-full ${selected ? "border-[#4f46e5]" : "border-gray-200"} shadow-sm bg-white`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex items-center space-x-3 mb-3">
                <div className="bg-pink-500 rounded-full p-2">
                    <img src="https://s3-alpha-sig.figma.com/img/31a6/0c48/e14ab2409792068b893ad2f89fe32ee0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pofgP~eqQzm6bs8vtCDJ8FDxVFK4x3AUrdfpKRCuVJ-tzlw6RtyawDOuPZMO3o3UVT5l~qghBnfgFuSKOy29~ZS9pPzM7cQZ3C3D6npamqRAN-OtgsJmy8XfNf1aKpnuIaGu3Sih5Gr6x-pP8IkMSf5fKeN9nMvLh-7~XbufYULjehWU0LMrWEQX2WSFAOns6wFgpOOuDr-xRcQJn0FDxksyPqg4urq1Cse6BmFUcspqjySh0sAmi21Nt2G4siJV3KyzPDbv6TdTBEYFyKiMxU5DxLtHDf9Xs3ydx36Re1pqNIT~HK3mHIAINFwLc0VGQvnCpJjs0X1pDL41FOnmiA__" alt="airbnb" className="w-6 h-6" />
                </div>
                <div>
                    <div className="font-semibold text-sm">Product Designer</div>
                    <div className="text-xs text-gray-500">Airbnb</div>
                </div>
            </div>

            <p className="text-xs text-gray-600 mb-4">
                Conduct user research and analysis to identify pain points and opportunities{" "}
                <span className="text-[#4f46e5] underline cursor-pointer">see more.</span>
            </p>

            {/* Responsive Badge Section */}
            <div className="flex flex-wrap justify-start gap-2 text-xs mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md min-w-[80px] text-center">Part-Time</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md min-w-[80px] text-center">Min 1 Year</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md min-w-[80px] text-center">Senior Level</span>
            </div>

            {/* Responsive Button Section */}
            <div className="flex flex-row xs:justify-between gap-2">
                <button onClick={()=>navigate('/job/detail')} className="bg-[#4f46e5] w-full md:w-[160px] sm:w-auto text-white text-xs px-4 py-2 rounded-md hover:bg-[#4338ca]">
                    Apply Now
                </button>
                <button className="border text-[#4f46e5] w-full md:w-[160px] sm:w-auto border-[#4f46e5] text-xs px-4 py-2 rounded-md hover:bg-[#f1f5ff]">
                    View Details
                </button>
            </div>
        </motion.div>
    );
}

export default JobCard;
