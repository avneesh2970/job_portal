import React from 'react';
import { ArrowLeft, CalendarIcon, Clock, MapPin, BriefcaseIcon, CircleDollarSign } from 'lucide-react';

export default function CompanyJobDetails({ job, onBack }) {
  return (
    <div className="w-full bg-white m-4">
      <div className="flex items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-blue-600"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span>Back</span>
        </button>
        <div className="ml-auto">
          <button className="flex items-center text-blue-600 border border-blue-600 px-4 py-2 rounded-md">
            <span className="mr-2">Edit Job Profile</span>
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <div className="bg-emerald-100 p-3 rounded-lg mr-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="4" fill="#10B981" fillOpacity="0.2"/>
            <path d="M20 12L24 16H28V28H12V16H16L20 12Z" fill="#10B981" fillOpacity="0.6"/>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{job.role}</h1>
          <p className="text-gray-500">Design • {job.jobType === "Fulltime" ? "Full-Time" : job.jobType} • 0/{job.needs} Hired</p>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          <button 
            className="px-4 py-2 text-gray-500"
            onClick={onBack}
          >
            Applicants
          </button>
          <button 
            className="px-4 py-2 border-b-2 border-blue-500 text-blue-500 font-medium"
          >
            Job Details
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left column - Job description and requirements */}
        <div className="col-span-2 border border-blue-200 border-dashed rounded-lg p-6">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Job Description</h2>
            <p className="text-gray-600 mb-4">
              {job.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Key Responsibilities</h2>
            <ul className="space-y-4">
              {job.keyResponsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 bg-blue-100 rounded-full p-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" stroke="#3B82F6" fill="none" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-600">{responsibility}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Skill & Experience</h2>
            <ul className="space-y-4">
              {job.skillsExperience.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 bg-blue-100 rounded-full p-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" stroke="#3B82F6" fill="none" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-600">{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column - Job overview and details */}
        <div className="col-span-1">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Job Overview</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-3">
                  <CalendarIcon size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date Posted</p>
                  <p className="text-gray-700">{job.overview.datePosted}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-3">
                  <CalendarIcon size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expiration Date</p>
                  <p className="text-gray-700">{job.overview.expirationDate}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-3">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-700">{job.overview.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-3">
                  <BriefcaseIcon size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Job Title</p>
                  <p className="text-gray-700">{job.role}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-3">
                  <Clock size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hours</p>
                  <p className="text-gray-700">{job.overview.hours}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-3">
                  <CircleDollarSign size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Salary</p>
                  <p className="text-gray-700">{job.overview.salary}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {job.categories.map((category, index) => (
                <span key={index} className={`px-4 py-1 ${
                  category === 'Design' ? 'bg-orange-100 text-orange-600' : 
                  category === 'Marketing' || category === 'UX/UI' ? 'bg-blue-100 text-blue-600' :
                  category === 'Leadership' ? 'bg-purple-100 text-purple-600' :
                  category === 'Content' ? 'bg-green-100 text-green-600' :
                  category === 'Development' || category === 'Mobile' || category === 'Frontend' || category === 'Backend' ? 'bg-indigo-100 text-indigo-600' :
                  category === 'Business' || category === 'Analysis' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-gray-100 text-gray-600'
                } rounded-full text-sm`}>
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills.map((skill, index) => (
                <span key={index} className="px-4 py-1 border border-gray-200 rounded-md text-gray-600 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}