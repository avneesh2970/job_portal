"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Users, Briefcase, Linkedin, Twitter, ArrowRight, Sparkles, Lightbulb } from "lucide-react"
import { useRef } from "react"
import React from "react"

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
    icon: <Lightbulb className="w-10 h-10 text-amber-500" />,
    title: "Igniting Potential",
    description:
      "We believe everyone holds unique talents. Our mission is to provide the spark that turns potential into achievement.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-rose-500" />,
    title: "Crafting Connections",
    description:
      "Beyond algorithms, we foster genuine connections that lead to meaningful career paths and thriving teams.",
  },
  {
    icon: <Users className="w-10 h-10 text-sky-500" />,
    title: "Empathetic Innovation",
    description: "We innovate with a human-centric approach, ensuring technology serves and uplifts every user.",
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: "circOut" },
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
    <div className="overflow-x-hidden font-serif text-gray-700 dark:text-gray-300 antialiased">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-[100vh] md:h-[120vh] flex flex-col items-center justify-center text-center text-black overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroImageScale }}>
          <img
            src='https://www.pexels.com/photo/white-painted-wall-1939485/'
            alt="Abstract background representing connection and aspiration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white"></div>
        </motion.div>

        <motion.div className="flex justify-centerm items-center flex-col z-10 p-6" style={{ opacity: heroTextOpacity, y: heroTextY }}>
          <motion.h1
            className="text-5xl md:text-4xl lg:text-6xl font-bold tracking-tight !leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          >
            Where Careers <span className="text-[#4640DE]">Take Flight</span>.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
          >
            We're not just a job portal; we're your dedicated partner in navigating the dynamic world of careers and
            talent acquisition.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
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
        </motion.div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        id="our-story"
        className="py-14 md:py-32 bg-white dark:bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900  mb-6">
                Our <span className="text-[#4640DE]">Genesis</span>.
              </h2>
              <p className="text-lg text-gray-600  mb-4 leading-relaxed">
                Born from a desire to simplify complexity and humanize the job search, our platform was envisioned as a
                beacon for professionals and a strategic asset for businesses. We saw the need for a space where
                aspirations meet opportunities seamlessly.
              </p>
              <p className="text-lg text-gray-600  leading-relaxed">
                Every feature, every interaction is designed with purpose: to empower, to connect, and to foster growth.
                We are more than code; we are a community dedicated to shaping the future of work.
              </p>
            </motion.div>
            <motion.div
              className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/7552373/pexels-photo-7552373.jpeg"
                alt="Diverse team collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </motion.div>
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
            className="mt-20 grid sm:grid-cols-1 md:grid-cols-3 gap-12"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="p-5 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-700 dark:to-sky-800 mb-6 inline-block">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Meet the Team Section */}
      <motion.section
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
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative py-24 md:py-36 overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?width=1920&height=600"
            alt="Dynamic abstract background"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-100/80 to-transparent dark:from-blue-400 dark:via-blue-600"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ready to <span className="text-[#4640DE]">Elevate</span> Your Journey?
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Whether you're seeking your dream role or the perfect talent, your next chapter starts here.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full text-white bg-[#4640DE] hover:bg-rose-700 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase className="mr-3 h-6 w-6" />
              Explore Opportunities
            </motion.button>
            <motion.button
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full text-white bg-[#4640DE] hover:bg-rose-200 dark:hover:bg-rose-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="mr-3 h-6 w-6" />
              Find Top Talent
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
