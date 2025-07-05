import React,{useEffect} from "react";
import image1 from '../photos/user-group.png'
import image2 from '../photos/Design.png'
import image3 from '../photos/icon1.png'
import image4 from '../photos/money.png'
import image5 from '../photos/developer.png'
import image6 from '../photos/healtcare.png'
import image7 from '../photos/start.png'
import image8 from '../photos/real state.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const categories = [
  { icon:image1 , title: "Human Resource", job: "" },
  { icon: image2, title: "Design", job: " " },
  { icon: image3, title: "Marketing", job: " " },
  { icon: image4, title: "Accounting", job: " " },
  { icon: image5, title: "Development", job: " " },
  { icon: image6, title: "Health and Care", job: " " },
  { icon: image7, title: "Project Management", job: " " },
  { icon: image8, title: "Real Estate Business", job: " " }
];

const JobCategories = () => {
  useEffect(() => {
  AOS.init({
    duration: 800, // animation duration
    once: true,    // animate only once
    offset: 100,  // offset from the top of the viewport
  });
}, []);
  return (
    
   <div className="py-20 text-center px-4 md:px-20 bg-[#F9FCFF]" >

      
      {/* ✅ Heading */}
      <h2 className="text-4xl font-semibold text-gray-800">Choose Your Desired Category</h2>
      <p className="text-gray-500 mt-2">Recruitment made easy in 100 seconds</p>

      {/* ✅ Categories Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
     {categories.map((category, index) => (
  <div
    key={index}
    data-aos="flip-left"
    data-aos-duration="2000"
    className="py-4 px-0 bg-blue-200 rounded-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
  >
    <div className="flex justify-center items-center w-16 h-16 rounded-full mx-auto text-blue-400">
      <img src={category.icon} alt={category.title} />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
    <p className="text-gray-500">{category.job}</p>
    <a href="#" className="text-blue-400 mt-1 inline-block font-medium hover:underline transition">
      {/* Explore Jobs → */}
    </a>
  </div>
))}

      </div>
    </div>
  );
};

export default JobCategories;
