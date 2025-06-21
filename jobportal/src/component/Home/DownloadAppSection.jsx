import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadAppSection = () => {
  return (
    <div className="bg-[#F3F2FF] py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Get the NextHire Job Search App
        </h2>
        <p className="text-gray-400 mt-2">
          Search through millions of jobs and find the right fit. Simply swipe
          right to<br/> apply.
        </p>
      </div>

      <div className="flex gap-4">
        <a
          href="#"
          className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          <FaGooglePlay className="text-lg" />
          <span>Google Play</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          <FaApple className="text-lg" />
          <span>Apple Store</span>
        </a>
      </div>
    </div>
  );
};

export default DownloadAppSection;
