
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewJob = () => {
  const [jobs, setJobs] = useState([]);
   const [user, setUser] = useState(null);
   const [userJobs, setUserJobs] = useState([]);

  const fetchJobs = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
    setJobs(res.data); // ✅ Axios puts the actual response data inside `res.data`
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};


  useEffect(() => {

     const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const parsedUser = JSON.parse(userInfo);
      setUser(parsedUser);
    }

   

     fetchJobs() 
      
  }, []);

  const [selectedJob, setSelectedJob] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleCardClick = (job) => {
  setSelectedJob(job);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedJob(null);
};

  useEffect(() => {
   if (user && jobs.length > 0) {
      const filtered = jobs.filter((job) => job.postedBy === user.email);
      setUserJobs(filtered);
    }
  },[user, jobs])

  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost/` + id)
      .then(() => {
        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div className="p-4 flex flex-wrap gap-3.5 items-center">
  {userJobs.map((job) => (
   <div
  key={job._id}
  onClick={() => handleCardClick(job)}
  className="cursor-pointer w-80 h-72 bg-white rounded-2xl shadow border-2 border-gray-200 p-4 flex flex-col justify-between hover:shadow-lg transition"
>
  <div className="flex items-center gap-3 mb-2">
    <img src={job.companyLogo} alt="Logo" className="w-10 h-10 object-contain" />
    <div>
      <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{job.jobTitle}</h2>
      <p className="text-xs text-gray-500">{job.employmentType.join(", ")}</p>
    </div>
  </div>

  <div className="mb-2">
    <p className="text-base text-gray-700 line-clamp-3">
      <span className="font-medium">Responsibilities:</span> {job.responsibilities}
    </p>
  </div>
   <div className="mb-2">
    <p className="text-base text-gray-700 line-clamp-3">
      <span className="font-medium">Skills:</span> {job.requiredSkills.join(", ")}
    </p>
  </div>

  <div className="mt-auto flex justify-between gap-2 pt-3">
    <Link to={`/company_dashboard/updatejob/${job._id}`} className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-md">Update</Link>
    <button onClick={(e) => { e.stopPropagation(); handleDelete(job._id); }} className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-md">Delete</button>
  </div>
</div>
  ))}
</div>


{isModalOpen && selectedJob && (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
    <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
      >
        &times;
      </button>

      <div className="flex items-center gap-4 mb-4">
        <img src={selectedJob.companyLogo} alt="Logo" className="w-12 h-12 object-contain" />
        <div>
          <h2 className="text-xl font-bold">{selectedJob.jobTitle}</h2>
          <p className="text-sm text-gray-500">{selectedJob.employmentType.join(", ")}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm text-gray-700">
        <p><span className="font-semibold">Company:</span> {selectedJob.companyName}</p>
        <p><span className="font-semibold">Location:</span> {selectedJob.location}</p>
        <p><span className="font-semibold">Industry:</span> {selectedJob.industry}</p>
        <p><span className="font-semibold">Employees:</span> {selectedJob.employeeStrength}</p>
        <p><span className="font-semibold">Salary:</span> {selectedJob.sallery}</p>
        <p><span className="font-semibold">Technology Areas:</span> {selectedJob.technology}</p>
        <p><span className="font-semibold">Categories:</span> {selectedJob.categories.join(", ")}</p>

        <div>
          <h3 className="font-semibold">Job Description</h3>
          <p>{selectedJob.jobDescription}</p>
        </div>

        <div>
          <h3 className="font-semibold">Responsibilities</h3>
          <p>{selectedJob.responsibilities}</p>
        </div>

        <div>
          <h3 className="font-semibold">Skills & Experience</h3>
          <p>{selectedJob.skillsAndExperience}</p>
        </div>

        <div>
          <h3 className="font-semibold">Required Skills</h3>
          <ul className="list-disc list-inside">
            {selectedJob.requiredSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">About Company</h3>
          <p>{selectedJob.aboutCompany}</p>
        </div>
      </div>
    </div>
  </div>
)}


    </>
  );
};

export default ViewJob;
