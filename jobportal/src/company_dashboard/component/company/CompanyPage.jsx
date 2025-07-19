import React, {useState , useEffect } from "react";
import { Link } from "react-feather";
import { CiEdit } from "react-icons/ci";
import logo from "../../assets/image/Company_Logo.png"
import axios from "axios";


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
  const [companyProfile, setCompanyProfile] = useState([]);
  
  console.log("Company Profile:", companyProfile);

  const techArray = companyProfile?.technology?.split(',').map(tech => tech.trim());

  const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  const monthIndex = companyProfile?.month - 1; // subtract 1 because array is 0-indexed
  const monthName = monthNames[monthIndex];
  useEffect(() => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const user_email = userInfo ? userInfo.email : null;
  const fetchCompanyProfile = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost/${user_email}/companyprofile`);
    console.log(response.data);
    setCompanyProfile(response.data.companyProfile);

  }
  fetchCompanyProfile();

},[])
  return (
    <>
      <div class="flex">
       
       { companyProfile && (
        <div class="flex-1 p-6"> 
         <div className="flex-1 p-6">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <img
                  alt="Company Logo"
                  class="w-16 h-16 mr-4"
                  height="60"
                  src={`${companyProfile.companyLogo}`}
                  width="60"
                />
                <div>
                  <h1 className="text-2xl font-bold">{companyProfile.companyName}</h1>
                  <a className="text-blue-600">
                    <p> {companyProfile.websiteUrl}</p>
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
                <p class="font-semibold">{monthName} {companyProfile.year}</p>
            </div>
              </div>
              <div className=" p-4 rounded-lg flex items-center  ">
                   <img src={empoly} alt="" className="text-2xl mr-2"  />
                <div>
                <p class="text-gray-500">Employees</p>
                <p class="font-semibold">{companyProfile.employeeStrength}</p>
            </div>
              </div>
              <div className=" p-4 rounded-lg flex items-center">
                   <img src={loction} alt="" className="text-2xl mr-2"  />
                <div>
                <p class="text-gray-500">Location</p>
                <p class="font-semibold">{companyProfile.location}</p>
            </div>
              </div>
              <div className= " p-4 rounded-lg flex items-center  ">
                   <img src={industry} alt="" className="text-2xl mr-2"  />
                <div>
                <p class="text-gray-500">Industry</p>
                <p class="font-semibold">{companyProfile.industry}</p>
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
                <p className="text-gray-600 line-clamp-6">
                 {companyProfile?.companyDescription}
                  <a className="text-blue-600" href="#">
                    
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
               <div className="flex flex-wrap justify-center gap-4 mb-4">
  {/* Facebook */}
  <button className="flex items-center justify-center gap-2 text-blue-600 border-2 px-4 py-2 w-36  h-14 rounded-lg shadow-sm hover:bg-blue-50 transition-all duration-200">
    <img src={facebook} alt="facebook" className="w-8 h-8" />
    <p className="text-sm font-semibold">Facebook</p>
  </button>

  {/* Instagram */}
  <button className="flex items-center justify-center gap-2 text-pink-600 border-2 px-4 py-2 w-36 h-14 rounded-lg shadow-sm hover:bg-pink-50 transition-all duration-200">
    <img src={instagram} alt="instagram" className="w-8 h-8" />
    <p className="text-sm font-semibold">Instagram</p>
  </button>

  {/* LinkedIn */}
  <button className="flex items-center justify-center gap-2 text-blue-700 border-2 px-4 py-2 w-36 h-14 rounded-lg shadow-sm hover:bg-blue-50 transition-all duration-200">
    <img src={LinkedIn} alt="linkedin" className="w-8 h-8" />
    <p className="text-sm font-semibold">LinkedIn</p>
  </button>

  {/* Gmail */}
  <button className="flex items-center justify-center gap-2 text-red-600 border-2 px-4 py-2 w-36 h-14 rounded-lg shadow-sm hover:bg-red-50 transition-all duration-200">
    <img src={gmail} alt="gmail" className="w-8 h-8" />
    <p className="text-sm font-semibold">Gmail</p>
  </button>
</div>

                <div className="grid grid-cols-2  items-center  ">
                  {/* <div className="justify-self-center ">
                    <img src={image1} alt="" className="h-[463px]" />
                  </div> */}
                  {/* <div className=" justify-self-center ">
                    <img src={image2} alt="" className="h-[154px]" />
                    <img src={image3} alt="" className="h-[154px]" />
                    <img src={image4} alt="" className="h-[154px]" />
                  </div> */}
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
                <div className=" gap-4 mt-4">
               
                    <div className="flex flex-wrap gap-2 w-full mt-2">
                    {techArray?.map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>


                 
                 
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
        </div>)}
      </div>
    </>
  );
}

export default Company_profile;
