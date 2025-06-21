import React from "react";

const images = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/56.jpg",
  "https://randomuser.me/api/portraits/women/38.jpg",
  "https://randomuser.me/api/portraits/men/18.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/60.jpg",
  "https://randomuser.me/api/portraits/women/63.jpg",
  "https://randomuser.me/api/portraits/men/74.jpg",
  "https://randomuser.me/api/portraits/women/80.jpg",
  "https://randomuser.me/api/portraits/men/27.jpg",
  "https://randomuser.me/api/portraits/women/35.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
  "https://randomuser.me/api/portraits/women/50.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/15.jpg"
];

const PostJob = () => {
  return (
    <section className="  ">
      <div className="grid md:grid-cols-2  items-center">
        {/* Left Section */}
        <div className="bg-[#F3F2FF] py-27 px-20">
          <p className="text-purple-700 text-lg font-medium">Looking for an expert for your company?</p>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3">
            Get applications from the  <br /> world best talents.
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Capitalize on low hanging fruit to identify a ballpark value <br /> added activity  to beta test. Override the digital divide<br /> with additional  clickthroughs from DevOps.
          </p>
          <button className="mt-6 bg-[#3833B2] text-white px-10 py-3 rounded-lg hover:bg-blue-700 transition">
            Post a Job
          </button>
        </div>

        {/* Right Section: Image Grid */}
        <div className="grid grid-cols-4 gap-x-4">
          {images.map((img, index) => (
            <div key={index} className="w-full h-32 overflow-hidden  shadow-md hover:scale-105 transition-transform">
              <img src={img} alt={`Talent ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostJob;
