import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { Flashlight } from "lucide-react";
// Closure for testimonials
const useTestimonials = () => {
  const testimonials = [
  {
    id: 1,
    name: "Satyam Rai",
    role: "Full Stack Developer @ Tech Ahead",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    text: "I applied for Full Stack Developer via NN Hire and the experience from application to hire was so smooth. I was placed at Tech Ahead with confidence due to NovaNectar's support and their approach of Smart IT Solutions.",
  },
  {
    id: 2,
    name: "Trupti Chandwani",
    role: "Software Developer @ Cognizant",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    text: "I still remember the day I posted my resume on NN Hire. One step turned everything around. NovaNectar's methodical direction and Smart IT Solution framework aided me in cracking the interview of Cognizant. Eternally thankful for this experience!",
  },
  {
    id: 3,
    name: "Dheeraj Maurya",
    role: "Python Developer @ NovaNectar",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    text: "I got my job through NN Hire and now I am working as a Python Developer at NovaNectar itself. The process was so clear and guided I never felt lost. This platform truly reflects what a Smart IT Solution should be!",
  },
  {
    id: 4,
    name: "Deepika Rai",
    role: "Developer @ Green Valley HR Services",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    text: "When I applied to NN Hire I didn’t expect such a quick response. But within days, I got interview calls and finally got placed at Green Valley HR Services. NovaNectar’s platform and Smart IT driven system made the whole process seamless!",
  },
  {
    id: 5,
    name: "Ayush Dangwal",
    role: "IT Teacher @ Jamdagni Public School",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    text: "Thanks to NN Hire, I'm now an IT Teacher. I signed up on the website and it was all so easy, from the call to the offer letter. NovaNectar's Smart IT Solution concept is something all job-seekers should try out!",
  },
  {
    id: 6,
    name: "Sagar Pimoli",
    role: "Subject Matter Expert @ Appsndevice Technologies",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    text: "Using NN Hire to apply was the best option. I got selected at Appsndevice Technologies within weeks. NovaNectar's professional team and Smart IT Solution thinking made me job-ready. Very grateful!",
  },
  {
    id: 7,
    name: "Sumit Kaintura",
    role: "Web Developer @ Rekruters",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I noticed the position at NN Hire, applied, and voila! A couple of interviews down the line, I received the offer from Rekruters. This platform is not only a job board, it's a Smart IT Solution developed by NovaNectar to transform lives. Thank you!",
  },
  {
    id: 8,
    name: "Aditya",
    role: "Frontend Developer @ KSolve India",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "Thanks to NN Hire, I am now a Frontend Developer at KSolve India. The entire hiring process was well guided and tech enabled. NovaNectar’s Smart IT Solution made me job-ready and confident for every interview round.",
  },
  {
    id: 9,
    name: "Deepak Guleria",
    role: "App Developer @ Gravity Solutions",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "I had applied for the position of App Developer on NN Hire! And, lo and behold! I was shortlisted in a jiffy! The last interview was a breeze thanks to the prep I received from NovaNectar. Their Smart IT Solution philosophy sure does work!",
  },
  {
    id: 10,
    name: "Kumar Abhi",
    role: "Power BI Developer @ Zaprev Technologies",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    text: "NN Hire assisted me with landing my initial break! I had sent in an application for a Power BI position, and thanks to NovaNectar's guidance and advice, I nailed the interview at Zaprev Technologies. Smart IT Solution? Absolutely works.",
  },
  {
    id: 11,
    name: "Hiteshi",
    role: "Power BI Intern @ KlickStock",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    text: "I was recruited as a Power BI Intern at KlickStock by NN Hire. I had applied through the platform, and NovaNectar's staff helped me through the process. Their Smart IT Solution approach is perfect for a fresher candidate like me.",
  },
  {
    id: 12,
    name: "Taniya",
    role: "Junior Marketing Account Manager @ Scarecrow M&C",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    text: "I was exploring roles in marketing and found the right one on NN Hire. Applied, got selected, and now I’m working with Scarecrow M&C! Big thanks to NovaNectar for helping me enter the industry with confidence and a clear path through their Smart IT Solution.",
  },
  {
    id: 13,
    name: "Shail Rana",
    role: "Data Analyst Intern @ Knack RCM",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    text: "After applying via NN Hire, I was given the chance to intern at Knack RCM as a Data Analyst Intern for 4 months and it's a game changer! The platform made it so effortless to follow up from application to being picked. Huge shoutout to NovaNectar for creating such an awesome Smart IT Solution that brings together passionate talent.",
  },
  {
    id: 14,
    name: "Shivam Tiwari",
    role: "Software Developer @ Talentica Software Solutions",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    text: "I posted my resume in NN Hire just for the sake of exploring opportunities and guess what? I got shortlisted at Talentica Software Solutions as a Software Developer! Thanks a ton to NovaNectar for developing this Smart IT Solution that makes freshers like me get hired. It's true, it happens!",
  },
  {
    id: 15,
    name: "Sharvari Chaudhari",
    role: "UI/UX Designer @ NovaNectar Services",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    text: "I discovered the Junior UI/UX Designer position on NN Hire and applied without hesitation and in a matter of days I was hired. I am currently working directly with NovaNectar itself. Their Smart IT Solution isn't something they say, it's what they do in preparing and placing students. I'm living proof.",
  },
  {
    id: 16,
    name: "Atul Semwal",
    role: "Full Stack Developer @ NovaNectar Services",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Hired so effortlessly through NN Hire and the good news is I got placed as a Full Stack Developer at NovaNectar Services, and the entire experience from training to interviews was taken care of with their Smart IT Solution methodology. Couldn't have wished for a better beginning in my tech journey!",
  },
  {
    id: 17,
    name: "Prashant",
    role: "Full Stack Developer @ E2logy Software Solutions",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    text: "Thanks to NN Hire I am now working at E2logy Software Solutions as a Full Stack Developer. The job search was not frustrating for once because NovaNectar made it simple, real and quick. Their Smart IT Solution ecosystem is exactly what students need.",
  },
  {
    id: 18,
    name: "Kartick Das",
    role: "WordPress Developer @ NovaNectar Services",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "NN Hire assisted me in landing my first job as a WordPress Developer in NovaNectar Services. From the time of application to onboarding the service was exceptional. Their Smart IT Solution approach assisted me to concentrate and feel assured. It surely does work.",
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

 const totalDots = 6;
const chunkSize = Math.ceil(testimonials.length / totalDots);

const settings = {

  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
 customPaging: (i) => (
  <div className="dot-custom w-3 h-3 rounded-full transition-all duration-300"></div>
),
appendDots: (dots) => (
  <div>
    <ul className="flex justify-center mt-6 space-x-2">{dots.slice(0, totalDots)}</ul>
  </div>
),

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
            data-aos="flip-up" aos-duration="1500"
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
                    <p className="text-sm line-clamp-1">{item.role}</p>
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
    .dot-custom {
      background-color: #93c5fd; /* Tailwind bg-blue-300 */
    }
    .slick-dots li.slick-active .dot-custom {
      background-color: #2563eb; /* Tailwind bg-blue-600 */
    }
  `}
</style>

    </div>
  );
};

export default TestimonialSection;
