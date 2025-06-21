import React from "react";
import image1 from '../photos/user-group.png'
import image2 from '../photos/Design.png'
import image3 from '../photos/icon1.png'
import image4 from '../photos/money.png'
import image5 from '../photos/developer.png'
import image6 from '../photos/healtcare.png'
import image7 from '../photos/start.png'
import image8 from '../photos/real state.png'


const categories = [
  { icon:image1 , title: "Human Resource", job: "120 jobs available" },
  { icon: image2, title: "Design", job: "98 jobs available" },
  { icon: image3, title: "Marketing", job: "75 jobs available" },
  { icon: image4, title: "Accounting", job: "60 jobs available" },
  { icon: image5, title: "Development", job: "150 jobs available" },
  { icon: image6, title: "Health and Care", job: "45 jobs available" },
  { icon: image7, title: "Project Management", job: "90 jobs available" },
  { icon: image8, title: "Real Estate Business", job: "30 jobs available" }
];

const JobCategories = () => {
  return (
    <div className="py-20 text-center px-4 md:px-20 bg-[#F9FCFF]">
      
      {/* ✅ Heading */}
      <h2 className="text-4xl font-semibold text-gray-800">Choose Your Desired Category</h2>
      <p className="text-gray-500 mt-2">Recruitment made easy in 100 seconds</p>

      {/* ✅ Categories Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
           
            className="py-4 px-0 bg-[#F3F2FF] rounded-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
          >
            {/* Icon */}
            <div className="flex justify-center items-center w-16 h-16  rounded-full mx-auto text-blue-400 ">
              <img src ={category.icon}/>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
            
            {/* Job Count */}
            <p className="text-gray-500 ">{category.job}</p>
            
            {/* Explore Link */}
            <a href="#" className="text-blue-400 mt-1 inline-block font-medium hover:underline transition">
              Explore Jobs →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
