import React from "react";
import logo from '../../src/component/photos/novalogo.png'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-f text-gray-300 py-16 px-10 md:px-8">
      <div className="grid sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 ">
        
        {/* Brand Section */}
        <div>
          <div className="flex items-center ">
            <div className=" p-2">
              <img src={logo} alt=""className="w-10"  />
            </div>
            <h2 className="text-2xl font-semibold text-white">NN<span className="text-blue-500">Hire</span></h2>
          </div>
          <p className="mt-4 text-sm pr-3.5 sm:pr-9">
          Great platform for the job seeker that passionate about startups. Find your <br/> dream job easier.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/share/1Cc8gFvQXm/" target="_blank" className=" text-white transition">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/_nnhire?igsh=MW5xbW9nMG16MW94NQ==" target="_blank" className="text-white transition">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@novanectarservicespvt.ltd." target="_blank" className="text-white transition">
              <FaYoutube  className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/nnhire/"target="_blank" className="text-white transition">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href="#" className="text-white transition">
              <FaTwitter  className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="sm:mt-0 mt-10 ml-0 md:ml-16">
          <h3 className="text-lg font-semibold text-white">About</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white transition">Companies</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Advice</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="md:mt-0 mt-10">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white transition">Help Docs</a></li>
            <li><a href="#" className="hover:text-white transition">Guide</a></li>
            <li><a href="#" className="hover:text-white transition">Updates</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div   className="md:mt-0 mt-10">
          <h3 className="text-lg font-semibold text-white">Get job notifications</h3>
          <p className="mt-4 text-sm">
            The latest job news, articles, sent to your <br/> inbox weekly.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;
