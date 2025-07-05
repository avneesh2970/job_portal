import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Required for Link to work

const ApplicantDetails = () => {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white">
      {/* Left Panel */}
      <div className="border rounded-lg shadow-sm p-5">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Applicant"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-bold">John Mayer</h2>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
          </div>
        </div>

        {/* Job Info */}
        <div className="mt-6 bg-gray-100 rounded-md p-4">
          <p className="text-xs text-gray-500 mb-1">Applied Jobs</p>
          <div className="bg-white p-3 rounded shadow-sm">
            <h3 className="font-semibold text-sm">Product Designer</h3>
            <p className="text-xs text-gray-400">Designer • Full-Time</p>
            <p className="text-xs text-gray-400 mt-1">8 days ago</p>
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
              <FaEnvelope /> janemayer@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +91 701–714–8769
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin />
              <a
                href="https://linkedin.com/janemayer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/janemayer
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaBehance />
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Behance
              </a>
            </li>
            <li className="flex items-center gap-2">
              🌐
              <a
                href="https://janemayer.com"
                className="text-blue-600 hover:underline"
              >
                www.janemayer.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:col-span-2 border rounded-lg shadow-sm p-5">
      <div className="flex gap-6 text-sm font-medium text-gray-500 border-b pb-2">
  <Link to="#" className="text-indigo-600 border-b-2 border-indigo-600 pb-1">Hiring Process</Link>
  <Link to="#" className="hover:text-indigo-600">Applicant Profile</Link>
  <Link to="#" className="hover:text-indigo-600">Resume</Link>
  <Link to="/InterviewSchedule" className="hover:text-indigo-600">Interview Schedule</Link>
</div>


        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Current Stage</h3>
          <div className="flex gap-4 mb-6">
            <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">In-Review</span>
            <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Shortlisted</span>
            <span className="px-4 py-1 bg-indigo-600 text-white rounded-full text-sm font-medium">Interview</span>
            <span className="px-4 py-1 bg-gray-200 text-gray-500 rounded-full text-sm font-medium">Hired / Declined</span>
          </div>

          <div className="text-sm text-gray-700 space-y-3">
            <p>
              <strong>Interview Date:</strong> 10 - 13 July 2021
            </p>
            <p>
              <strong>Interview Location:</strong> Silver Crystal Room, Nomad Office <br />
              3517 W. Gray St. Utica, Pennsylvania 57867
            </p>
            <p>
              <strong>Interview Status:</strong>{" "}
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold ml-1">
                On Progress
              </span>
            </p>
          </div>

          <button className="mt-6 bg-gray-200 text-gray-500 px-4 py-2 rounded cursor-not-allowed" disabled>
            Move To Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;
