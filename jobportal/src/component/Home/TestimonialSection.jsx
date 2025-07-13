import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
// Closure for testimonials
const useTestimonials = () => {
  const testimonials = [
    {
      name: "Sakshi Chaudhari",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "As a recent graduate, I struggled to find a job. But this portal provided me with exclusive opportunities and career guidance. The applicat!",
    },
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "I was able to switch to my dream job with ease. The platform offers real-time job alerts and made applying super simple. Highly recommend!",
    },
    {
      name: "Priya Kapoor",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The support team was extremely helpful. They provided personalized job recommendations that matched my skills. Landed a fantastic role!",
    },
    {
      name: "Amit Verma",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "I found my ideal remote job through this platform. The job alerts were precise and saved me a lot of time. Absolutely love it!",
    },
  ];

  useEffect(() => {
  AOS.init({
    duration: 1000, // default duration (optional)
    once: true,     // whether animation should happen only once
  });
}, []);

  const getTestimonials = () => testimonials;

  return { getTestimonials };
};

const TestimonialSection = () => {
  const { getTestimonials } = useTestimonials();
  const testimonials = getTestimonials();

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">
        What A Job Holder Says About Us
      </h2>
      <p className="text-center text-gray-400 mt-2">
        Connecting professionals with their dream jobs.
      </p>

      <div className="mt-12"       >
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div 
            key={index}
            data-aos="flip-left" aos-duration="1500"
            className="px-2 my-2  "
        style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)" }}
            >
             <div className="rounded-xl border-2 border-zinc-300 shadow-lg py-9 px-8 transition duration-300 transform hover:scale-105  bg-[#F3F2FF]">
                <FaQuoteLeft className="text-3xl text-blue-600 hover:text-white" />
                <p className="mt-4 text-sm leading-loose line-clamp-3">{item.text}</p>

                <div className="flex items-center mt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Dot Styling */}
      <style>
        {`
          .slick-dots li {
            margin: 0 8px;
          }
          .slick-dots li button:before {
            font-size: 16px;  /* Larger dot size */
            color: #4F46E5;    /* Dot color */
            opacity: 0.7;
          }
          .slick-dots li.slick-active button:before {
            color: #2563EB;    /* Active dot color */
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialSection;
