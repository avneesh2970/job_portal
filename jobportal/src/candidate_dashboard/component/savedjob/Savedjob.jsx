import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
   <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">💾 Saved Jobs</h2>

      {savedJobs.length === 0 ? (
        <p className="text-gray-500">You have no saved jobs.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {savedJobs.map((job) => (
            <div key={job._id} className="border p-4 rounded-lg shadow-sm hover:shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">{job.jobTitle}</h3>
                  <p className="text-sm text-gray-500">{job.companyName}</p>
                </div>
                <button
                  onClick={() => removeSavedJob(job._id)}
                  className="text-red-500 px-1.5 py-0.5 border border-s-red-200 text-sm cursor-pointer rounded hover:bg-red-100"
                >
                  Remove
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2 mr-10">{job.aboutCompany}</p>

              <div className="mt-4 flex gap-3">
                <button
                 onClick={()=>navigate(`candidate_dashboard/cand_job/${job._id}`)}
                  className="text-sm text-blue-600 underline cursor-pointer px-2 py-1 border border-blue-300 rounded hover:bg-blue-100  "
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
