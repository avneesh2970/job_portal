
import React,{useEffect} from 'react';
import img1 from '.././photos/Accellor.png';
import img2 from '.././photos/Accenture.png';
import img3 from '.././photos/BDO.png';
import img4 from '.././photos/Benmile.png';
import img5 from '.././photos/BMC Software.png';
import img6 from '.././photos/Brill Mindz-01.png';
import img7 from '.././photos/Capgemini.png';
import img8 from '.././photos/Capsilon.png';
import img9 from '.././photos/Cigniti.png';
import img10 from '.././photos/Cognigent.png';
import img11 from '.././photos/DX Minds.png';
import img12 from '.././photos/E2logy.png';
import img13 from '.././photos/Fugensys.png';
import img14 from '.././photos/Globant.png';
import img15 from '.././photos/Gravitywave.png';
import img16 from '.././photos/Green Valley.png';
import img17 from '.././photos/Groots.png';
import img18 from '.././photos/HCL.png';
import img19 from '.././photos/HSBC.png';
import img20 from '.././photos/IBM.png';
import img21 from '.././photos/Infosys.png';
import img22 from '.././photos/ITSS.png';
import img23 from '.././photos/Jamdagni School.png';
import img24 from '.././photos/JS.png';
import img25 from '.././photos/Klick Stock.png';
import img26 from '.././photos/KSOLVE.png';
import img27 from '.././photos/L&T Technology.png';
import img28 from '.././photos/L&T.png';
import img29 from '.././photos/Microsoft.png';
import img30 from '.././photos/MindTree.png';
import img31 from '.././photos/Magnasoft.png';
import img32 from '.././photos/Mphasis.png';
import img33 from '.././photos/NIIT.png';
import img34 from '.././photos/Omneelab.png';
import img35 from '.././photos/Persistent.png';
// import img36 from '.././photos/Red Hat-01.png';
import img37 from '.././photos/Rekruters.png';
import img38 from '.././photos/ScareCrow.png';
// import img39 from '.././photos/Talentica.png';
import img40 from '.././photos/Tavant.png';
import img41 from '.././photos/TCS.png';
import img42 from '.././photos/Tech Mahindra.png';
import img43 from '.././photos/Techahead.png';
// import img44 from '.././photos/Technoarch.png';
// import img45 from '.././photos/tesla-9.png';
import img46 from '.././photos/TIBCO.png';
import img47 from '.././photos/Tietoevry-01.png';
import img48 from '.././photos/Trellix-02.png';
import img49 from '.././photos/Tricon.png';
import img50 from '.././photos/Untitled-1-07.png';
import img51 from '.././photos/Velosity Software.png';
import img52 from '.././photos/vodafone.png';
import img53 from '.././photos/Wild Net.png';
import img54 from '.././photos/Wipro.png';
import img55 from '.././photos/Wolken-02.png';
import img56 from '.././photos/Zaprev.png';
import img57 from '.././photos/Zend.png';
import img58 from '.././photos/ZOHO.png';

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
      <div className="flex w-full  bg-[linear-gradient(130.9deg,_#C4D5FA_-6.66%,_#F7FAFC_55.55%)]  px-6 md:px-10 bg-amber-300  h-[80vh]" >
        <div className="flex m-auto flex-col md:flex-row justify-between flex-wrap p-4 items-center">
          {/* Heading */}
          <div className="flex-1"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            
            <h1 className="text-4xl md:text-6xl font-semibold  text-black z-1">
             Find job,  
 <span className="text-blue-400">Hire Faster,</span> <br />
              <span className="">Grow Smarter</span>
            </h1>
            <p className="text-gray-500 mt-8 max-w-2xl">
              Whether you are chasing your dream job or hunting for the perfect hire, we make it happen faster, smarter, and simpler. Say goodbye to long waits and hello to instant connections that spark growth
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
     





     {/* Infinite Scrolling Wrapper */}
          <div className="slider-container relative w-full overflow-hidden bg-blue mx-auto mb-10">
            <div className="slider  w-full h-20  px-10  rounded-lg shadow-lg  overflow-hidden  md:overflow-visible  lg:overflow-visible xl:overflow-visible 2xl:overflow-visible  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  md:justify-start lg:justify-start xl:justify-start 2xl:justify-start  md:items-center lg:items-center xl:items-center 2xl:items-center
               flex items-center justify-start gap-3 ">
            
             
              
            
               <div className="slider-content space-x-8">
                <img src={img1} alt="" className='w-auto h-14' />
                <img src={img2} alt="" className='w-auto h-14' />
                <img src={img3} alt="" className='w-auto h-14' />
                <img src={img4} alt="" className='w-auto h-14' />
                <img src={img5} alt="" className='w-auto h-14' />
                <img src={img6} alt="" className='w-auto h-14' />
                <img src={img7} alt="" className='w-auto h-14' />
                <img src={img9} alt="" className='w-auto h-14' />
                <img src={img10} alt="" className='w-auto h-14' />
                <img src={img11} alt="" className='w-auto h-14' />
                <img src={img12} alt="" className='w-auto h-14' />
                <img src={img13} alt="" className='w-auto h-14' />
                <img src={img14} alt="" className='w-auto h-14' />
                <img src={img15} alt="" className='w-auto h-14' />
                <img src={img16} alt="" className='w-auto h-14' />
                <img src={img19} alt="" className='w-auto h-14' />
                <img src={img20} alt="" className='w-auto h-14' />
                <img src={img21} alt="" className='w-auto h-14' />
                <img src={img22} alt="" className='w-auto h-14' />
                <img src={img23} alt="" className='w-auto h-14' />
                <img src={img24} alt="" className='w-auto h-14' />
                <img src={img25} alt="" className='w-auto h-14 bg-zinc-300' />
                <img src={img26} alt="" className='w-auto h-14 ' />
                <img src={img27} alt="" className='w-auto h-14 ' />
                <img src={img28} alt="" className='w-auto h-14 ' />
                <img src={img29} alt="" className='w-auto h-14 ' />
                <img src={img30} alt="" className='w-auto h-14 ' />
                <img src={img32} alt="" className='w-auto h-14 ' />
                <img src={img33} alt="" className='w-auto h-14 ' />
                <img src={img34} alt="" className='w-auto h-14 ' />
                <img src={img35} alt="" className='w-auto h-14 ' />
                <img src={img37} alt="" className='w-auto h-14 ' />
                <img src={img38} alt="" className='w-auto h-14 ' />
                <img src={img40} alt="" className='w-auto h-14 ' />
                <img src={img41} alt="" className='w-auto h-14 ' />
                <img src={img42} alt="" className='w-auto h-14 ' />
                <img src={img43} alt="" className='w-auto h-14 '/>
                <img src={img51} alt="" className='w-auto h-14 ' />
                <img src={img52} alt="" className='w-auto h-14 ' />
                <img src={img53} alt="" className='w-auto h-14 bg-black ' />
                <img src={img54} alt="" className='w-auto h-14 ' />
                <img src={img55} alt="" className='w-auto h-14 ' />
                <img src={img56} alt="" className='w-auto h-14 ' />
                <img src={img57} alt="" className='w-auto h-14 ' />
                <img src={img58} alt="" className='w-auto h-14 ' />
               </div>

                 <div className="slider-content space-x-8">
                <img src={img1} alt="" className='ml-8 w-auto h-14' />
                <img src={img2} alt="" className='w-auto h-14' />
                <img src={img3} alt="" className='w-auto h-14' />
                <img src={img4} alt="" className='w-auto h-14' />
                <img src={img5} alt="" className='w-auto h-14' />
                <img src={img6} alt="" className='w-auto h-14' />
                <img src={img7} alt="" className='w-auto h-14' />
                <img src={img9} alt="" className='w-auto h-14' />
                <img src={img10} alt="" className='w-auto h-14' />
                <img src={img11} alt="" className='w-auto h-14' />
                <img src={img12} alt="" className='w-auto h-14' />
                <img src={img13} alt="" className='w-auto h-14' />
                <img src={img14} alt="" className='w-auto h-14' />
                <img src={img15} alt="" className='w-auto h-14' />
                <img src={img16} alt="" className='w-auto h-14' />
                <img src={img19} alt="" className='w-auto h-14' />
                <img src={img20} alt="" className='w-auto h-14' />
                <img src={img21} alt="" className='w-auto h-14' />
                <img src={img22} alt="" className='w-auto h-14' />
                <img src={img23} alt="" className='w-auto h-14' />
                <img src={img24} alt="" className='w-auto h-14' />
                <img src={img25} alt="" className='w-auto h-14 bg-zinc-300' />
                <img src={img26} alt="" className='w-auto h-14 ' />
                <img src={img27} alt="" className='w-auto h-14 ' />
                <img src={img28} alt="" className='w-auto h-14 ' />
                <img src={img29} alt="" className='w-auto h-14 ' />
                <img src={img30} alt="" className='w-auto h-14 ' />
                <img src={img32} alt="" className='w-auto h-14 ' />
                <img src={img33} alt="" className='w-auto h-14 ' />
                <img src={img34} alt="" className='w-auto h-14 ' />
                <img src={img35} alt="" className='w-auto h-14 ' />
                <img src={img37} alt="" className='w-auto h-14 ' />
                <img src={img38} alt="" className='w-auto h-14 ' />
                <img src={img40} alt="" className='w-auto h-14 ' />
                <img src={img41} alt="" className='w-auto h-14 ' />
                <img src={img42} alt="" className='w-auto h-14 ' />
                <img src={img43} alt="" className='w-auto h-14 '/>
                <img src={img51} alt="" className='w-auto h-14 ' />
                <img src={img52} alt="" className='w-auto h-14 ' />
                <img src={img53} alt="" className='w-auto h-14 bg-black ' />
                <img src={img54} alt="" className='w-auto h-14 ' />
                <img src={img55} alt="" className='w-auto h-14 ' />
                <img src={img56} alt="" className='w-auto h-14 ' />
                <img src={img57} alt="" className='w-auto h-14 ' />
                <img src={img58} alt="" className='w-auto h-14 ' />
               </div>

                   <div className="slider-content space-x-8">
                <img src={img1} alt="" className='ml-8 w-auto h-14' />
                <img src={img2} alt="" className='w-auto h-14' />
                <img src={img3} alt="" className='w-auto h-14' />
                <img src={img4} alt="" className='w-auto h-14' />
                <img src={img5} alt="" className='w-auto h-14' />
                <img src={img6} alt="" className='w-auto h-14' />
                <img src={img7} alt="" className='w-auto h-14' />
                <img src={img9} alt="" className='w-auto h-14' />
                <img src={img10} alt="" className='w-auto h-14' />
                <img src={img11} alt="" className='w-auto h-14' />
                <img src={img12} alt="" className='w-auto h-14' />
                <img src={img13} alt="" className='w-auto h-14' />
                <img src={img14} alt="" className='w-auto h-14' />
                <img src={img15} alt="" className='w-auto h-14' />
                <img src={img16} alt="" className='w-auto h-14' />
                <img src={img19} alt="" className='w-auto h-14' />
                <img src={img20} alt="" className='w-auto h-14' />
                <img src={img21} alt="" className='w-auto h-14' />
                <img src={img22} alt="" className='w-auto h-14' />
                <img src={img23} alt="" className='w-auto h-14' />
                <img src={img24} alt="" className='w-auto h-14' />
                <img src={img25} alt="" className='w-auto h-14 bg-zinc-300' />
                <img src={img26} alt="" className='w-auto h-14 ' />
                <img src={img27} alt="" className='w-auto h-14 ' />
                <img src={img28} alt="" className='w-auto h-14 ' />
                <img src={img29} alt="" className='w-auto h-14 ' />
                <img src={img30} alt="" className='w-auto h-14 ' />
                <img src={img32} alt="" className='w-auto h-14 ' />
                <img src={img33} alt="" className='w-auto h-14 ' />
                <img src={img34} alt="" className='w-auto h-14 ' />
                <img src={img35} alt="" className='w-auto h-14 ' />
                <img src={img37} alt="" className='w-auto h-14 ' />
                <img src={img38} alt="" className='w-auto h-14 ' />
                <img src={img40} alt="" className='w-auto h-14 ' />
                <img src={img41} alt="" className='w-auto h-14 ' />
                <img src={img42} alt="" className='w-auto h-14 ' />
                <img src={img43} alt="" className='w-auto h-14 '/>
                <img src={img51} alt="" className='w-auto h-14 ' />
                <img src={img52} alt="" className='w-auto h-14 ' />
                <img src={img53} alt="" className='w-auto h-14 bg-black' />
                <img src={img54} alt="" className='w-auto h-14 ' />
                <img src={img55} alt="" className='w-auto h-14 ' />
                <img src={img56} alt="" className='w-auto h-14 ' />
                <img src={img57} alt="" className='w-auto h-14 ' />
                <img src={img58} alt="" className='w-auto h-14 ' />
               </div>

                 <div className="slider-content space-x-8">
                <img src={img1} alt="" className='w-auto ml-8 h-14' />
                <img src={img2} alt="" className='w-auto h-14' />
                <img src={img3} alt="" className='w-auto h-14' />
                <img src={img4} alt="" className='w-auto h-14' />
                <img src={img5} alt="" className='w-auto h-14' />
                <img src={img6} alt="" className='w-auto h-14' />
                <img src={img7} alt="" className='w-auto h-14' />
                <img src={img9} alt="" className='w-auto h-14' />
                <img src={img10} alt="" className='w-auto h-14' />
                <img src={img11} alt="" className='w-auto h-14' />
                <img src={img12} alt="" className='w-auto h-14' />
                <img src={img13} alt="" className='w-auto h-14' />
                <img src={img14} alt="" className='w-auto h-14' />
                <img src={img15} alt="" className='w-auto h-14' />
                <img src={img16} alt="" className='w-auto h-14' />
                <img src={img19} alt="" className='w-auto h-14' />
                <img src={img20} alt="" className='w-auto h-14' />
                <img src={img21} alt="" className='w-auto h-14' />
                <img src={img22} alt="" className='w-auto h-14' />
                <img src={img23} alt="" className='w-auto h-14' />
                <img src={img24} alt="" className='w-auto h-14' />
                <img src={img25} alt="" className='w-auto h-14 bg-zinc-300' />
                <img src={img26} alt="" className='w-auto h-14 ' />
                <img src={img27} alt="" className='w-auto h-14 ' />
                <img src={img28} alt="" className='w-auto h-14 ' />
                <img src={img29} alt="" className='w-auto h-14 ' />
                <img src={img30} alt="" className='w-auto h-14 ' />
                <img src={img32} alt="" className='w-auto h-14 ' />
                <img src={img33} alt="" className='w-auto h-14 ' />
                <img src={img34} alt="" className='w-auto h-14 ' />
                <img src={img35} alt="" className='w-auto h-14 ' />
                <img src={img37} alt="" className='w-auto h-14 ' />
                <img src={img38} alt="" className='w-auto h-14 ' />
                <img src={img40} alt="" className='w-auto h-14 ' />
                <img src={img41} alt="" className='w-auto h-14 ' />
                <img src={img42} alt="" className='w-auto h-14 ' />
                <img src={img43} alt="" className='w-auto h-14 '/>
                <img src={img51} alt="" className='w-auto h-14 ' />
                <img src={img52} alt="" className='w-auto h-14 ' />
                <img src={img53} alt="" className='w-auto h-14 bg-black ' />
                <img src={img54} alt="" className='w-auto h-14 ' />
                <img src={img55} alt="" className='w-auto h-14 ' />
                <img src={img56} alt="" className='w-auto h-14 ' />
                <img src={img57} alt="" className='w-auto h-14 ' />
                <img src={img58} alt="" className='w-auto h-14 ' />
               </div>
              
              
              
            </div>
          </div>

    </>
  );
};

export default HeroSection;