
import React,{useEffect} from 'react';
import img1 from '.././photos/img1.png';
import img2 from '.././photos/img2.png';
import img3 from '.././photos/img3.jpg';
import img4 from '.././photos/img4.jpg';
import img5 from '.././photos/img5.png';
import img6 from '.././photos/img6.png';
import img7 from '.././photos/img7.png';
import img8 from '.././photos/img8.png';
import img9 from '.././photos/img9.jpg';
import img10 from '.././photos/img10.png';
import img11 from '.././photos/img11.png';
import img12 from '.././photos/img12.png';
import img13 from '.././photos/img13.png';
import img14 from '.././photos/img14.png';
import img15 from '.././photos/img15.png';
import img16 from '.././photos/img16.png';
import img17 from '.././photos/img17.png';
import img18 from '.././photos/img18.png';
import img19 from '.././photos/img19.jpg';
import JobListings from "./JobListings";
import hero from '../../assets/hero.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaSkype,
  FaYoutube,
  FaFigma,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import './css/HeroSection.css';
const HeroSection = () => {
    useEffect(() => {
      AOS.init({
        duration: 800, // animation duration
        once: true,    // animate only once
        offset: 100,  // offset from the top of the viewport
      });
    }, []);
  return (
    <>
      <div className="flex w-full  bg-[linear-gradient(130.9deg,_#C4D5FA_-6.66%,_#F7FAFC_55.55%)]  px-6 md:px-10 bg-amber-300  h-[70vh]" >
        <div className="flex m-auto flex-col md:flex-row justify-between flex-wrap p-4 items-center">
          {/* Heading */}
          <div className="flex-1"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            
            <h1 className="text-4xl md:text-6xl font-semibold  text-black z-1">
              Join us & <span className="text-blue-400">Explore</span> <br />
              <span className="text-blue-400">Thousands</span> of Jobs
            </h1>
            <p className="text-gray-500 mt-8 max-w-2xl">
              Find Jobs, Employment & Career Opportunities. Some of the companies{" "}
              <br />
              we've helped recruit excellent applicants over the years.
            </p>
          </div>

          <div className="flex-1"   data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="200">
            <img src={hero} alt="hero" className="h-[300px] md:h-full" />
          </div>
        </div>

      </div>

      {/* Partner Logos */}



      {/* For line and icon  */}

      {/* <div className="w-full h-350 border-3 border-gray-200 border-dashed  rounded-full absolute top-[-135%] right-5 hidden lg:block"></div>

        <div className="w-[80%] h-280 border-3 border-gray-200 border-dashed rounded-full absolute top-[-110%] left-30 hidden lg:block"></div>
        <div className="w-[60%] h-250 border-3 border-gray-200 border-dashed rounded-full absolute top-[-115%] left-65 hidden lg:block"></div>

        <div className="flex justify-center items-center lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-65 lg:left-30 md:top-10 md:left-10 top-10 left-0  sm:left-22  ">
          <FaFacebookF size={20} color="#1877F2" className="m-2" />
        </div>
        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-113 lg:left-95 md:top-25 md:left-25 top-22 left-5  ">
          <FaLinkedinIn size={20} color="red" className="m-2" />
        </div>

        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-110 lg:right-95 md:top-25 md:right-25 top-23 right-0 sm:right-5 ">
          <FaTwitter size={20} color="#1877F2" className="m-2" />
        </div>

        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-50 lg:right-30  sm:top-10 sm:right-10 top-10 right-5    ">
          <FaSkype size={20} color="#1877F2" className="m-2" />
        </div>

        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-25 lg:left-42 md:top-50 md:left-30 top-35 left-0 sm:left-15 sm:top-42">
          <FaInstagram size={20} color="#E1306C" className="m-2" />
        </div>
        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-10 lg:right-52 md:top-40 md:right-10 top-37 right-5 sm:right-15 sm:top-40">
          <FaYoutube size={20} color="#1877F2" className="m-2" />
        </div>

        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-30 lg:left-98 md:top-40  md:left-10 top-25 left-30 sm:left-40">
          <FcGoogle size={20} color="#1877F2" className="m-2" />
        </div>
        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-20 lg:right-110 md:top-50 md:right-30 top-22 right-25 sm:right-40">
          <FaFigma size={20} color="#0ACF83" className="m-2" />
        </div> */}
      <JobListings />




     {/* Infinite Scrolling Wrapper */}
          <div className="slider-container w-full overflow-hidden mx-auto mt-10">
            <div className="slider">
              <div className="slider-content gap-10">
                <img src={img1} alt="" className='' />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} className="w-24 h-24 "  alt="" />
                <img src={img13} className="w-24 h-24 " alt="" />
                <img src={img14} className="w-24 h-24 "  alt="" />
                <img src={img15} className="w-24 h-24 "  alt="" />
                <img src={img16} className="w-24 h-24 "  alt="" />
                <img src={img17} className="w-24 h-24 "  alt="" />
                <img src={img18} className="w-24 h-24 "  alt="" />
                <img src={img19} className="w-24 h-24 "  alt="" />
                
              </div>
              <div className="slider-content gap-10">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13}  alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img17} alt="" />
                <img src={img18} alt="" />
               
               
              </div>
               <div className="slider-content gap-10">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13}  alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img17} alt="" />
                <img src={img18} alt="" />
               
               
              </div>
               <div className="slider-content gap-10">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13}  alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img17} alt="" />
                <img src={img18} alt="" />
               
               
              </div>
               <div className="slider-content gap-10">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13}  alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img17} alt="" />
                <img src={img18} alt="" />
               
               
              </div>
               <div className="slider-content gap-10">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13}  alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img17} alt="" />
                <img src={img18} alt="" />
               
               
              </div>
               <div className="slider-content gap-10">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13}  alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img17} alt="" />
                <img src={img18} alt="" />
               
               
              </div>
            </div>
          </div>

    </>
  );
};

export default HeroSection;