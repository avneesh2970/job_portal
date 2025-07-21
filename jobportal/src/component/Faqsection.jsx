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
    question: "I keep applying for jobs but never get responses. What should I do?",
    answer:
      "Ensure that your resume is current, job title is the role you're applying for, and you're applying for appropriate jobs. Sites such as NNHire inform you of when the application has been seen, so you won't be left guessing.",
  },
  {
    id: 2,
    question: " How can I trust if a job posting is real or fake?",
    answer:
      "Several users are trapped by spurious listings. On websites like NNHire, firms are verified first before they can publish, cutting the prospects of fraud.",
  },
  {
    id: 3,
    question: " I don’t have experience — will I still get hired?",

    answer:
      "Definitely. Search for positions categorized as intern or fresher friendly. On NNHire, you can easily sift through such jobs to save time.",
  },
  {
    id: 4,
    question: "Why am I not getting interview calls even after applying everywhere?",
    answer:
      "It might be because your profile is not visible or there is a mismatch with the requirements. NNHire practices intelligent job matching and thus your profile is only suggested for the best fit jobs.",
  },
  {
    id: 5,
    question: "Do I really need to create a full profile to apply?",
    answer:
      "Yes. Incomplete profiles tend to go unnoticed. A 100% complete profile on a job website like NNHire is more likely to be shortlisted.",
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
