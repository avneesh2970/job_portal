import React from "react";
import Zend from '../component/photos/Zend.png';

import image03 from "../component/photos/image03.png";
import firesecurity from "../component/photos/fire-security.png";
import location from "../component/photos/location-01.png";
import building from "../component/photos/building-05.png";
import usergroup from "../component/photos/user-group.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import image1 from "../component/photos/Images.png";
import image2 from "../component/photos/leon-6awfTPLGaCE-unsplash.png";
import image3 from "../component/photos/leon-bzqU01v-G54-unsplash 1.png";
import image4 from "../component/photos/leon-NdZ08c-zu0c-unsplash.png";
import icon1 from "../component/photos/HTML.png";
import icon2 from "../component/photos/CSS.png";
import icon3 from "../component/photos/JS.png";
import icon4 from "../component/photos/FIGMA.png";
import icon5 from "../component/photos/WIX.png";
import icon6 from "../component/photos/FRAMER.png";
import Indian from "../component/photos/Indian.png";
import Russia from "../component/photos/Russia.png";
import England from "../component/photos/England.png";
import ProfileCard from "../component/Company/ProfileCard";
import member1 from "../component/photos/vicky-hladynets-C8Ta0gwPbQg-unsplash.png";
import member2 from "../component/photos/sarah-brown-tTdC88_6a_I-unsplash.png";
import member3 from "../component/photos/julian-wan-WNoLnJo7tS8-unsplash-removebg-preview 1.png";
import member4 from "../component/photos/alex-suprun-ZHvM3XIOHoE-unsplash 2.png";
import member5 from "../component/photos/sigmund-jzz_3jWMzHA-unsplash 1.png";
import googleLogo from "../component/photos/icons8-google-logo (1) 1.png"
import JobCard from "../component/Company/JobCard";




// Reusable Component for Company Info
const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-2">
    <span className="w-[44px] h-[44px] rounded-full border border-gray-300 p-[10px] flex items-center justify-center ">
      <img src={icon} alt={label} className="w-full h-full object-contain" />
    </span>
    <div className="text-left text-xl">
      <h1 className="opacity-60">{label}</h1>
      <h1>{value}</h1>
    </div>
  </div>
);

const CompanyProfilePage = () => {
   
   const jobs = [
      {
        id: 1,
        company: "NovaNecter Services PVT. LTD.",
        position: "B.D.E (Business Development Executive)",
        description: "It is a long established fact that a reader of a page when looking at its layout.",
        type: "Full Time",
        daysAgo: "2 Day ago",
        location: "Dehradun",
        experience: "Fresher or 1 Year Experience",
        logo: googleLogo,
      },
      {
        id: 2,
        company: "NovaNecter Services PVT. LTD.",
        position: "I.T Sales",
        description: "It is a long established fact that a reader of a page when looking at its layout.",
        type: "Full Time",
        daysAgo: "2 Day ago",
        location: "Dehradun",
        experience: "Fresher or 1 Year Experience",
        logo: googleLogo,
      },
      {
        id: 3,
        company: "NovaNecter Services PVT. LTD.",
        position: "UI/UX Designer",
        description: "It is a long established fact that a reader of a page when looking at its layout.",
        type: "Full Time",
        daysAgo: "2 Day ago",
        location: "Dehradun",
        experience: "Fresher or 1 Year Experience",
        logo: googleLogo,
      },
      {
        id: 4,
        position: "Graphic Designer",
        company: "NovaNecter Services PVT. LTD.",
        description: "It is a long established fact that a reader of a page when looking at its layout.",
        type: "Full Time",
        daysAgo: "2 Day ago",
        location: "Dehradun",
        experience: "Fresher or 1 Year Experience",
        logo: googleLogo,
      },
      {
        id: 5,
        position: "Social Media Executive",
        company: "NovaNecter Services PVT. LTD.",
        description: "It is a long established fact that a reader of a page when looking at its layout.",
        type: "Full Time",
        daysAgo: "2 Day ago",
        location: "Dehradun",
        experience: "Fresher or 1 Year Experience",
        logo: googleLogo,
      },
      {
        id: 6,
        company: "NovaNecter Services PVT. LTD.",
        position: "Video Editor",
        description: "It is a long established fact that a reader of a page when looking at its layout.",
        type: "Full Time",
        daysAgo: "2 Day ago",
        location: "Dehradun",
        experience: "Fresher or 1 Year Experience",
        logo: googleLogo,
      },
    ];

    const infoData = [
      { icon: firesecurity, label: "Founded", value: "March 2011" },
      { icon: usergroup, label: "Employees", value: "50-200" },
      { icon: location, label: "Location", value: "India" },
      { icon: building, label: "Industry", value: "IT Services & Consulting" },
    ];

  const techStacks = [
    { name: "HTML 5", icon: icon1 }, // icon1 is your image import
    { name: "CSS 3", icon: icon2 },
    { name: "JavaScript", icon: icon3 },
    { name: "Figma", icon: icon4 },
    { name: "Wix", icon: icon5 },
    { name: "Framer", icon: icon6 },

    // ... more tech stacks
  ];

  const images = [
    image1, // Your image import/URL
    image2,
    image3,
    image4,
    // ... more images if needed
  ];

  const country=[
   {image: Indian, name:"India"},
   {image: England, name:"England"},
   {image: Russia, name:"Russia"},

  ]

  const team = [
   {name:"Célestin Gardinier",title:"CEO & Co-Founder",img:member1},
   {name:"Célestin Gardinier",title:"CEO & Co-Founder",img:member2},
   {name:"Célestin Gardinier",title:"CEO & Co-Founder",img:member3},
   {name:"Célestin Gardinier",title:"CEO & Co-Founder",img:member4},
   {name:"Célestin Gardinier",title:"CEO & Co-Founder",img:member5},
   
  ]

  return (
    <div className="bg-gray-100">
      <div className="relative">
        {/* Background Image with Overlay */}
        <img
          className="h-[50vh] sm:h-[60vh] md:h-[514px] w-full object-cover brightness-50 opacity-90"
          src={image03}
          alt="Company background"
        />

        {/* Centered Content Box */}
        <div className="absolute w-11/12 sm:w-4/5 bg-white shadow-lg p-4 sm:py- top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col md:flex-row items-center py-4">
            {/* Company Logo */}
            <div className="w-full md:w-1/6 flex items-center justify-center md:mb-0">
              <div className="flex items-center justify-center border border-gray-300 size-28">
                <img
                  src={Zend}
                  alt="Zend Company logo"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Company Details */}
            <div className="w-full md:w-5/6 flex flex-col">
              <div className="flex flex-col sm:flex-row items-center sm:justify-between">
                {/* Company Name & Jobs */}
                <div className="text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <h1 className="text-2xl sm:text-4xl font-medium">Zend</h1>
                    <span className="border border-[#C6C4F5] rounded-full px-4 py-1 text-[#4640DE] text-sm sm:text-base">
                      126 Jobs
                    </span>
                  </div>
                  <a
                    className="text-[#4640DE] block sm:inline text-sm sm:text-base"
                    href="https://www.zend.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.zend.com
                  </a>
                </div>

                {/* Follow Button */}
                <button className="w-[120px] sm:w-[145px] h-[40px] sm:h-[52px] rounded-lg text-white text-sm sm:text-xl bg-[#4640DE] hover:opacity-95 mt-3 sm:mt-0">
                  + Follow
                </button>
              </div>

              {/* Company Info Section */}
              <div className="mt-4 pt-3 flex flex-wrap justify-center sm:justify-start gap-8">
                {infoData.map((item, index) => (
                  <InfoCard
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Company profile Section */}

      <div className="lg:flex gap-4 p-8">
        <section className=" flex-col space-y-3 flex-2/3">
          <div className="p-4 my-3">
            <h1 className="text-4xl font-semibold">Company Profile</h1>
            <div className="text-[#A0A0A0] mt-5">
              Zend is a software platform for starting and running internet
              businesses. Millions of businesses rely on software tools to
              accept payments, expand globally, and manage their businesses
              online. Zend has been at the forefront of expanding internet
              commerce, powering new business models, and supporting the latest
              platforms, from marketplaces to mobile commerce sites. We believe
              that growing the GDP of the internet is a problem rooted in code
              and design, not finance. Zend is built for developers, makers, and
              creators. We work on solving the hard technical problems necessary
              to build global economic infrastructure—from designing highly
              reliable systems to developing advanced machine learning
              algorithms to prevent fraud.
            </div>
          </div>

          <div className="p-4">
            <h1 className="text-4xl font-semibold">Contact us</h1>

            <ul className="lg:flex justify-start text-blue-600  gap-4 py-4">
              <li className="border border-[#C6C4F5] text-[#4640DE] flex gap-3 px-7 py-3 w-48">
                <FaFacebook className="text-2xl" />
                Facebook
              </li>
              <li className="border border-[#C6C4F5] text-[#4640DE]  flex gap-3 px-7 py-3 w-48 my-2">
                {" "}
                <FaInstagram className="text-2xl" />
                Instagram
              </li>
              <li className="border border-[#C6C4F5]  text-[#4640DE] flex gap-3 px-7 py-3 w-48 my-2">
                <FaLinkedin className="text-2xl" />
                Linkedin
              </li>
              <li className="border border-[#C6C4F5] text-[#4640DE] flex gap-3 px-10 py-3 w-48">
                <FaEnvelope className="text-2xl" />
                Email
              </li>
            </ul>

            <div className="flex lg:flex-row flex-col gap-3">
              <img src={images[0]} alt="" />

              <div className="space-y-5">
                {images.slice(1).map((image, index) => (
                  <img key={index} src={image} alt="" />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="flex-col space-y-32 flex-2/5 p-4">
          {/* tech stack */}
          <div>
            <h1 className="text-4xl font-semibold pb-4">Tech we used</h1>

            <p className="text-[#A0A0A0] text-wrap pb-4">
              Learn about the technology and tools that Zend uses.
            </p>

            <div className="grid grid-cols-4 gap-4">
              {techStacks.slice(0, 6).map((stack, index) => (
                <div
                  key={index}
                  className="text-gray-800 flex flex-col items-center "
                >
                  <img
                    className="hover:shadow-xl transition-transform transform hover:-translate-y-1"
                    src={stack.icon}
                    alt={stack.name}
                  />
                  <span>{stack.name}</span>
                </div>
              ))}
            </div>
            <button className="text-[#4640DE]  pt-6 cursor-pointer">
              View tech Stack <span className="text-2xl">→</span>
            </button>
          </div>
          {/* location */}
          <div>
            <h1 className="text-4xl font-semibold pb-4">Office Location</h1>

            <p className="text-[#A0A0A0] text-wrap pb-4">
              Zend offices spread across 20 countries
            </p>

            <ul>
              {country.slice(0, 3).map((item, index) => (
                <li className="flex gap-4 p-2 " key={index}>
                  <img className=" shadow-md" src={item.image} alt="" />
                  {item.name}
                </li>
              ))}
            </ul>

            <button className="text-[#4640DE]  pt-6 cursor-pointer">
              View Countries<span className="text-2xl">→</span>
            </button>
          </div>
        </section>
      </div>

      {/* our team */}

      <div className="lg:p-10 flex-col space-y-5">
        <ul className="flex items-center justify-between px-2">
          <li>
            <h1 className="text-4xl font-semibold p-9">Our Team</h1>
          </li>
          <li className="text-[#4640DE] cursor-pointer">
            See all ({team.length})
          </li>
        </ul>
        <div className="lg:flex gap-5 lg:px-3.5 grid grid-cols-2 px-3">
          {team.slice(0, 5).map((item) => (
            <ProfileCard
              name={item.name}
              title={item.title}
              imageSrc={item.img}
            />
          ))}
        </div>
      </div>

      {/*open jobs  */}
      <div className="flex-col space-y-6 lg:p-10">
        <h1 className="text-4xl font-semibold p-10">Open Jobs</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
          {jobs.map((job) => (
            <JobCard job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePage;
