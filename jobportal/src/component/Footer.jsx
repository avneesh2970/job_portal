import React from "react";
import logo from '../../src/component/photos/novalogo.png'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-f text-gray-300 py-16 px-10 md:px-8">
      <div className="grid md:grid-cols-4 ">
        
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2">
            <div className=" p-2">
              <img src={logo} alt=""className="w-10"  />
            </div>
            <h2 className="text-2xl font-semibold text-white">NN<span className="text-blue-500">Hire</span></h2>
          </div>
          <p className="mt-4 text-sm">
          Great platform for the job seeker that passionate about startups. Find your <br/> dream job easier.
          </p>

          <div className="flex gap-8 mt-6  ">
            <a href="https://www.facebook.com/people/Novanectar-Services-Pvt-Ltd/61565824312345/?mibextid=qi2Omg&rdid=h2LF1ptM2dRhys9q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fa6ob9vX4d6uEAd3B%2F%3Fmibextid%3Dqi2Omg"target="_blank" className="text-gray-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/novanectar_services_pvt.ltd/?igsh=MXRoaHN3MGM5czYxZw%3D%3D#" target="_blank" className="text-gray-400 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@novanectarservicespvt.ltd." target="_blank" className="text-gray-400 hover:text-white transition">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/novanectar/"target="_blank" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div>
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
        <div className="">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white transition">Help Docs</a></li>
            <li><a href="#" className="hover:text-white transition">Guide</a></li>
            <li><a href="#" className="hover:text-white transition">Updates</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div   className="">
          <h3 className="text-lg font-semibold text-white">Get job notifications</h3>
          <p className="mt-4 text-sm">
            The latest job news, articles, sent to your <br/> inbox weekly.
          </p>
          <div className="flex mt-4 gap-1 md:flex-row flex-col space-y-1.5">
            <input
              type="email"
              placeholder="Enter your email"
              className=" px-2 md:px-4  py-1 md:py-3  rounded-md mx-auto w-8/12 md:w-8/12 border border-gray-300  focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white flex justify-center mx-auto w-8/12 md:w-4/12 px-2 md:px-4 items-center py-1 md:py-3  rounded-md hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;
