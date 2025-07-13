import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bookmark, BookmarkCheck } from 'lucide-react';
const Savedjob = () => {
    const [savedJobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;
  console.log('User ID:', userId);  

 const fetchSavedJobs = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}/saved-jobs`);
      setSavedJobs(res.data);
    } catch (err) {
      console.error('Error fetching saved jobs:', err);
    }
  };


    const removeSavedJob = async (jobId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}/saved-jobs/${jobId}`);
      setSavedJobs((prev) => prev.filter((job) => job._id !== jobId));
    } catch (err) {
      console.error('Error removing saved job:', err);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchSavedJobs();
    }
  }, [userId]);

   

  return (
   <>
   <div className="max-w-full mx-3 ">
      <h2 className="text-2xl font-semibold mb-6 my-5">💾 Saved Jobs</h2>

      {savedJobs.length === 0 ? (
        <p className="text-gray-500">You have no saved jobs.</p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
         {savedJobs.map((job) => (
  <div
    key={job._id}
    className="border border-blue-400 hover:border-blue-600 hover:border-2 bg-white p-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-200 ease-in-out"
  >
    <div className="flex justify-between items-start">
     <div className="flex space-x-2 ">
      
      <div className='my-auto'>
        <img src={job.companyLogo} className='w-10 h-10 my-auto' alt="" />
      </div>
       <div>
        <h3 className="text-lg font-semibold text-[#1D4ED8]">{job.jobTitle}</h3>
        <p className="text-sm text-gray-600 mt-1">{job.companyName}</p>
        
      </div>
      

     </div>
      <button
        onClick={() => removeSavedJob(job._id)}
        className="text-red-600 text-sm  border-red-200 rounded hover:bg-red-50 transition"
      >
        <BookmarkCheck/>
      </button>
    </div>

    <p className="text-sm text-gray-700 mt-3 line-clamp-3">{job.aboutCompany}</p>
    <div className='my-4'>
        {job?.employmentType.map((type, index)=>{
          return (
            <span key={index} className="bg-blue-200 text-blue-600 px-2 py-1 rounded-sm text-xs mr-2">
              {type}
            </span>
          );
        }) }
      </div>

    <div className="mt-4 flex gap-3">
      <button
        onClick={() => navigate(`/candidate_dashboard/cand_job/${job._id}`)}
        className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
      >
        View Job
      </button>
    </div>
  </div>
))}

        </div>
      )}
    </div>
   
   </>
  );
};

export default Savedjob;
