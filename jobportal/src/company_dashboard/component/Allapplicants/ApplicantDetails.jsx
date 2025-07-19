import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FiExternalLink } from "react-icons/fi";
import { FaEnvelope, FaPhone, FaLinkedin, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Required for Link to work
import { useLocation } from 'react-router-dom';
const ApplicantDetails = () => {
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState('hiring');
  const tabs = [
    { id: 'hiring', label: 'Hiring Process' },
    { id: 'profile', label: 'Applicant Profile' },
    { id: 'resume', label: 'Resume' },
    // { id: 'interview', label: 'Interview Schedule' },
  ];
  const location = useLocation();
  const appl = location?.state?.appl;

  const skillColors = [
    'bg-blue-100 text-blue-700',
    'bg-green-100 text-green-700',
    'bg-yellow-100 text-yellow-700',
    'bg-purple-100 text-purple-700',
    'bg-pink-100 text-pink-700',
    'bg-indigo-100 text-indigo-700',
    'bg-red-100 text-red-700',
    'bg-teal-100 text-teal-700'
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${appl.user}`);
      console.log('user info', response.data);
      setUser(response.data);
    }
    fetchData();

  }, [location.state.appl.user]);


  const applicationStatuses = [ {
    status: 'Submitted',
    date: new Date().toLocaleDateString()
  }, {
    status: 'Under Review',
    date: 'pending'
  }, {
    status: 'Interview',
    date: 'pending'
  }, {
    status: 'Offered',
    date: 'pending'
  }, {
    status: 'Rejected',
    date: 'pending'
  }];


  console.log('Applicant Details:', appl?.email);
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 space-x-5 bg-white">
      {/* Left Panel */}
      <div className="border border-zinc-300 rounded-lg h-fit  fixed w-64 shadow-sm p-5">
        <div className="flex items-center gap-4">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}${user?.image}`}
            alt="Applicant"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-bold">{user?.firstname} {user?.lastname}</h2>
            <p className="text-sm text-gray-500">{user?.profile}</p>
          </div>
        </div>

        {/* Job Info */}
        <div className="mt-6 bg-gray-100 rounded-md p-4">
          <p className="text-xs text-gray-500 mb-1">Applied Jobs</p>
          <div className="bg-white p-3 rounded shadow-sm">
            <h3 className="font-semibold text-sm">{appl?.jobTitle}</h3>
            <p className="text-xs text-gray-400">{appl?.job.employmentType.map((type) =>
              <span key={type}>{type} </span>
            )}</p>
            <p className="text-xs text-gray-400">Applied: {new Date(appl?.appliedAt).toLocaleDateString()}</p>
          </div>

          {/* Stage Progress */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-1">Stage</p>
            <div className="flex items-center gap-1 text-xs font-semibold text-orange-500">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="bg-orange-500 h-2 w-[75%]"></div>
              </div>
              <span>Interview</span>
            </div>
          </div>

          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Interview
          </button>
        </div>

        {/* Contact */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope /> {appl?.email}
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> {user?.phone || 'N/A'}
            </li>
            
           
          </ul>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:col-span-2 w-full ml-72 ml-w-3/12 border border-zinc-300 rounded-lg shadow-sm p-5">
        <div className="flex gap-6 text-sm font-medium text-gray-500 border-b pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-1 ${activeTab === tab.id
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'hover:text-indigo-600'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'hiring' && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Current Stage</h3>
            {applicationStatuses.map((status, index) => (
              <div key={index} className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">{status.status}</span>
                <span className="text-base text-gray-600"> {status.date}</span>
              </div>
            ))}

            <div className="text-sm text-gray-700 space-y-3">
            
              <p>
               
              </p>
            </div>

         
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="">
            <h3 className="text-lg font-semibold ">Profile Information</h3>
            {
              user && (
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-blue-300">


                  {/* Body */}
                  <div className="p-6 space-y-4 text-gray-800">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-blue-700">Email</h4>
                        <p className="font-semibold">{user.email}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-blue-700">Phone</h4>
                        <p className="font-semibold">{user.phone}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-blue-700">Portfolio</h4>
                        <a href={user.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-700underline">
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-blue-700">Linked Profile</h4>
                        <a href={user.linkedProfile} target="_blank" rel="noopener noreferrer" className="text-blue-700underline">
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700">Address</h4>
                      <p>
                        {user.address?.address1}, {user.address?.city}, {user.address?.state} - {user.address?.pincode}, {user.address?.country}
                      </p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700">Skills</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                       {user && Array.isArray(user.skills) && user.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-4 py-1 rounded-full text-sm font-medium ${skillColors[idx % skillColors.length]}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Work Experience */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700">Work Experience</h4>
                      <div className="mt-6">
                        <h3 className="text-xl flex flex-wrap font-semibold text-blue-700mb-4">Work Experience</h3>
                        <div className="space-y-4 flex flex-wrap gap-1 lg:gap-2">
                          {user && Array.isArray(user.workExperience) && user.workExperience.map((exp, idx) => (
                            <div
                              key={idx}
                              className="bg-blue-100 flex flex-col justify-between hover:bg-blue-200 hover:border-2 hover:scale-105 transition-all duration-300 ease-in-out h-44 w-64 border border-blue-300 rounded-2xl p-4 shadow-md"

                            >
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="text-lg  font-bold text-blue-700">{exp.jobTitle}</h4>

                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-gray-700">
                                  <span className="font-semibold">Company:</span> {exp.company}
                                </p>
                                <p className="text-sm text-gray-700">
                                  <span className="font-semibold">Location:</span> {exp.location}
                                </p>
                                <p className="text-sm text-gray-700">
                                  <span className="font-semibold">Salary:</span> ₹{exp.salary}
                                </p>
                                <span className="text-sm text-gray-500">
                                  {exp.StartDate} – {exp.EndDate}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-700">Education</h4>
                      <div className="space-y-4 mt-4">
                        {user.education.map((edu, idx) => (
                          <div key={idx} className="  p-4 rounded-lg shadow-sm">
                            <h4 className="text-lg font-semibold ">{edu.specialization}</h4>
                            <p className="text-sm font-medium">{edu.institute}</p>
                            <p className="text-sm text-gray-600  mt-1">
                              {edu.StartDate} – {edu.EndDate}
                            </p>

                            {edu.skills.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {edu.skills.map((skill, skillIdx) => (
                                  <span
                                    key={skillIdx}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                    </div>


                  </div>
                </div>
              )
            }
          </div>


        )}
        {activeTab === 'resume' && (
          <div>
            {user && user.resume ? (
              <iframe
                src={`${import.meta.env.VITE_BACKEND_URL}${user.resume}`}
                width="100%"
                height="500px"
                title="Resume"
              >
                <p>Your browser does not support PDF viewing. <a href={`${import.meta.env.VITE_BACKEND_URL}${user.resume}`}>Download instead</a>.</p>
              </iframe>
            ) : (
              <p className="text-gray-500">No resume uploaded.</p>
            )}
          </div>
        )}


      </div>
    </div>
  );
};

export default ApplicantDetails;
