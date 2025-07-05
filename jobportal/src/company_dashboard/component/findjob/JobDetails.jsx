import React, { useState } from "react";
import { CalendarDays, Hourglass, MapPin, User, Clock, Wallet, Heart, Share2, CheckCircle, Link } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Image from "../../assets/ProfileImages/icon.png"
import { motion } from "framer-motion";
// import Blur from "./assets/ProfileImages/blur (3).png"

const JobCard = ({ title, company, location, type, description, daysAgo, image }) => {
    return (
        <motion.div
            className="rounded-lg shadow-md p-4 bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-600 bg-gray-200 px-2 py-1 rounded">
                    {type}
                </span>
                <span className="text-sm text-gray-500">{daysAgo} Day ago</span>
            </div>
            <div className="flex items-center mb-3">
                <img
                    src={Image} // Make sure the image path is correct
                    alt="Company Logo"
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">
                        {company}, {location}
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between">
                <motion.button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Apply Now
                </motion.button>
                <motion.button
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View Details
                </motion.button>
            </div>
        </motion.div>
    );
};


function JobDetails() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);



    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        jobTitle: "",
        linkedInUrl: "",
        portfolioUrl: "",
        additionalInfo: "",
        charCount: 0
    });

    const [fileName, setFileName] = useState({ videoIntro: "", resume: "" });

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setFileName((prev) => ({
                ...prev,
                [name]: files[0].name,
            }));
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === 'additionalInfo' && { charCount: value.length })
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const submissionData = {
            ...formData,
            ...files
        };
        console.log("Form submitted:", submissionData);
        // Add your form submission logic here
    };


    const jobs = [
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description: "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description: "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description: "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description: "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description: "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        {
            title: "Senior Product Designer",
            company: "Google",
            location: "New York",
            type: "Full Time",
            description: "It is a long established fact that a reader of a page when looking at its layout.",
            daysAgo: 2,
        },
        // ... other job objects
    ];

    return (
        <div className="flex min-h-screen font-sans text-[#333] bg-[#fafbfc] overflow-hidden">
            {/* Sidebar - Mobile: Hidden by default, Desktop: Always visible */}
            {/* <div className={`fixed inset-y-0 left-0 w-64 max-w-xs transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform lg:translate-x-0 lg:relative bg-white z-50 shadow-md`}>
                 <Sidebar />             </div> */}

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-4 lg:p-6 lg:ml-12">
                    {/* Job Header - Stack on mobile, row on desktop */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-lg w-[90%]">
                        <div className="flex items-center space-x-3 mb-4 md:mb-0">
                            <div className="bg-green-500 text-white font-bold text-lg p-2 rounded w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                                ZF
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold">Brand Designer</h2>
                                <p className="text-gray-500 text-sm mt-1 md:mt-2">
                                    Zend &middot; Paris, France &middot; Full-Time
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-normal">
                            <Share2 size={20} className="text-gray-500 cursor-pointer" />
                            <Heart size={20} className="text-gray-500 cursor-pointer" />
                            <button
                                className="bg-indigo-600 w-full md:w-40 h-10 md:h-12 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Job Content - Stack on mobile, row on desktop */}
                    <div className="flex flex-col lg:flex-row mt-6 gap-6">
                        {/* Job Description - Full width on mobile, 2/3 on desktop */}
                        <div className="p-4 md:p-6 bg-white rounded-lg w-full lg:w-2/3">
                            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                            <p className="text-gray-600 text-sm mb-4">
                                As a Brand Designer, you will work within a Brand Delivery Team fused with UX, engineering, product, and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC, and Sanctions List management workflows.
                            </p>

                            <h3 className="text-lg font-semibold mb-2">Key Responsibilities</h3>
                            <ul className="space-y-2 mb-4">
                                {[...Array(8)].map((_, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-gray-600 text-sm">
                                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                                        <span>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-lg font-semibold mb-2">Skill & Experience</h3>
                            <ul className="space-y-2">
                                {[
                                    "You have experience using Sketch and InVision or Framer X.",
                                    "You have at least 3 years experience working as a Brand Designer.",
                                    "You have some previous experience working in an agile environment.",
                                    "You are familiar using Jira and Confluence in your workflow."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-gray-600 text-sm">
                                        <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Job Overview - Full width on mobile, 1/3 on desktop */}
                        <div className="p-4 md:p-6 bg-white rounded-lg w-full lg:w-1/3">
                            <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
                            <ul className="space-y-4">
                                {[
                                    { icon: <CalendarDays className="text-purple-500" size={20} />, label: "Date Posted", value: "Posted 1 hours ago" },
                                    { icon: <Hourglass className="text-purple-500" size={20} />, label: "Expiration Date", value: "April 06, 2021" },
                                    { icon: <MapPin className="text-purple-500" size={20} />, label: "Location", value: "Paris, France" },
                                    { icon: <User className="text-purple-500" size={20} />, label: "Job Title", value: "Brand Designer" },
                                    { icon: <Clock className="text-purple-500" size={20} />, label: "Hours", value: "32hr / week" },
                                    { icon: <Wallet className="text-purple-500" size={20} />, label: "Salary", value: "$35k - $45k" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3">
                                        {item.icon}
                                        <div>
                                            <p className="text-gray-700 font-medium">{item.label}</p>
                                            <p className="text-gray-500 text-sm">{item.value}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <h2 className="text-xl font-semibold mb-3">Categories</h2>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Designer</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Marketing</span>
                                </div>

                                <h2 className="text-xl font-semibold mb-3">Required Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {["Time Management", "Typography", "Creativity", "Design Principles", "Brand Identity"].map((skill, i) => (
                                        <span key={i} className="px-3 py-1 border border-gray-300 text-purple-600 rounded-md text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                className="mt-6 p-4 gap-5 shadow-sm bg-[#F3F2FF] rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    className="flex items-center space-x-3 mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="bg-purple-500 text-white font-bold text-lg p-2 rounded w-10 h-10 flex items-center justify-center">
                                        Z
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold">Zend</h2>
                                        <p className="text-gray-500 text-sm">www.Zend.com</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="text-left text-sm space-y-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    {[
                                        { label: "Primary industry", value: "Software Development" },
                                        { label: "Company size", value: "100 - 500" },
                                        { label: "Founded in", value: "June, 2015" },
                                        { label: "Contact us", value: "+91 987 654 3210" },
                                        { label: "Email", value: "info@techcorp.com" },
                                        { label: "Location", value: "Bangalore, India" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex justify-between"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                                        >
                                            <span className="text-gray-500">{item.label}</span>
                                            <span className="font-medium">{item.value}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    className="flex justify-between items-center mt-4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <span className="text-gray-500">social media</span>
                                    <div className="flex gap-3 text-purple-600">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <FaFacebookF className="cursor-pointer" />
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <FaInstagram className="cursor-pointer" />
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <FaLinkedinIn className="cursor-pointer" />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.button
                                    className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 200 }}
                                >
                                    View Company Profile
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Open Jobs Section */}
                    <div className="bg-white-100 w-full text-start mt-8">
                        <h2 className="text-2xl md:text-3xl mb-6">Open Jobs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {jobs.map((job, index) => (
                                <JobCard key={index} {...job} />
                            ))}
                        </div>
                    </div>
                    {isModalOpen && (
                        <div className="absolute  md:ml-[6%]   md:mt-[55%] sm:mt-[10%] inset-0 flex items-center justify-center bg-opacity-100">
                            <div className="relative max-w-2xl w-full mx-auto p-6 bg-white rounded-lg shadow-md overflow-y-auto ">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                >
                                    ✖
                                </button>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-green-500 text-white font-bold text-lg p-2 rounded w-[88px] h-[88px] flex items-center justify-center">
                                        ZF
                                    </div>
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-semibold">Brand Designer</h2>
                                        <p className="text-gray-500 text-sm mt-2">Zend &middot; Paris, France &middot; Full-Time</p>
                                    </div>
                                </div>
                                <hr className="mt-5" />
                                <h2 className="text-2xl font-bold text-gray-700 mt-3">
                                    Submit your application
                                </h2>
                                <p className="text-sm text-gray-500 mb-6">
                                    The following is required and will only be shared with Zend.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information Section */}
                                    <div className="space-y-6">
                                        {/* Full Name */}
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Full Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address*
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number*
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        {/* Job Title */}
                                        <div>
                                            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                                                Job Title*
                                            </label>
                                            <input
                                                type="text"
                                                id="jobTitle"
                                                name="jobTitle"
                                                value={formData.jobTitle}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Enter your job title"
                                            />
                                        </div>
                                    </div>

                                    {/* Links Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-medium text-gray-700">Links</h3>

                                        {/* LinkedIn */}
                                        <div>
                                            <label htmlFor="linkedInUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                                LinkedIn URL*
                                            </label>
                                            <input
                                                type="url"
                                                id="linkedInUrl"
                                                name="linkedInUrl"
                                                value={formData.linkedInUrl}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="https://linkedin.com/in/yourprofile"
                                            />
                                        </div>

                                        {/* Portfolio */}
                                        <div>
                                            <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                                Portfolio URL*
                                            </label>
                                            <input
                                                type="url"
                                                id="portfolioUrl"
                                                name="portfolioUrl"
                                                value={formData.portfolioUrl}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="https://yourportfolio.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div>
                                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                                            Additional Information
                                        </label>
                                        <textarea
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleChange}
                                            rows={4}
                                            maxLength={500}
                                            className="w-full p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Tell us about your experience and skills..."
                                        />
                                        <div className="text-xs text-gray-500 text-right mt-1">
                                            {formData.charCount} / 500
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-gray-200 my-6"></div>

                                    {/* File Uploads Section */}
                                    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg items-start">

                                        {/* File Uploads Section */}
                                        <div className="flex flex-col gap-4 p-4">
                                            {/* Video Introduction */}
                                            <div className="flex flex-row gap-[27%] ">
                                                <label className="text-gray-700">Attach your Video Introduction</label>
                                                <input
                                                    type="file"
                                                    name="videoIntro"
                                                    className="hidden"
                                                    id="videoIntro"
                                                    onChange={handleFileChange}
                                                />
                                                <label
                                                    htmlFor="videoIntro"
                                                    className="flex items-center gap-2 border-2 border-dashed border-blue-400 p-2 rounded-md cursor-pointer text-blue-600"
                                                >
                                                    <Link size={18} />
                                                    {fileName.videoIntro || "Upload Video"}
                                                </label>
                                            </div>

                                            {/* Resume */}
                                            <div className="flex flex-row gap-[40%]">
                                                <label className="text-gray-700">
                                                    Attach your resume <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="file"
                                                    name="resume"
                                                    className="hidden"
                                                    id="resume"
                                                    onChange={handleFileChange}
                                                />
                                                <label
                                                    htmlFor="resume"
                                                    className="flex items-center gap-2 border-2 border-dashed border-blue-400 p-2 rounded-md cursor-pointer text-blue-600"
                                                >
                                                    <Link size={18} />
                                                    {fileName.resume || "Upload Resume"}
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Divider */}
                                    <div className="border-t border-gray-200 my-6"></div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150"
                                    >
                                        Submit Application
                                    </button>

                                    {/* Terms and Conditions */}
                                    <div className="flex gap-2 item-center justify-center">
                                        <input type="checkbox" name="" id="" />
                                        <p className="text-xs text-gray-500 text-center ">
                                            By sending the request you can confirm that you accept our Terms of Service and Privacy Policy.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
}

export default JobDetails;