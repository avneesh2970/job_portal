import React from "react";
import { Link } from "react-feather";
import { CiEdit } from "react-icons/ci";
import logo from "../../assets/image/Company_Logo.png"

import view from "../../assets/image/view.png";
import facebook from "../../assets/image/facebook.png";
import instagram from "../../assets/image/instagram.png";
import LinkedIn from "../../assets/image/linkedin.png";
import gmail from "../../assets/image/gmail.png";
import image1 from "../../assets/image/Images.png";
import image2 from "../../assets/image/leo.png";
import image3 from "../../assets/image/leon.png";
import image4 from "../../assets/image/Mask.png";
import ProfileCard from "./ProfileCard";
import sarah from "../../assets/image/sarah.png";
import JobCard from "./JobCard";
import imagehtml from "../../assets/image/image(1).png";
import imagecss from "../../assets/image/image2.png";
import imagejava from "../../assets/image/image(4).png";
import imagefigma from "../../assets/image/image(2).png";
import imagewix from "../../assets/image/image9.png";
import imageframe from "../../assets/image/image(1).png";
import fles from "../../assets/image/flags.png";
import fles1 from "../../assets/image/flags1.png";
import fles2 from "../../assets/image/flags2.png";
import found from "../../assets/image/Frame1189.png"
import empoly from "../../assets/image/Frame1189(1).png"
import loction from "../../assets/image/Frame1189(2).png"
import industry from "../../assets/image/Frame1189(3).png"
import { Frame } from "lucide-react";



const locations = [
  { name: "India", flag: fles, isHeadquarter: true },
  { name: "Russia", flag: fles1, isHeadquarter: false },
  { name: "England", flag: fles2, isHeadquarter: false },
];

const technologies = [
  { name: "HTML 5", icon: imagehtml },
  { name: "CSS 3", icon: imagecss },
  { name: "JavaScript", icon: imagejava },
  { name: "Figma", icon: imagefigma },
  { name: "Wix", icon: imagewix },
  { name: "Framer", icon: imageframe },
];

function Company_profile() {
  return (
    <>
      <div class="flex">
        <div class="w-64 bg-white h-screen p-6 hidden lg:block">
        
          <nav>
            <ul>
             
              <li class="mb-4">
                <a
                  class="flex items-center text-blue-600 font-semibold"
                  href="#"
                >
                  <i class="fas fa-user mr-3"></i>
                  Company Profile
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 p-6">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <img
                  alt="Company Logo"
                  class="w-16 h-16 mr-4"
                  height="60"
                  src={logo}
                  width="60"
                />
                <div>
                  <h1 className="text-2xl font-bold">Nomad</h1>
                  <a className="text-blue-600">
                    <p> www.Nomad.com</p>
                  </a>
                </div>
              </div>
              <div class="flex items-center">
                <img src={view} alt="" />
                <button class=" text-blue-600 px-4 py-2 rounded mr-4 cursor-pointer">
                  Public View
                </button>
              </div>
            </div>
            <div class="md:flex justify-center items-center mb-6 ">
              <div className=" p-4 rounded-lg flex items-center">
                   <img src={found} alt="" className="text-2xl mr-2"  />
                <div>
                <p class="text-gray-500">Founded</p>
                <p class="font-semibold">March 2011</p>
            </div>
              </div>
              <div className=" p-4 rounded-lg flex items-center  ">
                   <img src={empoly} alt="" className="text-2xl mr-2"  />
                <div>
                <p class="text-gray-500">Employees</p>
                <p class="font-semibold">50-100</p>
            </div>
              </div>
              <div className=" p-4 rounded-lg flex items-center">
                   <img src={loction} alt="" className="text-2xl mr-2"  />
                <div>
                <p class="text-gray-500">Location</p>
                <p class="font-semibold">India</p>
            </div>
              </div>
              <div className= " p-4 rounded-lg flex items-center  ">
                   <img src={industry} alt="" className="text-2xl mr-2"  />
                <div>
                <p class="text-gray-500">Industry</p>
                <p class="font-semibold">IT Services and IT Consulting</p>
            </div>
              
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Company Profile</h2>
                  <button className="text-blue-600 rounded-full border-amber-100 border p-1">
                    <CiEdit className="text-2xl" />
                  </button>
                </div>
                <p className="text-gray-600">
                  Nomad is a software platform for starting and running internet
                  businesses. Millions of businesses rely on software tools to
                  accept payments, expand globally, and manage their businesses
                  online. Nomad has been at the forefront of expanding internet
                  commerce, powering new business models, and supporting the
                  latest platforms, from marketplaces to mobile commerce sites.
                  We believe that growing the GDP of the internet is a problem
                  rooted in code and design, not finance. Nomad is built for
                  developers, makers, and creators. We work on solving the hard
                  technical problems necessary to build global economic
                  infrastructure—from designing highly reliable systems to
                  developing advanced machine learning algorithms to
                  <a className="text-blue-600" href="#">
                    see more.
                  </a>
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow mb-6 mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Contact us</h2>
                  <button className="text-blue-600 rounded-full border-amber-100 border p-1 ">
                    <CiEdit className="text-2xl" />
                  </button>
                </div>
                <div className="md:flex md:space-x-4 mb-4   md:flex-wrap  gap-y-3  justify-center  ">
                  <button className="text-blue-600 flex items-center md:gap-2 border-2 px-3 py-1 cursor-pointer  md:mb-0 mb-4 w-full md:w-auto ">
                    <img src={facebook} alt="" />
                    <p>facebook</p>
                  </button>
                  <button className="text-pink-600 flex items-center gap-2 border-2 px-3 py-1 cursor-pointer md:mb-0 mb-4 w-full md:w-auto ">
                    <img src={instagram} alt="" />
                    <p>instagram</p>
                  </button>
                  <button className="text-blue-700 flex items-center gap-2 border-2 px-5 py-1 cursor-pointer md:mb-0 mb-4 w-full md:w-auto  ">
                    <img src={LinkedIn} alt="" />
                    <p>linkedin</p>
                  </button>
                  <button className="text-red-600 flex items-center gap-2 border-2 px-7 py-1 cursor-pointer md:mb-0 mb-4 w-full md:w-auto ">
                    <img src={gmail} alt="" />
                    <p>gmail</p>
                  </button>
                </div>
                <div className="grid grid-cols-2  items-center  ">
                  <div className="justify-self-center ">
                    <img src={image1} alt="" className="h-[463px]" />
                  </div>
                  <div className=" justify-self-center ">
                    <img src={image2} alt="" className="h-[154px]" />
                    <img src={image3} alt="" className="h-[154px]" />
                    <img src={image4} alt="" className="h-[154px]" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Our Team</h2>
                  <button className="text-blue-600">
                    <CiEdit className="text-2xls" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ProfileCard
                    name="Célestin Gardinier"
                    role="CEO & Co-Founder"
                    image={sarah}
                    linkedin="k"
                    instagram="j"
                    website="k"
                  />
                  <ProfileCard
                    name="Célestin Gardinier"
                    role="CEO & Co-Founder"
                    image={sarah}
                    linkedin="j"
                    instagram="l"
                    website="k"
                  />
                  <ProfileCard
                    name="Célestin Gardinier"
                    role="CEO & Co-Founder"
                    image={sarah}
                    linkedin="hh"
                    instagram="j"
                    website="h"
                  />
                </div>
                <a className="text-blue-600 mt-4 inline-block">
                  View all team members →
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Open Positions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <JobCard
                    jobTitle="Senior Product Designer"
                    company="Google"
                    location="New York"
                    description="It is a long established fact that a reader of a page when looking at its layout."
                    logo="/google-logo.png"
                    timeAgo="2 Days Ago"
                    jobType="Full Time"
                  />
                  <JobCard
                    jobTitle="Senior Product Designer"
                    company="Google"
                    location="New York"
                    description="It is a long established fact that a reader of a page when looking at its layout."
                    logo="/google-logo.png"
                    timeAgo="2 Days Ago"
                    jobType="Full Time"
                  />
                  <JobCard
                    jobTitle="Senior Product Designer"
                    company="Google"
                    location="New York"
                    description="It is a long established fact that a reader of a page when looking at its layout."
                    logo="/google-logo.png"
                    timeAgo="2 Days Ago"
                    jobType="Full Time"
                  />
                  <JobCard
                    jobTitle="Senior Product Designer"
                    company="Google"
                    location="New York"
                    description="It is a long established fact that a reader of a page when looking at its layout."
                    logo="/google-logo.png"
                    timeAgo="2 Days Ago"
                    jobType="Full Time"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 bg-white shadow-lg rounded-2xl mb-6 ">
                <h2 className="text-xl font-semibold">Technology we used</h2>
                <div className="flex gap-2 justify-between">
                  <p className="text-gray-500 text-sm mt-1">
                    Learn about the technology and tools that Nomad uses.
                  </p>
                  <div className="">
                    <CiEdit className="text-2xl  " />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12"
                      />
                      <p className="text-gray-700 text-sm mt-1">{tech.name}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium mt-4 block hover:underline"
                >
                  View all tech stack →
                </a>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-2xl mb-6 ">
                <h2 className="text-xl font-semibold">Office Location</h2>
                <div className="flex justify-between">
                  <p className="text-gray-500 text-sm mt-1">
                    Zend offices spread across 20 countries
                  </p>
                  <CiEdit className="text-2xl" />
                </div>

                <div className="mt-4 space-y-3">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src={location.flag}
                        alt={location.name}
                        className="w-6 h-4 rounded-sm"
                      />
                      <p className="text-gray-700 text-sm">
                        {location.name}
                        {location.isHeadquarter && (
                          <span className="text-blue-600 font-medium ml-1">
                            (Headquarter)
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium mt-4 block hover:underline"
                >
                  View all Countries →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company_profile;
