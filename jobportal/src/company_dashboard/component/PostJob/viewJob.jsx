
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
      <div className="p-4 grid grid-cols-1  lg:grid-cols-2 gap-4">
        {userJobs.map((job) => (
          <div
            key={job._id}
            className="w-full bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col justify-between"
          >
            <div>
            <p className="text-sm text-gray-400 text-right">
                  Posted on: {job.day}-{job.month}-{job.year}
                </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <img
                    src={job.companyLogo}
                    alt="Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {job.jobTitle}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {job.employmentType.join(" | ")}
                    </p>
                  </div>
                </div>
                {/* <p className="text-sm text-gray-400 text-right">
                  Posted on: {job.day}-{job.month}-{job.year}
                </p> */}
              </div>

              <div className="mb-3 space-y-1">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Company:</span>{" "}
                  <a
                    href={job.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {job.companyName}
                  </a>{" "}
                  | <span className="font-semibold">Location:</span>{" "}
                  {job.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Industry:</span>{" "}
                  {job.industry} |{" "}
                  <span className="font-semibold">Employees:</span>{" "}
                  {job.employeeStrength}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Salary:</span> {job.sallery}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Technology Areas:</span>{" "}
                  {job.technology}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Categories:</span>{" "}
                     
                  {job.categories[0]}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    Job Description
                  </h3>
                  <p className="text-sm text-gray-600">{job.jobDescription}</p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    Responsibilities
                  </h3>
                  <p className="text-sm text-gray-600">{job.responsibilities}</p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    Skills & Experience
                  </h3>
                  <p className="text-sm text-gray-600">
                    {job.skillsAndExperience}
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    Required Skills
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {job.requiredSkills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    About Company
                  </h3>
                  <p className="text-sm text-gray-600">{job.aboutCompany}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:justify-end gap-2 text-center">
              <Link
                to={`/updatejob/${job._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(job._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewJob;
