import React from 'react'
import HeroSection from '../component/Home/HeroSection';
import JobCategories from '../component/Home/JobCategories';
import Joblisting from '../component/Home/JobListings';
import PostJob from '../component/Home/PostJob';
import DownloadAppSection from '../component/Home/DownloadAppSection'
import TestimonialSection from '../component/Home/TestimonialSection'
import Contact from '../component/Contact'
import Intershiplisting from '../component/Home/Internshiplisting.jsx';
import FAQ from '../component/Faqsection.jsx'


const Homepage = () => {
  return (
   <>
   <HeroSection/>
   
   <JobCategories/>
    <Intershiplisting/>

    
    {/* <PostJob/> */}
    <TestimonialSection/>
    <FAQ/>
    {/* <DownloadAppSection/> */}
    <Contact/>
    

   </>
  )
}

export default Homepage



