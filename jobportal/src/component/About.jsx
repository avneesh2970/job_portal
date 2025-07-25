"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Users, Briefcase, Linkedin, Twitter, ArrowRight, Sparkles, Lightbulb } from "lucide-react"
import { useRef } from "react"
import React from "react"
import { Zap } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "Founder & Visionary",
    image: "https://imgs.search.brave.com/BCJDP12I2b2-10PwI1pKYJiCxtKQYl3LVW1k3pBwKns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzM1LzMwLzg1/LzM2MF9GXzM1MzA4/NTM0X1dHUlZYbHlt/Y2pRcW9SWHplV0Vm/VkNPZkJIQnE5WWRX/LmpwZw",
    bio: "Evelyn's passion for connecting talent with purpose led to the birth of our platform.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Architect",
    image: "https://imgs.search.brave.com/h6iBkgWJxKrZBtlRoNnzA5kvzp0zhYYV8KsG6-ckwHA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/MjIwLzg2OC9zbWFs/bC9hLXlvdW5nLWd1/eS1jb2xsZWdlLXN0/dWRlbnQtd2l0aC1h/LWJhY2twYWNrLWlz/LXN0YW5kaW5nLWlu/LXRoZS1oYWxsLW9m/LXRoZS11bml2ZXJz/aXR5LXBob3RvLmpw/Zw",
    bio: "Marcus crafts the cutting-edge technology that powers our seamless user experience.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sofia Al-Jamil",
    role: "Head of Global Partnerships",
    image: "https://imgs.search.brave.com/lDq5r7qcfEN_vU_UCLwNzRbyB-JKMV3lxkmIiMHWFuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/Mzg2LzIyMS9zbWFs/bC9oYXBweS1pbmRp/YW4tbWFsZS1zdHVk/ZW50LWF0LXRoZS11/bml2ZXJzaXR5LXBo/b3RvLmpwZw",
    bio: "Sofia builds bridges with leading companies worldwide to expand opportunities.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Miller",
    role: "Director of Candidate Experience",
    image: "https://imgs.search.brave.com/Kt47QM-mGAPTr_cdwd8tGrir5P3hpJlWHoh7g4zW62E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU4/NzcxMzg1Mi9waG90/by9oYXBweS1mZW1h/bGUtc3R1ZGVudC1w/b3NpdGl2ZS1mZW1h/bGUtc3R1ZGVudC1i/cmF6aWxpYW4tb3It/aGlzcGFuaWMtbmF0/aW9uYWxpdHktd2l0/aC1hLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1YNWk0cEM5/TF9TekJhazhoSm1U/VkFmdkp5WFBlREFX/UmRmSmtOSmxSdVo0/PQ",
    bio: "David ensures every job seeker's journey is supportive and empowering.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

const values = [
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    title: "How We Help Job Seekers",
    description:
      "Finding a job should not be a whole time job. At NN Hire we make it easy for candidates to save time and effort through personalized job suggestions, instant alerts and a seamless application process. Your resume gets exposure and your profile reaches targeted recruiters. We are committed to providing you with control, clarity and confidence during your job search.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-teal-400" />,
    title: "Why Employers Trust Us",
    description:
      "Firms don't need more applicants, they need the right applicants. That's where NN Hire comes in. With our clear dashboard, validated seeker profiles and intelligent job-matching algorithm, recruitment is streamlined and effective. Employers spend less time, less money and gain improved outcomes  all in one location.",
  },
  {
    icon: <Users className="w-10 h-10 text-sky-500" />,
    title: " Backed by NovaNectar",

    description:
      "NN Hire is a proud product of NovaNectar, a company dedicated to building innovative solutions that empower individuals and businesses. Our platform is designed with the same commitment to excellence and user-centric design that defines all our products. We leverage cutting-edge technology to create a hiring experience that is efficient, transparent, and effective.",
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.1, ease: "circOut" },
  }),
}

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroTextOpacity = useTransform(heroScrollYProgress, [0, 0.5], [1, 0])
  const heroTextY = useTransform(heroScrollYProgress, [0, 0.5], [0, -50])
  const heroImageScale = useTransform(heroScrollYProgress, [0, 1], [1, 1.3])

  return (
    <div className="overflow-x-hidden flex flex-col font-serif text-gray-700 dark:text-gray-300 antialiased">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex flex-col my-auto items-center justify-center text-center text-black overflow-hidden "
      >
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroImageScale }}>
          <img
            src='https://www.pexels.com/photo/white-painted-wall-1939485/'
            alt="Abstract background representing connection and aspiration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white"></div>
        </motion.div>

      <motion.div
  className="relative flex justify-center items-center flex-col w-full h-screen overflow-hidden"
  style={{ opacity: heroTextOpacity, y: heroTextY }}
>
  {/* Background image and gradient overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://cdn.pixabay.com/photo/2019/04/16/11/15/job-4131482_1280.jpg" // Replace with your image path
      alt="Background"
      className="w-full h-full object-cover "
    />
    <div className="absolute inset-0  bg-gradient-to-l from-zinc-300 to-zinc-400 opacity-70"></div>
  </div>

  {/* Foreground content */}
  <div className="z-10 px-4 text-center">
    <motion.p
      className="mt-10 max-w-4xl mx-auto text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
    >
      <span className="text-indigo-600 font-semibold">NN Hire</span> is not simply another job board — it's a robust hiring platform designed to simplify job searches and team hiring.
      <br className="hidden md:block" />
      We bridge the gap between skilled professionals and emerging businesses by providing an effortless, intelligent, and reliable recruitment experience.
      <br className="hidden md:block" />
      From features to <span className="font-semibold text-blue-600">seasoned professionals</span>, we’re here to build meaningful connections that move careers and businesses forward.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "circOut" }}
      className="mt-12"
    >
      <a
        href="#our-story"
        className="inline-flex items-center px-10 py-4 border-2 border-[#4640DE] bg-white text-lg font-semibold rounded-full hover:bg-[#4640DE] hover:text-white transition-all duration-300 group"
      >
        Discover Our Story
        <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  </div>
</motion.div>

      </motion.section>

      {/* Our Story Section */}
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="w-full px-6 md:px-12 lg:px-24 py-20 bg-gray-200">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-6/12">
        {/* Badge */}
        <p className="text-base flex items-center justify-center md:justify-start font-semibold px-4 py-2 bg-blue-100 text-blue-700 rounded-full w-max mx-auto lg:mx-0">
          <Zap className="w-4 h-4 mr-2" />
          Our <span className="ml-1 text-[#4640DE]">Mission</span>
        </p>

        {/* Mission Text */}
        <p className="text-gray-800 mt-6 text-lg leading-relaxed">
          Our purpose is simple: to make hiring quicker, job searching smarter, and the experience more human.
          We believe an opportunity can change a life — and a hire can change a business.
          That's why we focus on creating an efficient, intelligent, and transparent hiring platform for everyone.
        </p>

        {/* Divider */}
        <div className="h-1 w-16 bg-blue-400 rounded-full my-10 mx-auto lg:mx-0"></div>

        {/* Why Exists Badge */}
        <p className="text-base flex items-center justify-center md:justify-start font-semibold px-4 py-2 bg-blue-100 text-blue-700 rounded-full w-max mx-auto lg:mx-0">
          <Zap className="w-4 h-4 mr-2" />
          Why <span className="ml-1 text-[#4640DE]">NNHire</span> Exists
        </p>

        {/* Why Text */}
        <p className="text-gray-800 mt-6 text-lg leading-relaxed">
          The job market is noisy, cluttered, and slow. Job seekers rarely know if their resume is even seen. Employers face a flood of irrelevant applications.
          NN Hire was created to solve this — with verified listings, smart filters, and real-time updates for a hiring process that is easy, transparent, and fast.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-6/12 flex justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2024/07/15/12/27/ai-generated-8896730_1280.jpg" // Update path as needed
          alt="Mission Illustration"
          className="w-full max-w-md rounded-2xl shadow-lg object-contain"
        />
      </div>
    </div>
  </div>
</motion.section>


<motion.section
  className="w-full py-24 md:py-32 bg-gray-200"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
    {/* Left Text Content */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Join the <span className="text-[#4640DE]">NNHire</span> Network
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        We invite you to be part of a platform that puts people first. Whether you’re a <span className="text-green-600 font-semibold">fresher</span> looking for your first job, a <span className="text-blue-600 font-semibold">professional</span> seeking career growth, or an employer on the hunt for talent — NNHire welcomes you. Create your profile, explore opportunities, and start building your future with us.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">
        Built for a Smarter Future of Work
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed">
        The world of work is changing. Remote roles, AI-based recruitment, and skill-based hiring are the new normal. NNHire is designed to keep up with this change. With automation, user-focused design, and a growth mindset — we’re not just following trends, we’re setting them.
      </p>
    </div>

    {/* Right Image Content */}
    <div className="lg:w-1/2">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/13/17/29/hiring-1977803_1280.jpg" // Replace with your actual image
        alt="Future of work"
        className="w-full h-auto rounded-xl shadow-md"
      />
    </div>
  </div>
</motion.section>




      {/* Our Values Section */}
      <motion.section
        className="py-24 md:py-32  from-slate-50 via-gray-100 to-stone-200 dark:from-slate-900 dark:via-gray-800 dark:to-stone-900"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black  ">
            Guiding <span className="text-[#4640DE]">Principles</span>.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 ">
            These are the compass points that direct our journey and shape our culture.
          </p>
          <motion.div
            className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className=" bg-gradient-to-b from-violet-500 to-blue-500 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="p-5 rounded-full  bg-blue-200 mb-6 inline-block">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-black  text-center leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


      <section className="py-20 bg-white px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
      What <span className="text-indigo-600">Makes Us Different</span>
    </h2>
    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
      While most job boards only list jobs, <strong>NNHire</strong> empowers hiring with intelligent features that matter — real-time tracking, verified employers, clean UI, and more.
    </p>

    {/* Features Grid */}
    <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Feature Card */}
      <div className="hover:scale-105 bg-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          <span className="text-4xl">
            📈
          </span>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Resume Visibility Boost</h4>
        <p className="text-gray-600">Increase your resume reach with features designed to get you noticed by real employers.</p>
      </div>

      <div className="hover:scale-105 bg-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
           <span className="text-4xl">🔔</span>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Application Tracking</h4>
        <p className="text-gray-600">Track application status updates instantly, removing the guesswork from the process.</p>
      </div>

       <div className="hover:scale-105 bg-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          <span className="text-4xl">✅</span>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Verified Employers</h4>
        <p className="text-gray-600">No more spam. We list only verified and credible businesses to ensure safe hiring.</p>
      </div>

       <div className="hover:scale-105 bg-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          <span className="text-4xl">🎯</span>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Maximum Relevance</h4>
        <p className="text-gray-600">Our smart filters and AI-match tech show you only the most relevant opportunities or applicants.</p>
      </div>
 <div className="hover:scale-105 bg-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          <span className="text-4xl">🧑‍💻</span>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Clean & Simple UI</h4>
        <p className="text-gray-600">A modern interface that’s built for speed, clarity, and ease — even on mobile.</p>
      </div>

      <div className="hover:scale-105 bg-gray-200 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
          <span className="text-4xl">💼</span>
        </div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Focused on Outcomes</h4>
        <p className="text-gray-600">Whether you’re hiring or job-hunting, we help you focus on what truly matters — results.</p>
      </div>
    </div>
  </div>
</section>

      <motion.section
  className="w-full bg-gradient-to-b from-blue-50 to-white py-24 px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
      The <span className="text-[#4640DE]">NNHire</span> Advantage
    </h2>

    <div className="flex flex-col h-96 justify-center   gap-2 items-center text-lg text-gray-700 font-medium">
      {[
        "Smart Matching Algorithm for job recommendations",
        "Verified job listings and employers",
        "Easy, one-click application process",
        "Resume and profile enhancement tools",
        "Real-time notifications and application status",
        "Clean employer dashboard for easy management",
        "Dedicated support to assist users",
      ].map((point, index) => (
        <motion.div
          key={index}
          className="w-full justify-center  rounded-lg max-w-2xl px-6 py-2 cursor-pointer shadow hover:shadow-md transition-shadow duration-300 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-[#4640DE] font-semibold mr-2">✓</span> {point}
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>



      {/* Meet the Team Section */}
      {/* <motion.section
        className="py-24 md:py-32 bg-white dark:text-[#4640DE]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 ">
              The <span className="text-[#4640DE]">Architects</span> of Your Success.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 ">
              Meet the dedicated individuals whose expertise and passion drive our mission forward.
            </p>
          </div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} className="text-center group flex flex-col items-center" variants={cardVariants}>
                <div className="relative mb-6">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300 border-4 border-transparent group-hover:border-amber-400"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-amber-600 dark:text-amber-400 text-sm font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 px-4 h-16">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-amber-500 dark:hover:text-amber-300 transition-colors"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-amber-500 dark:hover:text-amber-300 transition-colors"
                    aria-label={`${member.name} Twitter Profile`}
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section> */}

      {/* CTA Section */}
     

    </div>
  )
}
