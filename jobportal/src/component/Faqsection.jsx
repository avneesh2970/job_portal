"use client"
import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const FAQItem = ({ faq, isOpen, onClick, isHovered, onHover, onHoverEnd }) => {
  
  return (
    <motion.div
      className="border-t border-gray-400/30 py-4"
      initial={false}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      <motion.div className="flex justify-between items-center cursor-pointer group" onClick={onClick}>
        <h3 className="text-black text-lg font-semibold pr-8">{faq.question}</h3>
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <Plus className="text-black w-5 h-5 group-hover:scale-110 transition-transform" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
            className="overflow-hidden"
          >
            <p className="text-gray-800 text-start mt-3 text-base leading-relaxed pr-8">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQSection = () => {
  const [openId, setOpenId] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)
  const faqsData = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We offer a wide range of IT solutions including website development, app creation, SEO, graphic design, UI/UX, and digital marketing. Our goal is to provide tailored strategies to meet your specific needs.",
  },
  {
    id: 2,
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website depends on the complexity and features required. A simple brochure website can take a few weeks, while a more complex e-commerce site or web application can take several months. We provide a detailed timeline after our initial consultation.",
  },
  {
    id: 3,
    question: "Do you provide support after the project is completed?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your website or application continues to run smoothly. We can discuss the different levels of support we offer to find one that fits your needs.",
  },
  {
    id: 4,
    question: "How do you approach SEO for a new website?",
    answer:
      "Our SEO strategy starts with a comprehensive audit and keyword research. We then focus on on-page optimization, technical SEO, quality content creation, and building high-quality backlinks to improve your search engine rankings.",
  },
  {
    id: 5,
    question: "What is your process for UI/UX design?",
    answer:
      "Our UI/UX design process is user-centric. We start with research and user personas, create wireframes and prototypes, and conduct user testing to refine the design. We collaborate closely with you throughout the process to ensure the final product is both beautiful and easy to use.",
  },
]


  return (
    <div className="text-black px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="lg:sticky lg:top-16 lg:h-fit">
            <motion.h2
              className="text-gray-800 underline text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              FAQ
            </motion.h2>

            <motion.h1
              className="text-black text-3xl md:text-4xl font-semibold mb-6 max-w-xl text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Make Something Awesome Together
            </motion.h1>

            <motion.p
              className="text-gray-800 text-base leading-relaxed text-start max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
             Our Frequently Asked Questions section is designed to provide quick help and clarity to job seekers and employers alike. Whether you're applying for your first job or posting a new opening, we want your experience to be seamless and informed. Below, you'll find answers to the most common questions about applying, tracking jobs, account setup, and more.
            </motion.p>

            <motion.p
              className="text-gray-800 text-base mt-6 leading-relaxed text-start max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
             Still have questions? Don't hesitate to contact us — we're here to help you every step of the way!
            </motion.p>
            <motion.p
              className="text-gray-800 text-base mt-6 leading-relaxed text-start max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              
              
            </motion.p>
          </div>

          <motion.div
            className="lg:pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {faqsData.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                isHovered={hoveredId === faq.id}
                onHover={() => setHoveredId(faq.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
