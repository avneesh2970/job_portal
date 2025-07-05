import React, { useState } from 'react';
import { FaLink, FaPlus, FaBold, FaItalic, FaListUl, FaSmile } from "react-icons/fa";

const EducationSkillsForm = () => {
    const [formData, setFormData] = useState({
        jobTitle: "",
        company: "",
        employmentType: "",
        industry: "",
        salary: "",
        location: "",
        startDate: "",
        endDate: "",
    });

    const [description, setDescription] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === "description") setDescription(e.target.value);
    };

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-md">
            {/* Basic Information Header */}
            <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
                <p className="text-sm text-gray-500">This information will be displayed publicly</p>
            </div>

            {/* Education Details Section */}
            <div className="mt-10">
                <div className="flex flex-col md:flex-row">
                    <h3 className="text-lg font-medium text-gray-900 mb-4 md:w-[50%]">Education Details</h3>
                    <div className="border-gray-300 rounded-md p-4 w-full md:ml-[10%]">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Institute/University</label>
                            <input
                                type="text"
                                placeholder="Enter your institute/university"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                                <input
                                    type="text"
                                    placeholder="Enter your degree"
                                    className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                                <input
                                    type="text"
                                    placeholder="Enter your specialization"
                                    className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="mt-4 text-blue-600 text-sm font-medium flex items-center border p-2 md:ml-auto">
                    <span className="mr-1">+</span> Add education
                </button>
            </div>
            <hr className='mt-10'/>

            {/* Skills Section */}
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 mt-6 md:mt-10">Skills</h3>
                <div className="md:ml-[40%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                        {["Time Management", "Typography", "Creativity", "Design Principles", "Brand Identity"].map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
                            >
                                <span>{skill}</span>
                                <button className="text-gray-400 hover:text-gray-600">✕</button>
                            </div>
                        ))}
                        <button className="text-blue-600 text-sm font-medium flex items-center">
                            <span className="border border-blue-500 text-blue-500 p-2">+ Add new skills</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="mt-10" />

            {/* Work Experience */}
            <div className="flex flex-col md:flex-row mt-6 md:mt-10">
                <h2 className="text-lg font-semibold mb-4 md:w-[30%]">Work Experience</h2>
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 md:w-[78%] md:ml-[21%]">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Job Title"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
                            <input
                                type="text"
                                name="employmentType"
                                placeholder="Employment Type"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                            <input
                                type="text"
                                name="industry"
                                placeholder="Industry"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Salary (Annually)</label>
                            <input
                                type="text"
                                name="salary"
                                placeholder="Salary (Annually)"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 md:w-[78%] md:ml-[21%]">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                            <input
                                type="date"
                                name="endDate"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="border rounded-lg mt-4 md:mt-[5%] md:ml-[21%] md:w-[78%]">
                        <textarea
                            name="description"
                            placeholder="Describe your work experience..."
                            className="w-full p-3 border-b border-gray-500 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            rows="4"
                            onChange={handleChange}
                        ></textarea>
                        <div className="flex items-center gap-4 p-2 text-gray-500">
                            <FaSmile className="cursor-pointer hover:text-gray-700" />
                            <FaBold className="cursor-pointer hover:text-gray-700" />
                            <FaItalic className="cursor-pointer hover:text-gray-700" />
                            <FaListUl className="cursor-pointer hover:text-gray-700" />
                            <FaLink className="cursor-pointer hover:text-gray-700" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 md:ml-[21%] md:w-[78%]">
                        Minimum 250 characters <span className="float-right">{description.length}/500</span>
                    </p>
                    <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg md:ml-[70%]">
                        + Add Experience
                    </button>
                </div>
            </div>
            <hr className="mt-10" />

            {/* Certificates */}
            <div className="flex flex-col md:flex-row mt-6 md:mt-10">
                <h2 className="text-lg font-semibold mb-4 md:w-[30%]">Certificates</h2>
                <div className="w-full">
                    <div className="mb-4 md:w-[78%] md:ml-[20%]">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Name</label>
                        <input
                            type="text"
                            placeholder="Enter certificate name"
                            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4 md:w-[78%] md:ml-[20%]">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Issuing Organization</label>
                        <input
                            type="text"
                            placeholder="Enter issuing organization"
                            className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 md:w-[77%] md:ml-[21%]">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                            <input
                                type="date"
                                name="startDate"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                            <input
                                type="date"
                                name="endDate"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mt-5 md:ml-[21%]">
                        <input type="checkbox" className="mr-2" /> This Certificate does not expire
                    </div>
                </div>
            </div>
            <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg md:ml-[78%]">
                + Add Certificate
            </button>
            <hr className="mt-10" />

            {/* Social Links */}
            <div className="flex flex-col md:flex-row mt-6 md:mt-10">
                <h2 className="text-lg font-semibold mb-4 md:w-[30%]">Social Links</h2>
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 md:w-[78%] md:ml-[21%]">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                            <input
                                type="text"
                                placeholder="LinkedIn URL"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Behance/Github/Dribbble</label>
                            <input
                                type="text"
                                placeholder="Behance/Github/Dribbble URL"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Link</label>
                            <input
                                type="text"
                                placeholder="Portfolio URL"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram Link</label>
                            <input
                                type="text"
                                placeholder="Instagram URL"
                                className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg md:ml-[63%] w-50">
                        + Add Link
                    </button>
                </div>
            </div>
            <hr className="mt-10" />

            {/* Languages */}
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 mt-6 md:mt-10">Languages</h3>
                <div className="md:ml-[40%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                        {["Hindi", "English", "Tamil", "Spanish","Marathi"].map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm text-blue-700"
                            >
                                <span>{skill}</span>
                                <button className="text-blue-400 hover:text-gray-600">✕</button>
                            </div>
                        ))}
                       
                    </div>
                    <button className="text-blue-600 text-sm font-medium flex items-center w-50">
                            <span className="border border-blue-500 text-blue-500 p-2">Add new language +</span>
                        </button>
                </div>
            </div>
            <hr className="mt-10" />

            {/* Resume */}
            <div className="flex flex-col md:flex-row mt-6 md:mt-[6%]">
                <h2 className="text-lg font-semibold mb-4 md:w-[30%]">Resume</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 w-full md:ml-[15%]">
                    <div className='flex gap-3'>
                        <p className="text-gray-600 mb-2 md:w-full text-center">Attach your Video Introduction</p>
                        <button className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg w-full ">
                            <FaLink /> Attach video introduction
                        </button>
                    </div>
                    <div className='flex'>
                        <p className="text-gray-600 mb-2 md:w-full">Attach your resume</p>
                        <button className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg w-full">
                            <FaLink /> Attach Resume/CV
                        </button>
                    </div>
                </div>
            </div>
            <button className="mt-6 px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg md:ml-[72%] w-50">
                + Add new resume
            </button>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:ml-auto md:w-fit">
                <button className="px-4 py-2 border border-gray-400 text-gray-600 rounded-lg w-full sm:w-auto">
                    Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full sm:w-auto">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default EducationSkillsForm;